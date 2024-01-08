import { TransactionProps } from '@maxmind/minfraud-api-node/dist/src/request/transaction';
import { NextRequest, NextResponse } from 'next/server';
import { ValidationService } from '../services';
import { DirectPost } from '../services/PaymentsService';

interface IPaymentData {
  transactionData: TransactionProps;
  paymentData: {
    paymentAmount: string;
    ccNum: string;
    ccExp: string;
    cvv: string;
  };
}

export async function POST(req: NextRequest) {
  const orderData = await req.json();
  if (!orderData || !orderData.transactionData || !orderData.paymentData) {
    return NextResponse.json({
      success: false,
      message: 'Insufficient transactional data provided'
    });
  }
  const { transactionData, paymentData } = orderData as IPaymentData;

  const fraudResponse = await ValidationService.validateTransactionFraud(
    transactionData
  );

  if (!fraudResponse) {
    return NextResponse.json({
      success: false,
      message: 'Fraud Detection error, logged to console.'
    });
  }

  if (!fraudResponse.success) {
    return NextResponse.json(fraudResponse);
  }

  const dp = new DirectPost(process.env.NMI_SECURITY_KEY!);

  dp.setBilling(transactionData.billing);
  dp.doSale(
    paymentData.paymentAmount,
    paymentData.ccNum,
    paymentData.ccExp,
    paymentData.cvv
  );
}

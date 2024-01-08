// const https = require('https');
import axios from 'axios';
import { NextResponse } from 'next/server';
import * as https from 'node:https';
// const querystring = require('querystring');
import * as querystring from 'node:querystring';

export class DirectPost {
  private security_key: string;
  private billing: any;
  // public shipping: any;

  constructor(security_key: string) {
    this.security_key = security_key;
  }

  setBilling(billingInformation: any) {
    // Validate that passed in information contains valid keys
    const validBillingKeys = [
      'first_name',
      'last_name',
      'address1',
      'city',
      'state',
      'zip',
      'country'
    ];

    for (let key in billingInformation) {
      if (!validBillingKeys.includes(key)) {
        throw new Error(`Invalid key provided in billingInformation. '${key}'
            is not a valid billing parameter.`);
      }
    }

    this.billing = billingInformation;
  }

  // setShipping(shippingInformation: any) {
  //   // Validate that passed in information contains valid keys
  //   const validShippingKeys = [
  //     'shipping_first_name',
  //     'shipping_last_name',
  //     'shipping_company',
  //     'shipping_address1',
  //     'address2',
  //     'shipping_city',
  //     'shipping_state',
  //     'shipping_zip',
  //     'shipping_country',
  //     'shipping_email'
  //   ];

  //   for (let key in shippingInformation) {
  //     if (!validShippingKeys.includes(key)) {
  //       throw new Error(`Invalid key provided in shippingInformation. '${key}'
  //           is not a valid shipping parameter.`);
  //     }
  //   }

  //   this.shipping = shippingInformation;
  // }

  doSale(amount: string, ccNum: string, ccExp: string, cvv: string) {
    let requestOptions = {
      type: 'sale',
      amount: amount,
      ccnumber: ccNum,
      ccexp: ccExp,
      cvv: cvv
    };

    // Merge together all request options into one object
    Object.assign(
      requestOptions,
      this.billing
      // , this.shipping
    );

    // Make request
    this._doRequest(requestOptions);
  }

  private _doRequest(postData: any) {
    const baseUrl = 'https://secure.nmi.com/api/transact.php';
    // const hostName = 'secure.nmi.com';
    // const path = '/api/transact.php';

    postData.security_key = this.security_key;
    postData = querystring.stringify(postData);

    // const options = {
    //   hostname: hostName,
    //   path: path,
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Content-Length': Buffer.byteLength(postData)
    //   }
    // };

    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      },
      body: {
        postData
      }
    };

    // TODO - look into axios conversion

    axios
      .post(baseUrl, options)
      .then((res) => {
        if (res.status.toString().startsWith('2')) {
          return NextResponse.json({
            success: true,
            message: 'Success, data attached',
            data: res.data
          });
        } else {
          console.info(res);
          return NextResponse.json({
            success: false,
            message: 'Unhandled response, logged to console',
            data: null
          });
        }
      })
      .catch((error) => {
        console.error(error);
        return NextResponse.json({
          success: false,
          message: 'Transaction post error, logged to console',
          data: null
        });
      });

    // Make request to Payment API
    // const req = https.request(options, (response) => {
    //   console.log(`STATUS: ${response.statusCode}`);
    //   console.log(`HEADERS: ${JSON.stringify(response.headers)}`);

    //   response.on('data', (chunk) => {
    //     console.log(`BODY: ${chunk}`);
    //   });
    //   response.on('end', () => {
    //     console.log('No more data in response.');
    //   });
    // });

    // req.on('error', (e) => {
    //   console.error(`Problem with request: ${e.message}`);
    // });

    // // Write post data to request body
    // req.write(postData);
    // req.end();
  }

  public test = () => {
    // const shippingInfo = {
    //   shipping_first_name: 'User',
    //   shipping_last_name: 'Test',
    //   shipping_address1: '987 State St',
    //   shipping_city: 'Los Angeles',
    //   shipping_state: 'CA',
    //   shipping_zip: '98765'
    // };

    // dp.setShipping(shippingInfo);
    // Set dummy data for sale
    this.security_key = process.env.NMI_SECURITY_KEY!;
    const billingInfo = {
      first_name: 'Test',
      last_name: 'User',
      address1: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '12345'
    };
    this.setBilling(billingInfo);
    this.doSale('100.00', '4111111111111111', '1221', '123');
  };
}
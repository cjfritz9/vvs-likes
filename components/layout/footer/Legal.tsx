import Image from 'next/image';
import apple from '@/assets/images/apple-pay.png';
import diners from '@/assets/images/diners.png';
import discover from '@/assets/images/discover.png';
import amex from '@/assets/images/amex.png';
import matercard from '@/assets/images/mastercard.png';
import visa from '@/assets/images/visa.png';
import '@/styles/home.css'

const Legal = () => {
  return (
    <div className='text-white d-flex flex-column'>
      <div className='d-flex justify-content-center' style={{ gap: '3px' }}>
        <Image height={28} width={45} alt='apple' src={apple} />
        <Image height={28} width={45} alt='diners' src={diners} />
        <Image height={28} width={45} alt='discover' src={discover} />
      </div>
      <div className='d-flex justify-content-center' style={{ gap: '3px' }}>
        <Image height={28} width={45} alt='matercard' src={matercard} />{' '}
        <Image height={28} width={45} alt='visa' src={visa} />{' '}
        <Image height={28} width={45} alt='amex' src={amex} />
      </div>
      {/* <p
        style={{
          fontFamily: "Outfit",
          fontSize: "22px",
          fontWeight: "700",
          lineHeight: "22px",
          letterSpacing: "0px",
          textAlign: "left",
        }}
        class="text-white"
      >
        Explore
      </p> */}

      {/* <ul style={{ textAlign: "left" }}>
        <li class="list-group-item">
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li class="list-group-item">
          <a href="/terms-conditions">Terms And Conditions</a>
        </li>
        <li class="list-group-item">
          <a href="/cookie-policy">Cookie Policy</a>
        </li>
        <li class="list-group-item">
          <a href="/refund-policy">Refund Policy</a>
        </li>
      </ul> */}
    </div>
  );
};
export default Legal;

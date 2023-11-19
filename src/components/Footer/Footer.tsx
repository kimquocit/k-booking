import Link from 'next/link';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='bg-sky-600 mt-16 py-5 text-white'>
      <div className='container mx-auto px-4'>
        <h4 className='font-semibold text-[40px] py-6'>Contact</h4>

        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
            <p>123 Street, New York, USA</p>
            <div className='flex items-center py-4'>
              <BsTelephoneOutbound />
              <p className='ml-2'>+012 345 67890</p>
            </div>
            <div className='flex items-center'>
              <BiMessageDetail />
              <p className='ml-2'>mail@domain.com</p>
            </div>
          </div>

          <div className='flex-1 md:text-right'>
            <p className='pb-4'>About Us</p>
            <p className='pb-4'>Contact Us</p>
            <p className='pb-4'>Privacy Policy</p>
            <p className='pb-4'>Terms & Condition</p>
            <p>FAQs & Help</p>
          </div>
        </div>
      </div>

      {/* <div className='bg-sky-500 h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' /> */}
    </footer>
  );
};

export default Footer;

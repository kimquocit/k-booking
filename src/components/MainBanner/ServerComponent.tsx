import Image from 'next/image';

export const content = (
  <>
    <h1 className='font-heading text-white mb-6'>Tour and Hotel Booking</h1>
    <p className='text-white mb-12 max-w-lg'>Enjoy Your Vacation With Us</p>
  </>
);

export const images = (
  <div className='md:grid hidden gap-8 grid-cols-1'>
    <div className='rounded-2xl overflow-hidden h-48'>
      <Image
        src='/images/i4.jpg'
        alt='hero-1'
        width={300}
        height={300}
        className='img scale-animation'
      />
    </div>

    <div className='grid grid-cols-2 gap-8 h-48'>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/i2.jpg'
          alt='hero-2'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/i3.jpg'
          alt='hero-3'
          width={300}
          height={300}
          className='img scale-animation'
        />
      </div>
    </div>
  </div>
);

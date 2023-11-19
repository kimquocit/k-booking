'use client';

import { FC } from 'react';
import Image from 'next/image';

import { Room } from '@/models/room';
import Link from 'next/link';

type Props = {
  featuredRoom: Room[];
};

const FeaturedRoom: FC<Props> = props => {
  const { featuredRoom } = props;

  return (
    <section className='container mx-auto my-5'>
      <h3 className='font-semibold text-[40px] py-6 mb-5'>Featured Room</h3>
      {featuredRoom.map(room => (
        <section className='flex md:flex-row flex-col px-4 items-center gap-12 container mx-auto'>
        <div className='md:grid gap-8 grid-cols-1'>
          <div className='rounded-2xl overflow-hidden w-80 h-48 mb-4 md:mb-0'>
            <Image
              src={room.coverImage.url}
              alt={room.name}
              width={300}
              height={300}
              className='img scale-animation'
            />
          </div>
        </div>

        <div className='md:py-10 md:w-1/2 text-left'>
          <p className='font-normal max-w-md'>{room.description}</p>

          <div className='flex flex-col md:flex-row md:items-end justify-between mt-5'>
            <div className='flex mb-3 md:mb-0'>
              <div className='flex gap-3 flex-col items-center justify-center mr-4'>
                <p className='text-xs lg:text-xl text-center'>Start From</p>
                <p className='md:font-bold flex font-medium text-lg xl:text-5xl'>
                  $ {room.price}
                </p>
              </div>
              <div className='flex gap-3 flex-col items-center justify-center mr-4'>
                <p className='text-xs lg:text-xl text-center'>Discount</p>
                <p className='md:font-bold flex font-medium text-lg xl:text-5xl'>
                  $ {room.discount}
                </p>
              </div>
            </div>

            <Link
              href={`/rooms/${room.slug.current}`}
              className='border h-fit text-center border-blue-dark text-blue-dark px-3 py-2 lg:py-5 lg:px-7 rounded-2xl font-bold lg:text-xl'
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
      ))}
    </section>
    
  );
};

export default FeaturedRoom;

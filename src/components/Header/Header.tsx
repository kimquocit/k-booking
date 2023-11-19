'use client';

import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { useSession } from 'next-auth/react';

import Image from 'next/image';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header>
      <div className='py-2 px-1 container mx-auto'>
      <ul className='flex justify-end mx-5'>
          <li className='flex items-center'>
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <Image
                      src={session.user.image}
                      alt={session.user.name!}
                      width={40}
                      height={40}
                      className='scale-animation img'
                    />
                  </div>
                ) : (
                  <FaUserCircle className='cursor-pointer' />
                )}
              </Link>
            ) : (
              <Link href='/auth'>
                <FaUserCircle className='cursor-pointer' />
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className='pt-2 pb-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
      <div className='flex items-center w-full md:2/3'>
        <Link href='/' className='font-black text-sky-600'>
          K-Booking
        </Link>
      </div>

      <ul className='flex items-center justify-between w-full md:w-1/3 mt-4'>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/'>Tours</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/rooms'>Rooms</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all'>
          <Link href='/'>Contact</Link>
        </li>
      </ul>
      </div>
    </header>
  );
};

export default Header;

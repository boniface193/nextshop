import { Cart, Dribbble, Email, Exit, Facebook, LinkedIn, Lock, MakeCall, Menu, Twitter, WishList } from '../assets/svgIcons';
import Link from 'next/link';
import { useRef } from 'react';

const Headers = () => {
  const sidebar = useRef(null);

  const toggleSideBar = () => {
    sidebar.current.classList.toggle('hidden')
  }

  return (
    <header className='overflow-hidden'>
      <aside onClick={toggleSideBar} className='sm:hidden absolute cursor-pointer rounded-r mx-auto dark:text-slate-200 z-10 p-12 right-0'>
        <Menu />
      </aside>
      <section className='hidden sm:block bg-gray-300 dark:bg-gray-800 dark:text-slate-200'>
        <nav className='mx-auto md:px-12 flex justify-between md:h-8 items-center'>
          <aside className='flex'>
            <span className='flex'>
              <MakeCall />
              <h1 className='tracking-widest opacity-50'>
                +2348134714125</h1>
            </span>
            <span className='flex ml-3'>
              <Email />
              <h1 className='tracking-widest opacity-50'>
                admin@deboik.com</h1>
            </span>
          </aside>
          <aside>
            <span className='flex'>
              <Facebook />
              <Twitter />
              <LinkedIn />
              <Dribbble />
            </span>
          </aside>
        </nav>
      </section>
      {/* this header is shown on the mobile and desktop */}
      <section ref={sidebar} className='hidden shadow-xl md:shadow-none fixed sm:z-0 z-20 sm:relative bottom-0 top-0 left-0 right-1/4 sm:block md:dark:bg-slate-700 md:dark:text-slate-300 text-slate-500'>
        <nav className='mx-auto px-12 sm:flex sm:justify-between h-20 sm:items-center sm:py-0 py-12'>
          <Link href='/'>
            <img src="/images/home/logo.png" width={140} height={140} alt="eshopper logo" />
          </Link>
          <aside className='sm:flex sm:my-0 my-12'>
            <Link href='/wishList' className='flex sm:px-4 sm:py-0 py-4 sm:active:bg-inherit dark:active:bg-slate-600 active:bg-slate-200 rounded active:px-3 sm:my-0 my-2 items-center hover:text-slate-600 dark:hover:text-slate-50'><WishList /> <span className='pl-3 opacity-80 text-sm'>Wishlist</span></Link>
            <Link href='/cart' className='flex sm:px-4 sm:py-0 py-4 sm:active:bg-inherit dark:active:bg-slate-600 active:bg-slate-200 rounded active:px-3 sm:my-0 my-2 items-center hover:text-slate-600 dark:hover:text-slate-50'><Cart /><span className='pl-3  opacity-80 text-sm'>Cart</span> </Link>
            <Link href='/login' className='flex sm:px-4 sm:py-0 py-4 sm:active:bg-inherit dark:active:bg-slate-600 active:bg-slate-200 rounded active:px-3 sm:my-0 my-2 items-center hover:text-slate-600 dark:hover:text-slate-50'><Lock /><span className='pl-3  opacity-80 text-sm'>Login</span></Link>
            <input type="text" placeholder='Search' className='rounded sm:mt-0 mt-12 bg-slate-200 dark:bg-slate-600 p-2 text-slate-500 dark:text-slate-300 w-full' />
          </aside>
        </nav>
      </section>
    </header>
  )
}

export default Headers;
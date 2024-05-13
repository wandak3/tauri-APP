import Image from 'next/image';
import Link from 'next/link';
import Logo from '../img/logo.png';

export default function Header(props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) {
  return (
    <header className='sticky top-0 z-999 flex w-full bg-boxdark drop-shadow-none'>
      <div className='flex flex-grow items-center justify-between px-8 py-4 shadow-2 md:px-10 2xl:px-11'>
        <div className='flex items-center gap-2 sm:gap-4 lg:hidden'>
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls='sidebar'
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className='z-99999 block rounded-sm border p-1.5 shadow-sm border-strokedark bg-boxdark lg:hidden'
          >
            <span className='relative block h-5.5 w-5.5 cursor-pointer'>
              <span className='du-block absolute right-0 h-full w-full'>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm delay-[0] duration-200 ease-in-out bg-white ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm delay-150 duration-200 ease-in-out bg-white ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm delay-200 duration-200 ease-in-out bg-white ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className='absolute right-0 h-full w-full rotate-45'>
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm delay-300 duration-200 ease-in-out bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm duration-200 ease-in-out bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
          <Link href='/'>
            <Image
              alt='Logo'
              width={80}
              height={13}
              decoding='async'
              src={Logo}
              style={{ color: 'transparent' }}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

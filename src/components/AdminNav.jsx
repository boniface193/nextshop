import Link from "next/link";

export default function AdminNav() {
  const windowsWidth = () => {
    return window.outerWidth > 768
  }
  const menu = () => {
    return true
  }
  return (
    <aside className={` ${windowsWidth ? 'hidden sm:flex sm:flex-col' : ''}`}>
      <div className="h-full fixed w-1/6 text-gray-500 bg-gray-800">

        <Link href='/admin'>
          <img src="/images/home/logo.png" width={140} height={140} className="mx-auto py-12" alt="eshopper logo" />
        </Link>


        <nav className="flex flex-col mx-4 my-6 space-y-4 items-center">
          <Link href="/admin" className={`inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2 ${menu ? 'justify-start' : '', menu == false ? 'justify-center' : ''}`}>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="ml-2" x-show="menu">Dashboard</span>
          </Link>

          <Link href="/adminProducts" className={`inline-flex items-center py-3 text-blue-600 bg-white rounded-lg px-2 ${menu ? 'justify-start' : '', menu == false ? 'justify-center' : ''}`}>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="ml-2" x-show="menu">Products</span>
          </Link>
          <a href="#" className={`inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2 ${menu ? 'justify-start' : '', menu == false ? 'justify-center' : ''}`}>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="ml-2" x-show="menu">Messages</span>
          </a>
          <a href="#" className={`inline-flex items-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-2 ${menu == false ? 'justify-center' : '', menu ? 'justify-start' : ''}`}>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="ml-2" x-show="menu">Documents</span>
          </a >
        </nav >
        <div className="flex justify-end">
          <a className="inline-flex p-3 hover:text-gray-400 justify-center border-gray-700 h-15 w-full border-t hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 px-2">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="ml-2" x-show="menu">Settings</span>
          </a>
        </div>
      </div >
    </aside >
  );
}
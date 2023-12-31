import { Bell, ChevronDown, ExternalLink, Menu, Search } from "../assets/svgIcons";

export default function AdminHeader() {
  return (<header className="flex flex-row bg-white mx-auto">
    <div className="p-4 cursor-pointer">
      <Menu />
    </div>
    <div className="relative w-full max-w-md sm:-ml-2">
      <Search />
      <input type="text" role="search" placeholder="Search..." className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
    </div>
    <div className="flex flex-shrink-0 items-center ml-auto">
      <button className="relative inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg" >
        <span className="sr-only">User Menu</span>
        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight" >
          <span className="font-semibold">Sinan AYDOĞAN</span>
          <span className="text-sm text-gray-600">Quality Engineer</span>
        </div>
        <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
          <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="user profile photo" className="h-full w-full object-cover" />
        </span>
        <ChevronDown />
      </button>
      <div className="absolute top-20 bg-white border rounded-md p-2 w-56" x-show="panel" style={{ display: 'none' }}>
        <div className="p-2 hover:bg-blue-100 cursor-pointer">Profile</div>
        <div className="p-2 hover:bg-blue-100 cursor-pointer">Messages</div>
        <div className="p-2 hover:bg-blue-100 cursor-pointer">To-Do&apos;s</div>
      </div>
      <div className="border-l pl-3 ml-3 space-x-1">
        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
          <span className="sr-only">Notifications</span>
          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
          <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
          <Bell />
        </button>
        <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
          <span className="sr-only">Log out</span>
          <ExternalLink />
        </button>
      </div>
    </div >
  </header >)
}
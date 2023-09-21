import { Cart, WishList } from '../assets/svgIcons';
const FeaturedItems = ({ price, productName, images, }) => {
  return (
    <div className='bg-inherit dark:bg-slate-500 outline outline-1 dark:outline-none outline-slate-200 rounded-md cursor-pointer active:animate-ping duration-75 delay-75 space-y-3 pb-5 mb-5 sm:h-96'>
      <div className='bg-slate-200 shadow-lg dark:bg-transparent dark:shadow-none rounded-lg h-52 overflow-hidden'>
        <img src={images[0]} className='w-full h-auto mx-auto' alt="product image" />
      </div>
      <h1 className='font-bold lg:text-3xl sm:text-xl text-2xl text-orange-400'>₦{price}</h1>
      <h3 className='text-slate-700 dark:text-slate-300 lg:text-2xl font-normal tracking-wide'>{productName}</h3>
      <button className='dark:text-slate-300 text-slate-600 rounded mx-1 p-2 dark:bg-slate-600 bg-slate-200 active:translate-y-1 active:bg-slate-700'><Cart /></button>
      <button className='dark:text-slate-300 text-slate-600 rounded mx-1 p-2 dark:bg-slate-600 bg-slate-200 active:translate-y-1 active:bg-slate-700'><WishList /></button>
    </div>
  )
}

export default FeaturedItems;
const SubHeader = () => {
  return (
    <section className='bg-transparent dark:bg-slate-700 md:pt-4 pt-16'>
      <aside className='dark:bg-slate-600 bg-slate-200 rounded-xl flex sm:flex-row flex-col lg:w-3/4 mx-auto md:px-12 px-5 h-full items-center max-w-screen-2xl justify-center'>
        <div className='lg:w-1/2 md:w-5/6'>
          <aside>
            <h3 className='tracking-widest lg:text-5xl text-4xl dark:text-slate-300 text-slate-400'><span className='text-orange-400'>E</span>-shopper</h3>
            <h3 className='my-6 font-semibold lg:text-4xl sm:text-3xl text-2xl text-slate-700 dark:text-slate-400'>Free E-commerce Template</h3>
            <p className='text-slate-700 dark:text-slate-400 font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </aside>
          <button className="capitalize bg-orange-400 text-slate-100 p-2 hover:bg-amber-400 active:translate-x-1 text-sm rounded my-5">get it Now</button>
        </div>
        <div className='text-slate-700 dark:text-slate-400 font-normal'>
          <img src="/images/home/girl2.png" className='w-auto h-auto sm:pt-0 pt-5' alt="home pictures" />
        </div>
      </aside>
    </section>
  )
}

export default SubHeader;
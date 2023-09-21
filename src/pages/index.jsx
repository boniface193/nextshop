import('../styles/globals.css');
import FeaturedItems from '../components/FeaturedItems';
import Headers from '../components/Headers';
import SubHeader from '../components/SubHeader';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((res) => setProduct(res.data))
      .catch((error) => error.message)
  }, []);

  return (
    <>
      <Headers />
      <SubHeader />
      <section className='bg-transparent dark:bg-slate-700 md:pt-8 pt-16'>
        <aside className='grid grid-cols-4 gap-5 mx-auto md:px-12 px-5 max-w-screen-2xl pt-5'>
          <div className='uppercase col-span-1 hidden lg:block'>
            <section>
              <h3 className='text-orange-400 text-center font-semibold tracking-wider text-xl '>Category</h3>
              <ul className='unorderedList outline outline-slate-200 dark:outline-slate-400 rounded outline-1 p-2 text-slate-700 dark:text-slate-400 font-normal my-6'>
                <li>
                  <span>Top</span>  <input type="checkbox" className='relative peer shrink-0 appearance-none w-4 h-4 border-2 border-orange-400 bg-white mt-1 checked:bg-orange-400 checked:border-0 rounded-md' />
                </li>
                <li>
                  <span>Skirt</span>  <input type="checkbox" className='relative peer shrink-0 appearance-none w-4 h-4 border-2 border-orange-400 bg-white mt-1 checked:bg-orange-400 checked:border-0 rounded-md' />
                </li>
                <li>
                  <span>Trousers</span>  <input type="checkbox" className='relative peer shrink-0 appearance-none w-4 h-4 border-2 border-orange-400 bg-white mt-1 checked:bg-orange-400 checked:border-0 rounded-md' />
                </li>
                <li>
                  <span>Gown</span>  <input type="checkbox" className='relative peer shrink-0 appearance-none w-4 h-4 border-2 border-orange-400 bg-white mt-1 checked:bg-orange-400 checked:border-0 rounded-md' />
                </li>
                <li>
                  <span>Bags</span>  <input type="checkbox" className='relative peer shrink-0 appearance-none w-4 h-4 border-2 border-orange-400 bg-white mt-1 checked:bg-orange-400 checked:border-0 rounded-md' />
                </li>
                <li>
                  <span>Shoes</span>  <input type="checkbox" className='relative peer shrink-0 appearance-none w-4 h-4 border-2 border-orange-400 bg-white mt-1 checked:bg-orange-400 checked:border-0 rounded-md' />
                </li>
              </ul>
            </section>
            <section>
              <h3 className='uppercase text-orange-400 text-center font-semibold tracking-wider text-xl'>Brands</h3>
              <ul className='unorderedList outline outline-slate-200 dark:outline-slate-400 rounded outline-1 p-2 text-slate-700 dark:text-slate-400 font-normal my-6'>

                <li>
                  <span>Kuuzza</span>  <input type="checkbox" className='relative peer shrink-0 appearance-none w-4 h-4 border-2 border-orange-400 bg-white mt-1 checked:bg-orange-400 checked:border-0 rounded-md' />
                </li>
                <li>
                  <span>Versace</span>  <input type="checkbox" className='relative peer shrink-0 appearance-none w-4 h-4 border-2 border-orange-400 bg-white mt-1 checked:bg-orange-400 checked:border-0 rounded-md' />
                </li>
                <li>
                  <span>Gruede</span>  <input type="checkbox" className='relative peer shrink-0 appearance-none w-4 h-4 border-2 border-orange-400 bg-white mt-1 checked:bg-orange-400 checked:border-0 rounded-md' />
                </li>
                <li>
                  <span>Acne</span>  <input type="checkbox" className='relative peer shrink-0 appearance-none w-4 h-4 border-2 border-orange-400 bg-white mt-1 checked:bg-orange-400 checked:border-0 rounded-md' />
                </li>
              </ul>
            </section>
            <section>
              <h3 className='uppercase text-orange-400 text-center font-semibold tracking-wider text-xl'>Price Range</h3>
              <div>
                <div className='slider' id="slider-distance">
                  <div>
                    <div className='inverse-left' style={{ width: '70%' }}></div>
                    <div className='inverse-right' style={{ width: '70%' }}></div>
                    <div className='range' style={{ left: '30%', right: '40%' }}></div>
                    <span className='thumb' style={{ left: '30%' }}></span>
                    <span className='thumb' style={{ left: '60%' }}></span>
                    <div className='sign' style={{ left: '30%' }}>
                      <span id="value">30</span>
                    </div>
                    <div className='sign' style={{ left: '60%' }}>
                      <span id="value">60</span>
                    </div>
                  </div>
                  <input type="range" tabIndex="0" max="100" min="0" step="1" />

                  <input type="range" tabIndex="0" max="100" min="0" step="1" />
                </div>
              </div>
            </section>
          </div>
          <div className='lg:col-span-3 col-span-4'>
            <h3 className='uppercase text-orange-400 text-center font-semibold tracking-wider text-xl'>Features Item</h3>
            <section className='grid lg:grid-cols-4 sm:grid-cols-3 gap-3 text-center my-8 rounded-lg h-screen overflow-y-scroll '>
              {
                products.map((item) => (
                  <FeaturedItems key={item.id} {...item} />
                ))}
            </section>

          </div>
        </aside>
      </section>
    </>
  )
}

export default HomePage;
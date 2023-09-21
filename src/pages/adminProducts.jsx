import { useEffect, useState } from "react";
import { Add, Exit } from "../assets/svgIcons";
import AdminLayout from "../components/AdminLayout";

export default function AdminHome() {
  const [products, setProduct] = useState([]);
  const [errors, setErrors] = useState('')
  const [showModal, setModal] = useState(false);
  const [formState, setFormState] = useState({ productName: '', description: '', price: '', brand: '', category: '', condition: '', images: [] });
  const [imgChanges, setChanges] = useState([]);
  const [convertToBinary, setConvertToBinary] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((res) => setProduct(res.data))
      .catch((error) => setErrors(error.message))
  }, []);

  const openModal = () => {
    setModal(!showModal);
  };

  useEffect(() => {
    const file = imgChanges.target === undefined ? '' : imgChanges.target.files;
    let filesArr = Array.prototype.slice.call(file);
    filesArr.forEach((singleFile) => {
      // convert file to readable image
      const reader = new FileReader();
      reader.onload = (e) => {
        setConvertToBinary((prevArr) => [...prevArr, e.target.result])
      };
      reader.readAsDataURL(singleFile);
    });
  }, [imgChanges]);

  const deleteImageArr = (e) => {
    // add code to delete from file array
    // .......
    e.target.parentNode.remove()
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { productName, description, price, brandName, category } = formState;
    if (
      productName.trim() !== '' ||
      price.trim() !== '' ||
      brandName.trim() !== '' ||
      category.trim() !== '' ||
      description !== ''
    ) {
      const uploadToServer = { ...formState, images: convertToBinary, condition: document.getElementById('checkbox').checked ? true : false, price: Number(price) }
      console.log(uploadToServer)
      document.querySelector('form').reset();
      openModal();
      setConvertToBinary([]);
      fetch('/api/products', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(uploadToServer),
      }).catch((error) => error.message)
    }
  }
  return (
    <AdminLayout>
      <div className="flex flex-col space-y-6 mb-24 md:space-y-0 md:flex-row justify-between">
        {errors ?
          <section className="flex w-1/2 h-11 items-center bg-red-400 text-white rounded absolute top-0 right-0 px-3 m-3 overflow-x-hidden z-50 max-w-xs">
            <Exit />
            <div className="mx-4">{errors}</div>
          </section> : ''
        }

        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Products</h1>
          <h2 className="text-gray-600 ml-0.5">View created products here</h2>
        </div>
        <button className="flex items-center px-5 py-3 text-white bg-blue-600 hover:bg-purple-700 focus:bg-blue-700 rounded-md ml-6 mb-3" onClick={openModal}>
          <Add Class={'flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2'} />
          Create new product
        </button>
      </div>

      <div className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${showModal ? '' : 'hidden'}`}>
        <form encType="multipart/form-data" onSubmit={handleSubmit} className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
          <div className="inline-block align-center pt-6 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="grid grid-cols-2 px-5 gap-3">
              <aside className="col-span-1">
                <label className="font-medium text-gray-800">Product Name</label>
                <input type="text" name="productName" onChange={handleChange} required className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
              </aside>
              <aside className="col-span-1">
                <label className="font-medium text-gray-800">Brand Name</label>
                <select required name="brand" onChange={handleChange} className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" >
                  <option value="">choose...</option>
                  <option value="Kuuzza">Kuuzza</option>
                  <option value="Versace">Versace</option>
                  <option value="Gruede">Gruede</option>
                  <option value="Acne">Acne</option>
                </select>
              </aside>
            </div>
            <div className="grid grid-cols-2 px-5 gap-3">
              <aside className="col-span-1">
                <label className="font-medium text-gray-800">Product Price(N)</label>
                <input type="number" onChange={handleChange} name="price" required className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
              </aside>
              <aside className="col-span-1">
                <label className="font-medium text-gray-800">Product Category</label>
                <select required name="category" onChange={handleChange} className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" >
                  <option value="">choose...</option>
                  <option value="Top">Top</option>
                  <option value="Skirt">Skirt</option>
                  <option value="Gown">Gown</option>
                  <option value="Trousers">Trousers</option>
                  <option value="Bags">Bags</option>
                  <option value="Shoes">Shoes</option>
                </select>
              </aside>
            </div>
            <div className="grid px-5 gap-3">
              <aside>
                <label className="font-medium text-gray-800">Description</label>
                <textarea name="description" onChange={handleChange} required className="w-full h-20"></textarea>
              </aside>
            </div>
            <div className="px-5">
              <label className="font-medium text-gray-800">Add Product Images</label>
              <section className="grid grid-cols-5 gap-2">

                <aside className="col-span-1 flex h-14 w-14 justify-center p-3 items-center cursor-pointer outline text-blue-500 outline-2 hover:text-white hover:bg-blue-500 outline-blue-500 rounded-lg">
                  <input onChange={(e) => setChanges(e)} multiple required type="file" className="file-input" accept="image/x-png,image/jpeg" name="images" />
                  <Add Class={'h-4 w-4'} />
                </aside>
                {convertToBinary.map((item, index) =>
                  <aside key={index} className="col-span-1 justify-center h-14 w-14 outline items-center cursor-pointer text-gray-200 rounded-lg flex">
                    <img src={item} className="mx-auto rounded-lg w-14 h-14" alt="" />
                    <svg onClick={(e) => deleteImageArr(e)} width='18' className="hover:bg-red-500 fixed rounded-lg text-transparent hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                  </aside>
                )}
              </section>
            </div>

            <div className="bg-gray-200 px-5 py-3 flex justify-between mt-5">
              <div>
                <div>
                  <label className="font-medium text-gray-800">New Product ?</label>
                </div>
                <input type="checkbox" onChange={handleChange} name="condition" id="checkbox" className="appearance-none w-auto mx-auto border-2 border-orange-400 bg-white checked:bg-orange-400 checked:border-0 rounded-md'" />
              </div>
              <div className="flex">
                <button type="button" className="px-4 h-9 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={openModal}><i className="fas fa-times"></i> Cancel</button>
                <button type="submit" className="h-9 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i className="fas fa-plus"></i> Create</button>
              </div>
            </div>

          </div>
        </form>
      </div >

      <section className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-4">
                <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
              </th>
              <th>Picture</th>
              <th>Product Name</th>
              <th>Short Discription</th>
              <th>Product Price</th>
              <th>SKU</th>
              <th>Condition</th>
            </tr>
          </thead>
          <tbody>
            {products.map(({ id, price, productName, description, sku, condition, images }) =>
              <tr key={id}>
                <td className="px-7 text-left">
                  <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
                </td>
                <td><img src={images[0]} className='w-12 h-12 mx-auto' alt="" /></td>
                <td>{productName}</td>
                <td className="w-1/3">{description}</td>
                <td>{price} N</td>
                <td>{sku}</td>
                <td>{condition ? 'New Product' : 'Old Produdct'}</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

    </AdminLayout >
  )

}
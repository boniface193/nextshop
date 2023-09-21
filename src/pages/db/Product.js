import { uploadToCloud } from './Cloudinary'
import { prisma } from "./index";
const SKU = (ProductName) => {
  let firstValue = ProductName.substring(0, 3); //product name must be morethan 2 string lenght
  let secondValue = Math.floor(Math.random() * 90000) + 10000;

  let sku = firstValue.toLowerCase() + secondValue;
  return sku
}

export const createProduct = async (userProduct) => {
  const collectConvertedItem = userProduct.images.map(fileSystem => {
    const convertToSingleItem = uploadToCloud(fileSystem)
    return convertToSingleItem
  });
  console.log(await collectConvertedItem)
  const cloudinaryResource = await collectConvertedItem;
  return prisma.product.create({
    data: {
      ...userProduct, sku: SKU(userProduct.productName), rating: 0, image: cloudinaryResource.secure_url,
    }
  })
}

export const fetchProduct = async () => {
  const allProducts = await prisma.product.findMany()

  return {
    data: allProducts,
  };
}

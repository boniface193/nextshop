import { fetchProduct, createProduct } from "../db/Product";

export default async function defineEventHandler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    try {
      const {
        productName,
        images,
        description,
        price,
        category,
        condition,
        brand,
      } = req.body;

      const singleProduct = {
        productName,
        images,
        description,
        price,
        condition,
        category,
        brand,
      }
      await createProduct(singleProduct);

      return res.status(201).json({ error: false, msg: "User Create Successfuly" })
    } catch (error) {
      console.log(error)
      res.status(403).json({ error: true, msg: 'failed to upload to server' })
    }

  } else {
    // Handle any other HTTP method
    try {
      const result = await fetchProduct();
      res.status(200).json(result);

    } catch (error) {
      res.status(403).json({ error: true, msg: 'failed to load data' })
    }
  }

}

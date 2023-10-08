import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { PRODUCT, createProduct } from "../product/productSlice";
import {} from "../product/productSlice"
export const ProductForm = () => {
  const dispatch = useAppDispatch();
  const [productData, setProductData] = useState<PRODUCT>({
    title: "",
    thumbnail: "",
    price: 0,
    description: "",
    brand: "",
    category: "",
    stock: 1

  });
  /*   export interface PRODUCT {
    _id?: Key | null | undefined
    title: string,
    thumbnail : string,
    price: number,
    description : string,
    brand: string,
    category: string,
    rating?: number
} */

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevProductData) => ({
      ...prevProductData,
      [name]: value,

    }));
  };

  const handleCreate = () => {
    dispatch(createProduct(productData));
    console.log(productData);
    
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">Form</div>
      <label>title</label>
      <input name="title" value={productData.title} onChange={handleSubmit}/>
      <label>thumbnail</label>
      <input name="thumbnail" value={productData.thumbnail} onChange={handleSubmit}/>
      <label>price</label>
      <input name="price" value={productData.price} onChange={handleSubmit}/>
      <label>description</label>
      <input name="description" value={productData.description} onChange={handleSubmit}/>
      <label>brand</label>
      <input name="brand" value={productData.brand} onChange={handleSubmit}/>
      <label>category</label>
      <input name="category" value={productData.category} onChange={handleSubmit}/>
      <label>Stock</label>
      <input name="stock" value={productData.stock} onChange={handleSubmit}/>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

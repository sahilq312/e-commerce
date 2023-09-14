import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProductById } from "./productSlice";
import { useParams } from "react-router-dom";
//import Navbar from "../../components/Navbar";
const ProductDetail = () => {
  const param = useParams();
  const id = param.id;
  const product = useAppSelector((state) => state.product.selectedProduct);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  //console.log(id);

  return (
    <>
   
        <div className=" mt-8">
          {product && (
            <div key={product.id} className=" ">
              {/* left */}
              <div className="">
                <img src={product.thumbnail} alt="image" className="" />
              </div>
              {/* right */}
              <div className="">
                <h1>{product.title}</h1>
                <h1>{product.description}</h1>
                <h1>{product.price}</h1>
              </div>
            </div>
          )}
        </div>
    </>
  );
};

export default ProductDetail;

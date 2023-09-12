import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProductById } from "./productSlice";
import { useParams } from "react-router-dom";
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
    <div className="">
      {product && (
        <div key={product.id} className=" lg:flex">
          <div className=" w-1/2 flex justify-center items-center">
            <img src={product.thumbnail} alt="image" className=" w-2/4" />
          </div>
          <div className="flex flex-col text-left">
            <h1>{product.title}</h1>
            <h1>{product.description}</h1>
            <h1>{product.price}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

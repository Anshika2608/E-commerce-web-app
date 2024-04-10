import React, { useContext,useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import MenContext from '../../Contexts/MenContext/MenContext';
import Card from '../../Components/Card/Card';
function SingleProduct() {
  const {getSingleProduct,singleProduct}=useContext(MenContext)
  const { id } = useParams();
  
  // useEffect(() => {
  //   if (!hasFetched) {
  //     getSingleProduct(id);
  //     // setHasFetched(true);
  //   }
  // }, [id, getSingleProduct]);

  // useEffect(() => {
  //   if (singleProduct) {
  //     console.log(singleProduct);
  //   }
  // }, [singleProduct]);
  

  useEffect(()=>{
    getSingleProduct(id);
  
  },[id,getSingleProduct]);
  
  return (
    
    <>
    <div>
      {singleProduct && ( // Render only when singleProduct data is available
        <>
       <p className='pt-32'>{singleProduct.Title}</p>
          
          
        </>
      )}
    </div>
    </>
  )
}

export default SingleProduct

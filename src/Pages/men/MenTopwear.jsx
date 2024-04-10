import React, { useContext } from 'react'
import Card from '../../Components/Card/Card';
import MenContext from '../../Contexts/MenContext/MenContext';
function MenTopwear() {
  const {menProducts}=useContext(MenContext);
  return (
    <>
    <div className='pt-24'>
    <h2 className="text-2xl font-bold mb-4">Topwear for Men</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menProducts.topWearProducts.map((product,index) => (
          <div key={product.id} className="m-4">
          <Card
           
            id={product.id}
            src={product.image}
            title={product.Title}
            Previous={product.previous_price}
            Current={product.Current_price}
            discount={product.discount}
          />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default MenTopwear

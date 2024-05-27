import React from 'react'
import { useSelector } from 'react-redux'
import JewelleryCarousel from '../components/JewelleryCarousel'
import JewelleryCard from '../components/JewelleryCard'

const Jewellery = () => {
    const {product} = useSelector(state=>state.product)

  return (
    <div className='bg-dark-subtle'>
    <JewelleryCarousel/>
      <h6 className='p-3 px-4 display-6 '>JEWELLERY</h6>
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 px-3 ">
    {
      product?.filter(item=>item.category==="jewelery")?.map((item,index)=>
      <JewelleryCard key={index} i={item}/>
      )
    }
    </div>
  </div>
  )
}

export default Jewellery
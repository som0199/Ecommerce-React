import React from 'react'
import ElectronicCarousel from '../components/ElectronicCarousel'
import ElectronicCard from '../components/ElectronicCard'
import { useSelector } from 'react-redux'

const Electronics = () => {
    const {product} = useSelector(state=>state.product)
  return (
    <div className='bg-warning-subtle'>
      <ElectronicCarousel/>
        <h6 className='p-3 px-4 display-6 '>ELECTRONICS</h6>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 px-3 ">
      {
        product?.filter(item=>item.category==="electronics")?.map((item,index)=>
        <ElectronicCard key={index} i={item}/>
        )
      }
      </div>
    </div>
  )
}

export default Electronics
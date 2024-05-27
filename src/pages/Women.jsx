import React from 'react'
import WomenCarousel from '../components/WomenCarousel'
import { useSelector } from 'react-redux'
import WomenCard from '../components/WomenCard'

const Women = () => {
    const {product} = useSelector(state=>state.product)
  return (
    
    <div className='bg-danger-subtle'>
      <WomenCarousel/>
        <h6 className='p-3 display-6'>TRENDING IN WOMEN'S WEAR</h6>
      <div class="row row-cols-1 row-cols-md-6 g-3 px-4 ">
      {
        product?.filter(item=>item.category==="women's clothing")?.map((item,index)=>
        <WomenCard key={index} i={item}/>
        )
      }
      </div>
    </div>
  )
}

export default Women
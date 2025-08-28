import React from 'react'
import discountBanner from "../assets/images/Discount Bannar.jpg"

const DiscountBanner = () => {
  return (
    <section className='px-80 mb-7'>
      <div className="flex flex-row justify-center items-center">
        <img src={discountBanner} alt="" />
      </div>
    </section>
  )
}

export default DiscountBanner

import React from 'react'

function Navbar() {
  const navItems = ["About", "Services", "Experince", "Projects", "Testimonials", "Contact"];
  return (
    <div className='pt-4'>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex gap-4 py-2 px-2 rounded rounded-5' style={{ backgroundColor: "#121212", border: "1px solid #ffffff18" }}>
          {
            navItems.map((item, index) => (
              <div key={index} className='text-white px-3 py-2 rounded rounded-5 cursor-pointer' style={{ cursor: "pointer" }}>
                {item}
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Navbar
import React from 'react'

function Navbar() {
  const navItems = ["Home", "About", "Projects", "Contact"];
  return (
    <div className='pt-4'>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex gap-5 py-3 px-4 rounded rounded-5' style={{ backgroundColor: "#121212", border: "1px solid #ffffff18" }}>
          {
            navItems.map((item, index) => (
              <div key={index} className='bg-dark text-white px-3 py-2 rounded rounded-5'>
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
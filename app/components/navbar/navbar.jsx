"use client"
import React, { useState, useEffect } from 'react'
import { styles } from './navbarStyles'
import { navItems } from '@/app/utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="pt-4">
      <div className="container-fluid">
        <div onClick={() => setIsOpen(!isOpen)} style={styles.navContainer} className='rounded-5 px-2 py-2 d-flex justify-content-between align-items-center mb-3 d-block d-md-none'>
          <FontAwesomeIcon icon={faBars} className='py-2 ps-3 fs-3' />
        </div>
        {
          isOpen && (
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 gap-md-4 py-2 px-2 rounded rounded-5" style={styles.navContainer}>
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="text-white px-3 py-2 rounded rounded-5 cursor-pointer"
                  style={styles.itemPointer}
                >
                  {item}
                </div>
              ))}
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar
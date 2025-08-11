"use client"
import { useState, useEffect } from 'react'
import { styles } from './navbarStyles'
import { navItems } from '@/app/utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'
import { useRouter, usePathname } from 'next/navigation'


export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(null)

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

  useEffect(() => {
    const handleScroll = () => {
      let found = null;
      for (let item of navItems) {
        const section = document.getElementById(item);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = item;
            break;
          }
        }
      }
      setIsActive(found);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false)
    }
    if (pathname !== '/') {
      router.push('/')
    }
  }

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
                <Link
                  key={index}
                  onClick={handleClick}
                  to={item}
                  offset={-110}
                  className="text-white px-3 py-2 rounded rounded-5"
                  style={{ ...styles.navItem, ...(isActive === item ? styles.navItemClick : {}) }}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
      </div>
    </nav>
  )
}
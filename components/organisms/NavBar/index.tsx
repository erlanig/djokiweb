import React, { useEffect, useState } from 'react'
import NavBrand from 'components/atoms/NavBrand'
import NavLink from 'components/atoms/NavLink'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import Container from 'components/templates/Container'
import { FiMenu, FiX } from 'react-icons/fi'
import useMobileDeviceDetection from 'hooks/useMobileDetection'
import useGetBrowserName from 'hooks/useGetBrowserName'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const browserName = useGetBrowserName()
  const isMobile = useMobileDeviceDetection()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 150)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('h-screen', 'overflow-y-hidden')
    } else {
      document.body.classList.remove('h-screen', 'overflow-y-hidden')
    }
  }, [isOpen])

  return (
    <nav
      className={`w-full top-2 left-0 z-30 ${
        isScrolled ? 'fixed' : 'absolute'
      }`}
      style={{ paddingTop: 4, paddingBottom: 4 }} // padding kecil (1rem = 16px) jadi 4px aja
    >
      <Container>
        <div
          className={`${
            browserName === 'Firefox' ? 'bg-gray-900' : 'bg-light'
          } px-2 sm:px-4 w-full rounded-md backdrop-blur-3xl ${
            isScrolled || isOpen ? '' : 'lg:bg-transparent lg:px-0'
          } flex items-center min-h-[36px] sm:min-h-[40px]`}
        >
          <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center">
            <div className="w-full flex justify-between items-center lg:w-fit">
              {/* Logo dibuat sangat kecil, misal 40px width di mobile */}
              <div className="w-10 sm:w-16 lg:w-20">
                <NavBrand />
              </div>

              {/* Tombol menu hamburger */}
              <div
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
                role="button"
                tabIndex={0}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen)
                }}
              >
                <div className="text-white cursor-pointer">
                  {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </div>
              </div>
            </div>

            {/* Menu dropdown, center saat di mobile (isOpen) */}
            <div
              className={`${
                isOpen ? 'flex flex-col items-center' : 'hidden'
              } mt-2 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0 space-y-2 w-full lg:w-auto`}
            >
              <NavLink href="#banner" value="Home" canActive={false} />
              <NavLink href="#feature" value="Services" canActive={false} />
              <NavLink href="#contact-us" value="Contact Us" canActive={false} />
              <NavLink href="#projects" value="Projects" canActive={false} />
              <NavLink href="#faq" value="FAQ" canActive={false} />
            </div>

            {/* Tombol Contact, juga ikut hide/show */}
            <div
              className={`${
                isOpen ? 'flex justify-center w-full mt-2' : 'hidden'
              } lg:flex lg:block lg:mt-0 lg:w-auto`}
            >
              <ButtonLink
                value="Contact"
                style="light"
                color="white"
                size="small"
                href="#contact-us"
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar

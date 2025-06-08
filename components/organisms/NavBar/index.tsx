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
      className={`pt-2 sm:pt-4 w-full top-0 left-0 z-30 ${
        isScrolled ? 'fixed' : 'absolute'
      }`}
    >
      <Container>
        <div
          className={`${
            browserName === 'Firefox' ? 'bg-gray-900' : 'bg-light'
          } px-2 sm:px-4 py-1 sm:py-2 w-full rounded-md backdrop-blur-3xl ${
            isScrolled || isOpen ? '' : 'lg:bg-transparent lg:px-0'
          }`}
        >
          <div className="flex flex-col lg:flex-row w-full justify-between lg:items-center">
            <div className="w-full flex justify-between items-center lg:w-fit">
              {/* Ukuran logo responsif: kecil di mobile, sedang di desktop */}
              <div className="w-20 sm:w-28 lg:w-32">
                <NavBrand />
              </div>

              <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <div
                  className={`text-white text-lg sm:text-xl ${
                    isMobile ? 'cursor-default' : 'cursor-pointer'
                  }`}
                >
                  {isOpen ? <FiX /> : <FiMenu />}
                </div>
              </div>
            </div>

            <div
              className={`${
                isOpen ? '' : 'hidden '
              }space-y-2 mt-2 lg:mt-0 lg:space-y-0 lg:space-x-8 lg:flex lg:items-center`}
            >
              <NavLink href="#banner" value="Home" canActive={false} />
              <NavLink href="#feature" value="Services" canActive={false} />
              <NavLink href="#contact-us" value="Contact Us" canActive={false} />
              <NavLink href="#projects" value="Projects" canActive={false} />
              <NavLink href="#faq" value="FAQ" canActive={false} />
            </div>

            <div className={`${isOpen ? '' : 'hidden '} lg:block mt-2 lg:mt-0`}>
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

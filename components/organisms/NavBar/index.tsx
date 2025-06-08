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
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 150)
    })
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('h-screen', 'overflow-y-hidden')
    } else {
      document.body.classList.remove('h-screen', 'overflow-y-hidden')
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`pt-8 w-full top-0 left-0 z-30 ${
          isScrolled ? 'fixed' : 'absolute'
        }`}
      >
        <Container>
          <div
            className={`${
              browserName === 'Firefox' ? 'bg-gray-900' : 'bg-light'
            } px-6 py-4 w-full rounded-md backdrop-blur-3xl ${
              isScrolled || isOpen ? '' : 'lg:bg-transparent lg:px-0'
            }`}
          >
            <div className="flex flex-col lg:flex-row w-full place-content-between lg:place-items-center">
              <div className="w-full flex flex-row place-content-between place-items-center lg:w-fit">
                <NavBrand />
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <div
                    className={`text-white text-2xl ${
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
                }space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-12 lg:flex lg:place-items-center`}
              >
                <NavLink href="#banner" value="Home" canActive={false} />
                <NavLink href="#feature" value="Services" canActive={false} />
                <NavLink href="#contact-us" value="Contact Us" canActive={false} />
                <NavLink href="#projects" value="Projects" canActive={false} />
                <NavLink href="#faq" value="FAQ" canActive={false} />
              </div>
              <div
                className={`${isOpen ? '' : 'hidden '}lg:block mt-5 lg:mt-0`}
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
    </>
  )
}

export default NavBar

import React from 'react'
import NavBrand from 'components/atoms/NavBrand'
import Text from 'components/atoms/Text'

import { FiPhone, FiMail, FiGlobe, FiInstagram } from 'react-icons/fi'

import { IconType } from 'react-icons';

interface IconButtonProps {
  icon: IconType;
  href: string;
  value?: string;
  onlyIcon?: boolean;
}

const IconButton = ({ icon: Icon, href, value, onlyIcon = false }: IconButtonProps) => {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-2 text-white hover:underline"
    >
      <Icon />
      {!onlyIcon && <span>{value}</span>}
    </a>
  );
};


const Footer = () => {
  return (
    <footer className="mt-32 pb-16 text-white">
      <div className="flex flex-col gap-8 justify-center items-center text-center max-w-4xl mx-auto text-white">
        {/* Bagian atas */}
        <div className="space-y-5 text-white">
          <NavBrand />
          <div className="space-y-1 text-white">
            <Text
              value="Djoki Coding"
              textStyle="SectionParagraph"
            />
            <Text
              value="Professional Development Services"
              textStyle="SectionParagraph"
            />
          </div>
        </div>

        {/* Bagian bawah: contact responsive */}
        <div className="space-y-5 flex flex-col items-center">
          <Text value="CONTACT" textStyle="FooterLinkGroupTitle" />
          <div className="flex flex-wrap justify-center gap-4 text-white max-w-full">
            <IconButton
              icon={FiPhone}
              value="+62 851-7442-4245"
              href="tel:+6285174424245"
            />
            <span className="select-none hidden sm:inline">|</span>
            <IconButton
              icon={FiMail}
              value="djokicoding@gmail.com"
              href="mailto:djokicoding@gmail.com"
            />
            <span className="select-none hidden sm:inline">|</span>
            <IconButton
              icon={FiGlobe}
              value="www.djokicoding.store"
              href="https://www.djokicoding.store"
            />
            <span className="select-none hidden sm:inline">|</span>
            <IconButton
              icon={FiInstagram}
              value="@djokicoding"
              href="https://instagram.com/djokicoding"
            />
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

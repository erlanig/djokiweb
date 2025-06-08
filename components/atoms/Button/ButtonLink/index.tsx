import Button, { ButtonProps } from 'components/atoms/Button'
import Link from 'next/link'
import React from 'react'

interface ButtonLinkProps extends ButtonProps {
  href: string
  newTab?: boolean
  className?: string
}

const ButtonLink = ({
  href,
  value,
  onClick = () => {},
  size = 'normal',
  style = 'solid',
  color = 'primary',
  radius = 'rounded',
  newTab = false,
  className = '',
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={className}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      <Button
        value={value}
        color={color}
        onClick={onClick}
        radius={radius}
        size={size}
        style={style}
      />
    </Link>
  )
}

export default ButtonLink
export type { ButtonLinkProps }

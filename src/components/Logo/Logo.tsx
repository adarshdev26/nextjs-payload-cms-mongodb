import clsx from 'clsx'
import React from 'react'
import logo from '../../../src/assets/codexstream.png'
import Image from 'next/image'
interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      alt="Codexstream"
      src={logo}
      width={150}
      height={50}
      loading={loading}
      priority={priority === 'high'}
      className={clsx('max-w-[9.375rem] h-auto', className)}
    />
  )
}

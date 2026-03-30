import { cn } from '../lib/utils'
import logo from '@/assets/images/Logo White.png'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <img
      src={logo}
      alt="Logo"
      className={cn('h-32 -mb-5 w-full', className)}
    />
  )
}

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <img
      src={logo}
      alt="Logo Icon"
      className={cn('h-24', className)}
    />
  )
}
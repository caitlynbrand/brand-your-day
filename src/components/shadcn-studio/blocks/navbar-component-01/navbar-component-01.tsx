import { MenuIcon, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { LogoIcon } from '@/components/logo'
import { useState, useRef } from 'react'

type NavigationItem = {
  title: string
  href: string
}[]

const Navbar = ({ navigationData }: { navigationData: NavigationItem }) => {
  const [isHoverOpen, setIsHoverOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsHoverOpen(true)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      setIsHoverOpen(false)
    }, 300)
  }

  return (
    <header className="bg-accent-foreground sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-2 sm:px-2">
        <a href="/" className="md:hidden flex">
          <LogoIcon />
        </a>

        <div className="text-primary sm:hidden md:flex flex-1 items-center justify-center gap-8 font-medium lg:gap-16">
          {navigationData.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                
                {/* Insert logo at index 3 */}
                {index === 3 && (
                  <a href="/" className='sm:ml-0 sm:mr-0 md:-ml-8 md:mr-10'>
                    <LogoIcon />
                  </a>
                )}

                {/* Dropdown at index 2 */}
                {index === 2 ? (
                  <div
                    className="relative hidden md:flex"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <DropdownMenu open={isHoverOpen} onOpenChange={setIsHoverOpen}>
                      <DropdownMenuTrigger
                        render={
                          <a href={item.href} className="flex items-center gap-1 hover:text-primary focus:outline-none focus:ring-0 bg-transparent">
                            {item.title}
                            <ChevronDown style={{ width: 16, height: 16 }} />
                          </a>
                        }
                      />

                      <DropdownMenuContent
                        className="w-40"
                        align="start"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <DropdownMenuGroup>
                          <DropdownMenuItem render={<a href="/events#community">Community</a>} />
                          <DropdownMenuItem render={<a href="/events#professional">Professional</a>} />
                          <DropdownMenuItem render={<a href="/events#weddings">Weddings</a>} />
                          <DropdownMenuItem render={<a href="/events#everything-in-between">Everything in Between</a>} />
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="font-medium sm:hidden md:flex hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden bg-accent-foreground mr-2 w-12 h-12" render={<Button size="icon" />}>
              <MenuIcon style={{ width: 32, height: 32 }} color="black" />
              <span className="sr-only">Menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index} render={<a href={item.href}>{item.title}</a>} />
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
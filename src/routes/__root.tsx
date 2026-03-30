import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'
import { ThemeProvider } from '@/components/theme-provider'
import FooterSection from '@/components/footer'
import Navbar from '@/components/shadcn-studio/blocks/navbar-component-01/navbar-component-01'

const navigationData = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Events', href: '/events' },
  { title: 'Services', href: '/services' },
  { title: 'Testimonials', href: '/testimonials' },
  // { title: 'Preferred Vendors', href: '/vendors' },
  { title: 'Contact', href: '/contact' }
]

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Brand Your Day',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/logo.png',
        type: 'image/png',
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className='min-h-screen flex flex-col'>
          <Navbar navigationData={navigationData} />

          <main className="flex-1">
            <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
              {children}
            </ThemeProvider>
          </main>

          <FooterSection />

          <Scripts />
        </div>
      </body>
    </html>
  )
}

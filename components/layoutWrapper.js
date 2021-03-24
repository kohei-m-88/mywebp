import { headerNavLinks } from '../data/headerNavLinks'
import { MyLink } from './myLink'
import { SectionContainer } from './sectionContainer'
import { ThemeSwitch } from './themeSwitch'
import { MobileNav } from './mobileNav'
import { MyFooter } from './myFooter'

export const LayoutWrapper = ({ children }) => {
  return (
    <>
      <SectionContainer>
        <div className="flex flex-col justify-between h-screen">
          <header className="flex items-center justify-between py-10">
            <div>
              <MyLink href="/" aria-label="Matsuda Kohei">
                <div className="flex items-center justify-between">
                  <div className="h-6 text-2xl font-semibold sm:block text-gray-900 dark:text-gray-100">
                    ﾏﾂﾉﾏ
                  </div>
                </div>
              </MyLink>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <MyLink
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                  >
                    {link.title}
                  </MyLink>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <MyFooter />
        </div>
      </SectionContainer>
    </>
  )
}

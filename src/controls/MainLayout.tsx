'use client'

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PanelMenu } from 'primereact/panelmenu';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { type MenuItem } from 'primereact/menuitem';
import DHeader from '@/src/controls/DHeader';

export default function MainLayout({ children }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const currentYear = new Date().getFullYear();

  const router = useRouter();

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setSidebarVisible(false);
  }, []);

  const scrollToTop = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(min-width: 1024px)');
      const updateIsDesktop = (event?: MediaQueryListEvent) => {
        setIsDesktop(event ? event.matches : mediaQuery.matches);
      };
      updateIsDesktop();
      mediaQuery.addEventListener('change', updateIsDesktop);
      return () => mediaQuery.removeEventListener('change', updateIsDesktop);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const toggleScrollTop = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };
    toggleScrollTop();
    window.addEventListener('scroll', toggleScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', toggleScrollTop);
  }, []);

  const menuItemLinkTemplate = 
    (item, options) => (
      <Link href={item.url} className={options.className} onClick={options.onClick}>
        <span className={options.iconClassName} />
        <span className={options.labelClassName}>{item.label}</span>
      </Link>
    );

  const menuItems: MenuItem[] = useMemo(
    () => [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'pi pi-chart-line',
        url: '/',
        template: menuItemLinkTemplate,
      },
      {
        id: 'portfolios',
        label: 'Portfolios',
        icon: 'pi pi-briefcase',
        url: '/portfolios',
        template: menuItemLinkTemplate,
      },
      {
        id: 'game',
        label: 'Woof',
        icon: 'pi pi-gift',
        url: '/game',
        template: menuItemLinkTemplate,
      },
      {
        id: 'support',
        label: 'Support',
        icon: 'pi pi-info-circle',
        url: '/support',
        template: menuItemLinkTemplate,
      },
    ],
    [scrollToSection],
  );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-color flex flex-col">
      <DHeader isDesktop={isDesktop} menuItems={menuItems} />

      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        modal
        blockScroll
        position="left"
        className="lg:hidden w-80"
      >
        <PanelMenu model={menuItems} className="w-full" />
      </Sidebar>

      <div className="flex flex-1 flex-col lg:flex-row">
        <aside
          className={`relative hidden shrink-0 border-surface-500/20 py-6 transition-all duration-200 lg:sticky lg:top-0 lg:h-full lg:overflow-y-auto lg:block ${
            sidebarCollapsed ? 'w-20 px-2' : 'w-72 px-4'
          }`}
        >
          {sidebarCollapsed ? (
            <div className="flex flex-col items-center gap-2">
              {menuItems.map((item) => (
                <Link key={item.id} href={item.url}>
                  <Button
                    icon={item.icon}
                    text
                    rounded
                    aria-label={item.label}
                    className="w-10 h-10"
                    style={{ color: 'var(--primary-color)' }}
                    tooltip={item.label}
                    tooltipOptions={{ position: 'right' }}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <PanelMenu model={menuItems} className="w-full" />
          )}
        </aside>

        <aside
          className="relative hidden lg:block lg:sticky lg:top-0 lg:w-0 lg:h-full transition-all duration-200"
          style={{ left: sidebarCollapsed ? '5rem' : '18rem' }}
        >
          <Button
            icon={sidebarCollapsed ? 'pi pi-angle-right' : 'pi pi-angle-left'}
            className="hidden lg:flex fixed top-[3rem] -translate-x-1/2 z-50 h-6 !w-6 items-center justify-center rounded-md border border-surface-500/20 bg-surface-card/70 backdrop-blur shadow-3 hover:bg-surface-card/80"
            aria-label="Toggle menu"
            onClick={() => setSidebarCollapsed((v) => !v)}
          />
        </aside>
        <main className="flex-1 lg:border-l min-w-0 px-4 pb-4 pt-6 lg:px-6 lg:py-6 lg:px-8">
            {children}
        </main>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-surface-500/20 bg-surface-card/95 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-screen-lg items-stretch gap-2 px-2 py-2">
          <div className="flex-1 overflow-x-auto">
            <div className="flex w-max items-center gap-1 pr-2">
              {menuItems.map((item) => (
                <Link key={item.id} href={item.url}>
                  <Button
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    iconPos="top"
                    size="small"
                    text
                    rounded
                    severity="secondary"
                    aria-label={item.label}
                    pt={{
                        root: { className: 'items-center justify-center text-center' },
                        icon: { className: 'text-lg !m-0' },
                        label: { className: 'text-[10px] leading-none !m-0 text-center mt-1' },
                    }}
                    className="flex-none w-20 h-auto py-2"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-none border-l border-surface-500/20 pl-2">
            <Button
              icon="pi pi-bars"
              label="Menu"
              iconPos="top"
              size="small"
              text
              rounded
              severity="secondary"
              aria-label="Menu"
              pt={{
                root: { className: 'items-center justify-center text-center' },
                icon: { className: 'text-lg !m-0' },
                label: { className: 'text-[10px] leading-none !m-0 text-center mt-1' },
              }}
              className="w-20 h-auto py-2"
              onClick={() => setSidebarVisible(true)}
            />
          </div>
        </div>
      </nav>

      <footer
        id="footer"
        className="border-t border-surface-500/20 bg-surface-card px-6 py-4 pb-20 text-sm text-color-secondary lg:pb-4"
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="font-semibold text-color">DogeCoiner</div>
            <div className="text-xs text-color-secondary">
              Built with PrimeReact components and a responsive layout.
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              label="Contact"
              icon="pi pi-send"
              size="small"
              text
              className="p-0 text-color"
              onClick={() => scrollToSection('overview')}
            />
            <span className="text-xs text-color-secondary">© {currentYear} All rights reserved.</span>
          </div>
        </div>
      </footer>

      <div
        className={`fixed top-3 left-1/2 -translate-x-1/2 lg:top-auto lg:left-auto lg:bottom-6 lg:right-6 lg:translate-x-0 rounded-md border border-surface-500/20 bg-surface-card/70 backdrop-blur shadow-3 transition-all duration-200 ${
          showScrollTop
            ? 'z-50 opacity-100 translate-y-0'
            : 'pointer-events-none translate-y-2 opacity-0'
        }`}
      >
        <Button
          icon="pi pi-arrow-up"
          severity="secondary"
          text
          className="!w-9 h-9 rounded-md p-0 flex items-center justify-center"
          aria-label="Scroll to top"
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
}

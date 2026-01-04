import { Menubar } from "primereact/menubar";
import Link from 'next/link';
import Image from 'next/image';
import AuthButton from './AuthButton';

export default function DHeader({ isDesktop, menuItems }) {
    return (
    <header className="z-10">
        <Menubar 
            pt={{ 
              root: { className:"!rounded-none h-17 flex" }, 
              menu: {className:"!border-0 grow"}
            }}
            model={isDesktop ? menuItems : []}
            start={
            <Link href="/" aria-label="Go to home">
                <div
                id="logo"
                className="flex cursor-pointer select-none items-center gap-3 px-1"
                >
                <div className="rounded-full bg-primary-500/20 p-3 text-primary-300">
                    <Image
                    src="/favicon512x512.png"
                    alt="dogecoiner.io"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                    />
                </div>
                <div className="leading-tight">
                    <div className="text-lg font-semibold text-primary-100">dogecoiner.io</div>
                    <div className="text-xs text-color-secondary">track crypto. much wow!</div>
                </div>
                </div>
            </Link>
            }
            end={
            <div className="flex items-center gap-2 justify-end">
                <AuthButton />
            </div>
            }
            className="border-none bg-surface-card px-4"
        />
    </header>
    );
}
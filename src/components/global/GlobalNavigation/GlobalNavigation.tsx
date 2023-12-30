
import React, { useState } from 'react';
import { Navbar } from "@nextui-org/navbar";
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import { useMediaQuery } from 'beautiful-react-hooks';
interface GlobalNavigationProps {
    children?: React.ReactNode;
}

const GlobalNavigation: React.FC<GlobalNavigationProps> = ({ children }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [isMenuOpen, setIsMenuOpen] = useState(false)


    const links = [
        {
            navItem: "About",
            path: "/about",
        },
        {
            navItem: "Resume",
            path: "/resume",
        },
        {
            navItem: "Contact",
            path: "/contact",
        },
    ]



    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth='full' >
            {isMobile ? <MobileHeader links="Hello" /> : <DesktopHeader links={links} />}
            {children}
        </Navbar>
    );
};

export default GlobalNavigation;

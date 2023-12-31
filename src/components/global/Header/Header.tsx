"use client"

import React, { FunctionComponent, ReactElement, useState } from 'react';
import MobileHeader from '../Header/MobileHeader';
import { Navbar, NavbarContent, NavbarItem, Link, NavbarMenuToggle } from "@nextui-org/react";
import type { NavLinks } from '../../../helpers/types'
import { useSelectedLayoutSegment } from 'next/navigation';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';


interface HeaderProps { }

const Header: FunctionComponent<HeaderProps> = ({ }) => {
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
    const pathname = useSelectedLayoutSegment();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)');
    // const isMobile = true;

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth='full' >
            {isMobile ?
                (
                    <>
                        <NavbarContent>
                            <NavbarMenuToggle />
                        </NavbarContent>
                        <MobileHeader links={links} />
                    </>
                ) : (
                    <NavbarContent>
                        {links.map((item, index) => (
                            <NavbarItem isActive={item.path === pathname} key={`${item}-${index}`}>
                                <Link
                                    color="foreground"
                                    href={item.path}
                                >
                                    {item.navItem}
                                </Link>
                            </NavbarItem>
                        )
                        )}
                    </NavbarContent>)}
        </Navbar>
    );
}

export default Header;
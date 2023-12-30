"use client"

import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';


interface HeaderProps { links: Array<{ navItem: string, path: string }> }

const Header: FunctionComponent<HeaderProps> = ({ links }) => {
    const pathname = useSelectedLayoutSegment();

    return (
        <NavbarContent>
            {links.map((item, index) => (
                <NavbarItem isActive={item.path === pathname} key={`${item}-${index}`} className="sm:hidden">
                    <Link
                        color="foreground"
                        href={item.path}
                    >
                        {item.navItem}
                    </Link>
                </NavbarItem>
            ))}
        </NavbarContent>
    );
}

export default Header;
import React, { FunctionComponent, useState } from 'react';
import { Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import type { NavLinks } from '../../../helpers/types'

interface MobileHeaderProps {
    links: NavLinks;
}

const MobileHeader: FunctionComponent<MobileHeaderProps> = ({ links }) => {


    return (
        <NavbarMenu>
            {links.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                        color="foreground"
                        href={item.path}
                        className="w-full"
                        size='lg'
                    >
                        {item.navItem}
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    );
};

export default MobileHeader;

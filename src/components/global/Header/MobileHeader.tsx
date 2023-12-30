import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";

interface MobileHeaderProps {
    title: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ title }) => {

    return (
        <NavbarMenu>
            <h1>{title}</h1>
        </NavbarMenu>
    );
};

export default MobileHeader;

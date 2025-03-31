import React from "react";
import HeaderComponent from "./_components/headercomponent";
import FooterComponent from "./_components/footercomponent";
export default function UserLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderComponent />
            {children}
            <FooterComponent />
        </>
    )
}
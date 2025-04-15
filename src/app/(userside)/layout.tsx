import React from "react";
import FooterComponent from "./_components/footercomponent";
import Header from "./_components/header";
export default function UserLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <FooterComponent />
        </>
    )
}
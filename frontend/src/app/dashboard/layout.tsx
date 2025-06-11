"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import useUserStore from "@/store/user/useUserStore";
import React from "react";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const { isOpenSidebar } = useUserStore();

    return (
        <SidebarProvider defaultOpen={false} open={isOpenSidebar}>
            <div
                className={`w-full mt-[80px] duration-300 ease-in-out ${
                    isOpenSidebar && "pl-[255px]"
                }`}
            >
                <Sidebar />
                {children}
            </div>
        </SidebarProvider>
    );
};

export default Layout;

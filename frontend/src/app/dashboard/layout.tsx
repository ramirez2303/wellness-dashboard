"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import useUserStore from "@/store/user/useUserStore";
import React from "react";

const Layout = () => {
    const { isOpenSidebar } = useUserStore();

    return (
        <SidebarProvider defaultOpen={false} open={isOpenSidebar}>
            <div>
                <Sidebar />
                <div>layout</div>
            </div>
        </SidebarProvider>
    );
};

export default Layout;

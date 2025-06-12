import React from "react";
import {
    Sidebar as SidebarComp,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogOut } from "lucide-react";
import Link from "next/link";
import Button from "@/components/common/Button";
import { deleteCookie } from "cookies-next";
import useUserStore from "@/store/user/useUserStore";
import { redirect } from "next/navigation";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    const { clearUser } = useUserStore();
    const menuItems = ["Dashboard", "Mental", "Physical", "Reports", "Profile"];

    const logout = () => {
        deleteCookie("token");
        localStorage.removeItem("token");
        clearUser();
        redirect("/login");
    };

    return (
        <SidebarComp>
            <SidebarContent>
                <SidebarGroup className="pt-[100px] px-4 gap-2">
                    {menuItems.map((route, ix) => (
                        <Link
                            key={route + ix}
                            href={`/${route.toLowerCase()}`}
                            className={`text-xl font-medium list-none py-2 px-4 cursor-pointer hover:bg-custom-primary/90 rounded-lg hover:text-white duration-300 ease-in-out ${
                                pathname
                                    .toLowerCase()
                                    .includes(route.toLowerCase()) &&
                                "bg-custom-primary text-white"
                            }`}
                        >
                            <SidebarMenuItem>{route}</SidebarMenuItem>
                        </Link>
                    ))}
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="px-8 py-4">
                    <Button
                        variant="none"
                        className="w-full flex justify-start items-center gap-2 cursor-pointer"
                        onClick={logout}
                    >
                        <span className="text-xl font-medium">Logout</span>
                        <LogOut className="text-black" />
                    </Button>
                </div>
            </SidebarFooter>
        </SidebarComp>
    );
};

export default Sidebar;

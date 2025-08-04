"use client";

import React from "react";
import ActionButtons from "./components/ActionButtons";
import Link from "next/link";
import { routes } from "@/app/utils/routes";
import IconButton from "@/components/common/IconButton";
import { Menu } from "lucide-react";
import useUserStore from "@/store/user/useUserStore";
import LanguageSwitcher from "../LanguageSwitcher";
// import Search from "./components/Search";

const Navbar = () => {
    const { isOpenSidebar, setIsOpenSidebar, user } = useUserStore();
    return (
        <header className="fixed top-0 w-full flex justify-center items-center py-5 z-5 bg-gray-100 shadow-md text-black">
            <div className="flex items-center justify-between w-full px-8">
                <div className="flex justify-start items-center gap-4">
                    {user?.id && (
                        <IconButton
                            icon={Menu}
                            size="md"
                            variant="outline-primary"
                            className="rounded-lg border-2 cursor-pointer hover:text-white"
                            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                        />
                    )}
                    <Link href={routes.home}>
                        <h1 className="text-3xl font-bold cursor-pointer">
                            Wellness
                        </h1>
                    </Link>
                </div>
                {/* <Search /> */}
                <div className="flex flex-end items-center gap-2">
                    <ActionButtons />
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    );
};

export default Navbar;

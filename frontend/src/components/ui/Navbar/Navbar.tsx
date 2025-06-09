import React from "react";
import ActionButtons from "./components/ActionButtons";
import Link from "next/link";
import { routes } from "@/app/utils/routes";
// import Search from "./components/Search";

const Navbar = () => {
    return (
        <header className="fixed top-0 w-full flex justify-center items-center py-5 bg-gray-100 shadow-md text-black">
            <div className="flex items-center justify-between w-full max-w-[85%] lg:max-w-[1200px]">
                <Link href={routes.home}>
                    <h1 className="text-3xl font-bold cursor-pointer">
                        Wellness
                    </h1>
                </Link>
                {/* <Search /> */}
                <ActionButtons />
            </div>
        </header>
    );
};

export default Navbar;

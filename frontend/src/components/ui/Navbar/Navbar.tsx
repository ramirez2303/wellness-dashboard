import React from "react";
import ActionButtons from "./components/ActionButtons";
import Search from "./components/Search";

const Navbar = () => {
    return (
        <header className="flex justify-center items-center py-6 bg-gray-100 shadow-md text-black">
            <div className="flex items-center justify-between w-full max-w-[1200px]">
                <h1 className="text-3xl font-bold">Wellness</h1>
                <Search />
                <ActionButtons />
            </div>
        </header>
    );
};

export default Navbar;

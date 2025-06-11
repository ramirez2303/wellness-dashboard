import IconButton from "@/components/common/IconButton";
import useUserStore from "@/store/user/useUserStore";
import { LogOut, User } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteCookie } from "cookies-next";
import { redirect } from "next/navigation";

const DashboardButtons = () => {
    const { user, clearUser } = useUserStore();

    const logout = () => {
        deleteCookie("token");
        localStorage.removeItem("token");
        clearUser();
        redirect("/login");
    };

    return (
        <div className="flex justify-end items-center gap-6">
            {user?.firstname}

            <div className="flex justify-end items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <IconButton
                            icon={User}
                            size="md"
                            variant="outline-primary"
                            className="rounded-lg border-2 cursor-pointer hover:text-white"
                        />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <IconButton
                    icon={LogOut}
                    size="md"
                    variant="outline-primary"
                    className="rounded-lg border-2 cursor-pointer hover:text-white"
                    onClick={logout}
                />
            </div>
        </div>
    );
};

export default DashboardButtons;

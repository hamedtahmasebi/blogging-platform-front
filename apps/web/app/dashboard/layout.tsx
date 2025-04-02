"use server";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Button } from "@workspace/ui/components/button";
import { Edit, Eye, Pencil, Trash } from "lucide-react";
import { createServerApiClient } from "@/lib/api";
import Link from "next/link";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@workspace/ui/components/sidebar";
import { RxAvatar } from "react-icons/rx";
import { auth } from "@/auth";
export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();
    console.log("Session Data", session);
    async function fetchData() {
        "use server";
        const api = await createServerApiClient();
        try {
            const currentUser = await api.account.currentUser();
            return currentUser;
        } catch (error) {
            console.log(error);
        }
    }

    const currentUser = await fetchData();

    return (
        <div className="flex flex-col h-screen overflow-auto bg-background">
            <div className="flex flex-row px-6 py-3 bg-primary-foreground">
                <h3 className="text-2xl font-bold">Bloggio</h3>
                <div className="ml-auto"></div>
            </div>
            <SidebarProvider>
                <Sidebar>
                    <SidebarContent>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Pencil /> Write
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarContent>
                    <SidebarFooter>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="default" size="icon">
                                    <RxAvatar />
                                    {currentUser?.data.email}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="bottom" sideOffset={10}>
                                <DropdownMenuItem>
                                    <Eye /> <span>Preview Page</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Edit /> <span>Edit Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem variant="destructive" asChild>
                                    <Link href="/dashboard/remove-account">
                                        <Trash /> <span>Delete Account</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarFooter>
                </Sidebar>
                <div className="overflow-auto px-6 mt-3">{children}</div>
            </SidebarProvider>
        </div>
    );
}

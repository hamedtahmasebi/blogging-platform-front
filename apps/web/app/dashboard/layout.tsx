import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Button } from "@workspace/ui/components/button";
import { Edit, Eye, Settings, Trash } from "lucide-react";
import Link from "next/link";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen overflow-auto bg-background">
            <div className="flex flex-row px-6 py-3 bg-primary-foreground">
                <h3 className="text-2xl font-bold">Bloggio</h3>
                <div className="ml-auto">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Settings />
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
                </div>
            </div>
            <div className="flex-1 overflow-auto px-6 mt-3">{children}</div>
        </div>
    );
}

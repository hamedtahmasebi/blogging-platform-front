import { Button } from "@workspace/ui/components/button";

interface ContinueWithOptionsProps {
    onGuestLogin?: () => void;
}

export const ContinueWithOptions = ({
    onGuestLogin,
}: ContinueWithOptionsProps) => {
    return (
        <div className="space-y-4">
            <div className="relative">
                <div className="absolute inset-0 flex items-center"></div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <Button variant="outline" className="w-full" onClick={onGuestLogin}>
                Continue as Guest
            </Button>
        </div>
    );
};

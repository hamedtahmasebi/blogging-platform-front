export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Primary color background */}
            <div className="hidden md:flex bg-primary p-8 items-center justify-center">
                <div className="text-white text-center">
                    <h1 className="text-4xl font-bold mb-4">Bloggio</h1>
                    <p className="text-lg opacity-90">
                        Sign in to continue to your account
                    </p>
                </div>
            </div>

            {/* Right side - Content */}
            <div className="flex items-center justify-center p-8">
                <div className="w-full max-w-md">{children}</div>
            </div>
        </div>
    );
}

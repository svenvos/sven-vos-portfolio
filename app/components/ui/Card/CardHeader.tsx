export default function CardHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full rounded-t-lg">
            {children}
        </div>
    );
}

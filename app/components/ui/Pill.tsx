export default function Pill({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2 rounded-full px-4 py-1 border border-accent/25 text-sm">
            {children}
        </div>
    );
}
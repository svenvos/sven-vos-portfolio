export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-sm rounded-lg border border-accent/25">
            {children}
        </div>
    );
}

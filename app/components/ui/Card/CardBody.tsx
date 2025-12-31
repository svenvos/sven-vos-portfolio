export default function CardBody({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 flex flex-col">
            {children}
        </div>
    );
}

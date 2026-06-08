interface Props {
    title: string;
    value: string;
}

export default function StatCard({
    title,
    value,
}: Props) {
    return (
        <div className="bg-white p-6 rounded-xl border">
            <p className="text-slate-500">
                {title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
                {value}
            </h2>
        </div>
    );
}
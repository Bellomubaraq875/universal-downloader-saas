const data = [
    {
        file: "freepik-banner.psd",
        service: "Freepik",
    },
    {
        file: "envato-template.zip",
        service: "Envato",
    },
];

export default function RecentDownloads() {
    return (
        <div className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold text-xl mb-4">
                Recent Downloads
            </h2>

            <table className="w-full">
                <thead>
                    <tr>
                        <th className="text-left">
                            File
                        </th>
                        <th className="text-left">
                            Service
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.file}>
                            <td className="py-3">
                                {item.file}
                            </td>

                            <td>
                                {item.service}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
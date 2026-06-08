import "./globals.css";

export const metadata = {
  title: "Universal Downloader",
  description: "Multi-Service Asset Downloader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
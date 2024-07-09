import "./ui/global.css";
import { montserrat } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="py10 flex justify-center items-center">
          Echo con amor por vega ❤
        </footer>
      </body>
    </html>
  );
}

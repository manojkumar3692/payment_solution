import "./globals.css";
import { Inter } from "next/font/google";
import Headers from "../component/Header/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JK Play Acadamy",
  description: "Game On",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headers />
        {children}
      </body>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    </html>
  );
}

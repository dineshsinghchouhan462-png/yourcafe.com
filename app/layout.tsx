import "./globals.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased scroll-smooth">
        <Navigation />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

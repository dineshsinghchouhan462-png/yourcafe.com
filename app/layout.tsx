import "./globals.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export const metadata = {
  title: "The Lazy Barn Cafe | Jodhpur",
  description: "The Lazy Barn Cafe – food, coffee & calm vibes in Jodhpur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

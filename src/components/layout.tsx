import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}

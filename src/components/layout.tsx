import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <main className="relative top-0 bottom-0 left-0 right-0 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}

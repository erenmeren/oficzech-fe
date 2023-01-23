import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="">{children}</main>
      {/* <Footer /> */}
    </>
  );
}

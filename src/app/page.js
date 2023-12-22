import Image from "next/image";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Landing from "./components/landing.js";
export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

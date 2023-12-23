import Image from "next/image";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Location from "../components/location.js";
export default function Home() {
  return (
    <div>
      <Header />
      <Location />
      <Footer />
    </div>
  );
}

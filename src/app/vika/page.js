import Image from "next/image";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Profil from "../components/profil_vika.js";
export default function Home() {
  return (
    <div>
      <Header />
      <Profil />
      <Footer />
    </div>
  );
}

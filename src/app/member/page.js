import Image from "next/image";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Member from "../components/member.js";
export default function Home() {
  return (
    <div>
      <Header />
      <Member />
      <Footer />
    </div>
  );
}

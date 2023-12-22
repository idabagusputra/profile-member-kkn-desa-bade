import Image from "next/image";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap mt-5 flex-col md:flex-row items-center">
        <a className="flex tracking-wide title-font font-extrabold items-center text-gray-900 mb-4 md:mb-0 text-2xl">
          <span>KKN Desa Bade 2023/2024</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 font-medium">Dashboard</a>
          <a className="mr-5 hover:text-gray-900 font-medium">Members</a>
          <a className="hover:text-gray-900 font-medium">Location</a>
        </nav>
      </div>
    </header>
  );
}

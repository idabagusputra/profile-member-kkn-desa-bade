import Image from "next/image";

export default function Header() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap mt-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span class="text-xl">KKN Desa Bade 2023/2024</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">Dashboard</a>
          <a class="mr-5 hover:text-gray-900">Members</a>
          <a class="hover:text-gray-900">Location</a>
        </nav>
      </div>
    </header>
  );
}

import Image from "next/image";

export default function Footer() {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div class="w-100 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/a.svg"
              stroke="currentColor"
              class="h-10 text-white"
              viewBox="0 0 24 24"
              width={33} // Atur lebar sesuai kebutuhan Anda
              height={30}
            />
            <span class="ml-3 text-xl">Universitas Diponegoro</span>
          </a>
        </div>
        <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first"></div>
      </div>
      <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Made by —
            <a
              href="https://instagram.com/ida.bagus.putra"
              rel="noopener noreferrer"
              class="text-gray-600 ml-1"
              target="_blank"
            >
              @ida.bagus.putra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

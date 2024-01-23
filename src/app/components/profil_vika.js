import Image from "next/image";

export default function ProfilVika() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-8 mx-auto sm:py-16">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py- mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest mb-2">
                Bendahara
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium">
                Devi Khairunnisa Salma Asmanita
              </h1>
              <div class="flex mb-4">
                <a class="flex-grow text-sky-900 border-b-2 border-sky-900 py-2 text-lg ">
                  Autobiografi
                </a>
              </div>
              <p class="leading-relaxed mb-4 text-justify">
                Ida, seorang mahasiswa asal Kota Palu, Sulawesi Tengah, saat ini
                sedang menyelesaikan pendidikan di Universitas Diponegoro,
                Fakultas Teknik, jurusan Teknik Komputer, di kampus yang
                terletak di Kota Semarang, Jawa Tengah. Menempuh semester
                ketujuh, Ida aktif terlibat dalam Kuliah Kerja Nyata (KKN) di
                Desa Bade, Kecamatan Klego, Kabupaten Boyolali, Provinsi Jawa
                Tengah, Indonesia. Dengan semangat dan dedikasi, Ida tidak hanya
                mengejar kesuksesan akademis, tetapi juga berkomitmen untuk
                memberikan kontribusi positif dalam masyarakat. Latar belakang
                pendidikan teknik komputer yang kuat menjadi landasan bagi Ida
                untuk membawa dampak positif dan meningkatkan kualitas hidup di
                komunitas tempatnya berkegiatan.
              </p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">NIM</span>
                <span class="ml-auto text-gray-900">21120120140108</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Fakultas</span>
                <span class="ml-auto text-gray-900">Teknik</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Jurusan</span>
                <span class="ml-auto text-gray-900">Teknik Komputer</span>
              </div>
              <div class="flex border-t border-b border-gray-200 py-2">
                <span class="text-gray-500">Telepon Seluler</span>
                <a href="tel:+6282260773867" class="ml-auto text-blue-900">
                  082260773867
                </a>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Email</span>
                <a
                  href="mailto:idabagusputra@students.undip.ac.id"
                  class="ml-auto text-blue-900"
                >
                  idabagusputra@students.undip.ac.id
                </a>
              </div>
              <div class="flex items-center">
                <span class="title-font font-medium py-2 text-gray-900">
                  Temukan saya di
                </span>
                <a
                  href="https://www.facebook.com/ibp.putra.m"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ml-auto rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <button>
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </button>
                </a>
                <a
                  href="https://instagram.com/ida.bagus.putra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </button>
                </a>
                <a
                  href="https://instagram.com/ida.bagus.putra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <Image
              src="/images/Profil_Vika.webp"
              alt="Profile Image"
              className="w-full h-full object-cover object-center mb-8"
              width={400} // Set the width of the image
              height={400} // Set the height of the image
            />
          </div>
        </div>
      </section>
    </div>
  );
}

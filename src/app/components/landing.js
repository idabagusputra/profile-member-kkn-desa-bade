import Image from "next/image";

export default function Landing() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-8 mx-auto sm:py-16">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py- mb-6 lg:mb-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest mb-2">
                Desa Bade, Kecamatan Klego, Kabupaten Boyolali
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium">
                Profil Desa Bade
              </h1>
              <div class="flex mb-4">
                <a class="flex-grow text-sky-900 border-b-2 border-sky-900 py-2 text-lg ">
                  Deskripsi
                </a>
              </div>
              <p class="leading-relaxed mb-4 text-justify">
                Desa Bade adalah salah satu desa di kecamatan Klego, Kabupaten
                Boyolali. Lokasi desa Bade tidak terlalu jauh dari jalan
                Karanggede-Gemolong sehingga memudahkan arus transportasi dan
                mobilitas penduduk cukup tinggi. Secara geografis, Desa Bade
                berbatasan dengan Desa Karanggatak di Sebelah utara, Desa
                Blumbang di Sebelah Selatan, Sebelah Timur berbatasan dengan
                Desa Banyuurip dan Desa Klego di Sebelah Barat. Desa Bade
                memiliki luas wilayah sebesar 320,4960 Ha dengan 59,7% adalah
                lahan produktif berupa tanah persawahan. Desa Bade juga memiliki
                beberapa potensi diantaranya adalah memiliki jumlah usia
                produktif yang sangat banyak, Industri Jamu Gendong Industri
                Rumahan di antara lain anyaman, jamu tradisional, konveksi tas
                dan mebelair.
              </p>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Kepala Desa</span>
                <span class="ml-auto text-gray-900">Haryono</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Sekretaris Desa</span>
                <span class="ml-auto text-gray-900">
                  Rifandaru Cahya Widhana
                </span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Kepala Keuangan</span>
                <span class="ml-auto text-gray-900">Prita Rahayu</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Kepala Umum dan Pemerintahan</span>
                <span class="ml-auto text-gray-900">Lilis Maesaroh</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Kepala Seksi Pemerintahan</span>
                <span class="ml-auto text-gray-900">Noviyana</span>
              </div>
              <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">
                  Kepala Seksi Kesejahteraan dan Pelayanan
                </span>
                <span class="ml-auto text-gray-900">Maryono</span>
              </div>
              <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Website Desa</span>
                <a
                  href="https://portalbade.com/"
                  target="_blank"
                  class="ml-auto text-blue-900"
                >
                  https://portalbade.com/
                </a>
              </div>
            </div>
            <Image
              src="/images/map_bade.webp"
              alt="Profile Image"
              className="w-full h-full object-cover object-center rounded mb-8"
              width={400} // Set the width of the image
              height={400} // Set the height of the image
            />
          </div>
        </div>
      </section>
    </div>
  );
}

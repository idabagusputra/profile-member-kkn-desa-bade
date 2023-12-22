import Image from "next/image";

export default function Landing() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-font-medium title-font mb-4 text-gray-900">
              TIM I
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
              Tim I KKN di Desa Bade, Kecamatan Klego, Kabupaten Boyolali,
              terpilih dari total delapan anggota yang terdiri dari empat
              mahasiswa dan empat mahasiswi. Anggota tim ini berasal dari
              berbagai fakultas yang berbeda di Universitas Diponegoro, Kota
              Semarang, Jawa Tengah. Keberagaman latar belakang akademis ini
              diharapkan dapat memberikan kontribusi yang beragam pula dalam
              menjalankan program KKN di Desa Bade. Dengan demikian, tim ini
              siap memberikan dampak positif dan berkelanjutan bagi masyarakat
              setempat.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <a
                href="/ida"
                class="h-full flex flex-col items-center text-center"
              >
                <Image
                  src="/images/member_ida.webp"
                  alt="Profile Image"
                  className="w-full h-full object-cover object-center rounded mb-2"
                  width={400} // Set the width of the image
                  height={400} // Set the height of the image
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Ida Bagus Putu Putra Manuaba
                  </h2>
                  <h3 class="text-gray-500 mb-3">
                    PDD (Publikasi, Dekorasi, dan Dokumentasi)
                  </h3>
                </div>
              </a>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <a
                href="/ida"
                class="h-full flex flex-col items-center text-center"
              >
                <Image
                  src="/images/member_ida.webp"
                  alt="Profile Image"
                  className="w-full h-full object-cover object-center rounded mb-2"
                  width={400} // Set the width of the image
                  height={400} // Set the height of the image
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Ida Bagus Putu Putra Manuaba
                  </h2>
                  <h3 class="text-gray-500 mb-3">
                    PDD (Publikasi, Dekorasi, dan Dokumentasi)
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

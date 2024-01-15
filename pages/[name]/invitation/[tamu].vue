<template>
  <div>
    <!-- content -->
    <div class="flex flex-col items-center overflow-x-hidden">
      <!-- Section Cover -->
      <div id="home" class="flex flex-col items-center w-full relative">
        <img
          src="https://einvite.id/wp-content/uploads/kajian-bg-fix-01.jpg"
          alt="background"
          class="absolute -z-10 object-cover h-full w-full bg-center opacity-100 bg-[#FFF]"
        />
        <div class="flex flex-col items-center pt-[4rem]">
          <h1
            class="font-nunito bg-clip-text text-transparent bg-gradient-to-r from-[#477D5A] to-[#727E67] text-[18px]"
          >
            Walimatul 'Ursy
          </h1>
          <img
            src="/img/risman.png"
            alt="wedding"
            class="w-[18rem] py-6 border-4 border-white rounded-lg mt-4 mb-4 shadow-lg"
          />
          <p
            class="font-great mt-4 -ml-16 text-[64px] bg-clip-text text-transparent bg-gradient-to-r from-[#477D5A] to-[#727E67]"
          >
            Salma
          </p>
          <span class="font-great text-[32px] text-[#477D5A] -mt-4"> dan </span>
          <p
            class="font-great text-[64px] ml-16 -mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#477D5A] to-[#727E67]"
          >
            Risman
          </p>
          <!-- date -->
          <div class="flex flex-col text-[#477D5A] items-center text-[22px]">
            <p class="font-normal text-[22px]">Ahad</p>
            <p class="font-bold text-[20px]">04 | 02 | 2024</p>
          </div>
          <!-- Tamu -->
          <div
            class="flex flex-col font-crimson items-center border-2 mb-[6rem] mx-5 border-[#727E67] py-2 px-4 mt-[4rem] rounded-md text-[#477d59] backdrop-blur-md bg-opacity-25"
          >
            <p class="text-[16px] font-normal">Kepada Yth.</p>
            <p class="text-[16px] font-normal">Bapak/Ibu/Saudara/i</p>
            <p class="mt-4 text-[22px] font-bold text-center">{{ getName }}</p>
            <p class="mt-4 text-[16px] font-normal">Di Tempat</p>
          </div>
        </div>
      </div>

      <!-- Section Couple -->
      <div id="couple" class="flex flex-col items-center w-full relative">
        <img
          src="https://einvite.id/wp-content/uploads/kajian-bg-fix-01.jpg"
          alt="background"
          class="absolute -z-10 object-cover h-full w-full bg-center opacity-100 bg-[#FFF]"
        />
        <div class="flex flex-col items-center pt-[4rem] pb-[6rem]">
          <h1
            class="font-crimson font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#477D5A] to-[#727E67] text-[18px]"
          >
            بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
          </h1>
          <h2 class="font-crimson font-bold text-[#477d59] text-[18px] mt-2">
            Assalamu’alaikum Wr. Wb.
          </h2>
          <!-- Dengan Memohon -->
          <div class="mt-2 flex flex-col items-center">
            <p class="font-crimson text-[16px] text-center text-[#555555]">
              Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala,
              insyaaAllah kami akan menyelenggarakan acara Walimatul ‘Ursy :
            </p>
          </div>

          <!-- Putra Putri -->
          <div class="flex flex-col items-center gap-y-10 mt-10 mb-10">
            <div class="flex flex-col items-center">
              <h1 class="font-croissant font-bold text-[20px]">
                Salma Nisa Salsabila
              </h1>
              <p class="font-crimson text-[16px]">Putri dari Bapak Rohudi Bahri</p>
              <p class="font-crimson text-[16px]">& Ibu Susi Trisetyaningsih</p>
            </div>
            <div class="flex gap-x-2 text-[#791c25]">
              <div>-----</div>
              <SvgLove :color="'#791c25'" />
              <div>-----</div>
            </div>
            <div class="flex flex-col items-center">
              <h1 class="font-croissant font-bold text-[20px]">
                Risman Hidayatulloh
              </h1>
              <p class="font-crimson text-[16px]">
                Putra dari Bapak Endang Saepudin (alm)
              </p>
              <p class="font-crimson text-[16px]">& Ibu Popon Patimah</p>
            </div>
          </div>

          <!-- Ayat Suci -->
          <div class="flex flex-col items-center gap-y-4 px-6">
            <p
              class="text-[#555555] text-[16px] font-crimson text-center italic"
            >
              “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
              kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
              terdapat tanda-tanda bagi kaum yang berfikir.”
            </p>
            <p class="font-crimson text-[16px] text-[#555555] font-bold">
              Al-Qur’an Surat Ar-Ruum (30:21)
            </p>
          </div>
        </div>
      </div>

      <!-- Section Acara Kami -->
      <div id="acara" class="flex flex-col items-center w-full relative">
        <img
          src="https://einvite.id/wp-content/uploads/kajian-bg-fix-01.jpg"
          alt="background"
          class="absolute -z-10 object-cover h-full w-full bg-center opacity-100 bg-[#FFF]"
        />
        <div class="flex flex-col items-center pt-[4rem] pb-[6rem]">
          <h2 class="font-croissant font-bold text-[#477d59] text-[18px] mt-2">
            Acara Kami
          </h2>

          <!-- Akad -->
          <div
            class="mt-[3rem] flex flex-col items-center rounded-lg mx-4 w-full"
          >
            <img
              src="https://www.app.bikin-undangan.com/_next/static/media/main-event.ba3e54eb.svg"
              alt="cincin"
            />
            <p class="font-croissant font-bold text-[20px] text-[#477d59] mt-4">
              Akad Nikah
            </p>
            <div class="flex items-center gap-x-4 mt-4">
              <span class="font-crimson text-[20px] text-[#477d59] font-bold"
                >Ahad</span
              >
              <div
                class="flex flex-col items-center border-x-2 h-[3rem] border-[#333333] px-5"
              >
                <p
                  class="font-crimson text-[46px] text-[#477d59] font-bold -mt-6"
                >
                  04
                </p>
                <p
                  class="font-crimson text-[22px] text-[#477d59] font-bold -mt-6"
                >
                  Februari
                </p>
              </div>
              <span class="font-crimson text-[20px] text-[#477d59] font-bold"
                >2024</span
              >
            </div>
            <p class="font-crimson text-[16px] font-bold text-[#555555] mt-2">
              Pukul 08.00-09.30 WIB
            </p>
            <p class="font-crimson text-[16px] font-bold text-[#477d59] mt-4">
              Alamat
            </p>
            <!-- alamat -->
            <div class="flex flex-col items-center mt-4">
              <p class="font-crimson text-[18px] font-bold text-[#555555]">
               Aula Masjid Husnul Khotimah 
              </p>
              <p class="font-crimson text-[16px] text-center font-normal text-[#555555]">
                Jl. Hercules Bumi Dirgantara Permai, RT.012/RW.008, Jatisari, Kec. Jatiasih, Kota Bks, Jawa Barat 17426
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/Lqp25TtvFmiP8EhTA"
              target="_blank"
              class="flex gap-x-2 items-center text-white px-4 py-2 rounded-lg bg-[#727E67] mt-4"
              ><svg
                stroke="#FFFFFF"
                fill="#FFFFFF"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.01rem"
                width="1.01rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                ></path>
              </svg>
              Lihat Lokasi</a
            >
            <!-- countdown -->
            <div
              class="grid auto-cols-max grid-flow-col gap-5 text-center mt-6"
            >
              <div
                class="rounded-4xl flex flex-col bg-[#F7F7F7] p-3 text-[#2E3032] md:p-7"
                style="
                  border: 2px solid rgb(255, 255, 255);
                  border-radius: 24px;
                "
              >
                <span
                  class="countdown text-center text-4xl text-[#436656] sm:text-5xl"
                  ><span style="--value: {{ days }}">{{ days }}</span></span
                ><span class="text-[#436656]">HARI</span>
              </div>
              <div
                class="rounded-4xl flex flex-col bg-[#F7F7F7] p-3 text-[#2E3032] md:p-7"
                style="
                  border: 2px solid rgb(255, 255, 255);
                  border-radius: 24px;
                "
              >
                <span
                  class="countdown text-center text-4xl text-[#436656] sm:text-5xl"
                  ><span style="--value: {{ hours }}">{{ hours }}</span></span
                ><span class="text-[#436656]">JAM</span>
              </div>
              <div
                class="rounded-4xl flex flex-col bg-[#F7F7F7] p-3 text-[#2E3032] md:p-7"
                style="
                  border: 2px solid rgb(255, 255, 255);
                  border-radius: 24px;
                "
              >
                <span
                  class="countdown text-center text-4xl text-[#436656] sm:text-5xl"
                  ><span style="--value: {{ minutes }}">{{
                    minutes
                  }}</span></span
                ><span class="text-[#436656]">MENIT</span>
              </div>
              <div
                class="rounded-4xl flex flex-col bg-[#F7F7F7] p-3 text-[#2E3032] md:p-7"
                style="
                  border: 2px solid rgb(255, 255, 255);
                  border-radius: 24px;
                "
              >
                <span
                  class="countdown text-center text-4xl text-[#436656] sm:text-5xl"
                  ><span style="--value: {{ seconds }}">{{
                    seconds
                  }}</span></span
                ><span class="text-[#436656]">DETIK</span>
              </div>
            </div>
          </div>

          <!-- Resepsi -->
          <div
            class="mt-[3rem] flex flex-col items-center rounded-lg mx-4 w-full"
          >
            <img
              src="https://www.app.bikin-undangan.com/_next/static/media/secondary-event.2ba3a53d.svg"
              alt="resepsi"
            />
            <p class="font-croissant font-bold text-[20px] text-[#477d59] mt-4">
              Resepsi
            </p>
            <div class="flex items-center gap-x-4 mt-4">
              <span class="font-crimson text-[20px] text-[#477d59] font-bold"
                >Ahad</span
              >
              <div
                class="flex flex-col items-center border-x-2 h-[3rem] border-[#333333] px-5"
              >
                <p
                  class="font-crimson text-[46px] text-[#477d59] font-bold -mt-6"
                >
                  04
                </p>
                <p
                  class="font-crimson text-[22px] text-[#477d59] font-bold -mt-6"
                >
                  Februari
                </p>
              </div>
              <span class="font-crimson text-[20px] text-[#477d59] font-bold"
                >2024</span
              >
            </div>
            <p class="font-crimson text-[16px] font-bold text-[#555555] mt-2">
              Pukul 10.00-14.00 WIB
            </p>
            <p class="font-crimson text-[16px] font-bold text-[#477d59] mt-4">
              Alamat
            </p>
            <!-- alamat -->
            <div class="flex flex-col items-center mt-4">
              <p class="font-crimson text-[18px] font-bold text-[#555555]">
                Aula Masjid Husnul Khotimah
              </p>
              <p class="font-crimson text-[16px] text-center font-normal text-[#555555]">
                Jl. Hercules Bumi Dirgantara Permai, RT.012/RW.008, Jatisari, Kec. Jatiasih, Kota Bks, Jawa Barat 17426
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/Lqp25TtvFmiP8EhTA"
              target="_blank" 
              class="flex gap-x-2 items-center text-white px-4 py-2 rounded-lg bg-[#727E67] mt-4"
              ><svg
                stroke="#FFFFFF"
                fill="#FFFFFF"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1.01rem"
                width="1.01rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
                ></path>
              </svg>
              Lihat Lokasi</a
            >
          </div>
        </div>
      </div>

      <!-- Section Galery -->
      <div id="galery" class="flex flex-col items-center w-full relative">
        <img
          src="https://einvite.id/wp-content/uploads/kajian-bg-fix-01.jpg"
          alt="background"
          class="absolute -z-10 object-cover h-full w-full bg-center opacity-100 bg-[#FFF]"
        />
        <div class="flex flex-col items-center pt-[4rem] pb-[6rem]">
          <h2 class="font-croissant font-bold text-[#477d59] text-[18px] mt-2">
            Moment Kami
          </h2>
          <ClientOnly>
            <div class="lg:w-[50rem] w-[20rem] mt-4">
              <vue-plyr>
                <div class="plyr__video-embed">
                  <iframe
                    src="https://www.youtube.com/embed/bk4MzGHi9QU"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                  ></iframe>
                </div>
              </vue-plyr>
            </div>
          </ClientOnly>
        </div>
      </div>

      <!-- Section Keterangan -->
      <div class="flex flex-col items-center w-full relative">
        <img
          src="https://einvite.id/wp-content/uploads/kajian-bg-fix-01.jpg"
          alt="background"
          class="absolute -z-10 object-cover h-full w-full bg-center opacity-100 bg-[#FFF]"
        />
        <div class="flex flex-col items-center pt-[4rem] pb-[6rem]">
          <h2 class="font-croissant font-bold text-[#477d59] text-[18px] mt-2">
            Keterangan
          </h2>
          <div class="flex flex-col gap-y-4 mt-4">
            <div
              class="border-2 border-[#555555] rounded-lg p-8 flex flex-col items-center gap-y-2 shadow-lg"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-5xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="240"
                  height="240"
                  x="136"
                  y="136"
                  rx="56"
                  ry="56"
                ></rect>
                <path
                  d="M336 96V32a16 16 0 00-16-16H192a16 16 0 00-16 16v64a80.09 80.09 0 00-80 80v160a80.09 80.09 0 0080 80v64a16 16 0 0016 16h128a16 16 0 0016-16v-64a80.09 80.09 0 0080-80V176a80.09 80.09 0 00-80-80zm56 224a72.08 72.08 0 01-72 72H192a72.08 72.08 0 01-72-72V192a72.08 72.08 0 0172-72h128a72.08 72.08 0 0172 72z"
                ></path>
              </svg>
              <p class="font-crimson text-[#555555] text-[16px]">
                Perhatikan Waktu Sholat
              </p>
            </div>

            <div
              class="shadow-lg border-2 border-[#555555] rounded-lg p-8 flex flex-col items-center gap-y-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.1"
                viewBox="0 0 16 16"
                class="text-5xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 0c-1.657 0-3 1.567-3 3.5 0 1.655 0.985 3.042 2.308 3.406l-0.497 8.096c-0.034 0.549 0.389 0.998 0.939 0.998h0.5c0.55 0 0.972-0.449 0.939-0.998l-0.497-8.096c1.323-0.365 2.308-1.751 2.308-3.406 0-1.933-1.343-3.5-3-3.5zM13.583 0l-0.833 5h-0.625l-0.417-5h-0.417l-0.417 5h-0.625l-0.833-5h-0.417v6.5c0 0.276 0.224 0.5 0.5 0.5h1.302l-0.491 8.002c-0.034 0.549 0.389 0.998 0.939 0.998h0.5c0.55 0 0.972-0.449 0.939-0.998l-0.491-8.002h1.302c0.276 0 0.5-0.224 0.5-0.5v-6.5h-0.417z"
                ></path>
              </svg>
              <p class="font-crimson text-[#555555] text-[16px]">
                Perhatikan Adab Makan dan Minum
              </p>
            </div>

            <div
              class="shadow-lg border-2 border-[#555555] rounded-lg p-8 flex flex-col items-center gap-y-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 640 512"
                class="text-5xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 480c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V160H0v320zm579.16-192c17.86-17.39 28.84-37.34 28.84-58.91 0-52.86-41.79-93.79-87.92-122.9-41.94-26.47-80.63-57.77-111.96-96.22L400 0l-8.12 9.97c-31.33 38.45-70.01 69.76-111.96 96.22C233.79 135.3 192 176.23 192 229.09c0 21.57 10.98 41.52 28.84 58.91h358.32zM608 320H192c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h32v-64c0-17.67 14.33-32 32-32s32 14.33 32 32v64h64v-72c0-48 48-72 48-72s48 24 48 72v72h64v-64c0-17.67 14.33-32 32-32s32 14.33 32 32v64h32c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM64 0S0 32 0 96v32h128V96c0-64-64-96-64-96z"
                ></path>
              </svg>
              <p class="font-crimson text-[#555555] text-[16px]">
                Do'akan Pasangan Pengantin
              </p>
            </div>

            <div
              class="shadow-lg border-2 border-[#555555] rounded-lg p-8 flex flex-col items-center gap-y-2"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-5xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.014 12.135c.074 2.062 1.789 3.777 3.851 3.851l-3.851-3.851z"
                ></path>
                <path
                  d="M4 20h11.879l-2-2H4V8.121L2.144 6.265A1.976 1.976 0 0 0 2 7v11c0 1.103.897 2 2 2zM20 5h-2.586l-2.707-2.707A.996.996 0 0 0 14 2h-4a.997.997 0 0 0-.707.293L6.586 5h-.172L3.707 2.293 2.293 3.707l18 18 1.414-1.414-.626-.626A1.98 1.98 0 0 0 22 18V7c0-1.103-.897-2-2-2zm-6.081 7.505-2.424-2.425c.163-.046.331-.08.505-.08 1.065 0 2 .935 2 2 0 .174-.033.342-.081.505zm1.502 1.501A3.881 3.881 0 0 0 16 12c0-2.168-1.832-4-4-4-.729 0-1.412.22-2.007.579L7.914 6.5l2.5-2.5h3.172l2.707 2.707A.996.996 0 0 0 17 7l3-.001V18h-.586l-3.993-3.994z"
                ></path>
              </svg>
              <p class="font-crimson text-[#555555] text-[16px]">
                Dilarang Mengambil Gambar Tanpa Izin
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Ucapan dan Doa -->
      <div id="pesan" class="flex flex-col items-center w-full relative">
        <img
          src="https://einvite.id/wp-content/uploads/kajian-bg-fix-01.jpg"
          alt="background"
          class="absolute -z-10 object-cover h-full w-full bg-center opacity-100 bg-[#FFF]"
        />
        <div class="flex flex-col items-center pt-[4rem] pb-[6rem]">
          <h2 class="font-croissant font-bold text-[#477d59] text-[18px] mt-2">
            Ucapan dan Doa
          </h2>
          <p class="font-crimson font-normal text-[16px] text-[#555555] mt-6">
            Berikan ucapan terbaik untuk kedua mempelai
          </p>

          <!-- Form -->
          <div class="flex flex-col gap-y-4 mt-4">
            <input
              type="text"
              id="base-input"
              placeholder="Nama"
              v-model="form.name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-[20rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Tulis pesan anda disini..."
              v-model="form.message"
            ></textarea>
            <button
              @click="handleSubmit"
              class="text-white font-bold text-[16px] bg-[#477D5A] px-3 py-2 rounded-md"
            >
              Kirim
            </button>
          </div>

          <!-- list pesan -->
          <div v-if="data.length === 0" class="bg-white w-full p-4 text-[#19150e] mt-10 rounded-lg shadow-lg">
            Belum ada pesan
          </div>
          <div
            v-else
            class="border-4 border-white shadow-2xl w-[20rem] flex flex-col gap-y-2 mt-10 p-4 rounded-lg h-[40rem] overflow-auto"
          >
            <div
              v-for="(item, index) in data"
              :key="index"
              class="flex flex-col bg-white shadow-lg w-full p-4"
            >
              <p class="text-[16px] font-bold text-[#19150e]">
                {{ item.name }}
              </p>
              <p class="text-[16px] font-normal text-[#625b4f]">
                {{ item.message }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Last Section -->
      <div class="flex flex-col items-center w-full relative">
        <img
          src="https://einvite.id/wp-content/uploads/kajian-bg-fix-01.jpg"
          alt="background"
          class="absolute -z-10 object-cover h-full w-full bg-center opacity-100 bg-[#FFF]"
        />
        <div class="flex flex-col items-center pt-[4rem] pb-[6rem]">
          <p
            class="font-crimson font-normal px-3 text-center text-[16px] text-[#555555] mt-6"
          >
            Atas kehadiran dan do’a restu dari Bapak/Ibu/Saudara/i sekalian,
            kami mengucapkan Terima Kasih.
          </p>
          <h2 class="font-croissant font-bold text-[#477d59] text-[18px] mt-2">
            Wassalamu’alaikum Wr. Wb.
          </h2>
          <img
            src="/img/risman.png"
            alt="wedding"
            class="w-[14rem] p-4 bg-gradient-to-r from-[#477D5A] to-[#727E67] rounded-full mt-6"
          />
          <h2
            class="font-crimson font-normal px-3 text-center text-[16px] text-[#555555] mt-2"
          >
            Kami yang berbahagia
          </h2>
          <p
            class="font-croissant font-semibold px-3 text-[20px] text-[#477d59] mt-3"
          >
            Salma & Risman
          </p>

          <div class="flex gap-x-2 text-[#791c25] mt-4">
            <div>---------------</div>
            <SvgLove :color="'#791c25'" />
            <div>---------------</div>
          </div>
        </div>
      </div>

      <!-- footer -->
      <div class="hidden">
        <ClientOnly>
          <vue-plyr ref="plyr">
            <audio controls>
              <source src="@/assets/audio/audio.mp3" type="audio/mp3" />
            </audio>
          </vue-plyr>
        </ClientOnly>
      </div>
      <div
        @click="toggleAudio"
        class="fixed bottom-6 mb-[4.5rem] mr-4 right-0 bg-[#477D5A] rounded-lg p-4 cursor-pointer"
      >
        <div v-if="!isPlaying">
          <svg
            stroke="#FFFFFF"
            fill="#FFFFFF"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            ></path>
          </svg>
        </div>

        <div v-else>
          <svg
            stroke="#FFFFFF"
            fill="#FFFFFF"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
            ></path>
          </svg>
        </div>
      </div>

      <div
        class="bg-white p-4 mx-3 mb-3 rounded-md fixed bottom-0 left-0 right-0 flex justify-center items-center gap-x-6"
      >
        <div
          @click="scrollToHome"
          class="flex flex-col items-center cursor-pointer bg-[#477D5A] rounded-lg p-2"
        >
          <svg
            stroke="#FFFFFF"
            fill="#FFFFFF"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
          </svg>
          <!-- <span>Home</span> -->
        </div>

        <div
          @click="scrollToCouple"
          class="flex flex-col items-center cursor-pointer bg-[#477D5A] rounded-lg p-2"
        >
          <svg
            stroke="#FFFFFF"
            fill="#FFFFFF"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
            ></path>
          </svg>
          <!-- <span>Profile</span> -->
        </div>

        <div
          @click="scrollToAcara"
          class="flex flex-col items-center cursor-pointer bg-[#477D5A] rounded-lg p-2"
        >
          <svg
            stroke="#FFFFFF"
            fill="#FFFFFF"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
            ></path>
          </svg>
          <!-- <span>Acara</span> -->
        </div>

        <div
          @click="scrollToGalery"
          class="flex flex-col items-center cursor-pointer bg-[#477D5A] rounded-lg p-2"
        >
          <svg
            stroke="#FFFFFF"
            fill="#FFFFFF"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
            ></path>
          </svg>
          <!-- <span>Moment</span> -->
        </div>

        <div
          @click="scrollToPesan"
          class="flex flex-col items-center cursor-pointer bg-[#477D5A] rounded-lg p-2"
        >
          <svg
            stroke="#FFFFFF"
            fill="#FFFFFF"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="24"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"
            ></path>
          </svg>
          <!-- <span>Pesan</span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      form: {
        name: "",
        message: "",
      },
      targetDate: new Date("2024-02-04T23:59:59"), // Ganti dengan tanggal target Anda
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isPlaying: false,
    };
  },
  computed: {
    getNameInvitation() {
      const username = this.$route.params.username;
      return username.charAt(0).toUpperCase() + username.slice(1);
    },
    getName() {
      const name = this.$route.params.tamu;
      const nameParts = name.split("-");

      // Capitalize each part
      const capitalizedParts = nameParts.map(
        (part) => part.charAt(0).toUpperCase() + part.slice(1)
      );

      // Join the parts with ' & '
      return capitalizedParts.join(" & ");
    },
  },
  mounted() {
    this.fetchData();

    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  methods: {
    updateCountdown() {
      const currentDate = new Date();
      const timeDifference = this.targetDate - currentDate;

      if (timeDifference > 0) {
        this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      } else {
        // Countdown selesai, hentikan interval
        clearInterval(this.updateCountdown);
      }
    },
    toggleAudio() {
      // Access the VuePlyr instance using $refs
      const plyr = this.$refs.plyr;

      // Check if the plyr instance is available
      if (plyr && plyr.player) {
        // Toggle between playing and stopping the audio
        if (this.isPlaying) {
          plyr.player.stop();
        } else {
          plyr.player.play();
        }

        // Update the isPlaying state
        this.isPlaying = !this.isPlaying;
      }
    },
    scrollToHome() {
      // Mengarahkan ke "home" dengan menggulirkan ke elemen target
      document.getElementById("home").scrollIntoView({
        behavior: "smooth", // Memberikan efek smooth scroll
      });
    },
    scrollToCouple() {
      // Mengarahkan ke "home" dengan menggulirkan ke elemen target
      document.getElementById("couple").scrollIntoView({
        behavior: "smooth", // Memberikan efek smooth scroll
      });
    },
    scrollToAcara() {
      // Mengarahkan ke "home" dengan menggulirkan ke elemen target
      document.getElementById("acara").scrollIntoView({
        behavior: "smooth", // Memberikan efek smooth scroll
      });
    },
    scrollToGalery() {
      // Mengarahkan ke "home" dengan menggulirkan ke elemen target
      document.getElementById("galery").scrollIntoView({
        behavior: "smooth", // Memberikan efek smooth scroll
      });
    },
    scrollToPesan() {
      // Mengarahkan ke "home" dengan menggulirkan ke elemen target
      document.getElementById("pesan").scrollIntoView({
        behavior: "smooth", // Memberikan efek smooth scroll
      });
    },
    async fetchData() {
      const { result } = await $fetch("/api/query?col=wedding");
      this.data = result;
    },
    async handleSubmit() {
      try {
        await $fetch("/api/add?col=wedding", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        });

        this.fetchData();
        this.resetForm();
      } catch (error) {
        console.log(error.message);
      }
    },
    resetForm() {
      this.form = {
        name: "",
        message: "",
      };
    },
  },
};
</script>
<style>
.font-great {
  font-family: "Great Vibes", cursive;
}

.font-crimson {
  font-family: "Crimson Pro", serif;
}

.font-croissant {
  font-family: "Croissant One", serif;
}

.font-nunito {
  font-family: "Nunito", sans-serif;
}

.video-wrapper {
  width: 200px;
}

.custom-audio-player {
  /* Your styling goes here */
  border: 2px solid #333;
  border-radius: 8px;
  padding: 10px;
  background-color: #f0f0f0;
}

.custom-audio-player audio {
  display: none;
}

/* Style the custom play button */
.custom-play-button {
  width: 50px;
  height: 50px;
  background-color: #3498db; /* Customize the button color */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

/* Customize the play button icon (you may use an icon library or your own icon) */
.custom-play-button::before {
  content: "\25B6"; /* Unicode for play icon */
  font-size: 24px;
  color: #fff; /* Customize the icon color */
}
</style>

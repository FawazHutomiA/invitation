<template>
  <div>
    <!-- content -->
    <div class="flex flex-col items-center">
      <!-- Section Cover -->
      <div class="flex flex-col items-center w-full relative">
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
            class="w-[14rem] py-6 border-4 border-white rounded-lg mt-4 mb-4 shadow-lg"
          />
          <p
            class="font-great mt-4 -ml-16 text-[64px] bg-clip-text text-transparent bg-gradient-to-r from-[#477D5A] to-[#727E67]"
          >
            Risman
          </p>
          <span class="font-great text-[32px] text-[#477D5A] -mt-4"> dan </span>
          <p
            class="font-great text-[64px] ml-16 -mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#477D5A] to-[#727E67]"
          >
            Salma
          </p>
          <!-- date -->
          <div class="flex flex-col text-[#477D5A] items-center text-[22px]">
            <p class="font-normal text-[22px]">SABTU</p>
            <p class="font-bold text-[20px]">18 | 02 | 2023</p>
          </div>
          <!-- Tamu -->
          <div
            class="flex flex-col font-crimson items-center border-2 mb-[6rem] border-[#727E67] py-2 px-[6rem] mt-[4rem] rounded-md text-[#477d59] backdrop-blur-md bg-opacity-25"
          >
            <p class="text-[16px] font-normal">Kepada Yth.</p>
            <p class="text-[16px] font-normal">Bapak/Ibu/Saudara/i</p>
            <p class="mt-4 text-[22px] font-bold">Rohudi</p>
            <p class="mt-4 text-[16px] font-normal">Di Tempat</p>
          </div>
        </div>
      </div>

      <!-- Section Couple -->
      <div class="flex flex-col items-center w-full relative">
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
              <p class="font-crimson text-[16px]">Putri dari Rohudi Bahri</p>
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
                Putra dari Endang Saepudin (alm)
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
      <div class="flex flex-col items-center w-full relative">
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
                >Sabtu</span
              >
              <div
                class="flex flex-col items-center border-x-2 h-[3rem] border-[#333333] px-5"
              >
                <p
                  class="font-crimson text-[46px] text-[#477d59] font-bold -mt-6"
                >
                  18
                </p>
                <p
                  class="font-crimson text-[22px] text-[#477d59] font-bold -mt-6"
                >
                  Febuari
                </p>
              </div>
              <span class="font-crimson text-[20px] text-[#477d59] font-bold"
                >Sabtu</span
              >
            </div>
            <p class="font-crimson text-[16px] font-bold text-[#555555] mt-2">
              Pukul 08.00-10.00 WIB
            </p>
            <p class="font-crimson text-[16px] font-bold text-[#477d59] mt-4">
              Alamat
            </p>
            <!-- alamat -->
            <div class="flex flex-col items-center mt-4">
              <p class="font-crimson text-[18px] font-bold text-[#555555]">
                MASJID YAPIDH PUTRI
              </p>
              <p class="font-crimson text-[16px] font-normal text-[#555555]">
                Kp. Pedurenan, 01/04, Jatiasih, Kota Bekasi
              </p>
            </div>
            <a
              href="https://goo.gl/maps/LNvK5nCvzSifvEQa8"
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
                ><span class="text-[#436656]">DAYS</span>
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
                ><span class="text-[#436656]">HOURS</span>
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
                ><span class="text-[#436656]">MIN</span>
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
                ><span class="text-[#436656]">SEC</span>
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
                >Sabtu</span
              >
              <div
                class="flex flex-col items-center border-x-2 h-[3rem] border-[#333333] px-5"
              >
                <p
                  class="font-crimson text-[46px] text-[#477d59] font-bold -mt-6"
                >
                  18
                </p>
                <p
                  class="font-crimson text-[22px] text-[#477d59] font-bold -mt-6"
                >
                  Febuari
                </p>
              </div>
              <span class="font-crimson text-[20px] text-[#477d59] font-bold"
                >Sabtu</span
              >
            </div>
            <p class="font-crimson text-[16px] font-bold text-[#555555] mt-2">
              Pukul 10.00-13.00 WIB
            </p>
            <p class="font-crimson text-[16px] font-bold text-[#477d59] mt-4">
              Alamat
            </p>
            <!-- alamat -->
            <div class="flex flex-col items-center mt-4">
              <p class="font-crimson text-[18px] font-bold text-[#555555]">
                MASJID YAPIDH PUTRI
              </p>
              <p class="font-crimson text-[16px] font-normal text-[#555555]">
                Kp. Pedurenan, 01/04, Jatiasih, Kota Bekasi
              </p>
            </div>
            <a
              href="https://goo.gl/maps/LNvK5nCvzSifvEQa8"
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
      <div class="flex flex-col items-center w-full relative">
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
            <div class="lg:w-[50rem] w-[25rem] mt-4">
                <vue-plyr>
              <div
                class="plyr__video-embed"
              >
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
      targetDate: new Date("2024-02-18T23:59:59"), // Ganti dengan tanggal target Anda
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      embedUrl: "https://youtu.be/bk4MzGHi9QU",
    };
  },
  computed: {
    getNameInvitation() {
      const username = this.$route.params.username;
      return username.charAt(0).toUpperCase() + username.slice(1);
    },
  },
  mounted() {
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
</style>

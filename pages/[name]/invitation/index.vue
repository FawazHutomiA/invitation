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
        <div class="flex flex-col items-center pt-[6rem]">
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
            class="flex flex-col font-crimson items-center border-2 mb-[6rem] border-[#727E67] py-2 px-[7rem] mt-[4rem] rounded-md text-[#477d59] backdrop-blur-md bg-opacity-25"
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
        <div class="flex flex-col items-center pt-[6rem] pb-[6rem]">
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
            <p class="font-crimson text-[16px] text-[#555555]">
              Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala,
            </p>
            <p class="font-crimson text-[16px] text-[#555555]">
              insyaaAllah kami akan menyelenggarakan acara
            </p>
            <p class="font-crimson text-[16px] text-[#555555]">
              Walimatul ‘Ursy :
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
            <p class="text-[#555555] text-[16px] font-crimson text-center italic">
                “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
                untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
                dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
                kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
                terdapat tanda-tanda bagi kaum yang berfikir.”
            </p>
            <p class="font-crimson text-[16px] text-[#555555] font-bold">Al-Qur’an Surat Ar-Ruum (30:21)</p>
          </div>
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
    };
  },
  computed: {
    getNameInvitation() {
      const username = this.$route.params.username;
      return username.charAt(0).toUpperCase() + username.slice(1);
    },
  },
  mounted() {
    this.fetchData();
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
</style>

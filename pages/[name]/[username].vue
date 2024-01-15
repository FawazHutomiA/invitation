<template>
  <div class="relative">
    <img
      src="https://einvite.id/wp-content/uploads/kajian-bg-fix-cover.jpg"
      alt="background"
      class="absolute -z-10 object-cover h-full w-full bg-center opacity-100 bg-[#FFF]"
    />
    <div class="flex flex-col items-center justify-center py-[4.5rem]">
      <h1
        class="font-nunito bg-clip-text text-transparent bg-gradient-to-r from-[#477D5A] to-[#727E67] text-[1.4rem]"
      >
        Walimatul 'Ursy
      </h1>
      <img
        src="/img/risman.png"
        alt="wedding"
        class="w-[14rem] p-4 bg-gradient-to-r from-[#477D5A] to-[#727E67] rounded-full mt-4"
      />
      <p
        class="font-croissant mt-4 text-[2rem] bg-clip-text text-transparent bg-gradient-to-r from-[#477D5A] to-[#727E67] font-semibold"
      >
        {{ getName }}
      </p>
      <p class="font-light tracking-wide text-[#477D5A] mt-12 text-[1.2rem]">
        Kepada Bapak/Ibu/Saudara/i:
      </p>
      <p
        class="bg-clip-text text-transparent bg-gradient-to-r from-[#477D5A] to-[#727E67] font-semibold mt-4 text-[2rem]"
      >
        {{ getNameInvitation }}
      </p>
      <p class="font-light tracking-wide text-center text-[#477D5A] mt-4 text-[1rem]">
        Tanpa mengurangi rasa hormat, kami bermaksud mengundang Anda untuk
        menghadiri acara pernikahan kami.
      </p>
      <button
        @click="goToInvitation()"
        class="bg-[#727E67] hover:bg-[#477D5A] transition-all transform ease-in-out duration-300 text-white rounded-md mt-4 px-3 py-2"
      >
        Buka Undangan
      </button>
      <p class="font-light tracking-wide text-center text-[#477D5A] mt-4 text-[1rem]">
        * Mohon maaf apabila ada kesalahan penulisan nama/gelar
      </p>
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
    getName() {
      const name = this.$route.params.name;
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
  },
  methods: {
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
    goToInvitation() {
      this.$router.push(`/${this.$route.params.name}/invitation/${this.$route.params.username}`);
    },
  },
};
</script>
<style>
.font-croissant {
  font-family: "Croissant One", serif;
}

.font-nunito {
  font-family: "Nunito", sans-serif;
}
</style>

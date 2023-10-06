<template>
  <div
    class="sticky top-0 h-16 transition-bg duration-300 ease-in-out contianer px-36 flex items-center justify-between"
    :class="{ 'shadow-md bg-white': scrolled, 'bg-transparent': !scrolled }"
  >
    <!-- Logo -->
    <SvgLogo />
    <!-- section right menu -->
    <div class="flex items-center gap-x-6">
      <span class="cursor-pointer text-[#171A31] text-sm">Home</span>
      <span class="cursor-pointer text-[#171A31] text-sm">About us</span>
      <span class="cursor-pointer text-[#171A31] text-sm">How it works</span>
      <span class="cursor-pointer text-[#171A31] text-sm">Services</span>
      <span class="cursor-pointer text-[#171A31] text-sm">Contact</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollThreshold = 60;
      this.scrolled = window.scrollY > scrollThreshold;
    },
  },
};
</script>

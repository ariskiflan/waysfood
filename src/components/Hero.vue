<template>
  <div>
    <div class="grid grid-cols-2 justify-center items-center">
      <div class="p-[30px]">
        <h1 class="text-[40px]">
          <span class="text-black font-[700]"
            >Order Your favorite Food Here</span
          >
        </h1>
        <p class="text-[20px] font-[400]">
          Ayo Segera Pilih Makanan Favorit Anda
        </p>

        <router-link to="/foods">
          <button
            class="bg-primary font-[700] text-white px-[12px] py-[6px] text-[24px] rounded-[10px] flex justify-center items-center gap-[3px] mt-[20px]"
          >
            Order Now
            <svg-icon type="mdi" :path="path" class="size-[40px]"></svg-icon>
          </button>
        </router-link>
      </div>

      <div class="p-[30px]">
        <img :src="HeroImg" alt="Hero Image" class="w-[100%]" />
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiArrowRightThin } from "@mdi/js";
import HeroImg from "../assets/hero.png";

export default {
  name: "HeroComponents",
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiArrowRightThin,
      HeroImg,
    };
  },
};
</script>

<style></style>

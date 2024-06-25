<template>
  <div>
    <Navbar />

    <div class="max-w-[1200px] m-auto">
      <Hero />

      <div class="flex justify-between items-center p-[30px] mt-[30px]">
        <div>
          <h2 class="text-[30px]">
            Best <span class="text-primary font-[700]">Foods</span>
          </h2>
        </div>

        <div>
          <router-link
            to="/foods"
            class="bg-primary font-[700] text-white px-[10px] py-[4px] text-[20px] rounded-[10px] flex justify-center items-center gap-[5px] mt-[20px]"
          >
            <svg-icon type="mdi" :path="path"></svg-icon>
            See All
          </router-link>
        </div>
      </div>

      <div class="grid grid-cols-4 p-[30px] justify-center gap-[20px]">
        <div v-for="data in datas" :key="data.id">
          <Foodcard :datas="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiEyeArrowRightOutline } from "@mdi/js";
import Foodcard from "../components/Foodcard.vue";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      path: mdiEyeArrowRightOutline,
      datas: [],
    };
  },
  components: {
    Navbar,
    Hero,
    SvgIcon,
    Foodcard,
  },
  methods: {
    async getFood() {
      try {
        const res = await axios.get("http://localhost:3000/bestSellers");

        console.log(res);
        this.datas = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getFood();
  },
};
</script>

<style></style>

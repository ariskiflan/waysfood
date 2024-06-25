<template>
  <div>
    <div
      class="flex justify-between items-center py-[20px] px-[50px] shadow-md"
    >
      <div class="flex justify-center items-center gap-[20px]">
        <p class="text-3xl font-[700] text-primary">WaysFood</p>
        <router-link to="/" class="text-[20px]">Home</router-link>
        <router-link to="/foods" class="text-[20px]">Foods</router-link>
      </div>

      <div>
        <router-link
          to="/cart"
          class="text-[20px] flex justify-center items-center gap-[5px]"
          >Cart
          <svg-icon type="mdi" :path="path" class="size-[24px]"></svg-icon>
          <span class="text-[18px] px-[6px] rounded-md bg-primary text-white">{{
            orders.length
          }}</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCart } from "@mdi/js";
import axios from "axios";

export default {
  name: "NavbarComponents",
  data() {
    return {
      path: mdiCart,
      orders: {},
    };
  },
  components: {
    SvgIcon,
  },
  methods: {
    async getCart() {
      try {
        const res = await axios.get("http://localhost:3000/orders");

        this.orders = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

<style></style>

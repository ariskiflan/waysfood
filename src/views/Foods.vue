<template>
  <Navbar />
  <div class="max-w-[1200px] m-auto">
    <div class="p-[30px]">
      <h2 class="text-[30px]">List <span class="text-primary">Food</span></h2>

      <input
        v-model="search"
        @input="searchFoods"
        type="text"
        placeholder="Cari Makanan Favorite Anda"
        class="w-[100%] h-[40px] px-[10px] border border-primary rounded-xl mt-[20px]"
      />
    </div>

    <div class="grid grid-cols-4 p-[30px] justify-center gap-[20px]">
      <div v-for="data in filteredFoods" :key="data.id">
        <Foodcard :datas="data" />
      </div>
    </div>
  </div>  
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Foodcard from "../components/Foodcard.vue";
import axios from "axios";

export default {
  name: "FoodsPage",
  data() {
    return {
      datas: [],
      search: "",
      filteredFoods: [],
    };
  },
  components: {
    Navbar,
    Foodcard,
  },
  methods: {
    async getFood() {
      try {
        const res = await axios.get("http://localhost:3000/foods");

        console.log(res);
        this.datas = res.data;
        this.filteredFoods = this.datas;
      } catch (error) {
        console.log(error);
      }
    },

    searchFoods() {
      if (this.search === "") {
        this.filteredFoods = this.datas;
      } else {
        this.filteredFoods = this.datas.filter((name) =>
          name.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  },
  mounted() {
    this.getFood();
  },
};
</script>

<style></style>

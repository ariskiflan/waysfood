<template>
  <div>
    <Navbar />
    <div class="max-w-[1000px] m-auto">
      <div
        class="grid grid-cols-2 p-[30px] mt-[30px] gap-[30px] justify-center items-center"
      >
        <div>
          <img
            :src="'../assets/images/' + datas.image"
            alt="gambar makanan"
            class="object-cover rounded-[10px] w-[100%] h-[350px]"
          />
        </div>

        <div>
          <p class="text-[30px] font-[700]">{{ datas.name }}</p>
          <p class="text-[20px] font-[500]">Rp. {{ datas.price }}</p>

          <form action="" @submit.prevent="addOrder">
            <div class="mt-[20px]">
              <input
                v-model="orders.jumlah"
                type="number"
                class="w-[100%] h-[40px] p-[10px] border border-primary rounded-xl"
                placeholder="Jumlah Pesanan"
              />
            </div>

            <div class="mt-[20px]">
              <textarea
                v-model="orders.keterangan"
                name=""
                id=""
                placeholder="Keterangan"
                class="w-[100%] h-[100px] p-[10px] border border-primary rounded-xl"
              ></textarea>
            </div>

            <button
              type="submit"
              class="bg-primary font-[700] text-white px-[10px] py-[4px] text-[18px] rounded-[10px] flex justify-center items-center gap-[5px] mt-[20px]"
            >
              Order
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  name: "FoodsPage",
  data() {
    return {
      datas: [],
      orders: {},
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async getFood() {
      try {
        const res = await axios.get(
          `http://localhost:3000/foods/${this.$route.params.id}`
        );

        console.log(res);
        this.datas = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addOrder() {
      try {
        if (this.orders.jumlah) {
          this.$router.push({ path: "/cart" });
          this.orders.datas = this.datas;
          const res = await axios.post(
            "http://localhost:3000/orders",
            this.orders
          );

          console.log(res);
          this.orders = res.data;

          this.$toast.success("Order Success", {
            type: "success",
            position: "top",
          });
        } else {
          this.$toast.error("Jumlah Pesanan Harus Di Isi", {
            type: "error",
            position: "top",
          });
        }
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

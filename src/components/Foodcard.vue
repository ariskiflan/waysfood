<template>
  <div>
    <div
      class="shadow-2xl rounded-[10px] overflow-hidden hover:translate-y-[-10px] transition-all duration-300"
    >
      <img
        :src="'assets/images/' + datas.image"
        alt="gambar makanan"
        class="object-cover"
      />

      <div class="px-[7px] py-[15px]">
        <p class="text-[20px] font-[700]">{{ datas.name }}</p>
        <p class="text-[18px] font-[500]">Rp. {{ datas.price }}</p>

        <router-link :to="`/foods/${datas.id}`">
          <button
            class="bg-primary font-[700] text-white px-[10px] py-[4px] text-[18px] rounded-[10px] flex justify-center items-center gap-[5px] mt-[20px]"
          >
            Order
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["datas"],
  name: "FoodCardComponents",
};
</script>

<style></style>

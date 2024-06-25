import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Foods from "@/views/Foods.vue";
import Cart from "@/views/Cart.vue";
import FoodDetail from "@/views/FoodDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/foods",
    name: "Foods",
    component: Foods,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/foods/:id",
    name: "FoodDetails",
    component: FoodDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

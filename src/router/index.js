import { createWebHistory, createRouter } from "vue-router";
import ProductCompo from "../components/Home/ProductList.vue";

const routes = [
    {
        path:"/",
        alias:"/home",
        name:'product-page',
        component: ProductCompo
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
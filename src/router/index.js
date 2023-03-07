import { createWebHistory, createRouter } from "vue-router";
import ProductCompo from "../components/Home/ProductList.vue";
import DetailCompo from "../components/DetailCompo.vue";
import LoginCompo from "../components/LoginCompo.vue";
import CartCompo from "../components/CartCompo.vue";

const routes = [
    {
        path:"/",
        alias:"/home",
        name:'product-page',
        component: ProductCompo
    },
    {
        path:"/detail",
        name:'detail-page',
        component: DetailCompo
    },
    {
        path:"/login",
        name:'login-page',
        component: LoginCompo
    },
    {
        path:"/cart",
        name:'cart-page',
        component: CartCompo
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
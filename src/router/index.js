import { createWebHistory, createRouter } from "vue-router";
import ProductCompo from "../components/Home/ProductList.vue";
import DetailCompo from "../components/DetailCompo.vue";
import LoginCompo from "../components/LoginCompo.vue";
import CartCompo from "../components/CartCompo.vue";
import RegisterCompo from "../components/RegisterCompo.vue";

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
    },
    {
        path:"/register",
        name:"register-page",
        component: RegisterCompo
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import ListaCubos from './components/ListaCubos.vue';
import DetalleCubo from './components/DetalleCubo.vue';
import LoginComponent from './components/LoginComponent.vue';
import RegistrarComponent from './components/RegistrarComponent.vue';
import ZonaUsuario from './components/ZonaUsuario.vue';
import PerfilUsuario from './components/PerfilUsuario.vue';
import ComprasUsuario from './components/ComprasUsuario.vue';
import CompradoCubo from './components/CompradoCubo.vue';
import ComprarCubo from './components/ComprarCubo.vue';

 
const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path: "/marcas/:idMarca", component: ListaCubos
    },
    {
        path: "/detalle/:idCubo", component: DetalleCubo
    },
    {
        path: "/login", component: LoginComponent
    },
    {
        path: "/registro", component: RegistrarComponent
    },
    {
        path: "/zonaUsuario", component: ZonaUsuario
    },
    {
        path: "/zonaUsuario/perfil", component: PerfilUsuario
    },
    {
        path: "/zonaUsuario/compras", component: ComprasUsuario
    },
    {
        path: "/zonaUsuario/comprar", component: ComprarCubo
    },
    {
        path: "/zonaUsuario/comprar/:idCubo", component: CompradoCubo
    }

]
 
const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;

<template>
  <h1>Se ha comprado</h1>
  <router-link
    :to="'/zonaUsuario'"
    class="btn btn-primary"
    >Volver</router-link
  >
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
export default {
    name:"CompradoCubo",
    data(){
        return{
        idCubo:null
        }
    },
    mounted(){
         this.idCubo = parseInt(this.$route.params.idCubo);
         service.postPedidos(this.idCubo).then(response=>{
            console.log(response);
         })
    }
};
</script>

<style></style>

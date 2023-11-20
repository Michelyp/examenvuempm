<template>
    <div v-if="cubo" class="card" style="width: 18rem">
    <img :src="cubo.imagen" style="width: 150px" />
    <div class="card-body">
      <h5 class="card-title">{{ cubo.nombre }}</h5>
      <p class="card-text">{{ cubo.precio }}</p>
    </div>
  </div>
 <h5 class="card-title mt-5">Comentarios</h5>
  <div  v-for="comentario in comentarios" :key="comentario" class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-8">
      <div class="card-body">
        <p class="card-text">{{comentario.comentario}}</p>
        <p class="card-text"><small class="text-body-secondary">{{comentario.fechaComentario}}</small></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
const service = new ServiceCubos();
export default {
    name:"DetalleCubo",
     data(){
      return{
        idCubo:null,
        cubo:{},
        comentarios:[]
      }
    },
    mounted(){
      this.idCubo = parseInt(this.$route.params.idCubo);
      service.getDetalleCubo(this.idCubo).then(response =>{
        this.cubo = response.data;
        console.log(this.cubo);
      })
      service.getComentariosCubo(this.idCubo).then(response =>{
        this.comentarios = response.data;
        console.log(this.comentarios);
      })
    },
}
</script>

<style>

</style>
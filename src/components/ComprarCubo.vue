<template>
  <div v-for="cubo in cubos" :key="cubo" class="card" style="width: 18rem">
    <img :src="cubo.imagen" style="width: 150px" />
    <div class="card-body">
      <h5 class="card-title">{{ cubo.nombre }}</h5>
      <p class="card-text">{{ cubo.precio }}</p>
      <p class="card-text">Marca: {{ cubo.marca }} Modelo: {{ cubo.modelo }}</p>
      <router-link
        :to="'/zonaUsuario/comprar/' + cubo.idCubo"
        class="btn btn-primary"
        >Compras</router-link
      >
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "ComprarCubo",
  data() {
    return {
      cubos: []
    };
  },
  mounted() {
    this.cargarCubos();
  },
  methods: {
    cargarCubos() {
      service.getCubos().then((response) => {
        this.cubos = response.data;
      });
    }
  }
};
</script>

<style></style>

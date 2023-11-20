<template>
  <div v-for="cubo in cubos" :key="cubo" class="card" style="width: 18rem">
    <img :src="cubo.imagen" style="width: 150px" />
    <div class="card-body">
      <h5 class="card-title">{{ cubo.nombre }}</h5>
      <p class="card-text">{{ cubo.precio }}</p>
      <router-link :to="'/detalle/'+cubo.idCubo" class="btn btn-primary">Detalle</router-link>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "ListaCubos",
  data() {
    return {
      cubos: [],
      idMarca: null
    };
  },
  mounted() {
    this.idMarca = this.$route.params.idMarca;
    this.cargarCubos();
  },
  watch: {
    "$route.params.annyo"(nextVal, oldVal) {
      if (nextVal != oldVal) {
        this.idMarca = this.$route.params.idMarca;
        this.cargarCubos();
      }
    }
  },
  methods: {
    cargarCubos() {
      service.getDetalleMarca(this.idMarca).then((response) => {
        this.cubos = response.data;
      });
    }
  }
};
</script>

<style></style>

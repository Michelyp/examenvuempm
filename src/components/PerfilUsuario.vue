<template>
  <label>Nombre: {{usuario.nombre}}</label>
  <br />
  <label>Email: {{usuario.email}} </label>
  <br />
  <label>pass:{{usuario.pass}}</label>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "PerfilUsuario",
data() {
    return {
      usuario: {}
    };
  },
  mounted(){
    this.enviarDatos();
  },
  methods: {
    enviarDatos() {
      service.getPerfil().then((response) => {
        this.usuario = response.data;
      });
    }
  }
};
</script>

<style></style>

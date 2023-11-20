<template>
  <router-link :to="'/zonaUsuario/perfil'" class="btn btn-primary"
    >Perfil</router-link
  >
  <router-link :to="'/zonaUsuario/compras'" class="btn btn-primary"
    >Compras</router-link
  >
  <router-link :to="'/'" class="btn btn-primary">RealizarCompra</router-link>
  <button  @click="cerrar()" class="btn btn-primary">Cerrar Sesion</button>
</template>

<script>
export default {
  name: "ZonaUsuario",
  methods: {
    cerrar() {
     localStorage.removeItem("token");
      this.$router.push("/login");
    }
  }
};
</script>

<style></style>

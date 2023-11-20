<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Cubos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/registro">Registro</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Marcas
            </a>
            <ul class="dropdown-menu">
              <router-link
                v-for="marca in marcas"
                :key="marca"
                class="dropdown-item"
                :to="'/marcas/' + marca"
                >{{ marca }}</router-link
              >
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "MenuComponent",
  data() {
    return {
      marcas: null
    };
  },
  mounted() {
    this.loadMarcas();
  },
  methods: {
    loadMarcas() {
      service.getMarcas().then((result) => {
        this.marcas = result.data;
      });
    }
  }
};
</script>

<style></style>

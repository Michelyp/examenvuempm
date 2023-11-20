<template>
  <!-- Section: Design Block -->
  <section class="text-center">
    <!-- Background image -->
    <div
      class="p-4 bg-image"
      style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 150px;
      "
    ></div>
    <!-- Background image -->

    <div
      class="card mx-4 mx-md-5 shadow-5-strong"
      style="
        margin-top: -100px;
        background: hsla(0, 0%, 100%, 0.8);
        backdrop-filter: blur(30px);
      "
    >
      <div class="card-body py-5 px-md-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <h2 class="fw-bold mb-5">Iniciar sesión</h2>
            <form v-on:submit.prevent="enviarDatos()">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="row">
                <div class="col-md-8 mb-4">
                  <div class="form-outline">
                    <input
                      type="email"
                      v-model="usuario.email"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example1">Email</label>
                  </div>
                </div>
              </div>
              <div class="col-md-8 mb-4">
                <div class="form-outline">
                  <input
                    type="password"
                    v-model="usuario.password"
                    class="form-control"
                  />
                  <label class="form-label" for="form3Example2"
                    >Contraseña</label
                  >
                </div>
              </div>
              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "LoginComponent",
  data() {
    return {
      usuario: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    enviarDatos() {
      service.getLogin(this.usuario).then((response) => {
        //se guarda dentro del localstorage del navegador un token con el valor token
        localStorage.setItem("token", response.data.response);
        this.$router.push("/zonaUsuario");
      });
    }
  }
};
</script>

<style></style>

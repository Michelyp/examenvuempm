<template>
  <form v-on:submit.prevent="enviarDatos()">
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">Nombre</label>
        <input type="text" v-model="usuario.nombre" class="form-control" />
      </div>
    </div>
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">Email</label>
        <input type="email" v-model="usuario.email" class="form-control" />
      </div>
    </div>
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">Contraseña</label>
        <input type="password" v-model="usuario.pass" class="form-control" />
      </div>
    </div>
    <div class="col-md-8 mb-4">
      <div class="form-outline">
        <label class="form-label" for="form3Example1">Repetir Contraseña</label>
        <input type="password" v-model="usuario.pass" class="form-control" />
      </div>
    </div>
    <button type="submit" class="btn btn-primary btn-block mb-4">Registro</button>
  </form>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";
const service = new ServiceCubos();
export default {
  name: "RegistrarComponent",
  data() {
    return {
      usuario: {
        idUsuario: 0,
        nombre: "",
        email: "",
        pass: ""
      }
    };
  },
  methods: {
    enviarDatos() {
      service.postCreateAlumno(this.usuario).then((res) => {
        this.$router.push("/login");
        console.log(res);
      });
    }
  }
};
</script>

<style></style>

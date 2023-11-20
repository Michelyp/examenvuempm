<template>
<table class="table">
    <thead>
      <tr>
        <th scope="col">idCubo</th>
        <th scope="col">idPedido</th>
        <th scope="col">idUsuario</th>
        <th scope="col">Fecha Pedido</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="compra in compras" :key="compra">
        <th>{{ compra.idCubo }}</th>
        <td>{{ compra.idPedido }}</td>
        <td>{{ compra.idUsuario }}</td>
        <td>{{ compra.fechaPedido }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ServiceCubos from "./../services/ServiceCubos";
const service = new ServiceCubos();
export default {
    name:"ComprasUsuario",
    data() {
    return {
      compras: [],
    };
  },
  mounted() {
    service.getCompras().then((response) => {
      this.compras = response.data;
    });
  },
};

</script>

<style>

</style>
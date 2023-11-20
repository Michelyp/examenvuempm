import Global from "./../Global";
import axios from "axios";

export default class ServiceCubos {

  getCubos() {
    return new Promise(function (resolve) {
      var request = "api/cubos";
      var url = Global.urlApiCubos + request;
      axios.get(url).then(response => {
        resolve(response);
      })
    });
  }
  getLogin(usuario) {
    return new Promise(function (resolve) {
      var request = "api/manage/login";
      var url = Global.urlApiCubos + request;
      axios.post(url, usuario).then((response) => {
        resolve(response);
      });
    });
  }
  getMarcas() {
    return new Promise(function (resolve) {
      var request = "api/cubos/marcas";
      var url = Global.urlApiCubos + request;
      axios.get(url).then(response => {
        resolve(response);
      })
    });
  }
  getDetalleMarca(marca) {
    return new Promise(function (resolve) {
      var request = "api/cubos/cubosmarca/" + marca;
      var url = Global.urlApiCubos + request;
      axios.get(url).then(response => {
        resolve(response);
      })
    });
  }
  getDetalleCubo(idCubo) {
    return new Promise(function (resolve) {
      var request = "api/cubos/" + idCubo;
      var url = Global.urlApiCubos + request;
      axios.get(url).then(response => {
        resolve(response);
      })
    });
  }
  getComentariosCubo(idCubo) {
    return new Promise(function (resolve) {
      var request = "api/ComentariosCubo/GetComentariosCubo/" + idCubo;
      var url = Global.urlApiCubos + request;
      axios.get(url).then(response => {
        resolve(response);
      })
    });
  }
  postCreateAlumno(usuario) {
    return new Promise(function (resolve) {
      var request = "api/manage/registrousuario";
      var url = Global.urlApiCubos + request;
      axios.post(url, usuario).then(response => {
        resolve(response);
      })
    });
  }
  //Métodos token
  //metodo que se solicitara mediante los headers el token
  getToken() {
    const headers = {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
    return headers;
  }
  getPerfil() {
    const headers = this.getToken();
    return new Promise(function (resolve) {
      var request = "api/manage/perfilusuario";
      var url = Global.urlApiCubos + request;
      //se enviara la url con el headers del token 
      axios.get(url, { headers }).then(response => {
        resolve(response);
      })
    });
  }
  getCompras() {
    const headers = this.getToken();
    return new Promise(function (resolve) {
      var request = "api/compra/comprasusuario";
      var url = Global.urlApiCubos + request;
      //se enviara la url con el headers del token 
      axios.get(url, { headers }).then(response => {
        resolve(response);
      })
    });
  }
  postPedidos(idCubo) {
    const headers = this.getToken();
    return new Promise(function (resolve) {
      var request = "api/compra/insertarpedido/" +idCubo;
      var url = Global.urlApiCubos + request;
      var body="";
      //se enviara la url con el headers del token 
      axios.post(url, body, { headers }).then(response => {
        resolve(response);
      })
    });
  
  }
}
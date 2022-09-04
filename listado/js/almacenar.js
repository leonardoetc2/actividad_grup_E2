const AGREGAR = document.getElementById("agregar");

document.addEventListener("DOMContentLoaded", () => {
  actualizar();
  AGREGAR.addEventListener("click", () => {
    let item = document.getElementById("item").value;
    agregarLocalStorage(item.trim()); 
    actualizar();
  });
});

function actualizar() {
  let lista = document.getElementById("contenedor");
  lista.innerHTML = "";
  let array = JSON.parse(localStorage.getItem("array"));
  if (array != null)
    array.map((item) => {
      lista.innerHTML += `<li>${item}</li>`;
    });
}

function agregarLocalStorage(parametro) {
  if (parametro !== "") {
    if (localStorage.getItem("array") === null) {
      localStorage.setItem("array", JSON.stringify([parametro]));
    } else {
      let array = JSON.parse(localStorage.getItem("array"));
      array.push(parametro);
      localStorage.setItem("array", JSON.stringify(array));
    }
  }
}

limpiar.addEventListener("click", () => {
  limpiarItems();
});

function limpiarItems() {
  localStorage.removeItem("array");
  actualizar();
}

//me ayudo un compa de otro grupo 
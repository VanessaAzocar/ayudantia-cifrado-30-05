//alert("hola");
const btn_hide= document.getElementById("hide");

btn_hide.addEventListener/*siempre espera que el usuario haga algo para que cuando el usuario haga click que es su funcion*/
("click",() => {
  document.getElementsByClassName("text_hide")[0] /*se hace la variable para guardar el textoy que busqye la clase que tiene text_hide y se busca la posicion que es 0( la que esta en 1 lugar en el HTML en orden de escritura) */
  .classList.add("hide");/*hide se pone en CSS diciendo que se oculte*/
})

const btn_show= document.getElementById("show");
btn_show.addEventListener("click", () => {
document.getElementsByClassName("img_show")[0].classList.remove("img_show");
})

//Funciones trozos de codigos reutilizable
//iteracion: recorrido
const iteracion = () => {
  const name = "vanessa azocar";
  let result = "";
  let i =0;
  for ( i ; i < name.length; i++) {
    //console.log(name[i]);
    result += name[i].toUpperCase();
    console.log(result)
  }
 }
 iteracion();


//let numero= parseInt (prompt ("ingrese numero"))
//let numero3= parseInt (prompt("ingrese otro numero"))

//console.log = ( numero + numero3)


//****************************************CONTROL DE FLUJOS***************************************/
//let edad = prompt("Cual es su edad");
//let edadParseada = parseInt(edad);

//if(edadParseada > 18){
  //  alert("sos mayor, podes beber alcohol.")
//}else {
   // alert("no sos mayor")
//}



//*****************************segundo ejemplo*****************


//if(edad <= 18){
  // alert("sos menos")
//}else if(edad <=50){
  //  alert("sos adulto")
//}else {
  //  alert("estas grande para beber")
//}

//*************************tercer ejemplo************* */
//let edad = 15;

//let edadEntre20y50 = edad >= 20 && edad <=50;

//console.log(edadEntre20y50);


// let grados = 30;
// let clima = "lluvia";

// if(grados == 30 || clima == "lluvia"){
//     alert(" me voy a tomar un helado")
// }else(
//     alert("Miramos netflix con yoel")
// )

// let nombre = prompt("Ingrese nombre")

// if(nombre != ""){
//     alert("su nombre es:" + nombre)
// }


// let nombreIngresado = prompt("ingresar nombre");

// if(nombreIngresado != "" && (nombreIngresado == "EMA" || nombreIngresado == "EMA")) {
//     alert("hola EMA");
//     }else{
//         alert("Error: Ingresar nombre valuido")
//     }


// let numero = prompt("Cantidad unidades");
// let numeroParseado = parseInt("unidades");

// if ( numeroParseado <= "1000"){
//   alert("El pedido sera enviado")
// }else {
//  alert("El numero supera las mil unidades")
// }

//***********************FOR**************** */

// let numero = parseInt(prompt("Ingresar numero"));

// for(let i = 0; i<= 10; i++){
//     let resultado = numero * i
//     console.log("numero:" + numero + " X " + i + " : "+ resultado)
// }


//*************************WHILE********************* */
// let numero = parseInt(prompt("Ingresar numero"));


// let i = 1;

// while(i <=10){
//   let resultado = numero * i
//   console.log(numero + " X " + I + " : " + resultado)
//   i++;
// }







// let nombre = prompt("ingrese nombre o SALIR para termiar")

// while( nombre != "SALIR"){
//   console.log("Usted ingreso: " + nombre)
// }

// function saludar(usuario){
//   console.log("Bienvenido de nuevo, " + usuario);
// }
//   let usuario = prompt("Ingrese su alias");

//   saludar(usuario);

//   let usuario2 = prompt("Ingrese su alias");
//   saludar(usuario2)

// function saludar(nombre, apellido){
//   console.log("Bienvenido de nuevo, " + nombre);
//   console.log("Su apellido es:, " + apellido);
  
// }
//   let nombre = prompt("Ingrese su alias");
//   let apellido= prompt("Ingrese su alias");

//   saludar(nombre,usuario);

  // const persona = {
  //   nombre:"Cristian",
  //   apellido:"Rebora",
  //   edad: 30,
  //   codigoPostal: 1408,
  //   altura:"190cm"
  // }

  // persona.altura = 180;

  // console.log(persona);



// *****************contructor es nuestro plano*********
// function Persona (nombre,edad,codigoPostal,altura){
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
//   this.codigoPostal = codigoPostal;
//   this.altura = altura;
// }

// const persona1 = new Persona("Cristian","Rebora",30,1408,"190cm");
// const persona2 = new Persona("Pepito","Hernandez",20,1234,"140cm");

// persona1.nombre = "Cristian";

// console.log(persona2.nombre);
// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return(array[0])
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return(array[array.length-1])
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return(array.length)
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i=0;i<array.length;i++){
    h=array[i],
    h=h+1;
    array[i]=h
  }
  return(array)
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return(array)
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return(array)
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  
  k=palabras[0]
  for(let i=1;i<palabras.length;i++){
    k=k+" "+palabras[i];

  }
  
  return(k)
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i=0;i<array.length;i++){
    if(array[i]===elemento){
      return(true)
    }
  }
  return(false)
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  p=0
    for(let i=0;i<numeros.length;i++){
      if(Number.isInteger(numeros[i])){
        p=p+numeros[i];
       }
    }
    return(p)
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  k=0
  for(let i=0;i<resultadosTest.length;i++){
    k=k+resultadosTest[i];
  }
  k=k/resultadosTest.length;
  return(k)
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  k=numeros[0];
  for(let i=0;i<numeros.length;i++){
    if(k<numeros[i]){
      k=numeros[i]
    }
  }
  return(k)
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  k=0
  
  if(arguments.length>0){
    k=arguments[0]
    for(let i=1;i<arguments.length;i++){
      k=arguments[i]*k;
    }
  }
  return(k)
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var k=0;

  for(let i=0;i<arreglo.length;i++){
    if(18<arreglo[i]){
      k=k+1
    }
  }
  return(k)
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semanaEs fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia==1||numeroDeDia==7){
    return("Es fin de semana");
  }else{
    return("Es dia Laboral")
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  h=n
  l=0
  while(h>9){
    
    l=h%10
    h=h-l
    h=h/10
  }
  if(h==9){
    return(true)
  }else{
    return(false)
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(let i=1;i<arreglo.length;i++){
    if(arreglo[i-1]!=arreglo[i]){
      return(false)
    }
  }
  return(true)
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  k=[];
  for(let i=0;i<array.length;i++){
    if(array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre"){
      k.push(array[i])
    }  
  }
  if(k.length<3){
    return("No se encontraron los meses pedidos")
  }else{
    return(k)
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var k=[];
  for(let i=0;i<array.length;i++){
    if(array[i]>100){
      k.push(array[i])
    }
    
  }
  return(k)
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  k=[];
  f=numero;
    for(let i=0;i<10;i++){
      f=2+f
      
      if(f==i){
        break
      }else{
        k.push(f);
      }
    }
    if(f<10){
      return("Se interrumpió la ejecución");
    }
    return(k)
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  k=[];
  f=numero
  for(let i=0;i<10;i++){
    if(i===5)
      continue
    
    else{
      f=f+2;
      k.push(f);
    }
  
  }
      
    
   

  
  return(k)
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

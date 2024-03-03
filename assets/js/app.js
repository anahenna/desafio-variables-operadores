// 2.

// se crean dos variables con modal para que el usuario ingrese sus valores numeros
let num1 = +prompt("Ingrese número 1 para operaciones matemáticas")
let num2 = +prompt("Ingrese número 2 para operaciones matemáticas")

// se realiza la operacion matematica con ambos valores y su resultado se asigna a una nueva variable
let resultadoSuma = num1 + num2
let resultadoResta = num1 - num2
let resultadoDivision = num1 / num2
let resultadoMultiplicacion = num1 + num2
let resultadoModulo = num1 % num2

//se comprueba con la consola que las operaciones se ejecuten de manera correcta sin errores
console.log(resultadoSuma)
console.log(resultadoResta)
console.log(resultadoDivision)
console.log(resultadoMultiplicacion)
console.log(resultadoModulo)

// se utiliza document.write para  mostrar en el html los resultados obtenidos
document.write("El resultado de la Suma es: " + resultadoSuma + "<br>")
document.write("El resultado de la Resta es: " + resultadoResta + "<br>")
document.write("El resultado de la Division es: " + resultadoDivision + "<br>")
document.write("El resultado de la Multiplicacion es: " + resultadoMultiplicacion + "<br>")
document.write("El resultado del Modulo es: " + resultadoModulo + "<br>")



// 3.
// se crea variable con modal para que el usuario ingrese el valor de grados celsius
let tempCelsius = +prompt("Ingrese temperatura en grados Celsius")

// se le asignan los valores base a las temperaturas por convertir
let tempKelvin = (273.15)
let tempFahren = (32)

// se realiza la operacion matematica con ambos valores y su resultado se asigna a una nueva variable
let convCelToKelvin = tempCelsius + tempKelvin
let convCelToFahren = (tempCelsius * 9 / 5) + tempFahren

//se comprueba con la consola que las operaciones se ejecuten de manera correcta sin errores
console.log(convCelToKelvin)
console.log(convCelToFahren)

// se utiliza document.write para  mostrar en el html los resultados obtenidos
document.write(tempCelsius + "  Grados Celsius" + "Equivalen a:  " + convCelToKelvin + "  Grados Kelvin" + "<br>")
document.write(tempCelsius + "  Grados Celsius" + "Equivalen a:  " + convCelToFahren + "  Grados Fahrenheit" + "<br>")



// 4.
// se crea variable con modal para que el usuario ingrese el valor de cantidad de dias a calcular
let canDias = +prompt("Ingrese cantidad de dias a calcular en años, semanas y dias")

// se le asignan los valores base a las temperaturas por convertir
let unAnio = +(365)
let unaSemana = +(7)
let unDia = +(1)

// se realiza la operacion matematica con los valores recibidos y su resultado se asigna a una nueva variable
let calculoAnios = Math.floor(canDias / unAnio)
let calculoSemanas = Math.floor((canDias % unAnio) / unaSemana)
let calculoDias = Math.floor(((canDias % unAnio) % unaSemana) / unDia)

//se comprueba con la consola que las operaciones se ejecuten de manera correcta sin errores
console.log(calculoAnios)
console.log(calculoSemanas)
console.log(calculoDias)

// se utiliza document.write para  mostrar en el html los resultados obtenidos
document.write("Los dias ingresados equivalen a:  " + calculoAnios + "  años,  " + calculoSemanas + "  semanas y  " + calculoDias + "  días  " + "<br>")




// se crea variable con modal para que el usuario ingrese los valores a sumar y promediar
let num1promedioySuma = +prompt("Ingrese el primer numero para sumar y promediar")
let num2promedioySuma = +prompt("Ingrese el segundo numero para sumar y promediar")
let num3promedioySuma = +prompt("Ingrese el tercer numero para sumar y promediar")
let num4promedioySuma = +prompt("Ingrese el cuarto numero para sumar y promediar")
let num5promedioySuma = +prompt("Ingrese el quinto numero para sumar y promediar")

// se realiza la operacion matematica con los valores recibidos y su resultado se asigna a una nueva variable
let calculoSuma = num1promedioySuma + num2promedioySuma + num3promedioySuma + num4promedioySuma + num5promedioySuma
let calculoPromedio = Math.floor(calculoSuma / 5)

//se comprueba con la consola que las operaciones se ejecuten de manera correcta sin errores
console.log + (calculoSuma)
console.log + (calculoPromedio)

// se utiliza document.write para  mostrar en el html los resultados obtenidos
document.write("La suma de los números entregados es:  " + calculoSuma + "<br>")
document.write("El promedio de los números entregados es:  " + calculoPromedio + "<br>")

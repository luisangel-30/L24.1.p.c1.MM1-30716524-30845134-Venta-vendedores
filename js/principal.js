/*VENTAS VENDEDORES
Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el
monto total en $ de todas las ventas.
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75)
Cantidad de ventas que fueron por 100$ o menos: 1
Cantidad de ventas mayores a 100$: 3
Monto total de las ventas: 520$*/
import CL_reporte from "./CL_reporte.js";
import CL_vendedor from "./CL_vendedor.js";

let vendedor= new CL_vendedor();
let ven1= new CL_vendedor("Juan", 150);
let ven2= new CL_vendedor("Mary", 135);
let ven3= new CL_vendedor("Carlos", 160);
let ven4= new CL_vendedor("Pedro", 75);

let reporte= new CL_reporte();
reporte.procesar(ven1);
reporte.procesar(ven2);
reporte.procesar(ven3);
reporte.procesar(ven4);


let salida=document.getElementById("salida");
salida.innerHTML=`
Cantidad de ventas que fueron por 100$ o menos: ${reporte.contmenor}
<br>Cantidad de ventas mayores a 100$: ${reporte.contmayor}
<br>Monto total de las ventas: ${reporte.acumventas}$

`

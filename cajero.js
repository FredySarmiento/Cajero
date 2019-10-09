class Billete
{
  constructor(v,c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}
//con esta sentencia me toma todos los elementos creados en el array caja
function entregarDinero()
{
  var ct =document.getElementById("dinero");
  dinero=parseInt(ct.value);
  for(var bi of caja){
    if (dinero > 0)
    {

      div=Math.floor(dinero/bi.valor);
      //console.log(div);
      if (div > bi.cantidad)
      {
        papel = bi.cantidad;
      }
      else
      {
        papel = div;
      }
      entregado.push( new Billete(bi.valor,papel));
      dinero = dinero - (bi.valor * papel);
    }

  }
  //si despues de las iteraciones con el ciclo for no completa que el dinero sea igual a 0 lanza el mensaje
  if (dinero > 0) {
    console.log("Dinero insuficiente para su transacción");
    resultado.innerHTML = "Dinero insuficiente para su transacción";
  }
  else {
    console.log(entregado);
    for (var e of entregado) //of instancia de cada objeto dentro de la e
    {
      if (e.cantidad > 0) {
          resultado.innerHTML+=  e.cantidad + "  billetes de $   " + e.valor + "<br />";//innerHTML es la manera como se muestran los valores que se tienen en el java script y se desean mostrar en el documento
      }

    }
  }

}
var caja = [];
var entregado = [];
caja.push(new Billete(50,3));//ingresamos los valores que tendra dentro la caja de acuerdo al construcor que declaramos en la parte superior
caja.push(new Billete(20,2));
caja.push(new Billete(10,2));

var dinero = 0;
var div = 0;
var papel = 0;
var b = document.getElementById("extrae");
var resultado =document.getElementById("resultado");
b.addEventListener("click", entregarDinero);

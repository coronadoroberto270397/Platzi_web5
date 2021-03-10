var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas =30;
var l = 0;
var yi, xf;
var colorcito = "RED";

for(l = 0; l < lineas; l++)
{
    yi= 10 * l;
    xf= 10 * (l + 1);
    dibujarlinea(colorcito,0,yi,xf,300);
    console.log("linea" + 1);
}
dibujarlinea(colorcito,1,1,1,299);
dibujarlinea(colorcito,1,299,299,299);
function dibujarlinea(color, xinicial, yinicial, xfinal,yfinal)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial, yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
    }
function dibujoPorClick()
    {
        alert("Hola");
        var xxx= parseint(texto.value);
    }

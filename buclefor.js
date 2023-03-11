
/* for(let cont=1;cont<6;cont++){
    document.write(" ********* ")
    document.write("<br>");
}

let nu1 = prompt("dame un numero");
alert("numero " + nu1);
for (let cont = 0; cont < 15; cont++) {
    document.write(cont)
    document.write("<br>");
}
 
let n=0;
while(n<3){
    document.write(" maximiliano reprobo ")
    n++;
}

}

let i=0;
do{i+=1;console.log(i)}
while(i<10);
*/
let nombre = prompt(" dime una fruta ")
switch (nombre) {
    case 'naranja':
        document.write ("la naranja esta a $0.59");
        break;
    case 'limon':
        document.write ("el limon esta a $0.10");
        break;
    default:
        document.write ("no es una opcion");
        break;
}
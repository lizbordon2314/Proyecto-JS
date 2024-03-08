let nombre = prompt ("Ingrese su nombre"); 

function sumar() {

    let gastos = [];
  
    while (true) {
        let gastoRealizado = parseFloat (prompt ("Ingrese los gastos (en pesos) realizados en el mes en curso (Para finalizar, escriba Listo)"));
        if (gastoRealizado === "LISTO" || gastoRealizado === "Listo" || gastoRealizado === "listo" || !isFinite(gastoRealizado)) break;
        gastos.push(+gastoRealizado);
    }

    let suma = 0;

    for (let gasto of gastos) {
        suma += gasto;
    }

    return suma;
} 

let totalDeGastos = sumar();

let limite = prompt ("Ingrese la cantidad limite de plata que puede permitirse gastar este mes"); 

function calcularDineroDisponible (totalDeGastos, limite) {
    let restar = limite - totalDeGastos;
    return restar;
};

if (totalDeGastos < limite) { 
    let dineroDisponible = calcularDineroDisponible (totalDeGastos, limite);
    alert (nombre + ", los gastos de este mes son hasta el momento de " + totalDeGastos + " pesos. Tiene disponible " + dineroDisponible + " pesos para gastar");
} 
else if (totalDeGastos == limite) {
    alert (nombre + ", los gastos de este mes son hasta el momento de " + totalDeGastos + " pesos. Ha alcanzado su limite");
}
else {
    alert (nombre + ", los gastos de este mes son hasta el momento de " + totalDeGastos + " pesos. Ha superado su limite"); 
}
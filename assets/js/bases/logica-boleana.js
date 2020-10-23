const oper = () => {
    console.log('is true');
    return (true);
}

const oper2 = () => {
    console.log('is false');
    return (false);
}

//negacion !

console.log(oper());
console.log('negado:');
console.log(!oper());

// operador and

//and tambien sirve para disparar una accion solo si la primera condicion se cumple
console.log("==================");
console.log(oper2() && oper()); //en este caso solo entra ala primera funcion ya que esta retorna false
console.log(oper() && oper2()); // entra a ambas funciones ya que la primera retorna true


//operador or
console.log("======== || ==========");


console.log(oper() || oper2()); //si la primera condicion es true no ejecuta la segunda intruccion

console.log(oper2() || oper()); // si la primera es false ejecuta ambas

function batalla(jugador, maquina) {
    let turno = 0;
    let curacionJugador = true;
    let curacionMaquina = true;
    while (jugador.vida > 0 && maquina.vida > 0) {
        if (turno % 2 === 0) {
            const accion = prompt("¿Qué deseas hacer? (atacar/curar)");
            if (accion === "atacar") {
                const daño = calcularDaño(jugador, maquina);
                maquina.vida -= daño;
                console.log(`Atacaste a ${maquina.nombre} con ${daño} de daño.`);
            } else if (accion === "curar" && curacionJugador) {
                jugador.vida += calcularCuracion(jugador);
                curacionJugador = false;
                console.log(`Te curaste ${calcularCuracion(jugador)} puntos de vida.`);
            }
        } else {
            const acciones = ["atacar", "curar"];
            const accion = acciones[Math.floor(Math.random() * acciones.length)];
            if (accion === "atacar") {
                const daño = calcularDaño(maquina, jugador);
                jugador.vida -= daño;
                console.log(`${maquina.nombre} te atacó con ${daño} de daño.`);
            } else if (accion === "curar" && curacionMaquina) {
                maquina.vida += calcularCuracion(maquina);
            }
        }
        turno++;
    }    
    if (jugador.vida > 0) {
        console.log("¡Has ganado!");
    } else {
        console.log("¡Has perdido!");
    }
}

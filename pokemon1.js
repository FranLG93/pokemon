
class Pokemon {
    constructor(nombre, tipo, vidaactual, vidamaxima, ataque, defensa, movimientos) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vidaactual = vidaactual;
        this.vidamaxima = vidamaxima;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimientos = movimientos; 
    }


    atacar(defensor, movimientoElegido) {
        const daño = Math.max(0, movimientoElegido.daño + this.ataque - defensor.defensa);
        defensor.vidaactual = Math.max(0, defensor.vidaactual - daño);
        console.log(`${this.nombre} usa ${movimientoElegido.nombre} y hace ${daño} de daño a ${defensor.nombre}.\n`);
        if (defensor.vidaactual === 0) {
            console.log(`${defensor.nombre} ha sido derrotado.\n`);
        } else {
            console.log(`${defensor.nombre} tiene ${defensor.vidaactual}/${defensor.vidamaxima} restantes.\n`);
        }
    }

    curar() {
        if (this.vidaactual < this.vidamaxima) {
            const curar = Math.floor(this.vidamaxima * 0.5);
            this.vidaactual = Math.min(this.vidamaxima, this.vidaactual + curar);
            console.log(`${this.nombre} ha recuperado ${curar} de vida. Ahora tiene ${this.vidaactual} de vida.\n`);
        } else {
            console.log(`${this.nombre} ya tiene toda su vida recuperada.\n`);
        }
    }

    estasmuerto() {
        return this.vidaactual <= 0;
    }
}
    


module.exports = Pokemon;

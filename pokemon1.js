


// Clase de Pokémon
class Pokemon {
    constructor(nombre, tipo, vidaactual, vidamaxima, ataque, defensa, movimiento) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vidaactual = vidaactual;
        this.vidamaxima = vidamaxima;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimiento = movimiento;
    }

    // Método Ataque
    atacar(objetivo) {
        const ataque = Math.floor(Math.random() * this.movimiento.length);
        const daño = Math.max(0, this.ataque - objetivo.defensa);
        objetivo.vidaactual = Math.max(0, objetivo.vidaactual - daño);
        console.log(`${this.nombre} ataca a ${objetivo.nombre} y le hace ${daño} de daño.\n`);
        if (objetivo.vidaactual === 0) {
            console.log(`${objetivo.nombre} ha sido derrotado\n`);
        } else {
            console.log(`${objetivo.nombre} tiene ${objetivo.vidaactual}/${objetivo.vidamaxima} restantes.\n`);
        }
    }

    // Método Curar
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
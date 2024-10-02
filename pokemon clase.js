//CLASE
class pokemon {
    constructor(nombre, tipo, vidaactual, vidamaxima, ataque, defensa, movimiento){
        this.nombre = nombre;
        this.tipo =tipo;
        this.vidaactual =vidaactual;
        this.vidamaxima = vidamaxima;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimiento = movimiento;
    }
    //METODO ATAQUE
  atacar(objetivo){
        const atacar = [Math.floor(Math.random() * this.movimiento.length)];
        const daño = Math.max(0,(this.ataque - objetivo.defensa) );
        objetivo.vidaactual = math.max(0, objetivo.vidaactual - daño);
        console.log('${this. nombre} ataca ${objetivo. nombre} y le hace ${daño} de daño.`');
        if (objetivo.vida===0) {
            console.log('${objetivo.nombre} ha sido derrotado');
        
        } else {
            console.log(`${objetivo.nombre} tiene ${objetivo.vidaactual}/${objetivo.vidamaxima} restantes.`);

        }

    }
    
    //METODO CURAR
   curar () {
     if(!this.vidaactual >= this.vidamaxima){
        const curar = Math.floor(this.vidamaxima * 0.5);
        this.vidaactual = Math.min(this.vidamaxima, this.vidaactual + curar);
        console.log(`${this. nombre} ha recuperado ${curar} de vida. Ahora tiene ${this. vidaactual} de vida.`);
     }else{
        console.log(`${this. nombre} ya tiene toda su vida recuperada.`);
     }
    
    }

}

//CREACION DE MOVIMIENTOS
const movimiento1 = new move('BOOOM!', 50);
const movimiento2 = new move('Parte huesos', 35);
const movimiento3 = new move('Rayo Hielo', 35);
const movimiento4 = new move('Impactrueno', 35);
const movimiento5 = new move('Hoja Afilada', 35);


//CREACION DE POKEMON
const Churumbel = new Pokemon('Churumbé', Type.FUEGO, 150, 60, 45, [movimiento1, movimiento2]);
const blastoise = new Pokemon('Blastoise', Type.AGUA, 160, 55, 50, [movimiento3]);
const pikachu = new Pokemon('Pikachu', Type.ELECTRICO, 100, 50, 30, [movimiento4]);
const venusaur = new Pokemon('Venusaur', Type.PLANTA, 155, 58, 48, [movimiento2, movimiento5]);
const snorlax = new Pokemon('Snorlax', Type.NORMAL, 200, 70, 65, [movimiento5]);
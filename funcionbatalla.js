const Pokemon = require('./pokemon1.js');
const Movimiento = require('./movimientos');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const movimiento1 = new Movimiento('BOOOM!', 50);
const movimiento2 = new Movimiento('Parte huesos', 35);
const movimiento3 = new Movimiento('Rayo Hielo', 35);
const movimiento4 = new Movimiento('Impactrueno', 35);
const movimiento5 = new Movimiento('Hoja Afilada', 35);

// Creacion de pokemon
const Churumbel = new Pokemon('Churumbel', 'Fuego', 150, 150, 80, 45, [movimiento1, movimiento2]);
const blastoise = new Pokemon('Blastoise', 'Agua', 160, 160, 55, 50, [movimiento3]);
const pikachu = new Pokemon('Pikachu', 'Eléctrico', 100, 100, 50, 30, [movimiento4]);
const venusaur = new Pokemon('Venusaur', 'Planta', 155, 155, 58, 48, [movimiento2, movimiento5]);
const snorlax = new Pokemon('Snorlax', 'Normal', 200, 200, 70, 65, [movimiento5]);

function batalla(pokemon1, pokemon2) {
    console.log(`\n¡Comienza la batalla entre ${pokemon1.nombre} y ${pokemon2.nombre}!\n`);

    function turno(atacante, defensor) {
        console.log(`Turno de ${atacante.nombre}`);
        console.log('Opciones:');
        console.log('1. Atacar');
        console.log('2. Curar');
        console.log('3. Defenderse');

        readline.question('¿Que quieres hacer? (1/2/3): ', (respuesta) => {
            switch (respuesta) {
                case '1':
                    console.log('Que ataque vas a utilizar:');
                    atacante.movimientos.forEach((mov, index) => {
                        console.log(`${index + 1}. ${mov.nombre} (${mov.daño} de daño)`);
                    });
                    readline.question('Selecciona el nummero del movimiento: ', (numero) => {
                        const indice = parseInt(numero) - 1;

                        if (indice >= 0 && indice < atacante.movimientos.length) {
                            const movimientoElegido = atacante.movimientos[indice];
                            atacante.atacar(defensor, movimientoElegido);

                            if (defensor.estasmuerto()) {
                                console.log(`${defensor.nombre} ha muertoo ¡${atacante.nombre} gana!`);
                                readline.close();
                                return; 
                            }

                          
                            console.log(`Es el turno de ${defensor.nombre} ahora.`);
                            const movimientoAleatorio = defensor.movimientos[Math.floor(Math.random() * defensor.movimientos.length)];
                            defensor.atacar(atacante, movimientoAleatorio);

                          
                            if (atacante.estasmuerto()) {
                                console.log(`${atacante.nombre} ha muerto. ¡${defensor.nombre} gana!`);
                                readline.close();
                                return; 
                            }

                           
                            turno(defensor, atacante);
                        } else {
                            console.log('Ese movimiento no se puede hacer, intentalo de nuevo.');
                            turno(atacante, defensor); 
                        }
                    });
                    break;
                case '2':
                    atacante.curar();
                   
                    console.log(`Es el turno de ${defensor.nombre} ahora.`);
                    const movimientoAleatorio = defensor.movimientos[Math.floor(Math.random() * defensor.movimientos.length)];
                    defensor.atacar(atacante, movimientoAleatorio);

                 
                    if (atacante.estasmuerto()) {
                        console.log(`${atacante.nombre} ha muerto ¡${defensor.nombre} gana!`);
                        readline.close();
                        return; 
                    }

                  
                    turno(defensor, atacante);
                    break;
                case '3':
                    atacante.defender();
                  
                    console.log(`Es el turno de ${defensor.nombre} ahora`);
                    const movimientoDefensor = defensor.movimientos[Math.floor(Math.random() * defensor.movimientos.length)];
                    defensor.atacar(atacante, movimientoDefensor);

                    
                    if (atacante.estasmuerto()) {
                        console.log(`${atacante.nombre} ha muerto ¡${defensor.nombre} gana!`);
                        readline.close();
                        return; 
                    }

                
                    atacante.resetDefensa();
                    
                    turno(defensor, atacante);
                    break;
                default:
                    console.log('Eso no se puede hacer');
                    turno(atacante, defensor);
                    break;
            }
        });
    }

    
    turno(pokemon1, pokemon2);
}


batalla(Churumbel, blastoise);

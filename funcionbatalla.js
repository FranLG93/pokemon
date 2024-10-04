const Pokemon = require('./pokemon1.js');
const movimiento = require('./movimientos.js');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Crear movimiento
const movimiento1 = new movimiento('BOOOM!', 50);
const movimiento2 = new movimiento('Parte huesos', 35);
const movimiento3 = new movimiento('Rayo Hielo', 35);
const movimiento4 = new movimiento('Impactrueno', 35);
const movimiento5 = new movimiento('Hoja Afilada', 35);

// Crear pokemon
const Churumbel = new Pokemon('Churumbel', 'Fuego', 150, 150, 80, 45, [movimiento1, movimiento2]);
const blastoise = new Pokemon('Blastoise', 'Agua', 160, 160, 55, 50, [movimiento3]);
const pikachu = new Pokemon('Pikachu', 'Eléctrico', 100, 100, 50, 30, [movimiento4]);
const venusaur = new Pokemon('Venusaur', 'Planta', 155, 155, 58, 48, [movimiento2, movimiento5]);
const snorlax = new Pokemon('Snorlax', 'Normal', 200, 200, 70, 65, [movimiento5]);

function batalla(pokemon1, pokemon2) {
    console.log(`\n¡Comienza la batalla entre ${pokemon1.nombre} y ${pokemon2.nombre}!\n`);

    function turno() {
        console.log(`Opciones: 
1. Atacar
2. Curar\n`);

        readline.question('¿Qué deseas hacer? \n', (respuesta) => {
            switch (respuesta) {
                case '1':
                    // Turno del Pokemon 1
                    pokemon1.atacar(pokemon2);
                    if (pokemon2.estasmuerto()) {
                        console.log(`${pokemon2.nombre} ha sido derrotado. ${pokemon1.nombre} gana!`);
                        readline.close();
                        return; 
                    }

                    // Turno del Pokemon 2
                    pokemon2.atacar(pokemon1);
                    if (pokemon1.estasmuerto()) {
                        console.log(`${pokemon1.nombre} ha sido derrotado. ${pokemon2.nombre} gana!`);
                        readline.close();
                        return; 
                    }
                    break;
                case '2':
                    pokemon1.curar();
                    break;
                default:
                    console.log('No se puede hacer');
                    break;
            }
            turno(); // Llamar a la función para el siguiente turno
        });
    }

    turno(); // Iniciar los turnos
}

// Iniciar la batalla entre Churumbel y Blastoise
batalla(Churumbel, blastoise);

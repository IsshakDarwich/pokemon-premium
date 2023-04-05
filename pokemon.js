const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const visited = new Set();
let x = 0;
let y = 0;

function move(direction) {
  switch (direction) {
    case 'N':
      y++;
      break;
    case 'S':
      y--;
      break;
    case 'E':
      x++;
      break;
    case 'O':
      x--;
      break;

    default: break;
  }

  // Verifica se a posição atual já está no SET
  const pos = `${x},${y}`;
  if (!visited.has(pos)) {
    visited.add(pos);
  }
}

rl.on('line', (movements) => {
  for (let i = 0; i < movements.length; i++) {
    move(movements[i]);
  }

  // O nº de pokemons é igual ao nº de casas na grelha
  console.log(visited.size);
  rl.close();
});
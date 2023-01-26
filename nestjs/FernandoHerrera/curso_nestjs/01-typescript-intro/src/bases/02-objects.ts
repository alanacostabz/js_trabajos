export const pokemonIds = [1, 20, 30, 34, 66];

interface Pokemon {
  id: number;
  name: string;
  age?: number; // opcional
}

export const pikachu: Pokemon = {
  id: 1,
  name: "Pikachu",
};

export const charmander: Pokemon = {
  id: 1,
  name: "Charmander",
};

// console.log(pikachu);

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, pikachu);

// console.log(pokemons);

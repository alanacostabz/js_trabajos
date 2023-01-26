import axios from "axios";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name} ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const moves = 10;
    const { data } = await axios.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/1`
    );
    console.log(data.moves);

    return data.moves;
  }
}

export const charmander = new Pokemon(1, "charmander");

// console.log(charmander.imageUrl);

// charmander.scream();
// charmander.speak();

// console.log(charmander.getMoves());
charmander.getMoves();
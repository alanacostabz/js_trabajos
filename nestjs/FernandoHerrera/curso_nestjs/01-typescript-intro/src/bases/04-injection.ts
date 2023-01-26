import {
  PokeApiAdapter,
  PokeApiFetchAdapter,
  HttpAdapter,
} from "../api/pokeApi.adapter";
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter // TODO: inyectar dependencias
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    // const { data } = await axios.get<PokeapiResponse>(
    //   "https://pokeapi.co/api/v2/pokemon/4"
    // );

    const data = await this.http.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    // console.log(data.moves);

    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApiAxios);
export const pikachu = new Pokemon(5, "Pikachu", pokeFetch);

charmander.getMoves();
pikachu.getMoves();

console.log(charmander);
console.log(pikachu);

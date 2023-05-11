import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import {
  POKEMON_DETAILS,
  PokemonDetailsService,
} from './pokemon-details.service';

describe('PokemonDetailsService', () => {
  let service: PokemonDetailsService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
    });
    service = TestBed.inject(PokemonDetailsService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should return pokemons details data', () => {
    const name: string = 'ditto';
    service.getPokemonDetails(name).subscribe((pokemonDetails) => {
      expect(pokemonDetails.name).toEqual('ditto');
    });

    const op = controller.expectOne(POKEMON_DETAILS);

    expect(op.operation.variables['name']).toEqual('ditto');

    op.flush({
      data: {
        pokemon: {
          id: 132,
          name: 'ditto',
          sprites: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
          },
          abilities: [
            {
              ability: {
                name: 'limber',
              },
            },
            {
              ability: {
                name: 'imposter',
              },
            },
          ],
          types: [
            {
              type: {
                name: 'normal',
              },
            },
          ],
          base_experience: 101,
          weight: 40,
          height: 3,
        },
      },
    });
  });
});

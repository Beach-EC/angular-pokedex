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
          name: 'ditto',
        },
      },
    });
  });
});

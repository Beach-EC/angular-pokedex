import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { POKEMONS, PokemonListService } from './pokemon-list.service';

describe('PokemonListService', () => {
  let service: PokemonListService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
    });
    service = TestBed.inject(PokemonListService);
    controller = TestBed.inject(ApolloTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should return list of pokemons', () => {
    service.getPokemons().subscribe((pokemons) => {
      expect(pokemons[0].name).toEqual('bulbasaur');
    });

    const op = controller.expectOne(POKEMONS);

    expect(op.operation.variables['offset']).toEqual(0);
    expect(op.operation.variables['limit']).toEqual(151);

    op.flush({
      data: {
        pokemons: {
          status: true,
          message: '',
          results: [
            {
              url: 'https://pokeapi.co/api/v2/pokemon/1/',
              name: 'bulbasaur',
              image:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
              artwork:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
              id: 1,
            },
          ],
        },
      },
    });
  });
});

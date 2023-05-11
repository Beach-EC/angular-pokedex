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
      expect(pokemons[0].name).toEqual('bulbasur');
    });

    const op = controller.expectOne(POKEMONS);

    expect(op.operation.variables['offset']).toEqual(0);
    expect(op.operation.variables['limit']).toEqual(151);

    op.flush({
      data: {
        pokemons: {
          results: [
            {
              name: 'bulbasur',
            },
          ],
        },
      },
    });
  });
});

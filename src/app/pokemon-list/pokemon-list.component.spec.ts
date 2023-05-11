import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let controller: ApolloTestingController;
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      imports: [ApolloTestingModule],
    }).compileComponents();

    controller = TestBed.inject(ApolloTestingController);

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    controller.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

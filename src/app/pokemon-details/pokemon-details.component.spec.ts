import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule,
} from 'apollo-angular/testing';
import { PokemonDetailsComponent } from './pokemon-details.component';

describe('PokemonDetailsComponent', () => {
  let controller: ApolloTestingController;
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailsComponent],
      imports: [ApolloTestingModule],
    }).compileComponents();

    controller = TestBed.inject(ApolloTestingController);

    fixture = TestBed.createComponent(PokemonDetailsComponent);
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

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameComponent } from '../../game/game/game.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'game', component: GameComponent },
          { path: 'home', component: HomeComponent },
        ]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On Submit for Start', () => {
    // spyOn(component.router, 'navigate').and.returnValue(Promise.resolve(true));
    expect(component.onSubmit('start')).toBeUndefined();
  });

  it('On Submit for about', () => {
    expect(component.onSubmit('about')).toBeUndefined();
  });

  it('onChange function', () => {
    expect(component.onChange(true)).toBeUndefined();
  });

  it('onChangeName function', () => {
    const data = {
      srcElement: {
        value: 'Nedzib',
      },
    };
    expect(component.onChangeName(data)).toBeUndefined();
  });
});

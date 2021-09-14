import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { GameComponent } from './game.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MetricPipe } from 'src/app/core/pipes/metric.pipe';
import { ClimaService } from 'src/app/services/clima.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  let WService: ClimaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameComponent, MetricPipe],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: WService,
          useValue: {
            weatherC: () =>
              of({
                temp: '22',
                opt1: '12',
                opt2: '23',
              }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    component.rightOpt = 1;
    component.payload.temp = true;
    WService = TestBed.inject(ClimaService);
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('On Submit', () => {
    component.onSubmit();
    expect(component).toBeTruthy();
  });

  it('onMap', () => {
    component.capitalId = 'Bogota';
    component.onMap();
    expect(component).toBeTruthy();
  });

  it('onSelect right option', () => {
    component.onSelect(1);
    expect(component).toBeTruthy();
  });

  it('onSelect bad option', () => {
    component.onSelect(2);
    expect(component).toBeTruthy();
  });

  it('on init with response', () => {
    spyOn(WService, 'weatherC')
    .and
    .callThrough();
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});

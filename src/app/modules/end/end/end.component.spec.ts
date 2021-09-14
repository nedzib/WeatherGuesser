import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EndComponent } from './end.component';

describe('EndComponent', () => {
  let component: EndComponent;
  let fixture: ComponentFixture<EndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On Submit for home', () => {
    component.onSubmit('home');
    expect(component).toBeTruthy();
  });

  it('On Submit for again', () => {
    component.onSubmit('again');
    expect(component).toBeTruthy();
  });

  it('On Submit for no action', () => {
    component.onSubmit('mock');
    expect(component).toBeTruthy();
  });

});

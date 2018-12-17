import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacasComponent } from './racas.component';

describe('RacasComponent', () => {
  let component: RacasComponent;
  let fixture: ComponentFixture<RacasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

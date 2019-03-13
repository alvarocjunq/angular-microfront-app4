import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocPoupancaComponent } from './poc-poupanca.component';

describe('PocPoupancaComponent', () => {
  let component: PocPoupancaComponent;
  let fixture: ComponentFixture<PocPoupancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocPoupancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocPoupancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

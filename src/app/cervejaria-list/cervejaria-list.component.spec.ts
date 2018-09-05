import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejariaListComponent } from './cervejaria-list.component';

describe('CervejariaListComponent', () => {
  let component: CervejariaListComponent;
  let fixture: ComponentFixture<CervejariaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejariaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejariaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejariaItemComponent } from './cervejaria-item.component';

describe('CervejariaItemComponent', () => {
  let component: CervejariaItemComponent;
  let fixture: ComponentFixture<CervejariaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejariaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejariaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

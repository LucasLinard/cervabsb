import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaItemComponent } from './cerveja-item.component';

describe('CervejaItemComponent', () => {
  let component: CervejaItemComponent;
  let fixture: ComponentFixture<CervejaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

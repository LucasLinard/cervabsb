
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaGridComponent } from './cerveja-grid.component';

describe('CervejaGridComponent', () => {
  let component: CervejaGridComponent;
  let fixture: ComponentFixture<CervejaGridComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CervejaGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CervejaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

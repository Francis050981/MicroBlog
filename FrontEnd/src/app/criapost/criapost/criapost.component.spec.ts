import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriapostComponent } from './criapost.component';

describe('CriapostComponent', () => {
  let component: CriapostComponent;
  let fixture: ComponentFixture<CriapostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriapostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriapostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

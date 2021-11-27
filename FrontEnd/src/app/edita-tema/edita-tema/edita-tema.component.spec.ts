import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTemaComponent } from './edita-tema.component';

describe('EditaTemaComponent', () => {
  let component: EditaTemaComponent;
  let fixture: ComponentFixture<EditaTemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaTemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

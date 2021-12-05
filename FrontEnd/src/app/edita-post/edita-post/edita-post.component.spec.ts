import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaPostComponent } from './edita-post.component';

describe('EditaPostComponent', () => {
  let component: EditaPostComponent;
  let fixture: ComponentFixture<EditaPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraloginComponent } from './cadastralogin.component';

describe('CadastraloginComponent', () => {
  let component: CadastraloginComponent;
  let fixture: ComponentFixture<CadastraloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

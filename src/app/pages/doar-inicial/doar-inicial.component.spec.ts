import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarInicialComponent } from './doar-inicial.component';

describe('DoarInicialComponent', () => {
  let component: DoarInicialComponent;
  let fixture: ComponentFixture<DoarInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoarInicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoarInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

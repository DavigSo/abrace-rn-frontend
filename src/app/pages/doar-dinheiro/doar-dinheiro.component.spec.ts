import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarDinheiroComponent } from './doar-dinheiro.component';

describe('DoarDinheiroComponent', () => {
  let component: DoarDinheiroComponent;
  let fixture: ComponentFixture<DoarDinheiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoarDinheiroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoarDinheiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

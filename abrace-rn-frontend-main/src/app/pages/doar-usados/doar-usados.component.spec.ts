import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarUsadosComponent } from './doar-usados.component';

describe('DoarUsadosComponent', () => {
  let component: DoarUsadosComponent;
  let fixture: ComponentFixture<DoarUsadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoarUsadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoarUsadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

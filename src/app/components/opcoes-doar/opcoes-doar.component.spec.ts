import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesDoarComponent } from './opcoes-doar.component';

describe('OpcoesDoarComponent', () => {
  let component: OpcoesDoarComponent;
  let fixture: ComponentFixture<OpcoesDoarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcoesDoarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpcoesDoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

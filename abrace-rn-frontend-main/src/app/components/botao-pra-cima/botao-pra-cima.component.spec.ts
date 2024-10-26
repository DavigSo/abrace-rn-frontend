import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPraCimaComponent } from './botao-pra-cima.component';

describe('BotaoPraCimaComponent', () => {
  let component: BotaoPraCimaComponent;
  let fixture: ComponentFixture<BotaoPraCimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoPraCimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoPraCimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

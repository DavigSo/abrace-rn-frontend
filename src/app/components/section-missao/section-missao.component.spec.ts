import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMissaoComponent } from './section-missao.component';

describe('SectionMissaoComponent', () => {
  let component: SectionMissaoComponent;
  let fixture: ComponentFixture<SectionMissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionMissaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionMissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

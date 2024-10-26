import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarLojinhaComponent } from './doar-lojinha.component';

describe('DoarLojinhaComponent', () => {
  let component: DoarLojinhaComponent;
  let fixture: ComponentFixture<DoarLojinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoarLojinhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoarLojinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

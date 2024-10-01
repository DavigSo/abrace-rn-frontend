import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobImageComponent } from './blob-image.component';

describe('BlobImageComponent', () => {
  let component: BlobImageComponent;
  let fixture: ComponentFixture<BlobImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlobImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlobImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

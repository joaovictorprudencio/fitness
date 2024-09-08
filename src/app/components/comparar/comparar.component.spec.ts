import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararComponent } from './comparar.component';

describe('CompararComponent', () => {
  let component: CompararComponent;
  let fixture: ComponentFixture<CompararComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompararComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

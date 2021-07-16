import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinaFooterComponent } from './nina-footer.component';

describe('NinaFooterComponent', () => {
  let component: NinaFooterComponent;
  let fixture: ComponentFixture<NinaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

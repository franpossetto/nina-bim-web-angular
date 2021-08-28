import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinaContributePageComponent } from './nina-contribute-page.component';

describe('NinaContributePageComponent', () => {
  let component: NinaContributePageComponent;
  let fixture: ComponentFixture<NinaContributePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinaContributePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinaContributePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

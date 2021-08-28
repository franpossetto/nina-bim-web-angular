import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinaReleasesPageComponent } from './nina-releases-page.component';

describe('NinaReleasesPageComponent', () => {
  let component: NinaReleasesPageComponent;
  let fixture: ComponentFixture<NinaReleasesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinaReleasesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinaReleasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinaInProgressMsgComponent } from './nina-in-progress-msg.component';

describe('NinaInProgressMsgComponent', () => {
  let component: NinaInProgressMsgComponent;
  let fixture: ComponentFixture<NinaInProgressMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NinaInProgressMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NinaInProgressMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownPanelComponent } from './down-panel.component';

describe('DownPanelComponent', () => {
  let component: DownPanelComponent;
  let fixture: ComponentFixture<DownPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

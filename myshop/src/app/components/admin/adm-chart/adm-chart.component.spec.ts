import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmChartComponent } from './adm-chart.component';

describe('AdmChartComponent', () => {
  let component: AdmChartComponent;
  let fixture: ComponentFixture<AdmChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

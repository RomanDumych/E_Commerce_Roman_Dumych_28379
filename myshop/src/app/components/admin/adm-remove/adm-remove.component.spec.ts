import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRemoveComponent } from './adm-remove.component';

describe('AdmRemoveComponent', () => {
  let component: AdmRemoveComponent;
  let fixture: ComponentFixture<AdmRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

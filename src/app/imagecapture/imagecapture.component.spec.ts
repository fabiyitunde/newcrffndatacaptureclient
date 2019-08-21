import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagecaptureComponent } from './imagecapture.component';

describe('ImagecaptureComponent', () => {
  let component: ImagecaptureComponent;
  let fixture: ComponentFixture<ImagecaptureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagecaptureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagecaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

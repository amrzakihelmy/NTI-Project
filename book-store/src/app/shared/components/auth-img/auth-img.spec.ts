import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthImg } from './auth-img';

describe('AuthImg', () => {
  let component: AuthImg;
  let fixture: ComponentFixture<AuthImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthImg],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthImg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

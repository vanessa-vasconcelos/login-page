import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessAuthorizedComponent } from './access-authorized.component';

describe('AccessAuthorizedComponent', () => {
  let component: AccessAuthorizedComponent;
  let fixture: ComponentFixture<AccessAuthorizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessAuthorizedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessAuthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

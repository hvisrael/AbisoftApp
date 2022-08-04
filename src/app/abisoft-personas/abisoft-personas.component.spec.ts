import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbisoftPersonasComponent } from './abisoft-personas.component';

describe('AbisoftPersonasComponent', () => {
  let component: AbisoftPersonasComponent;
  let fixture: ComponentFixture<AbisoftPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbisoftPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbisoftPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

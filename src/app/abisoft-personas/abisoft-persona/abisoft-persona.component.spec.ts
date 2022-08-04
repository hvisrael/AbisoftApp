import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbisoftPersonaComponent } from './abisoft-persona.component';

describe('AbisoftPersonaComponent', () => {
  let component: AbisoftPersonaComponent;
  let fixture: ComponentFixture<AbisoftPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbisoftPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbisoftPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

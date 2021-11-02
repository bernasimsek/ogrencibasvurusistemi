import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DgsBasvuruPage } from './dgs-basvuru.page';

describe('DgsBasvuruPage', () => {
  let component: DgsBasvuruPage;
  let fixture: ComponentFixture<DgsBasvuruPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DgsBasvuruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DgsBasvuruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

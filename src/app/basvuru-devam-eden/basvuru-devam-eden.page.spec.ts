import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasvuruDevamEdenPage } from './basvuru-devam-eden.page';

describe('BasvuruDevamEdenPage', () => {
  let component: BasvuruDevamEdenPage;
  let fixture: ComponentFixture<BasvuruDevamEdenPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasvuruDevamEdenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasvuruDevamEdenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

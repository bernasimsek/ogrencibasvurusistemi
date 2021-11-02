import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YatayGecisBasvuruPage } from './yatay-gecis-basvuru.page';

describe('YatayGecisBasvuruPage', () => {
  let component: YatayGecisBasvuruPage;
  let fixture: ComponentFixture<YatayGecisBasvuruPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YatayGecisBasvuruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YatayGecisBasvuruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

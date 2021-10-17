import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YazOkuluBasvuruPage } from './yaz-okulu-basvuru.page';

describe('YazOkuluBasvuruPage', () => {
  let component: YazOkuluBasvuruPage;
  let fixture: ComponentFixture<YazOkuluBasvuruPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ YazOkuluBasvuruPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YazOkuluBasvuruPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

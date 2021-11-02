import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BasvuruBitenlerPage } from './basvuru-bitenler.page';

describe('BasvuruBitenlerPage', () => {
  let component: BasvuruBitenlerPage;
  let fixture: ComponentFixture<BasvuruBitenlerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BasvuruBitenlerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BasvuruBitenlerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

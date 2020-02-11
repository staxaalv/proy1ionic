import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MelementsPage } from './melements.page';

describe('MelementsPage', () => {
  let component: MelementsPage;
  let fixture: ComponentFixture<MelementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MelementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

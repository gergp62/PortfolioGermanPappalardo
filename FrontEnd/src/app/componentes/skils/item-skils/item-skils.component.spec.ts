import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSkilsComponent } from './item-skils.component';

describe('ItemSkilsComponent', () => {
  let component: ItemSkilsComponent;
  let fixture: ComponentFixture<ItemSkilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSkilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSkilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

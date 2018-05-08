import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorComponent } from './navigator.component';
import { TreeViewerComponent } from '../tree-viewer/tree-viewer.component';

describe('NavigatorComponent', () => {
  let component: NavigatorComponent;
  let fixture: ComponentFixture<NavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigatorComponent,
        TreeViewerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

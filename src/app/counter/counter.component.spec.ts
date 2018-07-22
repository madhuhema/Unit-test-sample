import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // test increment function
  it('should increment the counter number by 1', () => {
    // Arrange
    const initialValue = component.counter;
    // Act
    component.increment();
    const newVal = component.counter;
    // Assert
    expect(newVal).toBeGreaterThan(initialValue);
  });
  // test decrement function
  it('should decrement the counter number by 1', () => {
    // Arrange
    const initialValue = component.counter;
    // Act
    component.decrement();
    const newVal = component.counter;
    // Assert
    expect(newVal).toBeLessThan(initialValue);
  });
  it('should display the counter number on screen after being incremented by one', () => {
    component.increment();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 2');
  });
  it('should display the counter number on screen after being decremented by one', () => {
    component.decrement();
    fixture.detectChanges();
    expect(htmlElement.textContent).toEqual('Number: 0');
  });
  it('should display the current number of counter', () => {
    // Assert that the text on the screen is number 1
    expect(htmlElement.textContent).toEqual('Number: 1');
  });
});

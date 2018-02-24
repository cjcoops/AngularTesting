import { TestBed, inject } from "@angular/core/testing";

import { Car } from "./car.service";
import { Engine } from "./engine.service";
import { Injectable } from "@angular/core";

// fake class
@Injectable()
class V8Engine {
  getHorsepower() {
    return 400;
  }

  getName() {
    return "V8 Engine";
  }
}

describe("Car", () => {
  let subject: Car;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Car,
        {
          provide: Engine,
          useClass: V8Engine
        }
      ]
    });

    // Mocking Engine return values
    spyOn(Engine.prototype, "getHorsepower").and.returnValue(400);
    spyOn(Engine.prototype, "getName").and.returnValue("V8 Engine");
  });

  beforeEach(
    inject([Car], (car: Car) => {
      subject = car;
    })
  );

  it("should display name with engine", () => {
    expect(subject.getName()).toEqual("Car with V8 Engine(400 HP)");
  });
});

import { TestBed, inject } from "@angular/core/testing";

import { Car } from "./car.service";
import { Engine } from "./engine.service";

describe("Car", () => {
  let subject: Car;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Car, Engine]
    });
  });

  beforeEach(inject([Car], (car: Car) => {
    subject = car;
  }));

  it("should display name with engine", () => {
    expect(subject.getName()).toEqual("Car with Basic engine(150 HP)");
  });
});

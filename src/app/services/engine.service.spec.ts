import { TestBed, inject } from "@angular/core/testing";

import { Engine } from "./engine.service";

describe("Engine", () => {
  let subject: Engine;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Engine]
    });
    subject = new Engine();
  });

  it(
    "should be created",
    inject([Engine], (service: Engine) => {
      expect(service).toBeTruthy();
    })
  );

  it("should return it's horsepower", () => {
    expect(subject.getHorsepower()).toEqual(150);
  });

  it("should return its name", () => {
    expect(subject.getName()).toEqual("Basic engine");
  });
});

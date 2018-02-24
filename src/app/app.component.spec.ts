import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { MyService } from "./my-service.service";
import { MyFakeService } from "./my-fake-service.service";
describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        providers: [{ provide: MyService, useClass: MyFakeService }]
      }).compileComponents();
    })
  );
  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as title 'app'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual("app");
    })
  );
  it(
    "should render title in a h1 tag",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector("h1").textContent).toContain(
        "Welcome to app!"
      );
    })
  );
  it(
    "should attach message from service to component",
    async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      expect(fixture.componentInstance.message).toBe("fake service");
    })
  );
});

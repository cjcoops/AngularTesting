import {async, inject, TestBed} from '@angular/core/testing';
import { LoginFormComponent } from "./login-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const expectedEmail = "test@test.com";
const expectedPassword = "passw0rd";

describe("Isolated", () => {
  let subject: LoginFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
  });

  beforeEach(
    inject([LoginFormComponent], (loginForm: LoginFormComponent) => {
      subject = loginForm;
    })
  );

  it("should send credentials on submit", () => {
    subject.submitted.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    subject.onSubmit({ email: expectedEmail, password: expectedPassword });
  });
});

describe("Shallow", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [LoginFormComponent],
        imports: [FormsModule, ReactiveFormsModule]
      });
      TestBed.compileComponents();
    })
  );

  it('should send credentials on submit', () => {
    let fixture = TestBed.createComponent(LoginFormComponent);
    let component: LoginFormComponent = fixture.componentInstance;
    let element = fixture.nativeElement;

    fixture.detectChanges();

    element.querySelector('#login-email').value = expectedEmail;
    element.querySelector('#login-email').dispatchEvent(new Event('input'));
    element.querySelector('#login-password').value = expectedPassword;
    element.querySelector('#login-password').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    component.submitted.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    element.querySelector('button[type="submit"]').click();
  });
});


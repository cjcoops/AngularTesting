import { inject, TestBed } from "@angular/core/testing";
import { GithubService } from "./github.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe("GithubService", () => {
  let githubService: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubService],
      imports: [HttpClientTestingModule]
    });

    githubService = TestBed.get(GithubService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(
    "should be created",
    inject([GithubService], (service: GithubService) => {
      expect(service).toBeTruthy();
    })
  );

  it("should get profile data of user", done => {
    const profileInfo = { login: "sonic", id: 325, name: "Tester" };

    githubService.getProfile("cjcoops").subscribe(res => {
      expect(res).toEqual(profileInfo);
      done();
    });

    const request = httpMock.expectOne("https://api.github.com/users/cjcoops");
    request.flush(profileInfo);

    httpMock.verify();
  });
});

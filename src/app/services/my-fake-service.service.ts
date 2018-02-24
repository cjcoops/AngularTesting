import { Injectable } from '@angular/core';
@Injectable()
export class MyFakeService{
  getMessage(){
    return 'fake service';
  }
}

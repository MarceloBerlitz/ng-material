import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AlertService {

  newAlert: EventEmitter<any> = new EventEmitter();

  constructor() { }
  
}

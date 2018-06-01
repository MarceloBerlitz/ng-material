import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pet } from '../models/pet';

@Injectable()
export class PetService {

  server: string = 'http://10.0.0.105:3000';

  delete(pet: Pet) {
    return this.http.delete(`${this.server}/pet/${pet.id}`)
  }

  getAll() {
    return this.http.get(`${this.server}/pet`)
  }

  getPage(page) {
    return this.http.get(`${this.server}/pet?_page=${page}`)
  }

  add(pet: Pet) {
    return this.http.post(`${this.server}/pet`, pet)
  }

  constructor(
    private http: HttpClient
  ) { }
}

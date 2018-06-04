import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pet } from '../models/pet';

@Injectable()
export class PetService {

  //server: string = 'http://10.0.0.105:3000';
  server = 'http://192.168.0.6:3000';

  delete(pet: Pet) {
    return this.http.delete(`${this.server}/pet/${pet.id}`)
  }

  getAll() {
    return this.http.get(`${this.server}/pet`)
  }

  getPage(page) {
    return this.http.get(`${this.server}/pet?_page=${page}`)
  }

  get(id: string) {
    return this.http.get(`${this.server}/pet/${id}`)
  }

  edit(pet: Pet, id) {
    return this.http.put(`${this.server}/pet/${id}`, pet)
  }

  add(pet: Pet) {
    return this.http.post(`${this.server}/pet/`, pet)
  }

  constructor(
    private http: HttpClient
  ) { }
}

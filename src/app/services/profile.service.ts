import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  
  getProfile(): Profile {

    var profile: Profile = {

      email: 'contato@gabriel.com',
      name: 'Gabriel Nabeta',
      whatsapp: '',
      linkedin: '',
    }

    return profile;
  } 
}

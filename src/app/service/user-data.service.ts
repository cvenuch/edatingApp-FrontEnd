import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.constants';
import { Users } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }


  getAllUsers(){
    return this.http.get<Users[]>(`${API_URL}/e-edating/api/v1/users/get/all`)
  }

}

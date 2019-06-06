import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{environment} from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:3000/api';
  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword:''
    //role:''
  }; 
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http:HttpClient) { }
  
 
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl1+'/register',user,this.noAuthHeader);
  }
 
  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl1 + '/authenticate', authCredentials,this.noAuthHeader);
  }
 setToken(token: string) {
    localStorage.setItem('token', token);
  }
 
  getToken() {
    return localStorage.getItem('token');
  }
 
  deleteToken() {
    localStorage.removeItem('token');
  }
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }
 
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
  getUserProfile() {
    return this.http.get(environment.apiBaseUrl1 + '/userProfile');
  }

  editBusiness(user) {
    
    return this
            .http
            .post(`${this.uri}/edit/`,user);
    }
}

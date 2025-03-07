import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Original method for fetching data from a URL
  fetchData(url: string): Observable<any> {
    return this.http.get(url);
  }

  // New method to get mock user data
  getUsers(): Observable<any[]> {
    // Mock data - replace with API call when ready
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];
    
    return of(users); // Returns an Observable of the users array
  }
  
  // Optional:
  getUserById(id: number): Observable<any> {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];
    
    const user = users.find(user => user.id === id);
    return of(user);
  }
}
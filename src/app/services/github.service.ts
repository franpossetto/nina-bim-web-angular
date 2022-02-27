import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class GitHubService {
  public data: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.data = new BehaviorSubject(null);
  }

  getDataFromGitHub(): Observable<any> {
    return this.http.get(
      'https://api.github.com/repos/franpossetto/Nina/releases'
    );
  }
}

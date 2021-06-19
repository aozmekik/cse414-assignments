import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Family } from '../data/family';
import { environment } from '../../../environments/environment';
import { GeneralService } from './general.service';
import { saveAs } from 'file-saver';



@Injectable({
  providedIn: 'root'
})
export class FamilyService extends GeneralService {

  constructor(private http: HttpClient) {
    super();
  }

  public getFamilies(): Promise<Family[]> {
    const url = `${this.apiBaseUrl}/admin/families`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Family[])
      .catch(this.handleError);
  }

  public createFamily(family: Family): Promise<Family> {
    const url = `${this.apiBaseUrl}/families/create`;
    return this.http
      .post(url, family)
      .toPromise()
      .then(response => response as Family)
      .catch(this.handleError);
  }

  public deleteFamily(family: Family): Promise<any> {
    const url = `${this.apiBaseUrl}/families/${family._id}`;
    return this.http
      .delete(url)
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  public updateFamily(family: Family): Promise<Family> {
    const url = `${this.apiBaseUrl}/families/${family._id}`;
    return this.http
      .put(url, family)
      .toPromise()
      .then(response => response as Family)
      .catch(this.handleError);
  }

}

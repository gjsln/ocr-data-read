import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { IdentityComponent } from './app.identity.component';
import { MyAdminUserList } from './app.myAdminList'
import { Configuration } from './app.constants';


@Injectable()
export class OCRDataService {
    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private _configuration: Configuration) { 
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    GetAllUserList = (): Observable<MyAdminUserList[]> => {
        return this.http.get(this.actionUrl + 'userlist.json')
            .map((response: Response) => <MyAdminUserList[]>response.json())
            .catch(this.handleError);
    }

    setImageData(data) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        return this.http.post(this.actionUrl, body, headers).map((res: Response) => res.json());
    }

    getIdentityInfo() {
        return this.http.get(this.actionUrl + 'identitydata.json').map((res: Response) => res.json());
    }

    getAddressInfo() {
        return this.http.get(this.actionUrl + 'addressdata.json').map((res: Response) => res.json());
    }

    getSalaryInfo() {
        return this.http.get(this.actionUrl + 'salarydata.json').map((res: Response) => res.json());
    }

    getUserInfo() {
        return this.http.get(this.actionUrl + 'userinfo.json').map((res: Response) => res.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
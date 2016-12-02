import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
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
    public GetAllUserList = (): Observable<MyAdminUserList[]> => {
        return this.http.get(this.actionUrl + 'userlist.json')
            .map((response: Response) => <MyAdminUserList[]>response.json())
            .catch(this.handleError);
    }

    getIdentityInfo() {
        return this.http.get('./app/data/identitydata.json').map((res: Response) => res.json());
    }

    getAddressInfo() {
        return this.http.get('./app/data/addressdata.json').map((res: Response) => res.json());
    }

    getSalaryInfo() {
        return this.http.get('./app/data/salarydata.json').map((res: Response) => res.json());
    }

    /*getUserList() {
        return this.http.get('./app/data/userlist.json').map((res: Response) => res.json());
    }*/

    getUserInfo() {
        return this.http.get('./app/data/userinfo.json').map((res: Response) => res.json());
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
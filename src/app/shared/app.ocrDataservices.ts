import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { IdentityComponent } from './app.identity.component';


@Injectable()
export class OCRDataService {
    constructor(private http: Http) { }
    getIdentityInfo() {
        return this.http.get('./app/data/identitydata.json').map((res: Response) => res.json());
    }

    getAddressInfo() {
        return this.http.get('./app/data/addressdata.json').map((res: Response) => res.json());
    }

    getSalaryInfo() {
        return this.http.get('./app/data/salarydata.json').map((res: Response) => res.json());
    }

    getUserList() {
        return this.http.get('./app/data/userlist.json').map((res: Response) => res.json());
    }

    getUserInfo() {
        return this.http.get('./app/data/userinfo.json').map((res: Response) => res.json());
    }

}
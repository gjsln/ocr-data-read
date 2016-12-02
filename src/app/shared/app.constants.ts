import { Injectable } from '@angular/core';
 
@Injectable()
export class Configuration {
    public Server: string = "http://localhost:4200/";
    public ApiUrl: string = "app/data/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
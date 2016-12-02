import { Component } from '@angular/core';
import { OCRDataService } from './app.ocrDataservices';
import { MyAdminUserList } from './app.myAdminList';

@Component({
	selector: 'adminlist',
	providers: [OCRDataService],
	templateUrl: './adminlist.html',
	styleUrls: ['app.adminlist.less']
})
export class AdminListComponent {
	constructor(private _OCRDataService: OCRDataService) { }

	public userData: MyAdminUserList [];
	public userLength: any;

	ngOnInit() {
		this._OCRDataService
		.GetAllUserList()
		.subscribe(
			(data:MyAdminUserList[]) => this.userData = data,
                error => console.log("Server Data Error: "+ error),
                () => console.log('Sucess Data request'));
		//this.userLength = userData.length;
		//this.categories.filter((item, index) => index > 2 )
	}
}

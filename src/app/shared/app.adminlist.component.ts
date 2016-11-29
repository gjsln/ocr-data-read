import { Component } from '@angular/core';
import { OCRDataService } from './app.ocrDataservices';

@Component({
	selector: 'adminlist',
	providers: [OCRDataService],
	templateUrl: './adminlist.html',
	styleUrls: ['app.adminlist.less']
})
export class AdminListComponent {
	constructor(private _OCRDataService: OCRDataService) { }

	public userData: any;
	public userLength: any;

	ngOnInit() {
		this._OCRDataService.getUserList().subscribe(
			// the first argument is a function which runs on success
			data => { this.userData = data },
			// the second argument is a function which runs on error
			err => console.error(err),
			// the third argument is a function which runs on completion
			() => console.log('Done Loading user list'),
		);
		//this.userLength = userData.length;
		//this.categories.filter((item, index) => index > 2 )
	}
}

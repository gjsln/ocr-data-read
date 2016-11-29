import { Component } from '@angular/core';
import { OCRDataService } from './app.ocrDataservices';

@Component({
	selector: 'identity',
	providers: [OCRDataService],
	templateUrl: './identityproof.html',
	styleUrls: ['app.imagecrop.less']
})
export class IdentityComponent {

	constructor(private _OCRDataService: OCRDataService) { }

	fName: string;
	mName: string;
	lName: string;
	fatherName: string;
	dob: string;
	panNo: string;

	getIdentityInfo() {
		this._OCRDataService.getIdentityInfo().subscribe(
			data => {
				this.fName = data.fname;
				this.mName = data.mname;
				this.lName = data.lname;
				this.fatherName = data.fathername;
				this.dob = data.dob;
				this.panNo = data.panno;
			}
		);
	}
}



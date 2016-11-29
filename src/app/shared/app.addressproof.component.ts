import { Component } from '@angular/core';
import { OCRDataService } from './app.ocrDataservices';

@Component({
	selector: 'addressproof',
	providers: [OCRDataService],
	templateUrl: './addressproof.html',
	styleUrls: ['app.imagecrop.less']	
})
export class AddressProofComponent {
    
	constructor(private _OCRDataService: OCRDataService) { }

	fatherName: string;
	motherName: string;
	spouseName: string;
	address: string;
	oldppNumber: string;
	issueDate: string;
	issuePlace: string;
	fileNo : string;

	getAddressInfo() {
		
		this._OCRDataService.getAddressInfo().subscribe(
			data => {
				this.fatherName = data.fathername;
				this.motherName = data.mothername;
				this.spouseName = data.spousename;
				this.address = data.address;
				this.oldppNumber = data.oldppnumber;
				this.issueDate = data.issuedate;
				this.issuePlace = data.issueplace;
				this.fileNo = data.fileno;
			}
		);
	}
}

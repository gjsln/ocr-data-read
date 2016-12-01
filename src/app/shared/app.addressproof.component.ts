import { Component, ViewChild } from '@angular/core';
import { OCRDataService } from './app.ocrDataservices';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
	selector: 'addressproof',
	providers: [OCRDataService],
	templateUrl: './addressproof.html',
	styleUrls: ['app.imagecrop.less']	
})
export class AddressProofComponent {
	@ViewChild('myModal')
	modal: ModalComponent;

	constructor(private _OCRDataService: OCRDataService) { }

	imageFile: boolean;

	public fileChange(fileInput: any) {
		if (fileInput.target.files && fileInput.target.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e: any) {
				//this.file_srcs = e.target.result;
				$('#ocrimage').attr('src', e.target.result);
				//console.log("Base 64 Data: ", (e.target.result.replace(/^data:image\/(png|jpg);base64,/, '')));
			}
			reader.readAsDataURL(fileInput.target.files[0]);
			this.modal.close();
			this.imageFile = true;
		}
	}
	
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

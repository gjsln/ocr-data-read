import { Component, ViewChild } from '@angular/core';
import { OCRDataService } from './app.ocrDataservices';
import { Observable } from 'rxjs/Rx';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
	selector: 'identity',
	templateUrl: './identityproof.html',
	styleUrls: ['app.imagecrop.less'],
	providers: [OCRDataService]
})
export class IdentityComponent {
	@ViewChild('myModal')
	modal: ModalComponent;

	constructor(private _OCRDataService: OCRDataService) { }

	file_srcs: string;
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

	fName: string;
	mName: string;
	lName: string;
	fatherName: string;
	dob: string;
	panNo: string;

	getIdentityInfo() {
		this.file_srcs = ($('#ocrimage').attr('src')).replace(/^data:image\/(png|jpg);base64,/, '');
		let reqBody = {
			"customer_id":"",
            "document_type":"id_proof",
			"base64_string": this.file_srcs
		};
		this._OCRDataService.setImageData(reqBody).subscribe(
			data => {
				if (this.file_srcs) {
					this.getOcrData;
				}
				return true;
			},
			error => {
				console.error("Error Request");
				return Observable.throw(error);
			}
		);
	}
	getOcrData() {
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



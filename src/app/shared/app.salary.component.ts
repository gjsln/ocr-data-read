import { Component, ViewChild } from '@angular/core';
import { OCRDataService } from './app.ocrDataservices';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
	selector: 'salary',
	providers: [OCRDataService],
	templateUrl: './salaryproof.html',
	styleUrls: ['app.imagecrop.less']
})
export class SalaryComponent {
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

	employerName : string;
	location : string;
	payslipMonth : string;
	employeeCode : string;
	totalEarnings : string;
	totalDeductions : string;
	netPay : string;

	getSalaryInfo() {
		this._OCRDataService.getSalaryInfo().subscribe(
			data => {
				this.employerName = data.employername;
				this.location = data.location;
				this.payslipMonth = data.payslipmonth;
				this.employeeCode = data.empcode;
				this.totalEarnings = data.totalearnings;
				this.totalDeductions = data.totaldeductions;
				this.netPay = data.netpay;
			}
		);
	}

}
	
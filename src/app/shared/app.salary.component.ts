import { Component } from '@angular/core';
import { OCRDataService } from './app.ocrDataservices';

@Component({
	selector: 'salary',
	providers: [OCRDataService],
	templateUrl: './salaryproof.html',
	styleUrls: ['app.imagecrop.less']
})
export class SalaryComponent {
    
	constructor(private _OCRDataService: OCRDataService) { }

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
	
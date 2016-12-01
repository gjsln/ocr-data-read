import { Component, OnInit} from '@angular/core';
import { OCRDataService } from './app.ocrDataservices';

@Component({
	selector: 'user-info',
	templateUrl: './userinfo.html',
	providers: [OCRDataService]
})
export class UserInfoComponent implements OnInit  {

	constructor(private _OCRDataService: OCRDataService) { }

	fName: string;
	mName: string;
	lName: string;
	dob: string;
	panNo: string;
	fatherName: string;
	motherName: string;

	address: string;
	city:string;
	state:string;
	zip:string;
	mobile:string;
	emailid:string;
	
	employerName : string;
	location : string;
	payslipMonth : string;
	employeeCode : string;
	totalEarnings : string;
	totalDeductions : string;
	netPay : string;

	ngOnInit() {
		this._OCRDataService.getUserInfo().subscribe(
			data => {
				this.fName = data.fname;
				this.mName = data.mname;
				this.lName = data.lname;
				this.dob = data.dob;
				this.panNo = data.panno;
				this.fatherName = data.fathername;
				this.motherName = data.mothername;
				this.address = data.address;
				this.city = data.city;
				this.state = data.state;
				this.zip = data.zip;
				this.mobile = data.mobile;
				this.emailid = data.emailid;
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

import { Component, ChangeDetectorRef } from '@angular/core';
import { OCRDataService } from './app.ocrDataservices';

@Component({
	selector: 'identity',
	providers: [OCRDataService],
	templateUrl: './identityproof.html',
	styleUrls: ['app.imagecrop.less']
})
export class IdentityComponent {

	public file_srcs: string[] = [];

	constructor(private _OCRDataService: OCRDataService, private changeDetectorRef: ChangeDetectorRef) { }

	// This is called when the user selects new files from the upload button
	fileChange(input) {
		this.readFiles(input.files);
	}

	readFile(file, reader, callback) {
		// Set a callback funtion to fire after the file is fully loaded
		reader.onload = () => {
			// callback with the results
			callback(reader.result);
		}

		// Read the file
		reader.readAsDataURL(file);
	}

	readFiles(files) {
		// Create the file reader
		let reader = new FileReader();

		// If there is a file
		if (files) {
			// Start reading this file
			this.readFile(files[0], reader, (result) => {
				// After the callback fires do:
				this.file_srcs.push(result);
				console.log("Base 64 Data: ", (result.replace(/^data:image\/(png|jpg);base64,/, '')));
			});
		} else {
			// When all files are done This forces a change detection
			this.changeDetectorRef.detectChanges();
		}
	}

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



import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }
  downloadFile(filename: string): void {
    this._service
      .download(filename)
      .subscribe(blob => saveAs(blob, filename));
  }

}

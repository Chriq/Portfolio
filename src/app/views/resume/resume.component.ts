import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import  {MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-resume',
  imports: [MatButtonModule, MatIconModule, NgxExtendedPdfViewerModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  constructor(private http: HttpClient) {}

  download() {
    let url = "Resume.pdf";
    this.http.get(url, { responseType: 'blob'}).subscribe((response) => {
      let blob: Blob = new Blob([response], {type: 'application/blob'});
      let blobUrl = window.URL.createObjectURL(blob);
      this.createDownloadAnchor(blobUrl);
    });
  }

  createDownloadAnchor(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = "ChristianCookResume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

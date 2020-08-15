import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  statusBD1 = 'Validando...';
  statusBD2 = 'Validando...';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getStatus();
  }

  private getStatus(){
    this.dataService.getDatabaseStatus()
      .subscribe(data => {
        console.log(data)
        this.statusBD1 = data.status;
      });
    // this.dataService.getDatabaseStatus2()
    //   .subscribe(data => {
    //     console.log(data)
    //     this.statusBD2 = data.status;
    //   });
  }
}

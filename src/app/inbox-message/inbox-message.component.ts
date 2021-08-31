import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  id: number;
  title: string;
  body: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, title: 'Hydrogen', body: 'lorem36', date: '2021-08-20T19:40:36Z'},
  {id: 2, title: 'Helium', body: "4.0026", date: '2021-08-20T19:40:36Z'},
  {id: 3, title: 'Lithium', body: '6.941', date: '2021-08-20T19:40:36Z'},
  {id: 4, title: 'Beryllium', body: '9.0122', date: '2021-08-20T19:40:36Z'},
  {id: 5, title: 'Boron', body: '10.811', date: '2021-08-20T19:40:36Z'},
  {id: 6, title: 'Carbon', body: '12.0107', date: '2021-08-20T19:40:36Z'},
  {id: 7, title: 'Nitrogen', body: '14.0067', date: '2021-08-20T19:40:36Z'},
  {id: 8, title: 'Oxygen', body: '15.999', date: '2021-08-20T19:40:36Z'},
  {id: 9, title: 'Fluorine', body: '18.9984', date: '2021-08-20T19:40:36Z'},
  {id: 10, title: 'Neon', body: '20.1797', date: '2021-08-20T19:40:36Z'},
];




@Component({
  selector: 'app-inbox-message',
  templateUrl: './inbox-message.component.html',
  styleUrls: ['./inbox-message.component.scss']
})


export class InboxMessageComponent implements OnInit {

  constructor() { }


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}

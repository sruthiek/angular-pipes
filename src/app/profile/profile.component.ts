import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

// public curentdate:Date=new Date();

  public students: any[] = [
    {
      "id": "std1",
      "Name": "MARK",
      "Gender": "Male",
      "Address": "punathil house",
      "Fess":30000,
      "Mark":1,
      "DOB":'5/16/1997'
    },

    {
      "id":"std2",
      "Name": "MALAVIKA",
      "Gender": "Female",
      "Address": "sruthilayam house",
      "Fess":20000,
      "Mark":0.9,
      "DOB":'2/3/2000'
    },

    {
      "id": "std3",
      "Name": "SRUTHI",
      "Gender": "Female",
      "Address": "karollathi house",
      "Fess":15000,
      "Mark":0.6,
      "DOB":'12/9/1997'
    },

    {
      "id":"std4",
      "Name": "JOHN",
      "Gender": "Male",
      "Address": "makkuni house",
      "Fess":45000,
      "Mark":0.7,
      "DOB":'10/9/1995'
    }
  ];


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userData: any = {};
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  userList = [
    {
      name: "Richard Lovelace",
      date: "December 10, 1815",
      lang: "Spanish, Latin",
      gender: "Male"
    },
    {
      name: "Grace Hopper",
      date: "December 9, 1906",
      lang: "English (UK)",
      gender: "Female"
    },
    {
      name: "Margaret Hamilton",
      date: "August 17, 1936",
      lang: "English (US) , French",
      gender: "Female"
    },
    {
      name: "Glenn Clarke",
      date: "June 24, 1917",
      lang: "English (UK)",
      gender: "Female"
    },
  ];
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.dropdownList = [
      { "id": 1, "itemName": "English" },
      { "id": 2, "itemName": "Marathi" },
      { "id": 3, "itemName": "Hindi" },


    ];

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Languages",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  sendUserData() {
    this.userData.Languages = this.selectedItems;
    console.log("data", JSON.stringify(this.userData));
    $('#addUserModal').modal('hide');
    this.router.navigate(['']);

  }
  onItemSelect(item: any) {
    // console.log(item);
    // console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    // console.log(item);
    // console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    // console.log(items);
  }
  onDeSelectAll(items: any) {
    // console.log(items);
  }
}

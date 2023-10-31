import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isSidenavOpen = true;

  constructor(public storageService: StorageService) { }
  ngOnInit(): void {
  }
  deslogar(){
    this.storageService.clean();
  }
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
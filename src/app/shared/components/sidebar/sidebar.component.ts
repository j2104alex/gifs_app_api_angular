import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService:GifsService){
  }

  get tags():string[]{
    return this.gifsService.tagsHistory;
  }

  searchTag(tag:string):void{
    this.gifsService.searchTags(tag);
  }

  //Inyectar el servicio y en el html
  //Duplicr el button en ngfor dependiendo de
  //cuantos elementos tiene el servicio

}

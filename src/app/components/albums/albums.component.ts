import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit{
  albums: any;
  constructor(
    private photosService: PhotosService
  ){}

  ngOnInit(): void {
    this.albums = this.photosService.getAlbums()
  }

}

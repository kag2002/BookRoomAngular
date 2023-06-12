import { Component } from '@angular/core';
import { RoomService } from 'src/app/PhongDaDat/room.service';
@Component({
  selector: 'app-phongdadat',
  templateUrl: './phongdadat.component.html',
  styleUrls: ['./phongdadat.component.css'],
  providers: [RoomService],
})
export class PhongdadatComponent {}

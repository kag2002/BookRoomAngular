import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/PhongDaDat/room.model';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-list-room-item',
  templateUrl: './list-room-item.component.html',
  styleUrls: ['./list-room-item.component.css'],
})
export class ListRoomItemComponent implements OnInit {
  rooms: Room[];
  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
  }
}

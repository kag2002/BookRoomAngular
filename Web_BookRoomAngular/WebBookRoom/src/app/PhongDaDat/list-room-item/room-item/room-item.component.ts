import { Component, Input } from '@angular/core';
import { Room } from '../../room.model';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css'],
})
export class RoomItemComponent {
  @Input() room: Room;
}

import { EventEmitter, Injectable } from '@angular/core';
import { Room } from './room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private rooms: Room[] = [
    new Room(
      1,
      'John',
      113,
      new Date('2023-06-12'),
      new Date('2023-07-12'),
      3,
      3,
      'ltk@gmail.com',
      1
    ),
    new Room(
      1,
      'John',
      113,
      new Date('2023-08-12'),
      new Date('2023-09-12'),
      3,
      3,
      'ltk@gmail.com',
      1
    ),
  ];

  getRooms() {
    //.slice() 0 đối số trả về mảng copy y hệt mảng gốc
    return this.rooms.slice();
  }
  getRoom(id: number) {
    return this.rooms[id];
  }
  constructor() {}
}

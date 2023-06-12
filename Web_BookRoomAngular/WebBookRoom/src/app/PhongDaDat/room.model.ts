export class Room {
  id: number = 0;
  name: string;
  phoneNumber: number;
  start: Date;
  end: Date;
  adultNumber: number;
  childrenNumber: number;
  email: string;
  roomsNumber: number;
  constructor(
    id: number,
    name: string,
    phoneNumber: number,
    start: Date,
    end: Date,
    adultNumber: number,
    childrenNumber: number,
    email: string,
    roomsNumber: number
  ) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.start = start;
    this.end = end;
    this.adultNumber = adultNumber;
    this.childrenNumber = childrenNumber;
    this.email = email;
    this.roomsNumber = roomsNumber;
  }
}

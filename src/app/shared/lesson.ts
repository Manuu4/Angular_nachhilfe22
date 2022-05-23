import { Course } from "./course";
import {User} from "./user";
export { Course } from "./course";
export {User} from "./user";

export class Lesson {
  constructor(
    //  id ist string weil es sonst ständig fehler gab, wenn die id in der url mitgegeben werden sollte.
    //  -> "number cant be assigned type any | string | ...."
    //  Das war einfach mega nervig und hat unendlich viel Zeit verschwendet
    public id: string,
    public title: string,
    public description: string,
    public taker: string,
    public status: string,
    public user: User,
    public course: Course,
    public timeslot1: Date,
    public timeslot2?: Date,
    public truetimeslot?: Date

  ) {

  }
}

import { BaseLocation } from "./BaseLocation";

export class MismatchedBedroom extends BaseLocation {
  enter(): void {
    throw new Error("Method not implemented.");
  }
}

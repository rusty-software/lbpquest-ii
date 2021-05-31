import { BaseLocation } from "./BaseLocation";
import { LocationKey } from "./LocationKey";

export class BBQTrailer extends BaseLocation {
  public id = LocationKey.BBQTrailer;
  public title = "Barbeque Smoker Trailer";
  public descriptionText =
    "The trailer is covered with an angled metal roof, bright red (or so Phil thinks -- it could also be green or brown). The more important fact, though, is that there are two smokers on board the trailer: one on the left, and one on the right. Something looks... odd... about those smokers, aside from the fact that they're both filthy in all the wrong ways.\n\nTo your northeast is a shed, and north of you is the fire pit.";
}

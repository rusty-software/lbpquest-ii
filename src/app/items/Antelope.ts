import { BaseItem } from "./BaseItem";
import { ItemKey } from "./ItemKey";
import { GameEngine } from "../GameEngine";

export class Antelope extends BaseItem {
  public id = ItemKey.Antelope;
  public name = "antelope";
  public isShown = true;
  public customVerbs = new Map<string, (gameEngine: GameEngine) => string>([
    ["talk to", this.chat],
    ["speak to", this.chat],
  ]);

  public canTake(gameEngine: GameEngine): boolean {
    return false;
  }

  public take(gameEngine: GameEngine): string {
    return "You consider taking the antelope, but don't want the other taxidermy to get jealous. Leaving it there is a better choice.";
  }

  public drop(gameEngine: GameEngine): string {
    return "";
  }

  public examine(gameEngine: GameEngine): string {
    return "The antelope has a distant look on its face even as it seems to gaze at you, as if it dreams of wide open fields or hilly climes.\n\nAfter a moment, its mouth opens in a huge yawn. \"Sorry brah, like I completely spaced out for a second there. I'm thuh Lord of thuh Mounted Antelopes, but I don't take thuh title thin' super seriously. Do you wanna to talk to me or somethin'?";
  }

  public use(gameEngine: GameEngine): string {
    return this.chat(gameEngine);
  }

  public chat(gameEngine: GameEngine): string {
    return "The antelope bobs its head up and down as if to an inner groove you suddenly wish you could hear. \"Like, there are three trophies related to shootin' abilities: a pool cue ball, man somethin' about hittin' a bullseye, mostly and proof of gettin' a hole in one. Don't ask me where, fer shure because I don't know. Bitchin' luck! It'll be... awesome!\"";
  }
}

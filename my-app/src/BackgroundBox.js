import "./animation_scss/background-box-styles.scss";
import { MeteorBlue } from "./graphic_components/MeteorBlue";
import { MeteorPurple } from "./graphic_components/MeteorPurple";

export default function BackgroundBox() {
  return (
    <div className="background-box">
      <div className="element meteorBlue meteorB-ani-1">
        <MeteorBlue />
      </div>
      <div className="element meteorBlue meteorB-ani-2">
        <MeteorBlue />
      </div>
      <div className="element meteorPurple meteorP-ani-1">
        <MeteorPurple />
      </div>
      <div className="element meteorPurple meteorP-ani-2">
        <MeteorPurple />
      </div>
    </div>
  );
}

import { elementCardProps } from "../../utils/componentsProps";
import './elementCard.css'

export const ElementCard = ({
  name
}: elementCardProps) => {
  return (
    (name == "grass")
    ? <div className="element-box text-center grass">
      {name}
    </div>
    : (name == "poison")
    ? <div className="element-box text-center text-white poison">
      {name}
    </div>
    : (name == "fire")
    ? <div className="element-box text-center text-white fire">
      {name}
    </div>
    : (name == "flying")
    ? <div className="element-box text-center flying">
      {name}
    </div>
    : (name == "water")
    ? <div className="element-box text-center text-white water">
      {name}
    </div>
    : (name == "bug")
    ? <div className="element-box text-center text-white bug">
      {name}
    </div>
    : (name == "normal")
    ? <div className="element-box text-center normal">
      {name}
    </div>
    : (name == "electric")
    ? <div className="element-box text-center electric">
      {name}
    </div>
    : <div className="element-box text-center bg-dark">
      {name}
    </div>
  )
}

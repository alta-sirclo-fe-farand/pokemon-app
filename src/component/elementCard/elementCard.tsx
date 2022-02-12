import { elementCardProps } from "../../utils/componentsProps";
import './elementCard.css'

export const ElementCard = ({
  name
}: elementCardProps) => {
  return (
    (name === "grass")
    ? <div className="element-box text-center grass">
      {name}
    </div>
    : (name === "poison")
    ? <div className="element-box text-center text-white poison">
      {name}
    </div>
    : (name === "fire")
    ? <div className="element-box text-center text-white fire">
      {name}
    </div>
    : (name === "flying")
    ? <div className="element-box text-center flying">
      {name}
    </div>
    : (name === "water")
    ? <div className="element-box text-center text-white water">
      {name}
    </div>
    : (name === "bug")
    ? <div className="element-box text-center text-white bug">
      {name}
    </div>
    : (name === "normal")
    ? <div className="element-box text-center normal">
      {name}
    </div>
    : (name === "electric")
    ? <div className="element-box text-center electric">
      {name}
    </div>
    : (name === "ground")
    ? <div className="element-box text-center ground">
      {name}
    </div>
    : (name === "fairy")
    ? <div className="element-box text-center fairy">
      {name}
    </div>
    : (name === "fighting")
    ? <div className="element-box text-center text-white fighting">
      {name}
    </div>
    : (name === "psychic")
    ? <div className="element-box text-center text-white psychic">
      {name}
    </div>
    : (name === "rock")
    ? <div className="element-box text-center text-white rock">
      {name}
    </div>
    : (name === "steel")
    ? <div className="element-box text-center steel">
      {name}
    </div>
    : (name === "ice")
    ? <div className="element-box text-center ice">
      {name}
    </div>
    : (name === "ghost")
    ? <div className="element-box text-center text-white ghost">
      {name}
    </div>
    : (name === "dragon")
    ? <div className="element-box text-center text-white dragon">
      {name}
    </div>
    : (name === "dark")
    ? <div className="element-box text-center text-white dark">
      {name}
    </div>
    : <div className="element-box text-center">
      {name}
    </div>
  )
}

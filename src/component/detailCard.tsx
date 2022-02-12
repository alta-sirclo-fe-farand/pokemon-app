import { detailCardProps } from '../utils/componentsProps';
import { ElementCard } from './elementCard/elementCard';

export const DetailCard = ({
  name,
  types,
  moves
}: detailCardProps) => {
  return (
    <>
      <div className="card" style={{width: "550px"}}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Type</h6>
          {types
            ? <div className="d-flex">
              {types.map((type, index: number) => (
                <div key={index}>
                  <ElementCard name={type} />
                </div>
              ))}
            </div>
            : <div className="d-flex">{"Not Available"}</div>
          }
          <h6>Move</h6>
          {moves
            ? <div className="d-flex">
              {moves.map((move, index: number) => (
                <div key={index} className="container">
                  {move}
                </div>
              ))}
            </div>
            : <div className="d-flex">{"Not Available"}</div>
          }
        </div>
      </div>
    </>
  )
}

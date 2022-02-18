import { detailCardProps } from '../utils/componentsProps';
import { ElementCard } from './elementCard/elementCard';

export const DetailCard = ({
  name,
  image,
  types,
  moves
}: detailCardProps) => {
  return (
    <>
      <div className="card" style={{width: "700px"}}>
        <div className="row w-100">
          <div className="w-25 mx-2 d-flex justify-content-center align-items-center">
            <img src={image} alt="Pokemon Image" width="150px" height="150px" style={{border: "2px solid", borderRadius: "20px", padding: "10px"}}/>
          </div>
          <div className="card-body w-50">
            <h5 className="card-title">{name}</h5>
            <h6>Type</h6>
            <div className="d-flex">
              {types?.map((type, index: number) => (
                <div key={index}>
                  <ElementCard name={type} />
                </div>
              ))}
            </div>
            <h6>Move</h6>
            <div className="d-flex">
              {moves?.map((move, index: number) => (
                <div key={index} className="container">
                  {move}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

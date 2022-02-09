import { detailCardProps } from '../utils/componentsProps';

export const DetailCard = ({
  name,
  types,
  moves
}: detailCardProps) => {
  return (
    <>
      <div className="card" style={{width: "400px"}}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{types[0]}, {types[1]}</p>
          <p>{moves[0]}, {moves[1]}</p>
        </div>
      </div>
    </>
  )
}
import { pokedexCardProps } from '../utils/componentsProps';

export const PokedexCard = ({
  name,
  image,
  onClick
}: pokedexCardProps) => {
  return (
    <>
      <div className="card" style={{width: "250px"}}
        onClick={onClick}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </>
  )
}
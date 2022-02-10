import { pokedexCardProps } from '../utils/componentsProps';

export const PokedexCard = ({
  id,
  name,
  image,
  onClick
}: pokedexCardProps) => {
  return (
    <>
      <div className="card" style={{width: "200px"}}
        onClick={onClick}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className='card-subtitle text-muted'>#{id}</h6>
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </>
  )
}

import { myPokemonCardProps } from "../../utils/componentsProps";

export const MyPokemonCard = ({
  id,
  name,
  image,
  nickname,
  onClick
}: myPokemonCardProps) => {
  return (
    <>
      <div className="card" style={{width: "500px"}}>
        <div className="row w-100">
          <div className="m-2 px-4 py-3 w-25">
            <img src={image} alt="..." width="100px" height="100px"/>
          </div>
          <div className="card-body w-50">
            <h6 className='card-subtitle text-muted'>#{id}</h6>
            <h5 className="card-title pb-4">{nickname} ({name})</h5>
            <button className="btn btn-outline-secondary btn-sm"
              onClick={onClick}>Free this Pokemon</button>
          </div>
        </div>
      </div>
    </>
  )
}
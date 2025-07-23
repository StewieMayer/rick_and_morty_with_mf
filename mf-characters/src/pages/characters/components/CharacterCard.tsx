import { Link } from "react-router-dom";
import { Character } from "../../../api/charactersApi";

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  return (
    <div className="col-12 col-lg-4 p-2">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={character.image} alt={character.name} className="img-fluid rounded-start" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">
                <b>Género:</b> {character.gender}
              </p>
              <p className="card-text">
                <b>Estado:</b> {character.status}
              </p>
              <p className="card-text">
                <b>Especie:</b> {character.species}
              </p>
              <Link to={`/character/${character.id}`} className="btn btn-primary">
                Ver detalles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CharacterCard;


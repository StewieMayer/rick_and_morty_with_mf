import CharacterCard from "./components/CharacterCard";
import { useCharacters } from "./useCharacters";

const Characters = () => {

  const { data, error, filters, goToPage, handleFilterSubmit, handleInputChange, isLoading, page } = useCharacters();

  return (
    <div>
      <h2 className="mb-4">Personajes</h2>
      <form onSubmit={handleFilterSubmit} className="row g-3 mb-3">
        <div className="col-lg-4 col-12">
          <input
            name="name"
            type="text"
            placeholder="Nombre"
            className="form-control"
            value={filters.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-lg-4 col-12">
          <input
            name="species"
            type="text"
            placeholder="Especie"
            className="form-control"
            value={filters.species}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-lg-3 col-12">
          <select name="status" className="form-select" value={filters.status} onChange={handleInputChange}>
            <option value="">Estado</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="col-lg-1 col-12">
          <button type="submit" className="btn btn-primary w-100">
            Filtrar
          </button>
        </div>
      </form>

      {isLoading && <p>Cargando personajes...</p>}
      {error && <p className="text-danger">Error al cargar personajes</p>}
      {!isLoading && data?.results.length === 0 && <p>No se encontraron personajes</p>}

      <div className="d-flex flex-lg-row flex-column flex-wrap " >
        {data?.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {/* Paginación */}
      <nav aria-label="Page navigation example" className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${!data?.info.prev ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => goToPage(page - 1)} disabled={!data?.info.prev}>
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">
              Página {page} de {data?.info.pages ?? 1}
            </span>
          </li>
          <li className={`page-item ${!data?.info.next ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => goToPage(page + 1)} disabled={!data?.info.next}>
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Characters;

import Episode from './components/Episode';
import { useCharacterDetail } from './useCharacterDetail';

const CharacterDetail = () => {

  const { data, error, isLoading, goHome } = useCharacterDetail()

  if (isLoading) return <p className="text-center">Cargando...</p>;
  if (error || !data) return <p className="text-center">Error al cargar personaje</p>;

  return (
    <div className="container mt-4">
      <div className="d-flex flex-column flex-lg-row gap-4 mb-4">
        <div className='d-flex flex-lg-column justify-content-lg-start  align-items-start justify-content-center gap-2'>
          <div>
            <h2>{data.name}</h2>
            <img src={data.image} alt={data.name} className="img-fluid rounded" /></div>
          <div className='d-flex flex-column align-items-start pt-5 pt-lg-0'>
            <p className='m-1'><strong>Estado:</strong> {data.status}</p>
            <p className='m-1'><strong>Especie:</strong> {data.species}</p>
            <p className='m-1'><strong>Género:</strong> {data.gender}</p>
            <p className='m-1'><strong>Ubicación:</strong> {data.location.name}</p>
            <button className='btn btn-primary mt-2 w-100' onClick={goHome}>Volver</button>
          </div>
        </div>
        <div>
          <h3>Episodios</h3>
          <table className="table table-striped table-bordered table-hover mt-2">
            <thead className="table-dark">
              <tr>
                <th scope="col">Episodio</th>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha de emisión</th>
              </tr>
            </thead>
            <tbody>
              {data.episode.map((episode: string) => <Episode key={episode} episodeId={episode.split('/').pop()!} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;

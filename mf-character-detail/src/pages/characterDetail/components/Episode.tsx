import { useGetEpisodeByIdQuery } from '../../../api/characterApi';

const Episode = ({ episodeId }: { episodeId: string }) => {
    const { data, error, isLoading } = useGetEpisodeByIdQuery(episodeId);

    if (isLoading) return <p className="text-center">Cargando episodio...</p>;
    if (error || !data) return <p className="text-center">Error al cargar episodio</p>;

    return (
        <tr>
            <td>{data.episode}</td>
            <td>{data.name}</td>
            <td>{data.air_date}</td>
        </tr>
    );
}

export default Episode;
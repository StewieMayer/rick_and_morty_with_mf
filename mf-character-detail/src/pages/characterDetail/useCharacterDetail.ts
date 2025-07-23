import { useParams, useNavigate } from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../api/characterApi';

export const useCharacterDetail = () => {

    const { id } = useParams();
    const { data, error, isLoading } = useGetCharacterByIdQuery(id!);
    const navigate = useNavigate();

    const goHome =()=>navigate('/');

    return {
        data,
        error,
        isLoading, 
        goHome
    }
}
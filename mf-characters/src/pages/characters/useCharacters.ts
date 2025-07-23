import { useState, useEffect } from "react";
import { useGetCharactersQuery } from "../../api/charactersApi";
import { useSearchParams } from "react-router-dom";

export const useCharacters = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const page = Number(searchParams.get("page")) || 1;
    const name = searchParams.get("name") || "";
    const status = searchParams.get("status") || "";
    const species = searchParams.get("species") || "";

    const { data, error, isLoading } = useGetCharactersQuery({ page, name, status, species });

    const [filters, setFilters] = useState({ name, status, species });

    // Sincronizar filtros con query string
    useEffect(() => {
        setFilters({ name, status, species });
    }, [name, status, species]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleFilterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const params: any = {};
        if (filters.name) params.name = filters.name;
        if (filters.status) params.status = filters.status;
        if (filters.species) params.species = filters.species;
        params.page = 1; // reset page on filter change
        setSearchParams(params);
    };

    const goToPage = (newPage: number) => {
        const params: any = {};
        if (filters.name) params.name = filters.name;
        if (filters.status) params.status = filters.status;
        if (filters.species) params.species = filters.species;
        params.page = newPage;
        setSearchParams(params);
    };

    return {
        data,
        error,
        isLoading,
        filters,
        handleInputChange,
        handleFilterSubmit,
        goToPage,
        page
    }
}
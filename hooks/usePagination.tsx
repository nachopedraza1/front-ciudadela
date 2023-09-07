import { useState } from 'react';
import useSWR from "swr"
import { Characters } from "@/interfaces";

export const usePagination = () => {

    const [page, setPage] = useState<number>(0);

    const { data, isLoading } = useSWR<Characters>(`http://localhost:8000/api/characters?page=${page}`);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    return {
        page,
        data,
        isLoading,
        handleChangePage,
    }
}

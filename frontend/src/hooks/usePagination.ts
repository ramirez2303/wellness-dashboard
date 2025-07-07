import { useState } from "react";
import { useMemo } from "react";

const DEFAUL_ITEMS_PER_PAGE = 10;

export const usePagination = <T>(data: Array<T>, ITEMS_PER_PAGE?: number) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(
        () =>
            Math.ceil(
                (data?.length ?? 0) / (ITEMS_PER_PAGE ?? DEFAUL_ITEMS_PER_PAGE)
            ),
        [data, ITEMS_PER_PAGE]
    );

    const currentData = useMemo(() => {
        const startIndex =
            (currentPage - 1) * (ITEMS_PER_PAGE ?? DEFAUL_ITEMS_PER_PAGE);
        return data?.slice(
            startIndex,
            startIndex + (ITEMS_PER_PAGE ?? DEFAUL_ITEMS_PER_PAGE)
        );
    }, [data, currentPage, ITEMS_PER_PAGE]);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    return {
        currentPage,
        totalPages,
        currentData,
        nextPage,
        prevPage,
    };
};

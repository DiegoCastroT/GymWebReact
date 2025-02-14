import React, { createContext, useEffect, useState } from "react";

export const CursosContext = createContext();

export const CursosProvider = ({ children }) => {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        fetch("/cursos.json")
            .then((response) => response.json())
            .then(setCursos)
    }, []);

    const handleReservarCurso = (index) => {
        setCursos((prevCursos) => {
            const updatedCursos = [...prevCursos];
            const curso = updatedCursos[index];

            if (curso.plazas > 0) {
                curso.plazas--;
            }
            return updatedCursos;
        });
    };

    return (
        <CursosContext.Provider value={{ cursos, handleReservarCurso }}>
            {children}
        </CursosContext.Provider>
    );
};

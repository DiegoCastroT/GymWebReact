import React, { createContext, useEffect, useState } from "react";

export const MaquinasContext = createContext();

export const MaquinasProvider = ({ children }) => {
    const [maquinas, setMaquinas] = useState([]);

    useEffect(() => {
        fetch("/maquinas.json")
            .then((response) => response.json())
            .then(setMaquinas)
    }, []);

    const handleReservarMaquina = (index) => {
        setMaquinas((prevMaquinas) => {
            const updatedMaquinas = [...prevMaquinas];
            const maquina = updatedMaquinas[index];

            if (maquina.plazas > 0) {
                maquina.plazas--;
            }
            return updatedMaquinas;
        });
    };

    return (
        <MaquinasContext.Provider value={{ maquinas, handleReservarMaquina }}>
            {children}
        </MaquinasContext.Provider>
    );
};

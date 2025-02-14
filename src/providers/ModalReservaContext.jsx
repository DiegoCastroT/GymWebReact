import React, { createContext, useContext, useState } from 'react';

const ModalReservaContext = createContext();

export const useModalReserva = () => {
    return useContext(ModalReservaContext);
};

export const ModalReservaProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMaquinaIndex, setSelectedMaquinaIndex] = useState(null);
    const [selectedHour, setSelectedHour] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const availableHours = ["10:00", "12:00", "14:00", "16:00"]; // Horas disponibles

    const openModal = (index) => {
        setSelectedMaquinaIndex(index);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedHour("");
        setSelectedDate("");
    };

    const confirmReservation = (handleReservarMaquina) => {
        if (!selectedDate || !selectedHour) {
            alert("Por favor, selecciona una fecha y una hora.");
            return;
        }
        handleReservarMaquina(selectedMaquinaIndex, selectedDate, selectedHour);
        closeModal();
    };

    return (
        <ModalReservaContext.Provider
            value={{
                showModal,
                selectedDate,
                setSelectedDate,
                selectedHour,
                setSelectedHour,
                availableHours,
                openModal,
                closeModal,
                confirmReservation
            }}
        >
            {children}
        </ModalReservaContext.Provider>
    );
};

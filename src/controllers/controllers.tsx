import { useState } from "react";

export function useMenuSelection(initialState:string) {

    const [selectedItem, setSelectedItem] = useState<string|null>(initialState);
  
    // Función para seleccionar un elemento
    const handleItemClick = (item:string) => {
        setSelectedItem(item);
    };
    
    // Devuelve el estado actual y las funciones necesarias
    return {
      selectedItem,
      handleItemClick
    };
  }
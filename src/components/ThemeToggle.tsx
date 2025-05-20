
import React, { useEffect } from "react";

const ThemeToggle = () => {
  // Efeito para definir o tema escuro como padrão quando o componente é montado
  useEffect(() => {
    // Ativa o tema escuro no documento
    document.documentElement.classList.add("dark");
    // Salva a preferência no localStorage
    localStorage.setItem("theme", "dark");
  }, []);

  // Retornamos null já que não queremos mais mostrar o botão
  return null;
};

export default ThemeToggle;

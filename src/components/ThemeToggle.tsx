
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Inicializa o tema com base na preferência do usuário ou no localStorage
  useEffect(() => {
    // Verifica se deve usar o tema escuro
    const shouldUseDark = localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    // Ativa o tema escuro se necessário
    if (shouldUseDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // Função para alternar o tema
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <Toggle 
      pressed={isDark}
      onPressedChange={toggleTheme}
      variant="outline" 
      size="sm" 
      className={cn(
        "fixed z-50 bottom-4 right-4 p-2 rounded-full shadow-lg",
        isDark ? "bg-gray-800 text-gray-100 border-gray-700" : "bg-white text-gray-900 border-gray-200"
      )}
      aria-label="Alternar tema"
    >
      {isDark ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;

import { createContext, useContext, useState } from "react";

export const TemplateContext = createContext(null);

export function useTemplateContext() {
  const context = useContext(TemplateContext);

  return context;
}

export function TemplateContextProvider({ children }) {
  const [templatetype, setTemplateType] = useState("ttob");

  function setTemplate(type) {
    setTemplateType(type);
  }

  const value = { templatetype, setTemplate };

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
}

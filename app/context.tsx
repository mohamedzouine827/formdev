import React, { createContext, useContext, useState, ReactNode } from 'react';

// Create a context
const FormContext = createContext({
  memoizedItems: [] as string[],
  setMemoizedItems: (items: string[]) => {}
});

export const useFormContext = () => useContext(FormContext);

// Create a provider component
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [memoizedItems, setMemoizedItems] = useState<string[]>([]);

  return (
    <FormContext.Provider value={{ memoizedItems, setMemoizedItems }}>
      {children}
    </FormContext.Provider>
  );
};

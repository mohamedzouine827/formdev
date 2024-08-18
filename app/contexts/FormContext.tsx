"use client"
import React, { createContext, useState, useContext } from 'react';

interface FormContextType {
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  formName: string;
  setFormName: React.Dispatch<React.SetStateAction<string>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [formName, setFormName] = useState<string>('');

  return (
    <FormContext.Provider value={{ selectedItems, setSelectedItems, formName, setFormName }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
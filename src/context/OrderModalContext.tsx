import React, { createContext, useContext, useState } from 'react';

interface OrderModalContextType {
  isOpen: boolean;
  prefilledMedicine: string;
  openOrderModal: (medicineName?: string) => void;
  closeOrderModal: () => void;
}

const OrderModalContext = createContext<OrderModalContextType | undefined>(undefined);

export const OrderModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const openOrderModal = (medicineName: string = '') => {
    setPrefilledMedicine(medicineName);
    setIsOpen(true);
  };

  const closeOrderModal = () => {
    setIsOpen(false);
    setPrefilledMedicine('');
  };

  return (
    <OrderModalContext.Provider value={{ isOpen, prefilledMedicine, openOrderModal, closeOrderModal }}>
      {children}
    </OrderModalContext.Provider>
  );
};

export const useOrderModal = () => {
  const context = useContext(OrderModalContext);
  if (!context) {
    throw new Error('useOrderModal must be used within an OrderModalProvider');
  }
  return context;
};

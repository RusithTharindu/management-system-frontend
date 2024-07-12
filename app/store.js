import { create } from 'zustand';

const useClients = create((set) => ({
    clients: [],
    setClients: (clients) => set({ clients }),
  }));
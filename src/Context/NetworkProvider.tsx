import React, { ReactNode, createContext, useEffect, useState } from 'react';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

interface NetworkContextType {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NetworkContext = createContext<NetworkContextType>({
  isConnected: true,
  setIsConnected: () => {},
}); 

interface NetworkProviderProps{
    children:ReactNode
}
export const NetworkProvider: React.FC<NetworkProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsConnected(state.isConnected!);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NetworkContext.Provider value={{ isConnected, setIsConnected }}>
      {children}
    </NetworkContext.Provider>
  );
};

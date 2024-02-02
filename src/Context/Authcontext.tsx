import React, { useState, useEffect, useContext, createContext, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"

type AuthContextType = [AuthState, React.Dispatch<React.SetStateAction<AuthState>>];

interface AuthState {
  user: null | UserDataType;
  token: string;
}

export interface UserDataType {
  _id:string,
  userName:string,
  firstName:string,
  lastName:string,
  email:string
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    token: "",
  });
  axios.defaults.headers.common["Authorization"] = auth.token;

  console.log(axios.defaults.baseURL)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem("TrekTripperAuth");
        if (data) {
          const parseData: AuthState = JSON.parse(data);
          setAuth({ 
            ...auth, 
            user: parseData.user,
            token: parseData.token,
          });
        }
        else {    
              setAuth({
                ...auth,
                user: null,
                token:"",
              });  
        }
      } catch (error) {
        console.error("Error fetching data from AsyncStorage:", error);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { useAuth, AuthProvider };

import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setService]  = useState([]);

    const localStorageToken = (serverToken) => {
setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token; // "!!" Either token is True or False

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // function to check the user Authentication or not
    const userAuthentication = async () => {
        try {
        const response = await fetch(`${window.location.origin}/api/auth/user`, {
            method: "GET",
            headers: {
            Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            // our main goal is to get the user data 👇
            setUser(data.userData);
        } else {
            console.error("Error fetching user data");
        }
        } catch (error) {
        console.log(error);
        }
    };

    const getServices = async() => {
        try {
            const response = await fetch(`${window.location.origin}/api/services`, 
            {method: "GET",});

            if (response.ok) {
                const services = await response.json();
                // console.log(data);
                // our main goal is to get the user data 👇
                setService(services.data);
            } else {
                console.error("Error fetching user data");
            }   
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getServices();
        userAuthentication();
    }, []);

    return <AuthContext.Provider value={{ isLoggedIn, localStorageToken, LogoutUser, user, services }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => { 
    const AuthContextValue = useContext(AuthContext);
    if(!AuthContext){
        throw new Error("useAuth used outside of the Provider");
    }
    return AuthContextValue;
} 
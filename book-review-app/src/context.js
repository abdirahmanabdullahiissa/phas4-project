import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
const URL = "http://localhost:5555"; // Update the URL to match your Flask backend's address
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}/books`);
            const data = await response.json();

            if (Array.isArray(data)) {
                setBooks(data);

                if (data.length > 0) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

    return (
        <AppContext.Provider value={{
            loading, books, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };

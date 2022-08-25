import React from "react";

function useLocalStorage(key, defaultItem) {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [item, setItem] = React.useState([]);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                if (!localStorage.hasOwnProperty(key)) {
                    localStorage.setItem(key, JSON.stringify(defaultItem));
                    setItem(defaultItem);
                }


                const parsedItem = JSON.parse(localStorage.getItem(key));

                //throw new Error("Error");

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }, 3000);
    }, []);

    const persistItemOnLocalStorage = (newItem) => {
        try{
            localStorage.setItem(key, JSON.stringify(newItem));
            setItem(newItem);
        } catch (error) {
            setError(error);

        }
    }

    return {
        loading,
        error,
        item,
        persistItemOnLocalStorage,
    };
}

export { useLocalStorage };
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/assets/menu.json")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Failed to fetch menu data");
                }
                return res.json();
            })
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return [menu, loading, error];  // now returning error as well
};

export default useMenu;

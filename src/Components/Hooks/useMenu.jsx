import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const res = await fetch("/assets/menu.json");
                if (!res.ok) {
                    throw new Error("Failed to fetch menu data");
                }
                const data = await res.json();
                setMenu(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    return [menu, loading, error];
};

export default useMenu;

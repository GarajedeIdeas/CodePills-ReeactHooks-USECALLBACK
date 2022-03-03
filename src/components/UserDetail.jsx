import { useEffect, useState, useCallback } from "react";

const UserDetail = ({ userId }) => {

    const [user, setUser] = useState({});

    const getUser = useCallback(async () => {
        const response = await fetch('https://peticiones.online/api/users/' + userId);
        const json = await response.json();
        console.log(json);
        setUser(json);
    }, [userId])

    useEffect(() => {
        getUser();
    }, [getUser]);

    return <div>
        <p>{user.first_name}</p>
    </div>

}

export default UserDetail;
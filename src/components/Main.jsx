import { useCallback, useMemo, useState } from "react";

const Main = () => {

    const [cont, setCont] = useState(0);

    const doble = () => {
        return cont * 2;
    }

    const callback = useCallback(doble, [cont]);
    const memo = useMemo(doble, []);

    console.log(callback);
    console.log(callback());

    console.log(memo);
    // console.log(memo());

    return <div>
        <button onClick={() => setCont(cont + 1)}>INCREMENTAR</button>
        <p>{cont}</p>
    </div>
}

export default Main;
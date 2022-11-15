import { useState, useEffect } from 'react';

export function useFetch(url) {
    //se definen dos variables de estado
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // el codigo se ejecutará cuando se llame el elemento o cuando el uri cambie
    useEffect(() => {
      setLoading(true)
      fetch(url)
        .then((res) => res.json())//comvertimos la respuestaen json
        .then((data) => {
            setData(data)//la data la agregarmos a la variable de estado
            setLoading(false)
        })
    }, [url])
    //retornamos las dos variables
    return {data, loading}
}
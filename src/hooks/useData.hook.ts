import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface FetchResponse<T>{
    count: number;
    results: T[];
}

const useData = <T> (end_point: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] =  useState("");
    const [is_loading, setLoading] =  useState(false);

    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<FetchResponse<T>>(`/${end_point}`, {signal: controller.signal} )
            .then(res => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if(err instanceof CanceledError){
                    return;
                }
                setError(err.message);
                setLoading(false);
            });
        
        return () => controller.abort();
    }, []);

    return { data, error, is_loading };
}

export default useData;
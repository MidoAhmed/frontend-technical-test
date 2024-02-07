import { AxiosResponse } from 'axios';
import { useState, useEffect, useCallback } from 'react';

interface FetchState<T> {
  data: T[] | null;
  loading: boolean;
  error: Error | null;
}

// const useFetch = <T>(fetchFunction: () => Promise<AxiosResponse<T>>, dependencies: any[]): FetchState<T> & { refetch: () => void } => {
const useFetch = <T>(fetchFunctions: (() => Promise<AxiosResponse<T>>)[], dependencies: any[]): FetchState<T> & { refetch: () => void } => {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  console.log('useFetch', dependencies)

  const fetchData = useCallback(async () => {
    setState(prevState => ({ ...prevState, loading: true }));
    try {
      // const { data } = await fetchFunction();
      const result = await Promise.all(fetchFunctions.map(fn => fn()));
      // console.log(result.map(res => res.data));
      setState({ data: result.map(res => res.data), loading: false, error: null });
    } catch (error) {
      setState({ data: null, loading: false, error });
    }
  // }, [fetchFunction]);
}, [...fetchFunctions]);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...dependencies]);

  return { ...state, refetch: fetchData };
};

export default useFetch;
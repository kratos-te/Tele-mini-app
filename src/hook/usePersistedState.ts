import { useState, useEffect } from 'react';

function usePersistedState<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(() => {
    if (typeof window !== 'undefined') {
      const persistedState = localStorage.getItem(key);
      return persistedState ? JSON.parse(persistedState) : defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;

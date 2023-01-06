interface UseCache {
  getCacheData: <T>(key: string) => T | undefined;
  setCacheData: <T>(key: string, data: T) => void;
}

const useCache = (): UseCache => {
  const getCacheData = <T>(key: string): T | undefined => {
    const data = localStorage.getItem(key);
    if (data && data !== 'undefined') {
      return JSON.parse(data) as T;
    }
    return undefined;
  };

  const setCacheData = <T>(key: string, data: T): void => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  return { getCacheData, setCacheData };
};

export default useCache;

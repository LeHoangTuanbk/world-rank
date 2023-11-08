"use client";
import useSWR from "swr";

class FetchError extends Error {
  status: number = 0;
  name: string = " ";

  setStatus(status: number) {
    this.status = status;
  }
  setName(name: string) {
    this.name = name;
  }
}

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new FetchError();
    error.setName(await res.json());
    error.setStatus(res.status);
    throw error;
  }
  return res.json();
};

function useCountry(url: string) {
  const { data, isLoading, error } = useSWR(url, fetcher);
  return {
    countryData: data,
    isLoading,
    error,
  };
}

export { useCountry };

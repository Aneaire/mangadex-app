"use client";

import { useCookies } from "next-client-cookies";
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the type for your context data
interface MyContextType {
  library: string[];
  saveToLibrary: (id: string) => void;
  removeToLibrary: (id: string) => void;
  addToReadedChapters: (id: string, chapter: string) => void;
  readedChapters: (id: string) => string[];
}

// Create the context with an initial value
const CookiesContext = createContext<MyContextType>({
  library: [],
  saveToLibrary: () => {},
  removeToLibrary: () => {},
  addToReadedChapters: () => {},
  readedChapters: () => [""],
});

// Custom hook to access the context
export const useCupcakeContext = () => useContext(CookiesContext);

// Context provider component
export const CupCakeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toggleRefreshLibrary, setToggleRefreshLibrary] = useState(false);
  const [library, setLibrary] = useState<string[]>([]);
  const cookies = useCookies();

  const saveToLibrary = (id: string) => {
    if (!library.includes(id)) {
      cookies.set("library", JSON.stringify([...library, id]), {
        expires: 30,
      });
      setToggleRefreshLibrary(!toggleRefreshLibrary);
      return;
    }
  };

  useEffect(() => {
    const getLibrary = cookies.get("library");

    if (!getLibrary) {
      cookies.set("library", JSON.stringify([]), { expires: 30 });
    }

    setLibrary(getLibrary && JSON.parse(getLibrary));
  }, [toggleRefreshLibrary]);

  const removeToLibrary = (id: string) => {
    const newLibrary = library.filter((item: string) => item !== id);
    cookies.set("library", JSON.stringify(newLibrary), {
      expires: 30,
    });
    setLibrary(newLibrary);
  };

  const addToReadedChapters = (id: string, chapter: string) => {
    const chapters = readedChapters(id);
    if (!chapters.includes(chapter)) {
      chapters.push(chapter);
      cookies.set(id, JSON.stringify(chapters), { expires: 30 });
    }
  };

  const readedChapters = (id: string) => {
    const chapters = cookies.get(id);
    if (!chapters) {
      cookies.set(id, JSON.stringify([]), { expires: 30 });
      return [];
    }
    return chapters && JSON.parse(chapters);
  };

  // Value to be provided through context
  const contextValue = {
    library,
    saveToLibrary,
    removeToLibrary,
    addToReadedChapters,
    readedChapters,
  };

  return (
    <CookiesContext.Provider value={contextValue}>
      {children}
    </CookiesContext.Provider>
  );
};

'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes';
import { useState, useEffect } from 'react';

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const [mount, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mount) {
        return <>{children}</>;
    }

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
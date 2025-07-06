'use client'
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle() {
    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <button
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
        className="rounded-full"
        >
        {theme === 'dark' ? (
            <HiSun className="text-dark-inactive-text hover:text-dark-active-text active:text-dark-body" />
        ) : (
            <HiMoon className="text-light-inactive-text hover:text-light-active-text active:text-light-body" />
        )}
        </button>
    );
}
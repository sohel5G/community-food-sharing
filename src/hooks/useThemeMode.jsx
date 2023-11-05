import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

const useThemeMode = () => {
    const [themeMode, setThemeMode] = useLocalStorage('themeMode', 'light')
    const html = document.documentElement;

    const changeThemeMode = () => {
        if (themeMode === 'light') {
            html.classList.remove('light');
            html.classList.add('dark');
            setThemeMode('dark')
        } else {
            html.classList.remove('dark');
            html.classList.add('light');
            setThemeMode('light')
        }
    }

    useEffect(() => {
        if (themeMode === 'light') {
            html.classList.remove('dark');
            html.classList.add('light');
        } else {
            html.classList.remove('light');
            html.classList.add('dark');
        }
    }, [])

    return { changeThemeMode, themeMode }
}
export default useThemeMode;

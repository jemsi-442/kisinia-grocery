import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    // Update document class for Tailwind dark mode
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');

    // Optional: update CSS variables for custom colors
    if (savedTheme === 'light') {
      document.documentElement.style.setProperty('--primary-bg', '#ffffff'); // white background
      document.documentElement.style.setProperty('--primary-text', '#1f2937'); // gray-800
      document.documentElement.style.setProperty('--accent', '#10b981'); // green-500
    } else {
      document.documentElement.style.setProperty('--primary-bg', '#1f2937'); // gray-800
      document.documentElement.style.setProperty('--primary-text', '#f3f4f6'); // gray-100
      document.documentElement.style.setProperty('--accent', '#f97316'); // orange-500
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');

    // Update CSS variables on toggle
    if (newTheme === 'light') {
      document.documentElement.style.setProperty('--primary-bg', '#ffffff');
      document.documentElement.style.setProperty('--primary-text', '#1f2937');
      document.documentElement.style.setProperty('--accent', '#10b981');
    } else {
      document.documentElement.style.setProperty('--primary-bg', '#1f2937');
      document.documentElement.style.setProperty('--primary-text', '#f3f4f6');
      document.documentElement.style.setProperty('--accent', '#f97316');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

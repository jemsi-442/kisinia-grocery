import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-orange-500 dark:bg-green-600 hover:bg-orange-600 dark:hover:bg-green-500 transition ${className}`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaMoon className="text-white" />
      ) : (
        <FaSun className="text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;

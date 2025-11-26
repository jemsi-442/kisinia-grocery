import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-6 border-t transition-all duration-300 ${
        theme === 'light'
          ? 'bg-orange-50 border-orange-200'
          : 'bg-[#1a1a1a] border-gray-700'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <p
          className={`font-medium ${
            theme === 'light' ? 'text-brown-700' : 'text-gray-400'
          }`}
        >
          &copy; {new Date().getFullYear()} KISINIA RESTAURANT. All rights
          reserved by Jayfour.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

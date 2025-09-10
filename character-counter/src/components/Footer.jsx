import { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
function Footer() {
    const {darkMode} = useContext(ThemeContext);
    const bgColor = darkMode ? 'text-natural-200' : 'text-natural-900';
    return (
        <div class={`text-center ${bgColor}`}>
            Challenge by <a className="text-xl text-blue-500 hover:text-blue-700" href="https://x.com/abdalahmohamad" target="_blank">Frontend Mentor</a>. 
            Coded by <a className="text-xl font-bold text-blue-500 hover:text-blue-700" href="https://web.facebook.com/Galool22">Abdalah</a>.
        </div>
    );
}

export default Footer;
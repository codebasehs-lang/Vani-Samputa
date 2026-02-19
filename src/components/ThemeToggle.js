import React from 'react';
import { Sun, Moon } from 'phosphor-react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [showNotification, setShowNotification] = React.useState(false);

    React.useEffect(() => {
        const hasSeenNotification = localStorage.getItem('theme_toggle_seen_light_only');
        // Only show if user hasn't seen it AND current theme is light
        if (!hasSeenNotification && theme === 'light') {
            const timer = setTimeout(() => {
                setShowNotification(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [theme]);

    React.useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                setShowNotification(false);
                localStorage.setItem('theme_toggle_seen_light_only', 'true');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    const handleToggle = () => {
        if (showNotification) {
            setShowNotification(false);
            localStorage.setItem('theme_toggle_seen_light_only', 'true');
        }
        toggleTheme();
    };

    return (
        <div className="theme-toggle-wrapper">
            <button
                className="theme-toggle"
                onClick={handleToggle}
                aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
                {theme === 'light' ? (
                    <Moon size={20} weight="bold" />
                ) : (
                    <Sun size={20} weight="bold" />
                )}
            </button>
            {showNotification && (
                <div className="theme-notification">
                    <span className="notification-text">Try Dark Mode</span>
                    <div className="notification-arrow"></div>
                </div>
            )}
        </div>
    );
}

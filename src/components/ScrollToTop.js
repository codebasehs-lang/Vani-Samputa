import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Immediate scroll
        window.scrollTo(0, 0);

        // Delayed scroll to handle mobile browser rendering timing
        const timeoutId = setTimeout(() => {
            window.scrollTo(0, 0);
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
}

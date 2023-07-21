import { useEffect, useState, useCallback } from 'react';
const HandleScroll = (value) => {
    const [visible, setVisible] = useState(false);
    const handleScroll = useCallback(() => {
        if (window.scrollY >= value) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [value]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);
    return visible;
};

export default HandleScroll;

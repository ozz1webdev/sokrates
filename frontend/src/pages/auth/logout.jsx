import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();

        const timer = setTimeout(() => {
            navigate('/');
            window.location.reload(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <h2>Logging out...</h2>
            <p>You will be redirected shortly.</p>
        </div>
    );
}

export default Logout;
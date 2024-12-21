import React, { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage'
import Loading from './components/Loading'

const App: React.FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='font-grandstander'>
            {isLoading ? (
                <Loading />
            ) : (
                <LandingPage />
            )}
        </div>
    )
}

export default App

import { Helmet } from 'react-helmet-async';
import ParallaxComponent from '../Components/ParallaxComponent';

const Menu = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Innova || Menu</title>
                    <link rel="canonical" href="https://www.tacobell.com/" />
                </Helmet>
            </div>

            <div>
                <ParallaxComponent />
            </div>













        </div>
    );
};

export default Menu;
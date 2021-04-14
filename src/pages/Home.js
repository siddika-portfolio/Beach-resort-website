import { Link } from 'react-router-dom';
import { Banner } from '../component/Banner';
import FeaturedRooms from '../component/FeaturedRooms';
import { Hero } from '../component/Hero';
import Services from '../component/Services';

export default function Home() {
    

    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subTitle="deluxe rooms starting at $299">
                <Link to="/" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        
        </>
    )
}

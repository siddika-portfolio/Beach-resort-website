import React from 'react';
import { Link } from 'react-router-dom';
import { Banner } from '../component/Banner';
import { Hero } from '../component/Hero';
import RoomContainer from '../component/RoomContainer';

const Room = () => {
    return (
        <>
           <Hero hero="roomsHero">
               <Banner title="ours room">
                    <Link to="/" className="btn-primary">
                        return home
                    </Link>
               </Banner>
           </Hero>
           <RoomContainer/>
        </>
    );
};

export default Room;
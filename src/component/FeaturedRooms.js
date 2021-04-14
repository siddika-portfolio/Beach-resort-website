import React, { Component } from 'react';
import { FaTruckLoading } from 'react-icons/fa';
import { RoomContext } from '../context';
import Room from '../pages/Room';
import Loading from './Loading';
import Rooms from './Rooms';
import Title from './Title';

export default class FeaturedRooms extends
 Component {
    static contextType = RoomContext;
    render() {
        let {loading, featuredRooms: rooms}= this.context;
        rooms = rooms.map(room => {
            return <Rooms key={room.id} room={room}/>
        })
        return (
            <section> 
               <Title title="featured rooms"/>
               <div className="featured-rooms-center">
                   {loading ? <Loading/> : rooms}
               </div>
                
            </section>
        );
    }
}

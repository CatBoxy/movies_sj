import * as React from 'react';
import styles from '<cines-sj>/styles/Cinema.module.css'
import { useEffect, useState } from 'react';

export interface Room {
    room_id: string,
    name: string,
    movie_id: string,
    times: Array<string>
}

export function Cinema({ cinema, rooms }: { cinema: string, rooms: Array<Room> }) {
    // const [roomsArray, setRoomsArray] = useState<Array<Room>>();

    // useEffect(() => {
    //     if (rooms) {
    //         setRoomsArray(rooms)
    //     }
    // }, []);

    return (
        <div className={styles.main}>
            <h2>{cinema}</h2>
            {
                rooms?.map(room => (
                    <div key={room.room_id}>
                        <h3>{room.name}</h3>
                        {room.times.map(time => (
                            <p key={time}>{time}</p>
                        ))}
                    </div>
                ))
            }
        </div>
    );

}
import styles from '<cines-sj>/styles/Movies.module.css'
import * as React from 'react';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Cinema } from '<cines-sj>/components/cinema';
import { Layout } from '<cines-sj>/components/layout';

export interface Room {
    room_id: string,
    name: string,
    movie_id: string,
    times: Array<string>
}

export interface Movie {
    movie_id: string,
    name: string,
    scrape_date: string,
    cinema: string,
    image_url: string,
    rooms: Array<Room>
}

export default function Movie({ movieData, error }: { movieData: Movie, error: any }) {
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        if (movieData) {
            setMovie(movieData)
        }
        else if (error) {
            console.log(error)
        }
    }, []);

    return (
        <Layout>
            <div className={styles.flexContainer}>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.image}
                        src={movie?.image_url!}
                        alt={movie?.name!}
                        fill={true}
                    />
                </div>
                <div className={styles.roomsContainer}>
                    <Cinema cinema={movie?.cinema!} rooms={movie?.rooms!} />
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({ params }: { params: any }) {
    try {
        let movieData = await fetch(`http://127.0.0.1:8010/movies/${params.slug}`)
            .then((response) => response.json())
        movieData = movieData.movie[0]
        // Pass data to the page via props
        return { props: { movieData } }
    } catch (error) {
        console.log('There was an error', error);
        return {
            props: {
                error: "API error, connection failed"
            }
        }
    }
}


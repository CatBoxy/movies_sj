import * as React from 'react';
import styles from '<cines-sj>/styles/MovieMain.module.css'

export interface IMovieLayoutProps {
    children: React.ReactElement
}

export function MovieLayout(props: IMovieLayoutProps) {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    );
}
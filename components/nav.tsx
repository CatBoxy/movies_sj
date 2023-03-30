import * as React from 'react';
import styles from '<cines-sj>/styles/Nav.module.css'
import { ArrowBigLeft } from 'tabler-icons-react';

export function Nav({ title }: { title: string | undefined }) {
    return (
        <>
            <div className={title ? styles.movieNav : styles.nav}>
                <button className={title ? styles.backButton : styles.displayNone}>
                    <ArrowBigLeft />
                </button>
                {title ? title : <h1>Cartelera San Juan</h1>}
            </div>
        </>
    );
}

import * as React from 'react';
import styles from '<cines-sj>/styles/Layout.module.css'
import { Nav } from './nav';


export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.mainLayout}>
                    <Nav />
                    {children}
                </div>
            </main>
        </>
    );
}

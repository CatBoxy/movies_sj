import * as React from 'react';
import styles from '<cines-sj>/styles/Layout.module.css'
import { Nav } from './nav';


export function Layout({ children, title }: { children: React.ReactNode, title: string | undefined }) {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.mainLayout}>
                    <Nav title={title} />
                    {children}
                </div>
            </main>
        </>
    );
}

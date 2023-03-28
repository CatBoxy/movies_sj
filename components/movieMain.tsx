import * as React from 'react';
import styles from '<cines-sj>/styles/MovieMain.module.css'
import Image from 'next/image'
import movieImage from '../public/El-gato-con-botas.jpg';

export interface IAppProps {
}

export function MovieMain(props: IAppProps) {
  return (
    <div className={styles.main}>
      <Image
        src={movieImage}
        alt='un alt'
        width={250}
      >
      </Image>
    </div>
  );
}

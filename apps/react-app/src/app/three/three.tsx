import styles from './three.module.css';

/* eslint-disable-next-line */
export interface ThreeProps {}

export function Three(props: ThreeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Three!</h1>
    </div>
  );
}

export default Three;

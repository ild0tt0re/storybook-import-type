import styles from './four.module.css';

/* eslint-disable-next-line */
export interface FourProps {}

export function Four(props: FourProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Four!</h1>
    </div>
  );
}

export default Four;

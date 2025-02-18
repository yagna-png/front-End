import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Next.js App!</h1>
      <nav className={styles.nav}>
        <Link href="/about">About</Link>
        <Link href="/counter">Counter</Link>
      </nav>
    </div>
  );
}
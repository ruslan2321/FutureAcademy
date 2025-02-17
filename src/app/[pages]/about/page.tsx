import next from 'next'
import Header from '@/app/(components)/header'
import Footer from '@/app/(components)/footer'
import styles from './about.module.scss'
export default function page() {
  return (
		<>
			<Header />
			<main className={styles.main}>
				<img src='/img/g-1.png' alt='' />
				<div className={styles.container}></div>
			</main>
			<Footer />
		</>
	)
}

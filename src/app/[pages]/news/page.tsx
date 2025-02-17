import Next from 'next'
import Header from '@/app/(components)/header'
import Footer from '@/app/(components)/footer'
import Link from 'next/link'
import styles from './news.module.scss'
export default function page() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<p>Главная| Новости</p>
				<h1>Новости</h1>
				<div className={styles.container}>
					<div className={styles.block}>
						<img src='/img/new1.png' alt='' />
						<div className={styles.block_text}>
							<p>16 ноября 2021</p>
							<h1>Заголовок новости</h1>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
								quos alias ducimus suscipit.{' '}
							</p>
							<Link href={'./news/new'}>
								<p className='hover:text-blue-600 cursor-pointer'>Подробнее</p>
							</Link>
						</div>
					</div>
					<div className={styles.block}>
						<img src='/img/new2.png' alt='' />
						<div className={styles.block_text}>
							<p>16 ноября 2021</p>
							<h1>Заголовок новости</h1>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
								quos alias ducimus suscipit.{' '}
							</p>
							<Link href={'./news/new'}>
								<p className='hover:text-blue-600 cursor-pointer'>Подробнее</p>
							</Link>
						</div>
					</div>
					<div className={styles.block}>
						<img src='/img/new3.png' alt='' />
						<div className={styles.block_text}>
							<p>16 ноября 2021</p>
							<h1>Заголовок новости</h1>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
								quos alias ducimus suscipit.{' '}
							</p>
							<Link href={'./news/new'}>
								<p className='hover:text-blue-600 cursor-pointer'>Подробнее</p>
							</Link>
						</div>
					</div>
					<div className={styles.block}>
						<img src='/img/new4.png' alt='' />
						<div className={styles.block_text}>
							<p>16 ноября 2021</p>
							<h1>Заголовок новости</h1>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
								quos alias ducimus suscipit.{' '}
							</p>
							<Link href={'./news/new'}>
								<p className='hover:text-blue-600 cursor-pointer'>Подробнее</p>
							</Link>
						</div>
					</div>
					<div className={styles.block}>
						<img src='/img/new5.png' alt='' />
						<div className={styles.block_text}>
							<p>16 ноября 2021</p>
							<h1>Заголовок новости</h1>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
								quos alias ducimus suscipit.{' '}
							</p>
							<Link href={'./news/new'}>
								<p className='hover:text-blue-600 cursor-pointer'>Подробнее</p>
							</Link>
						</div>
					</div>
					<div className={styles.block}>
						<img src='/img/new6.png' alt='' />
						<div className={styles.block_text}>
							<p>16 ноября 2021</p>
							<h1>Заголовок новости</h1>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
								quos alias ducimus suscipit.{' '}
							</p>
							<Link href={'./news/new'}>
								<p className='hover:text-blue-600 cursor-pointer'>Подробнее</p>
							</Link>
						</div>
					</div>
					<div className={styles.form}>
						<img src='/img/text.png' alt='' width={300} />
						<form action=''>
							<input type='text' placeholder='Ваше имя' maxLength={20} />
							<input type='phone' placeholder='Ваш телефон' maxLength={20} />
							<input type='email' placeholder='Ваше email' maxLength={30} />
							<button>Отправить</button>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}

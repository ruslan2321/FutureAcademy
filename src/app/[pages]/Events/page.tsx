import React from 'react'
import Header from '@/app/(components)/header'
import Footer from '@/app/(components)/footer'
import styles from './events.module.scss'
export default function page() {
	const title = 'Программы'
	const subtitle = '«Разработка мобильных приложений»'
	const text =
		'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. '

	return (
		<>
			<Header />
			<main className={styles.main}>
				<p>Главная| Мероприятия</p>
				<h1>Все Мероприятия</h1>
				<div className={styles.container}>
					<div className={styles.blocks}>
						<div className={styles.block_1}>
							<h1>25 Октября</h1>
							<div className={styles.block_1_text}>
								<h1>День открытых дверей </h1>
								<p>
									Приглашаем всех желающих на бесплатную экскурсию в мир
									востребованных профессий и полезных навыков
								</p>
							</div>
							<button>Записаться</button>
						</div>
						<div className={styles.block_2}>
							<p>{title}</p>
							<h1>{subtitle}</h1>
							<p>{text}</p>
							<p>16 ноября 2024</p>
						</div>
						<div className={styles.block_3}>
							<p>{title}</p>
							<h1>{subtitle}</h1>
							<p>{text}</p>
							<p>16 ноября 2024</p>
						</div>
						<div className={styles.block_4}>
							<p>{title}</p>
							<h1>{subtitle}</h1>
							<p>{text}</p>
							<p>16 ноября 2024</p>
						</div>
						<div className={styles.block_5}>
							<img src='/img/chel.png' alt='' width={280} />
							<div className={styles.block_text}>
								<p>Вебинар</p>
								<h1>Заголовок мероприятия</h1>
								<p>
									Краткий анонс мероприятия в нескольких предложениях. Текст,
									который будет заинтересовывать пользователя
								</p>
								<p>16 ноября 2021</p>
							</div>
						</div>
						<div className={styles.block_6}>
							<h1>Заголовок мероприятия</h1>
							<p>
								Краткий анонс мероприятия в нескольких предложениях. Текст,
								который будет заинтересовывать пользователя
							</p>
						</div>
						<div className={styles.block_2}>
							<p>{title}</p>
							<h1>{subtitle}</h1>
							<p>{text}</p>
							<p>16 ноября 2024</p>
						</div>
						<div className={styles.block_3}>
							<p>{title}</p>
							<h1>{subtitle}</h1>
							<p>{text}</p>
							<p>16 ноября 2024</p>
						</div>
						<div className={styles.block_4}>
							<p>{title}</p>
							<h1>{subtitle}</h1>
							<p>{text}</p>
							<p>16 ноября 2024</p>
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

import React from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'
export default function footer() {
  return (
		<footer className={styles.footer}>
			<div className={styles.block_1}>
				<img src='/img/Logo.png' alt='' width={90} height={150} />
				<h1>8 800 950-33-98 </h1>
				<p>г. Москва, ул. Ленина, д. 50</p>
				<p>info@hodfutureacademy.ru</p>
				<img src='/img/soc-2.png' alt='' />
				<p className='text-gray-400'>© ХОД, Future Academy</p>
			</div>
			<div className={styles.block_2}>
				<h1>Детям</h1>
				<Link href={'#'}>
					<p>Робототехника</p>
				</Link>
				<Link href={'#'}>
					<p>Создание игр</p>
				</Link>
				<Link href={'#'}>
					<p>Программирование</p>
				</Link>

				<Link href={'#'}>
					<p>Мультимедиа</p>
				</Link>
				<Link href={'#'}>
					<p>Soft skills</p>
				</Link>
				<Link href={'#'}>
					<p>Шахматы</p>
				</Link>
				<Link href={'#'}>
					<p>Блогинг</p>
				</Link>
				<Link href={'#'}>
					<p>Создание игр</p>
				</Link>
				<Link href={'#'}>
					<p>Программирование</p>
				</Link>
				<Link href={'#'}>
					<p>Мультимедиа</p>
				</Link>
			</div>

			<div className={styles.block_3}>
				<h1>Подросткам</h1>
				<Link href={'#'}>
					<p>Web-разработка</p>
				</Link>
				<Link href={'#'}>
					<p>Прикладное программирование</p>
				</Link>
				<Link href={'#'}>
					<p>Графическое моделирование</p>
				</Link>

				<Link href={'#'}>
					<p>Game Development</p>
				</Link>
				<Link href={'#'}>
					<p>Soft skills</p>
				</Link>
				<Link href={'#'}>
					<p>Разработчик мобильных приложений</p>
				</Link>
				<Link href={'#'}>
					<p>Блогинг</p>
				</Link>
				<Link href={'#'}>
					<p>Создание игр</p>
				</Link>
				<Link href={'#'}>
					<p>Программирование</p>
				</Link>
				<Link href={'#'}>
					<p>Мультимедиа</p>
				</Link>
			</div>
			<div className={styles.block_4}>
				<h1>Взрослым</h1>
				<Link href={'#'}>
					<p>Разработчик игр на Unity</p>
				</Link>
				<Link href={'#'}>
					<p>Разработка ПО</p>
				</Link>
				<Link href={'#'}>
					<p>Графический Дизайн</p>
				</Link>

				<Link href={'#'}>
					<p>Тестировщик ПО</p>
				</Link>
				<Link href={'#'}>
					<p>Интернет Маркетинг</p>
				</Link>
				<Link href={'#'}>
					<p>Java-разработчик</p>
				</Link>
				<Link href={'#'}>
					<p>Python–разработчик</p>
				</Link>
				<Link href={'#'}>
					<p>IOS-разработчик</p>
				</Link>
				<Link href={'#'}>
					<p>Программирование</p>
				</Link>
			</div>
			<div className={styles.block_5}>
				<h1>Информация</h1>
				<Link href={'#'}>
					<p>Об академии</p>
				</Link>
				<Link href={'#'}>
					<p>Мероприятия</p>
				</Link>
				<Link href={'#'}>
					<p>Новости</p>
				</Link>

				<Link href={'#'}>
					<p>База знаний</p>
				</Link>
				<Link href={'#'}>
					<p>Карьера</p>
				</Link>
				<Link href={'#'}>
					<p>Контакты</p>
				</Link>
			</div>
		</footer>
	)
}

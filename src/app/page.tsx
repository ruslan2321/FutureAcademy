import React from 'react'
import Header from './(components)/header'
import Footer from './(components)/footer'
import { Rating } from '@mui/material'
import styles from './style.module.scss'
export default function page() {
	return (
		<div>
			<Header />
			<main>
				<img src='img/g-1.png' alt='' />
				<div className={styles.container}>
					<img src='img/sov-2.png' alt='' width={250} />

					<div className={styles.btn_cont}>
						<button>Робототехника</button>
						<button>Создание игр</button>
						<button>Web-разработка</button>
						<button>Мультимедиа</button>
						<button>Шахматы</button>
						<button>3D-моделирование и дизайн</button>
						<button>Английский язык</button>
						<button>Блогинг</button>
					</div>
				</div>
				<div className={styles.container_2}>
					<img src='img/video.png' width={700} />
				</div>
				<div className={styles.container_3}>
					<h1>
						Актуальные знания от признанных экспертов рынка для новичков и
						практикующих специалистов.
					</h1>
					<div className={styles.table}>
						<p>600</p>
						<p>82</p>
						<p>14 795</p>
					</div>
					<div className={styles.label}>
						<label>Курсов</label>
						<label>Ведущих преподавателей</label>
						<label>Выпускников</label>
					</div>
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
							<img src='img/monitor.png' alt='' />
							<div className={styles.block_2_text}>
								<h1>День открытых дверей </h1>
								<p>
									Приглашаем всех желающих на бесплатную экскурсию в мир
									востребованных профессий и полезных навыков
								</p>
							</div>
						</div>
						<div className={styles.block_3}>
							<img src='img/newspaper.png' alt='' />
							<p>Новости Академии</p>
						</div>
						<div className={styles.block_4}>
							<img src='img/diagram.png' alt='' />
							<p>Мир IT</p>
						</div>
					</div>
				</div>
				<div className={styles.reviews}>
					<h1>Отзывы наших студентов</h1>
					<div className={styles.blocks}>
						<div className={styles.block}>
							<div className={styles.title}>
								<img src='img/photo.png' alt='' />
								<h1>Полина Соколова</h1>
								<p>Студент курса «WEB-разработчик»</p>
							</div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
								magni rem molestiae voluptatibus corporis voluptatum ullam
								labore adipisci. Sit nostrum quod voluptatem quaerat error,
								mollitia consequatur exercitationem nisi temporibus tempora.
							</p>
							<Rating name='rate' defaultValue={3} readOnly />
						</div>
						<div className={styles.block}>
							<div className={styles.title}>
								<img src='img/photo.png' alt='' />
								<h1>Ольга Иванова</h1>
								<p>Студент курса «WEB-разработчик»</p>
							</div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
								magni rem molestiae voluptatibus corporis voluptatum ullam
								labore adipisci. Sit nostrum quod voluptatem quaerat error,
								mollitia consequatur exercitationem nisi temporibus tempora.
							</p>
							<Rating name='rate' defaultValue={4} readOnly />
						</div>
						<div className={styles.block}>
							<div className={styles.title}>
								<img src='img/photo.png' alt='' />
								<h1>Дарина Белова</h1>
								<p>Студент курса «WEB-разработчик»</p>
							</div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
								magni rem molestiae voluptatibus corporis voluptatum ullam
								labore adipisci. Sit nostrum quod voluptatem quaerat error,
								mollitia consequatur exercitationem nisi temporibus tempora.
							</p>
							<Rating name='rate' defaultValue={2} readOnly />
						</div>
						<div className={styles.block}>
							<div className={styles.title}>
								<img src='img/photo.png' alt='' />
								<h1>Ольга Чернова</h1>
								<p>Студент курса «WEB-разработчик»</p>
							</div>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
								magni rem molestiae voluptatibus corporis voluptatum ullam
								labore adipisci. Sit nostrum quod voluptatem quaerat error,
								mollitia consequatur exercitationem nisi temporibus tempora.
							</p>
							<Rating name='rate' defaultValue={5} readOnly />
						</div>
					</div>
				</div>
				<div className={styles.info}>
					<h1>Добро пожаловать в Академию будущего ХОД</h1>
					<div className={styles.content}>
						<div className={styles.block}>
							<img src='img/img-1.png' alt='' width={50} height={50} />
							<p>Передовой подход к образовательному процессу</p>
						</div>
						<div className={styles.block}>
							<img src='img/img-4.png' alt='' width={40} height={50} />
							<p>Непрерывное усовершенствование и пополнение базы курсов</p>
						</div>
						<div className={styles.block}>
							<img src='img/img-3.png' alt='' width={50} height={50} />
							<p>Только практикующие преподаватели</p>
						</div>
						<div className={styles.block}>
							<img src='img/img-2.png' alt='' width={50} height={50} />
							<p>
								Сопровождение на всех этапах. От начала обучения до
								трудоустройства
							</p>
						</div>
					</div>
					<div className={styles.form}>
						<img src='img/text.png' alt='' width={300} />
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
		</div>
	)
}

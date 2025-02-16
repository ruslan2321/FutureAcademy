import React from 'react'
import Header from './(components)/header'
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
			</main>
		</div>
	)
}

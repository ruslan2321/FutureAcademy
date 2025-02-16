import React from 'react'
import Header from '@/app/(components)/header'
import styles from './course.module.scss'
import Footer from '@/app/(components)/footer'
/* MUI */
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Slider from '@mui/material/Slider'

export default function page() {
	const title = 'Программы'
	const subtitle = '«Разработка мобильных приложений»'
	const text =
		'Разработчик мобильных приложений создаёт приложения, которыми люди ежедневно пользуются на смартфонах, умных часах и планшетах. '


	return (
		<>
			<Header />
			<main className={styles.main}>
				<h1>Все Программы Обучения</h1>
				<p>Главная | все курсы</p>
				<div className={styles.menu}>
					<div className={styles.block_1}>
						<FormControl>
							<FormLabel id='demo-radio-buttons-group-label'>
								Уровень сложности
							</FormLabel>
							<RadioGroup
								aria-labelledby='demo-radio-buttons-group-label'
								defaultValue='female'
								name='radio-buttons-group'>
								<FormControlLabel
									value='nube'
									control={<Radio />}
									label='Новичок'
									sx={{}}
								/>
								<FormControlLabel
									value='pol'
									control={<Radio />}
									label='Пользователь'
								/>
								<FormControlLabel
									value='other'
									control={<Radio />}
									label='Профессионал'
								/>
								<FormControlLabel
									value='cheat'
									control={<Radio />}
									label='Читер'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel id='demo-radio-buttons-group-label'>
								Тип Обучения
							</FormLabel>
							<RadioGroup
								aria-labelledby='demo-radio-buttons-group-label'
								defaultValue='female'
								name='radio-buttons-group'>
								<FormControlLabel
									value='nube'
									control={<Radio />}
									label='Любой'
									sx={{}}
								/>
								<FormControlLabel
									value='pol'
									control={<Radio />}
									label='Профессия'
								/>
								<FormControlLabel
									value='other'
									control={<Radio />}
									label='Курс'
								/>
							</RadioGroup>
						</FormControl>
					</div>
				</div>
				<div className={styles.content_r}>
					<div className={styles.container}>
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
					<div className={styles.blocks}>
						<div className={styles.blocks_1}>
							<div className={styles.block_1}>
								<p>{title}</p>
								<h1>{subtitle}</h1>
								<p>{text}</p>
							</div>
							<div className={styles.block_2}>
								<p>{title}</p>
								<h1>{subtitle}</h1>
								<p>{text}</p>
							</div>
							<div className={styles.block_3}>
								<p>{title}</p>
								<h1>{subtitle}</h1>
								<p>{text}</p>
							</div>

							<div className={styles.block_4}>
								<p>{title}</p>
								<h1>{subtitle}</h1>
								<p>{text}</p>
							</div>
						</div>
						<div className={styles.blocks_2}>
							<div className={styles.block_5}>
								<p>{title}</p>
								<h1>{subtitle}</h1>
								<p>{text}</p>
							</div>
							<div className={styles.block_6}>
								<p>{title}</p>
								<h1>{subtitle}</h1>
								<p>{text}</p>
							</div>
							<div className={styles.block_7}>
								<p>{title}</p>
								<h1>{subtitle}</h1>
								<p>{text}</p>
							</div>

							<div className={styles.block_8}>
								<p>{title}</p>
								<h1>{subtitle}</h1>
								<p>{text}</p>
							</div>
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

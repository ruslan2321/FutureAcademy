import next from 'next'
import Header from '@/app/(components)/header'
import Footer from '@/app/(components)/footer'
import styles from './about.module.scss'

/* MUI */
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import Avatar from '@mui/material/Avatar'
export default function page() {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<img src='/img/g-1.png' alt='' />
				<div className={styles.container}>
					<img src='/img/sov-2-1.png' alt='' width={200} />
					<div className={styles.content}>
						<div className={styles.block}>
							<img src='/img/img-5.png' alt='' />
							<h1>Заголовок</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
								similique iure autem voluptate ullam pariatur
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/img-6.png' alt='' />
							<h1>Заголовок</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
								similique iure autem voluptate ullam pariatur
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/img-7.png' alt='' />
							<h1>Заголовок</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
								similique iure autem voluptate ullam pariatur
							</p>
						</div>
					</div>
				</div>
				<div className={styles.container_2}>
					<img src='/img/owner.png' alt='' />
					<p>
						«Все началось с любви к шахматам. Я хотел предвидеть ход противника,
						хотел просчитать его действия, хотел побеждать. Я не стал гением
						шахмат, но стратег и психолог из меня неплохой» - смеется Иван
						Иванович. Идея открыть Академию шахмат пришла к нему в 2020 году,
						когда в период полного локдауна он вдруг вспомнил про хобби - игру в
						шахматы. Оказалось, что для игры в шахматы сейчас и доска-то не
						обязательна, все есть в телефоне. Племянник (сын?) Ивана Ивановича
						большую часть дня проводил в стрелялках на планшете. «Я показал ему
						шахматы. К июню он уже был неплохим соперником» - Вскоре идея
						небольшой академии шахмат превратилась в план создания Академии
						Будущего, где дети смогут учиться тому, что им нравится, а взрослые
						попытаются изменить жизнь. Уж очень это сейчас актуально". Из
						интервью с основателем Академии Будущего Ивановым И.И.
					</p>
				</div>
				<div className={styles.container_3}>
					<h1>Добро пожаловать в Академию будущего ХОД</h1>
					<div className={styles.content}>
						<div className={styles.block}>
							<img src='/img/img-1.png' alt='' width={50} height={50} />
							<p>
								Содержание обучения должно быть актуальным, а методика
								проверенная годами.
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/img-2.png' alt='' width={40} height={50} />
							<p>
								Педагог - прежде всего личность компетентная и харизматичная.
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/img-8.png' alt='' width={50} height={50} />
							<p>
								Точка развития образования - ребенок, его интересы и потребности
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/img-4.png' alt='' width={50} height={50} />
							<p>Прогрессом правит любовь к знаниям</p>
						</div>
						<div className={styles.block}>
							<img src='/img/img-3.png' alt='' width={50} height={50} />
							<p>Технологии правят миром, а человек эти технологии создает</p>
						</div>
					</div>
				</div>
				<div className={styles.container_4}>
					<h1>Наши Люди</h1>
					<div className={styles.blocks}>
						<div className={styles.block}>
							<img src='/img/people-1.png' alt='' width={100} />
							<h1>Артем Качалин</h1>
							<p>
								Выпускник Гарвардского Университета. Более 10 лет играет в
								шахматы и участвует в турнирах.
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/people-2.png' alt='' width={100} />
							<h1>Ярмухаметова Гузель</h1>
							<p>
								Выпускница Гарвардского Университета. Более 10 лет играет в
								шахматы и участвует в турнирах.
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/people-3.png' alt='' width={100} />
							<h1>Янышев Данил</h1>
							<p>
								Выпускник Гарвардского Университета. Более 10 лет играет в
								шахматы и участвует в турнирах.
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/people-4.png' alt='' width={100} />
							<h1>Рахматуллина Залия</h1>
							<p>
								Выпускница Гарвардского Университета. Более 10 лет играет в
								шахматы и участвует в турнирах.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.container_5}>
					<h1>Наши программы</h1>
					<div className={styles.blocks}>
						<div className={styles.block}>
							<p>Предполагают пролонгированное обучение</p>
						</div>
						<div className={styles.block}>
							<p>
								Составлены с учетом возрастных и индивидуальных особенностей
								детей
							</p>
						</div>
						<div className={styles.block}>
							<p>Авторские и не имеют аналогов</p>
						</div>
						<div className={styles.block}>
							<p>
								Составлены на основе деятельностного и компетентностного
								подходов
							</p>
						</div>
						<div className={styles.block}>
							<p>Реализуются с помощью современных педагогических технологий</p>
						</div>
						<div className={styles.block}>
							<p>Актуальны и фундаментальны</p>
						</div>
					</div>
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
				</div>
				<div className={styles.container_6}>
					<h1>Наши партнеры</h1>
					<div className={styles.blocks}>
						<div className={styles.blocks_1}>
							<div className={styles.block}>
								<img src='/img/image 25.png' alt='' />
							</div>
							<div className={styles.block}>
								<img src='/img/image 37.png' alt='' />
							</div>
							<div className={styles.block}>
								<img src='/img/image 38.png' alt='' />
							</div>
							<div className={styles.block}>
								<img src='/img/image 25.png' alt='' />
							</div>
							<div className={styles.block}>
								<img src='/img/image 38.png' alt='' />
							</div>
							<div className={styles.block}>
								<img src='/img/image 39.png' alt='' />
							</div>
						</div>
						<div className={styles.blocks_2}>
							<div className={styles.block}>
								<img src='/img/image 38.png' alt='' />
							</div>
							<div className={styles.block}>
								<img src='/img/image 25.png' alt='' />
							</div>
							<div className={styles.block}>
								<img src='/img/image 37.png' alt='' />
							</div>
							<div className={styles.block}>
								<img src='/img/image 38.png' alt='' />
							</div>
							<div className={styles.block}>
								<img src='/img/image 39.png' alt='' />
							</div>
							<div className={styles.block}>
								<img src='/img/image 25.png' alt='' />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.container_7}>
					<h1>Нажми, если это о тебе</h1>
					<div className={styles.blocks}>
						<div className={styles.block_1}>
							<img src='/img/playtime.png' alt='' />
							<p>Я хочу, чтобы мой ребенок был успешным</p>
						</div>
						<div className={styles.block_2}>
							<img src='/img/budget.png' alt='' />
							<p>Я хочу больше зарабатывать</p>
						</div>
						<div className={styles.block_3}>
							<img src='/img/mobile-game.png' alt='' />
							<p>Мой ребенок не выпускает гаджет из рук</p>
						</div>
						<div className={styles.block_4}>
							<img src='/img/it.png' alt='' />
							<p>Я хочу стать айтишником</p>
						</div>
					</div>
				</div>
				<div className={styles.container_8}>
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

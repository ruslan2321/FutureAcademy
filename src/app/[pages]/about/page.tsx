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
					<h1>Программа мероприятия</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
						commodi expedita ad quam sed iure ut placeat. Repellendus ex
						praesentium ullam tempore expedita nisi at placeat, quos vero
						eveniet ea. Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Inventore unde quod natus omnis saepe, eum cumque mollitia
						architecto minima. Assumenda perferendis corrupti deserunt itaque
						blanditiis porro neque cupiditate. Vel, architecto. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Eum, cupiditate porro
						distinctio excepturi illum esse atque nemo iure eligendi eius
						architecto inventore mollitia laborum perferendis libero minus
						molestias culpa sequi?
					</p>
					<Accordion
						sx={{
							boxShadow: '1px 1px 11px 2px #b89afc',
						}}>
						<AccordionSummary
							expandIcon={<AddIcon sx={{ color: 'blue' }} />}
							aria-controls='panel1-content'
							id='panel1-header'>
							<Typography component='span'>День первый </Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						sx={{
							boxShadow: '1px 1px 11px 2px #b89afc',
						}}>
						<AccordionSummary
							expandIcon={<AddIcon sx={{ color: 'blue' }} />}
							aria-controls='panel2-content'
							id='panel2-header'>
							<Typography component='span'>День второй</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						sx={{
							boxShadow: '1px 1px 11px 2px #b89afc',
						}}>
						<AccordionSummary
							expandIcon={<AddIcon sx={{ color: 'blue' }} />}
							aria-controls='panel1-content'
							id='panel1-header'>
							<Typography component='span'>День Третий</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
								eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
				<div className={styles.container_3}>
					<h1>Мероприятие проводят</h1>
					<div className={styles.blocks}>
						<div className={styles.block}>
							<img src='/img/people-1.png' alt='' width={100} />
							<h1>Артем Качалин</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
								ipsum aperiam suscipit et pariatur ullam cum odio id
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/people-2.png' alt='' width={100} />
							<h1>Ярмухаметова Гузель</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
								ipsum aperiam suscipit et pariatur ullam cum odio id
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/people-3.png' alt='' width={100} />
							<h1>Янышев Данил</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
								ipsum aperiam suscipit et pariatur ullam cum odio id
							</p>
						</div>
						<div className={styles.block}>
							<img src='/img/people-4.png' alt='' width={100} />
							<h1>Рахматуллина Залия</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
								ipsum aperiam suscipit et pariatur ullam cum odio id
							</p>
						</div>
					</div>
				</div>
				<div className={styles.container_4}>
					<h1>Фотографии с прошлых мероприятий</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
						elit, egestas ut feugiat id, laoreet volutpat risus. Cras
						condimentum, ligula eget varius eleifend, massa nibh imperdiet est,
						vel sagittis quam justo.
					</p>
					<img src="/img/img-slider.png" alt="" />
				</div>
				<div className={styles.container_5}>
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

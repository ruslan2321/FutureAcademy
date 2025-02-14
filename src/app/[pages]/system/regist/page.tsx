'use client'
import React from 'react'
import styles from './regist.module.scss'
import Alert from '@mui/material/Alert'
import Header from '../../../(components)/header'
import { useRouter } from 'next/navigation'
import { queryObjects } from 'v8'
export default function regist() {
	const roter = useRouter()
	const regit = () => {
		
	}
  return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.title}>
					<p onClick={() => roter.push('./autho')}>Вход</p>
					<p className='text-[#f7941e]'>Регистрация</p>
				</div>
				<div className={styles.form}>
					<input type='text' placeholder='Имя' />
					<input type='text' placeholder='Фамилия' />
					<input type='text' placeholder='Логин' />
					<input type='Password' placeholder='Пароль' />
					<input type='email' placeholder='Почта' />
					<button >Зарегистрироваться</button>
					<p></p>
				</div>
			</div>
		</>
	)
}

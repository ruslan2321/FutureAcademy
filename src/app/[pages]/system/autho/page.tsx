"use client"
import React from 'react'
import styles from './login.module.scss'
import Image from 'next/image'
import Header from '@/app/(components)/header'
import Footer from '@/app/(components)/footer'
import { useRouter } from 'next/navigation'
export default function page() {
  const router = useRouter()
  return (
		<>
			<Header />
			<div className={styles.container}>
				
				<div className={styles.title}>
					<p className='text-[#f7941e]'>Вход</p>
					<p onClick={() => router.push('./regist')}>Регистрация</p>
				</div>
				<form action='' className={styles.form}>
					<input type='text' placeholder='Логин' />
					<input type='text' placeholder='Пароль' />
					<p>С помощью соц.сетей: </p>
					<Image src='/img/soc.png' width={250} height={50} alt='' />
					<button>Войти</button>
				</form>
				<Image src='/img/sov.png' width={300} height={50} alt='' />
			</div>
			<Footer/>
		</>
	)
}

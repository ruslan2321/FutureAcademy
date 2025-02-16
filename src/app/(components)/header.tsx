"use client"
import React from 'react'
import styles from'./header.module.scss'
import Image from 'next/image'
import LoginIcon from '@mui/icons-material/Login'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
export default function page() {

  const router = useRouter();
  return (
		<header className={styles.header}>
			<Image
				src='/img/Logo.png'
				width={80}
				height={80}
				onClick={() => router.push('/')}
				alt=''
			/>
			<nav>
				<ul>
					<li>
						<Link href={'/pages/allcourse'}>Все курсы</Link>
					</li>
					<li>
						<Link href={'/about'}>Мероприятия</Link>
					</li>
					<li>
						<Link href={'/about'}>Базы знаний</Link>
					</li>
					<li>
						<Link href={'/about'}>Карьера</Link>
					</li>
				</ul>
				<p className='text-[#f1f1f1]'>8 800 950-33-98 </p>
				<button
					onClick={() => router.push('/pages/system/autho')}
					className='flex gap-2'>
					<LoginIcon />
					Войти
				</button>
			</nav>
		</header>
	)
}

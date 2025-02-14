import React from 'react'
import Header from './(components)/header'
import Image from 'next/image'
export default function notfound() {
	return (
		<>
		<Header/>
			<div className='flex justify-center flex-col items-center '>
				<h1 className='text-3xl text-center m-[5rem]'>Страница не найдена</h1>
				<Image
					src='/img/404.png'
					alt=''
					width={700}
					height={200}
					className=''
				/>
			</div>
		</>
	)
}

import { Button, Heading } from '@chakra-ui/react';
import bg from './bg.png';
import React from 'react';
import { Link } from 'react-router-dom';
export default function Home() {
	return (
		<div
			className='hero min-h-screen place-items-start'
			style={{
				backgroundImage:
					'url(https://media.discordapp.net/attachments/890066881866776616/1166188480594980945/bob.png?ex=654994a8&is=65371fa8&hm=13c045a94250021df273676984c733f7148ea11efc7357c820b565cd01c639e3&=&width=1581&height=1027)',
			}}>
			<div className='flex flex-col h-full w-full'>
				<div className='ml-20  absolute top-1/2 -translate-y-1/2'>
					<h1 className='text-8xl font-bold text-white w-3/5 '>Earthly Impact</h1>
					<div className='text-white text-2xl font-light my-2'>Shaping People, Shaping Trees</div>
					<button className='btn  bg-opacity-20 bg-green-500 text-white border-green-500 px-10 hover:scale-90 hover:bg-green-800 hover:bg-opacity-20'>
						<Link to='/Events'>Get Started</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

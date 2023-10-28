import { Button, Center, Heading, Image } from '@chakra-ui/react';
import bg from './bg.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div className='mb-32'>
			<div
				className='hero min-h-screen place-items-start'
				style={{
					backgroundImage:
						'url(https://media.discordapp.net/attachments/890066881866776616/1166188480594980945/bob.png?ex=654994a8&is=65371fa8&hm=13c045a94250021df273676984c733f7148ea11efc7357c820b565cd01c639e3&=&width=1581&height=1027)',
				}}>
				<div className='flex flex-col h-full w-full'>
					<div className='ml-20  absolute top-1/4 -translate-y-1/2'>
						<h1 className='text-8xl font-bold text-white w-full '>EmpowEarth</h1>
						{/* <div className='text-white text-2xl font-light my-2'>Shaping People, Shaping Trees</div> */}
						<Link to='/Events'>
							<button className='btn  bg-opacity-20 bg-green-500 text-white border-green-500 px-10 hover:scale-90 hover:bg-green-800 hover:bg-opacity-20'>
								Get Started
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className='pl-32 mt-48'>
				<Center className='mr-32'>
					<Image
						w='20vw'
						h='20vw'
						src='https://cdn.discordapp.com/attachments/890066881866776616/1167735335829127179/Screenshot_2023-10-28_at_4.03.10_AM.png?ex=654f3547&is=653cc047&hm=4700eb71cc2bdd84800d594490cba4b87a1a94b4ac31e3600b41a8d5be49094c&'></Image>
				</Center>
				<div className='text-4xl font-bold'>About Us</div>
				<div className='text-2xl font-light mt-2 pr-32'>
					At EmpowerEarth, we are committed to empowering college students to make a positive impact on the
					environment and society. We offer a unique platform that seamlessly connects you to service events
					and sustainable products through e-commerce. 
				</div>
				<div className='text-4xl font-bold mt-16'>Mission Statement</div>
				<div className='text-2xl font-light mt-2 pr-32'>
					Promoting students to drive positive change by connecting them with non-profits and sustainable
					business owners, encouraging volunteerism, and supporting initiatives for a more sustainable and
					impactful future.
				</div>
				<div className='text-4xl font-bold mt-16'>Our Partners</div>
				<div className='flex flex-row w-4/5 mb-4'>
					<div className={parterStyle}>
						<Image src='https://cdn.discordapp.com/attachments/890066881866776616/1167330316785045584/Screenshot_2023-10-27_at_1.06.23_AM.png?ex=654dbc13&is=653b4713&hm=490335a7fa4d931114b288fc47c65f6d3ef0217083595fb6cc864f50fb39e71e&'></Image>
						<div className='text-xl text-center font-bold'> Sustainable Food Specialist</div>
					</div>
					<div className={parterStyle}>
						<Image src='https://media.discordapp.net/attachments/890066881866776616/1167330317187694643/Screenshot_2023-10-27_at_1.06.29_AM.png?ex=654dbc13&is=653b4713&hm=f8152a35105396e4cd90d01b6c6d74c5cf5601555aefbe14b998d83b86c02e66&=&width=2050&height=981'></Image>
						<div className='text-xl text-center font-bold'> Sustainable Household Supplies</div>
					</div>
					<div className={parterStyle}>
						<Image src='https://media.discordapp.net/attachments/890066881866776616/1167330317661655040/Screenshot_2023-10-27_at_1.06.35_AM.png?ex=654dbc13&is=653b4713&hm=362d0bc1c2d2cc17e8db059b7e558beae5ada2fb9d68d70683b2baa834795850&=&width=1482&height=998'></Image>
						<div className='text-xl text-center font-bold'> Sustainable Clothing Specialist</div>
					</div>
				</div>
				<div>
					<Link to='/Partners'>
						<button className='btn w-4/5'>Learn More</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

let parterStyle = '';

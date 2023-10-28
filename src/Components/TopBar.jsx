import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function TopBar() {
	return (
		<Box w='full' bgColor={'#27144F'} h='6vh'>
			<div className='flex flex-row w-full'>
				<Link to='/Home' className='w-2/5'>
					<div className='font-medium text-lg text-white mx-8 py-2 w-full float-left'>EmpowEarth</div>
				</Link>
				<Link to='/Partners' className='w-1/5'>
					<div className='font-medium text-md align-middle h-full mt-1 hover:scale-110 transition-all ease-in-out duration-200 text-center text-white py-2 w-full'>
						Our Partners
					</div>
				</Link>
				<Link to='/Store' className='w-1/5'>
					<div className='font-medium text-md align-middle h-full mt-1 hover:scale-110 transition-all ease-in-out duration-200 text-center text-white py-2 w-full'>
						Shop
					</div>
				</Link>
				<Link to='/Events' className='w-1/5'>
					<div className='font-medium text-md align-middle h-full mt-1 hover:scale-110 transition-all ease-in-out duration-200 text-center text-white py-2 w-full'>
						Events
					</div>
				</Link>
				<div className='font-light text-xl text-white py-2 px-4 w-full float-right justify-end text-right'>
					Logged in as Pledge Educator Michael
				</div>
			</div>
		</Box>
	);
}

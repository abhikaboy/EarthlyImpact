import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function TopBar() {
	return (
		<Box w='full' bgColor={'#27144F'} h='6vh'>
			<div className='flex flex-row w-full'>
				<Link to='/Home'>
					<div className='font-bold text-xl text-white mx-8 py-2 w-full float-left'>Earthly Impact</div>
				</Link>
				<div className='font-light text-xl text-white py-2 px-4 w-full float-right justify-end text-right'>
					Logged in as Pledge Educator Michael
				</div>
			</div>
		</Box>
	);
}

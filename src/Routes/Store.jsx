import React from 'react';
import TopBar from '../Components/TopBar';
import { Center } from '@chakra-ui/react';

export default function Store() {
	return (
		<div>
			<TopBar />
			<Center w='100' pt='2%'>
				<div className='text-4xl font-bold'>Sustainibility Store</div>
			</Center>
		</div>
	);
}

import React from 'react';
import TopBar from '../Components/TopBar';
import { Center, SimpleGrid } from '@chakra-ui/react';
import StoreItem from '../Components/StoreItem';

export default function Store() {
	const [selected, setSelected] = React.useState(0);
	const products = [
		{
			title: 'Laundry Bundle',
			cost: 40,
			icon: 'https://www.mamasuds.com/cdn/shop/files/LaundryBundle_4e80592b-4171-4355-b425-1abb0dc2297e_2000x2000.jpg?v=1690919781',
			id: 0,
		},
		{
			title: 'Laundry Bundle',
			cost: 40,
			icon: 'https://www.mamasuds.com/cdn/shop/files/LaundryBundle_4e80592b-4171-4355-b425-1abb0dc2297e_2000x2000.jpg?v=1690919781',
			id: 0,
		},
		{
			title: 'Laundry Bundle',
			cost: 40,
			icon: 'https://www.mamasuds.com/cdn/shop/files/LaundryBundle_4e80592b-4171-4355-b425-1abb0dc2297e_2000x2000.jpg?v=1690919781',
			id: 0,
		},
		{
			title: 'Laundry Bundle',
			cost: 40,
			icon: 'https://www.mamasuds.com/cdn/shop/files/LaundryBundle_4e80592b-4171-4355-b425-1abb0dc2297e_2000x2000.jpg?v=1690919781',
			id: 0,
		},
		{
			title: 'Laundry Bundle',
			cost: 40,
			icon: 'https://www.mamasuds.com/cdn/shop/files/LaundryBundle_4e80592b-4171-4355-b425-1abb0dc2297e_2000x2000.jpg?v=1690919781',
			id: 0,
		},
	];
	return (
		<div>
			<TopBar />
			<Center w='100' pt='2%'>
				<div className='text-4xl font-bold'>Sustainibility Store</div>
			</Center>
			<div className='flex flex-row gap-4 px-16 py-4 text-lg'>
				<div
					className={selected == 0 ? 'font-bold' : 'font-light'}
					onClick={() => {
						setSelected(0);
					}}>
					Clothes
				</div>
				<div
					className={selected == 1 ? 'font-bold' : 'font-light'}
					onClick={() => {
						setSelected(1);
					}}>
					Home Supplies
				</div>
				<div
					className={selected == 2 ? 'font-bold' : 'font-light'}
					onClick={() => {
						setSelected(2);
					}}>
					Food
				</div>
			</div>
			<Center>
				<SimpleGrid columns={4} spacing={8}>
					{products
						.filter((product) => product.id == selected)
						.map((product) => {
							return <StoreItem title={product.title} cost={product.cost} icon={product.icon} />;
						})}
				</SimpleGrid>
			</Center>
		</div>
	);
}

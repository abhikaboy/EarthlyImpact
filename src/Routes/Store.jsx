import React from 'react';
import TopBar from '../Components/TopBar';
import { Center, SimpleGrid } from '@chakra-ui/react';
import StoreItem from '../Components/StoreItem';

export default function Store() {
	const [selected, setSelected] = React.useState(0);
	const products = [
		{
			title: 'Laundry Bundle',
			cost: 39.99,
			icon: 'https://www.mamasuds.com/cdn/shop/files/LaundryBundle_4e80592b-4171-4355-b425-1abb0dc2297e_2000x2000.jpg?v=1690919781',
			id: 1,
		},
		{
			title: 'Puffer Jacket',
			cost: 69.99,
			icon: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/449631/item/goods_30_449631.jpg?width=700',
			id: 0,
		},
		{
			title: 'Puffer Vest',
			cost: 36.99,
			icon: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/454226/item/goods_69_454226.jpg?width=700',
			id: 0,
		},
		{
			title: 'Crewneck Sweater',
			cost: 40,
			icon: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/468487/item/goods_73_468487.jpg?width=700',
			id: 0,
		},
		{
			title: 'Oxygen Brightener Bleach Alternative Booster - Plastic-Free',
			cost: 17,
			icon: 'https://meliorameansbetter.com/cdn/shop/products/OXY-UNS_810x810-steel_360x.jpg?v=1676389499',
			id: 1,
		},
		{
			title: 'Bath & Body Soap Bar - Zero-Waste Package-Free',
			cost: 6.99,
			icon: 'https://meliorameansbetter.com/cdn/shop/products/BB-UNS-1_810x810_36457adf-013a-4a5d-8d1c-069f1d8d37b7_1080x.jpg?v=1666790872',
			id: 1,
		},
		{
			title: 'Sauerkraut - Kimchi, Organic - 18 oz',
			cost: 6.99,
			icon: 'https://cdn11.bigcommerce.com/s-j00trvqcfv/images/stencil/1280x1280/products/5764/34425/103905__41202.1623859724.jpg?c=1',
			id: 2,
		},
		{
			title: 'Umeboshi Plums',
			cost: 11,
			icon: 'https://cdn11.bigcommerce.com/s-j00trvqcfv/images/stencil/1280x1280/products/5886/35505/110140__49500.1661201516.jpg?c=1',
			id: 2,
		},
	];
	return (
		<div>
			<TopBar />
			<Center w='100' pt='2%'>
				<div className='text-4xl font-bold'>Sustainibility Store</div>
			</Center>
			<div className='float-right px-8'>
				Your Points: <div className='text-success inline'>400 Points</div>
			</div>
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
				<SimpleGrid columns={4} spacing={8} padding={'16px'}>
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

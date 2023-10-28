import React from 'react';
import TopBar from '../Components/TopBar';
import EventCard from '../Components/EventCard';
import { Center, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function Events() {
	const cardData = [
		{
			icon: 'https://media.discordapp.net/attachments/890066881866776616/1166193125102985367/bob2.png?ex=654998fb&is=653723fb&hm=78e57ba8bab50c1138d07d4937a9f160bd32d2b2c61a37c009e352abca27a9ea&=&width=387&height=360',
			title: 'Planting Trees Event',
			location: 'Boston Commons',
			when: '3pm-8pm',
		},
		{
			icon: 'https://media.discordapp.net/attachments/890066881866776616/1166200883772665876/ACTIVISMCARTOON_1.png?ex=6549a035&is=65372b35&hm=21f540ada908b509647fdde043645342fc876fb3dea4f0de852488660433d40a&=&width=345&height=299',
			title: 'Advocacy and Activism',
			location: 'Newbury Street',
			when: '3pm-8pm',
		},
		{
			icon: 'https://media.discordapp.net/attachments/890066881866776616/1166200884196278303/ELDERLYHELP_1.png?ex=6549a035&is=65372b35&hm=6bcbc8b297fb4ad07576c072f05ec3ad22d586e9ced61a5e94876ace14e0db16&=&width=255&height=286',
			title: 'Elderly Care',
			location: 'Haley House',
			when: '3pm-8pm',
		},
		{
			icon: 'https://media.discordapp.net/attachments/890066881866776616/1166200884464726106/foodrivepic_1.png?ex=6549a035&is=65372b35&hm=085fd73f644a24e3d9d2e91e2b3c62a3f224fd771201a6b42bec775f443f82f3&=&width=431&height=332',
			title: 'Food Drive Event',
			location: 'Pine Street Inn',
			when: '3pm-8pm',
		},
		{
			icon: 'https://media.discordapp.net/attachments/890066881866776616/1166200885291012146/TUTORING_PICTURE_1.png?ex=6549a036&is=65372b36&hm=fb9289db2f85d0edfd68f282212d0506de1677f0332b610d2959223e55232171&=&width=352&height=352',
			title: 'Elementary Tutoring',
			location: 'Signet Education',
			when: '3pm-8pm',
		},
		{
			icon: 'https://media.discordapp.net/attachments/890066881866776616/1166200884737343598/HELPINGANIMAL_1.png?ex=6549a035&is=65372b35&hm=381ec7d2fcdb48fa51658e88438a3a4fb0faade8d770c77108a95be6f4bf8271&=&width=369&height=338',
			title: 'Animal Welfare',
			location: 'Boston Commons',
			when: '3pm-8pm',
		},
	];
	return (
		<div>
			<TopBar />
			<div className='font-bold text-4xl ml-16 my-8'>
				Recomended Events
				<Link to='/Store'>
					<button className='btn btn-ghost btn-primary align-top'>View Sustainibilty Store</button>
				</Link>
			</div>
			<Grid templateColumns='repeat(2, 1fr)' gap={6} className='ml-8'>
				{cardData.map((card) => (
					<Center className='hover:scale-105 transition-all duration-500 ease-in-out w-full'>
						<EventCard title={card.title} location={card.location} when={card.when} icon={card.icon} />
					</Center>
				))}
			</Grid>{' '}
		</div>
	);
}

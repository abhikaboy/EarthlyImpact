import React from 'react';
import TopBar from '../Components/TopBar';
import { Image } from '@chakra-ui/react';

export default function Partners() {
	return (
		<div className='bg-slate-50'>
			<TopBar />
			<div className='text-5xl text-center font-bold p-96 border-0 border-solid border-black bg-slate-50'>
				Service Event Partners
			</div>
			<div className='p-12 w-45 justify-center ml-16 border-0 border-solid border-black bg-slate-50 flex flex-row'>
				<div>
					<div className='text-4xl text-left font-bold'>Environmental League of Massachusetts</div>
					<div className='w-full text-md'>
						The Environmental League of Massachusetts (ELM) actively engages in legislative efforts,
						regulatory implementation, and project funding to ensure transparency and effectiveness. Their
						legislative priorities primarily aim to reduce emissions, promote renewable energy growth, and
						protect health, the environment, and environmental justice communities. ELM's agenda centers
						around clean energy transition, sustainable building practices, and transportation
						electrification, all while emphasizing equity, financial support for innovation, and leadership
						accountability.
					</div>
				</div>
				<Image
					w={'40%'}
					src='https://cdn.discordapp.com/attachments/890066881866776616/1166946192165445652/VtzcFmQSByvLvAhIIiuJ.png?ex=654c5655&is=6539e155&hm=6d9407169551e96661e935082ac79c96dea2cb356add038aa5041be809acc948&'
				/>
			</div>

			<div className='px-48 py-24 justify-center border-0 border-solid border-black bg-slate-200 w-full flex flex-row'>
				<Image
					w={'25%'}
					top={'-50%'}
					bottom={'50%'}
					src='https://cdn.discordapp.com/attachments/890066881866776616/1167341584208101427/New_Project_9.png?ex=654dc691&is=653b5191&hm=56f93a7dfbb92f5dae764feb8e145d6071dee2ce3cac6c5867fea082a179a150&'
				/>
				<div>
					<div className='text-4xl text-right font-bold'>Remake</div>
					<div className='text-right text-md w-full pl-32'>
						Remake is a global advocacy organization built by millennial and gen Z activists fighting for
						fair pay and climate justice within the clothing industry. They have built an international
						network of citizens, press, legislators and union leaders to connect the industry’s biggest
						problems with viable solutions.
					</div>
				</div>
			</div>

			<div className='p-12 w-4/5 justify-center ml-16 border-0 border-solid border-black bg-slate-50 flex flex-row'>
				<div>
					<div className='text-4xl text-left font-bold'>Keep Massachusetts Beautiful</div>
					<div className='w-4/5 text-md'>
						Keep Massachusetts Beautiful is a 501(c)(3) nonprofit organization dedicated to the simple idea
						that “beauty matters.” A landscape littered with trash is anything but beautiful. The most
						important words in our mission statement are “taking action.” We focus on getting people
						involved and actively working to improve their communities through community cleanups and
						beautification projects. We also encourage local business and government leaders to take an
						active role in these efforts.
					</div>
				</div>
				<Image
					w={'40%'}
					src='https://cdn.discordapp.com/attachments/890066881866776616/1167345216836087808/9k.png?ex=654dc9f3&is=653b54f3&hm=43746e274a312a328d2e0d156a79a0ab5f46394f16e90ada684ded092ebe7d56&'
				/>
			</div>

			<div className='text-5xl text-center font-bold p-32 border-0 border-solid border-black bg-slate-50'>
				Sustainibility Shop Partners
			</div>

			<div className='p-12 w-45 justify-center ml-16 border-0 border-solid border-black bg-slate-50 flex flex-row'>
				<div>
					<div className='text-4xl text-left font-bold'>Meliora</div>
					<div className='w-full text-md'>
						At Meliora Cleaning Products, they’ve got all your cleaning needs covered, from home cleaning to
						laundry and bath and body soaps. Their entire product line is 100% single-use plastic-free, and
						made from ingredients that are safe for the health of you, your family, and the planet
						<br></br>
						<b>Why We Chose Them:</b>
						“Our products are sold at a price pount equal to or lower than conventional products, showing
						that you don;t need to pay more for sustainable products”
					</div>
				</div>
				<Image
					w={'40%'}
					src='https://media.discordapp.net/attachments/890066881866776616/1167330317187694643/Screenshot_2023-10-27_at_1.06.29_AM.png?ex=654dbc13&is=653b4713&hm=f8152a35105396e4cd90d01b6c6d74c5cf5601555aefbe14b998d83b86c02e66&=&width=2050&height=981'
				/>
			</div>

			<div className='px-48 py-24 justify-center border-0 border-solid border-black bg-slate-200 w-full flex flex-row'>
				<Image
					w={'25%'}
					top={'-50%'}
					bottom={'50%'}
					src='https://media.discordapp.net/attachments/890066881866776616/1167330317661655040/Screenshot_2023-10-27_at_1.06.35_AM.png?ex=654dbc13&is=653b4713&hm=362d0bc1c2d2cc17e8db059b7e558beae5ada2fb9d68d70683b2baa834795850&=&width=1482&height=998'
				/>
				<div>
					<div className='text-4xl text-right font-bold'>TenTree</div>
					<div className='text-right text-md w-full pl-32'>
						At TenTree, their mission is to make saving the planet simple. Over the last decade, they’ve
						made a big impact by planting trees for every item of clothing they sell — over 90 million trees
						so far.
						<br></br>
						<b>Why We Chose Them:</b>
						“All our products are created with an Earth-First approach, meaning they’re made in fair, safe
						working conditions, and constructed using only sustainably sourced and recycled materials.”
					</div>
				</div>
			</div>

			<div className='p-12 w-4/5 justify-center ml-16 border-0 border-solid border-black bg-slate-50 flex flex-row'>
				<div>
					<div className='text-4xl text-left font-bold'>Eden</div>
					<div className='w-4/5 text-md'>
						Eden Foods is the oldest natural and organic food company in North America, and the largest
						remaining independent manufacturer of dry grocery, organic food.
						<br></br>
						<b>Why We Chose Them:</b>
						“In 2009 Eden Foods was selected as the best food company in the world, and the third best
						company overall by The Better World Shopping Guide. They honored Eden Foods' admirable record in
						social and environmental responsibilities. The company earned A+ and A ratings in ten food
						categories.”
					</div>
				</div>
				<Image
					w={'40%'}
					src='https://cdn.discordapp.com/attachments/890066881866776616/1167330316785045584/Screenshot_2023-10-27_at_1.06.23_AM.png?ex=654dbc13&is=653b4713&hm=490335a7fa4d931114b288fc47c65f6d3ef0217083595fb6cc864f50fb39e71e&'
				/>
			</div>
		</div>
	);
}

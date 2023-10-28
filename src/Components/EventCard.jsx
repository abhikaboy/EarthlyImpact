import { Image } from '@chakra-ui/react';
import React from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	Progress,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function EventCard({ title, location, when, icon }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div
			className='flex drop-shadow-sm p-8 border-solid border-black border-1 w-full mr-8 rounded-xl'
			style={{ 'box-shadow': '0px 4px 10px 4px rgba(0, 0, 0, 0.25)' }}>
			<div className='flex flex-col w-3/5'>
				<div className='text-xl font-bold ml-4'>{title}</div>
				<div className='text-xl font-light ml-4'>{location}</div>
				<div className='text-xl font-light ml-4'>{when}</div>
				<button className='btn shadow-none' onClick={onOpen}>
					View More
				</button>
			</div>
			<div className='flex flex-row w-1/5'>
				<Image className='w-32 h-32 ml-32' src={icon} />
			</div>
			<Modal isOpen={isOpen} onClose={onClose} size='4xl'>
				<ModalOverlay />
				<ModalContent>
					<div className='p-16'>
						<div className='flex flex-row'>
							<div className='shadow-xl p-8 rounded-xl w-2/5'>
								<Image className='w-full h-64' src={icon} />
								<div className='text-4xl font-bold'>{title}</div>
								<div className='text-2xl font-light'>Location: {location}</div>
								<div className='text-2xl font-light'>At: {when}</div>
								<Link
									to='https://eycf33ro14r.typeform.com/to/XkSB4SAX'
									target='_blank'
									rel='noopener noreferrer'>
									<button
										className=' btn btn-outline btn-primary shadow-none p-3 w-full rounded-md'
										onClick={onClose}>
										Join
									</button>
								</Link>
								<Link
									target='_blank'
									rel='noopener noreferrer'
									to='https://docs.google.com/document/d/1ibsrZtQhPsTJ43ph-9oozlyQPB-gAnSaG2nsaNmIrTg/edit'>
									<button className='btn btn-ghost' href=''>
										Terms of Service
									</button>
								</Link>
								<Link
									target='_blank'
									rel='noopener noreferrer'
									to='https://docs.google.com/document/d/1BAaNxDda48VmiWcSXmJY5JBw8h4GhAdYxS3Y_M7BUjs/edit'>
									<button className='btn btn-ghost' href=''>
										Privacy Policy
									</button>
								</Link>
							</div>
							<div className='flex flex-col ml-8 w-3/5'>
								<div>
									<div className='font-bold text-2xl ml-4'> Marketplace Points </div>
									<div className='ml-4'>Worth 200 points</div>
									<Progress
										colorScheme='green'
										height='24px'
										value={65}
										className='ml-4 rounded-xl'
									/>
									<div className='shadow-xl p-8 rounded-xl'>
										<div className='text-2xl font-bold'>Description</div>
										<div>
											The role of a Volunteer Educational Support Tutor requires expertise in
											English, math, history, and science. This position involves providing
											academic assistance to students, either individually or in small groups,
											across these diverse subject areas. Your proficiency in English will be
											crucial in facilitating effective communication and language skills
											development. Your math skills will help students comprehend and master
											mathematical concepts. Additionally, your knowledge of history and science
											will be employed to enhance students' understanding of these subjects. As a
											Volunteer Educational Support Tutor, your primary objective is to support
											and foster academic growth while sharing your knowledge across these
											disciplines.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ModalContent>
			</Modal>
		</div>
	);
}

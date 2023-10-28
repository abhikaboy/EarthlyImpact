import React from 'react';
import { Image, useDisclosure } from '@chakra-ui/react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from '@chakra-ui/react';

export default function StoreItem({ title, cost, icon }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div
			className='p-2 b-2 rounded-xl border-solid border-2 border-slate-500 w-full
        hover:shadow-xl transition-all ease-in-out duration-200
        hover:scale-110
        '>
			<Modal isOpen={isOpen} onClose={onClose} size='3xl'>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<div className='flex flex-row pt-16'>
							<Image src={icon} w='30vw' h='30vw'></Image>
							<div className='flex flex-col'>
								<div className='font-bold text-2xl ml-8'>{title}</div>
								<div className='ml-8'>
									EmpowerEarth recognizes the utmost importance of upholding CSR values within our
									company. As an organization founded on the principles of sustainability and
									environmental stewardship, it is innate in our value proposition to commit to an
									ethical standard of conduct. Beyond making a profit, it is our mission to not only
									increase service within the Boston community but also promote sustainable products,
									thereby mitigating
								</div>
								<div className='text-2xl text-center font-bold mt-12'>
									Price: <s> ${cost}</s>
									<div className='font-bold text-2xl text-success text-center inline'>
										{' '}
										${cost - 4}
									</div>
								</div>
							</div>
						</div>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme='green' mr={3} onClick={onClose}>
							Add to Cart
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>

			<Image w='20vw' h='20vw' src={icon} onClick={onOpen}></Image>
			<div className='font-bold text-2xl text-center'>{title}</div>
			<div className='font-light text-xl text-center'>
				Price: <s> ${cost}</s>
				<div className='font-medium text-xl text-success text-center inline'> ${cost - 4}</div>
			</div>
		</div>
	);
}

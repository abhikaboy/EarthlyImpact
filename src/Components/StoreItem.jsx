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
									- Made from soft and lightweight nylon with a matte finish. - Durable
									water-repellent finish. *The fabric is coated with a water-repellent agent so the
									effect lasts longer. The finish is not permanent. - Anti-static lining. - Premium
									down with a fill power of over 750. - Pocketable design. - Now features wider
									quilting and a relaxed fit for more casual styling. - We’ve added a strip behind the
									front zipper to keep cold air out. - The storage pouch now fastens with a buckle so
									it can be attached and detached with a single touch. - The 3D cut ensures a full
									range of motion through the shoulders, while the split raglan design gives it a
									sleek look in the front. - The tape on the inside of the cuffs is brushed for a soft
									feel. - Perfect for wearing as a middle or outer layer.
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

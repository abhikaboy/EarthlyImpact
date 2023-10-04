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
	Tabs,
	Tab,
	TabList,
	TabPanels,
	TabPanel,
	Switch,
	Stack,
	Heading,
} from '@chakra-ui/react';
import { strings, notewIndex } from './GuitarConstants';

export default function InitSettings({
	setSingleStringMode,
	setIncludeSharps,
	includeSharps,
	setValidStrings,
	setValidNotes,
	validStrings,
	validNotes,
	isOpen,
	onClose,
}) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} size='md' className='rounded-xl'>
			<ModalOverlay backdropFilter='blur(8px)' />
			<ModalContent className='bg-dark rounded-xl'>
				<ModalHeader className='bg-dark text-white text-4xl font-bold' size='2xl'>
					<Heading className='bg-dark text-white text-2xl font-bold text-center p-4' size='xl'>
						Learning Style
					</Heading>
				</ModalHeader>
				<ModalCloseButton className='bg-white text-white' />
				<ModalBody className='bg-dark'>
					<Tabs colorScheme='red' className='text-white'>
						<TabList className='text-6xl font-bold w-full'>
							<Tab className='w-full'>String Mode</Tab>
							<Tab className='w-full'>Note Mode</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Stack className='px-4'>
									{strings.map((string, index) => {
										return (
											<div className='text-2xl font-bold'>
												{string}
												<Switch
													className='float-right'
													size='lg'
													colorScheme='red'
													isChecked={validStrings.includes(index)}
													onChange={() => {
														setValidStrings(() => {
															if (!validStrings.includes(index)) {
																return [...validStrings, index];
															} else {
																return validStrings.filter((string) => {
																	return string != index;
																});
															}
														});
													}}
												/>
											</div>
										);
									})}

									<Button
										variant='ghost'
										colorScheme='red'
										className='font-bold'
										onClick={() => setValidStrings([0, 1, 2, 3, 4, 5])}>
										Enable All
									</Button>
									<Button variant='ghost' colorScheme='red' onClick={() => setValidStrings([])}>
										{' '}
										Disable All
									</Button>
								</Stack>
							</TabPanel>
							<TabPanel>
								<Stack className='px-4'>
									{notewIndex.map(({ note, index }) => (
										<div className='text-2xl font-bold'>
											{note}
											<Switch
												className='float-right'
												size='lg'
												colorScheme='red'
												isChecked={validNotes.includes(index[0] || index[1])}
												onChange={() => {
													setValidNotes(() => {
														if (!validNotes.includes(index[0])) {
															return [...validNotes, ...index];
														} else {
															return validNotes.filter((note) => {
																return index.length > 1
																	? note != index[0] && note != index[1]
																	: note != index[0];
															});
														}
													});
												}}
											/>
										</div>
									))}
									<div className='text-2xl font-bold'>
										Include Sharps
										<Switch
											className='float-right'
											size='lg'
											colorScheme='red'
											isChecked={includeSharps}
											onChange={() => {
												setIncludeSharps(!includeSharps);
											}}
										/>
									</div>
									<Button
										variant='ghost'
										colorScheme='red'
										className='font-bold'
										onClick={() => setValidNotes([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])}>
										Enable All
									</Button>
									<Button variant='ghost' colorScheme='red' onClick={() => setValidNotes([])}>
										{' '}
										Disable All
									</Button>
								</Stack>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</ModalBody>

				<ModalFooter className='bg-dark'>
					<Button colorScheme='red' mr={3} onClick={onClose}>
						Start
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

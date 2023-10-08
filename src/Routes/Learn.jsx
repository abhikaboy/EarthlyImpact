import React, { useEffect, useState, useRef } from 'react';
import {
	Button,
	Card,
	CardBody,
	Center,
	Divider,
	HStack,
	Heading,
	SimpleGrid,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import TargetCard from '../Components/TargetCard';
import { useStopwatch } from 'react-timer-hook';
import InitSettings from '../Components/InitSettings';

import { PitchDetector } from 'pitchy';
import { set } from 'lodash';
import NavBar from '../Components/NavBar';
import Fret from '../Components/Fret';

import {
	combinedStrings,
	combinedStringFrequencies,
	strings,
	pitchTolerance,
	notes,
} from '../Components/GuitarConstants';

export default function Learn() {
	const [pitch, setPitch] = useState(0);
	const [clarity, setClarity] = useState(0);
	const [clear, setClear] = useState(false);
	const [canGenerate, setCanGenerate] = useState(true);

	const [singleStringMode, setSingleStringMode] = useState(true);
	const [includeSharps, setIncludeSharps] = useState(false);
	const [validStrings, setValidStrings] = useState([0, 1, 2, 3, 4, 5]);
	const [validNotes, setValidNotes] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
	const toast = useToast();

	const { isOpen, onOpen, onClose } = useDisclosure();
	const pitchMatches = (pitch, targetFrequency) => {
		return pitch > targetFrequency - pitchTolerance && pitch < targetFrequency + pitchTolerance;
	};
	const [target, setTarget] = useState({ note: 'A', string: 'A' });
	const targetRef = useRef();
	targetRef.current = target;
	const targetEqual = (target1, target2) => target1.note === target2.note && target1.string === target2.string;
	const generateTarget = () => {
		console.log('generating Target');
		// choose a random element in the arary Valid Strings
		let randomString = validStrings[Math.floor(Math.random() * validStrings.length)];
		let newString = singleStringMode ? randomString : Math.floor(Math.random() * 6);
		console.log(newString);
		// choose a random element in the array Valid Notes

		// let newNote = validNotes[Math.floor(Math.random() * validNotes.length)];
		// let newNote = Math.floor(Math.random() * 12);
		let newNoteIndex = validNotes[Math.floor(Math.random() * validNotes.length)];
		let newNote = notes[newNoteIndex];
		let note = newNote;

		console.log(newNote);
		console.log(note);
		if (!includeSharps && note.includes('#')) {
			note = note.charAt(0);
		}
		let generatedTarget = { note: note, string: strings[newString] };
		let multipleOptions = validNotes.length > 1 || validStrings.length > 1;
		console.log(multipleOptions);
		return multipleOptions && targetEqual(generatedTarget, targetRef.current) ? generateTarget() : generatedTarget;
	};

	const [numAnswers, setNumAnswers] = useState(0);
	const [numCorrect, setNumCorrect] = useState(0);
	const { totalSeconds, seconds, minutes, isRunning, start, pause, reset } = useStopwatch({ autoStart: true });
	const [averageTime, setAverageTime] = useState(0);

	const cardStyle =
		'text-white text-3xl font-bold text-center pt-4 p-6 w-full border-2 rounded-xl border-dark shadow-xl m-2';

	const addAverageTime = (time) => {
		setAverageTime((averageTime * numAnswers + time) / (numAnswers + 1));
	};
	const init = () => {
		setNumAnswers(0);
		setNumCorrect(0);
		setAverageTime(0);
		setTarget(generateTarget());
	};
	const generateNewTarget = () => {
		console.log('New Target Generated');
		if (!canGenerate) return;
		setTarget(generateTarget());
		setCanGenerate(false);
		setTimeout(() => {
			setCanGenerate(true);
		}, 300);
		addAverageTime(seconds);
		reset();
		setNumCorrect(numCorrect + 1);
		toast({
			title: 'Correct  Note!',
			status: 'success',
			duration: 1000,
			isClosable: true,
			position: 'top',
		});
	};
	const newTargetRef = useRef(generateNewTarget);
	newTargetRef.current = generateNewTarget;

	useEffect(() => {
		onOpen();
		console.log('use effect');
	}, []);
	let targetFrequency = (target) => {
		return combinedStringFrequencies[strings.indexOf(target.string)][
			combinedStrings[strings.indexOf(target.string)].indexOf(target.note)
		];
	};
	let updatePitch = (analyserNode, detector, input, sampleRate) => {
		analyserNode.getFloatTimeDomainData(input);
		const [pitch, clarity] = detector.findPitch(input, sampleRate);
		let clarityInt = Math.ceil(clarity.toFixed(2) * 100);
		let clear = clarityInt > 90;
		setClarity(clarityInt);
		setClear(clear);
		if (clear) {
			let curTar = targetRef.current;
			console.log('clear');
			console.log(curTar);
			setPitch(pitch.toFixed(2));
			let targetF = targetFrequency(curTar);
			if (clarityInt > 98 && !pitchMatches(pitch, targetF)) {
				setNumAnswers(numAnswers + 1);
				console.log('SUPER CLEAR');
				console.log(pitch + " doesn't match " + targetF);
			}
			if (pitchMatches(pitch, targetF)) {
				console.log('pitch matches: ' + pitch + ' ' + targetF);
				newTargetRef.current();
			}
		}
		window.setTimeout(() => updatePitch(analyserNode, detector, input, sampleRate), 1000);
	};
	window.onload = () => {
		// Create Audio Context to get microphone input
		const audioContext = new window.AudioContext();
		const analyserNode = audioContext.createAnalyser();
		console.log('window loaded');
		document.getElementById('resume-button').addEventListener('click', () => audioContext.resume());

		navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
			console.log('Got stream');
			audioContext.createMediaStreamSource(stream).connect(analyserNode);
			const detector = PitchDetector.forFloat32Array(analyserNode.fftSize);
			const input = new Float32Array(detector.inputLength);
			updatePitch(analyserNode, detector, input, audioContext.sampleRate);
		});
	};
	return (
		<div className='flex flex-col w-screen h-screen'>
			<InitSettings
				setSingleStringMode={setSingleStringMode}
				setIncludeSharps={setIncludeSharps}
				includeSharps={includeSharps}
				setValidStrings={setValidStrings}
				setValidNotes={setValidNotes}
				validStrings={validStrings}
				validNotes={validNotes}
				isOpen={isOpen}
				onClose={onClose}
				init={init}
			/>
			<NavBar />
			<div className='mt-8 justify-center place-content-center flex justify-content-center flex-col'>
				<Heading size={'xl'} className='text-center'>
					Standard Tuning
				</Heading>
				<table className='border-none border-2 p-4 mx-16 mt-8'>
					<tbody>
						{combinedStrings.map((string, index) => {
							return (
								<tr>
									{string.map((note) => {
										return (
											<Fret
												index={index}
												setNumAnswers={setNumAnswers}
												note={note}
												generateNewTarget={generateNewTarget}
												target={target}
												strings={strings}
												string={string}
												numAnswers={numAnswers}
											/>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<div className='h-full'>
				<SimpleGrid columns={2} className='h-full'>
					<div className=' w-full bg-dark h-full border-solid border-r-2 border-primary'>
						<div className='bg-primary mx-8 my-8 rounded-xl  space-y-4 h-96'>
							<h1 className='text-white text-4xl font-bold text-center pt-4'>Target</h1>
							<Center className='flex flex-col space-y-4 w-full'>
								<Center className='flex flex-row space-x-8 w-full justify-center'>
									<Heading size='md' px='12' textColor={'white'}>
										{' '}
										Note{' '}
									</Heading>
									<Heading size='md' px='12' textColor={'white'}>
										{' '}
										String{' '}
									</Heading>
								</Center>

								<TargetCard props={target} />

								<Divider w='80%' opacity={'20%'} />

								<Heading textColor={'white'} size='lg'>
									Listening
								</Heading>
								{pitch == 0 && clarity == 0 ? (
									<Button id='resume-button' colorScheme='red'>
										Listen to Guitar
									</Button>
								) : (
									<div>
										<HStack>
											<Heading size='md' px='16' textColor={'white'}>
												Pitch
											</Heading>
											<Heading size='md' px='16' textColor={'white'}>
												Clarity
											</Heading>
										</HStack>

										<HStack className='w-full justify-center'>
											<h4 className='text-center bg-white bg-opacity-20 w-3/5 p-4 text-white text-xl font-bold border-2 border-solid border-slate-950 border-opacity-0 rounded-xl'>
												{pitch} vs{' ' + targetFrequency(targetRef.current)}
											</h4>
											<h4
												className={`text-center bg-white bg-opacity-20  w-3/5 p-4 text-white text-xl font-bold border-2 border-solid border-white drop-shadow-2xl border-opacity-${
													clear ? '100' : '0'
												} rounded-xl`}>
												{clarity}{' '}
											</h4>
										</HStack>
									</div>
								)}

								{/* <TargetCard props={nextTarget} />                    */}
							</Center>
							<Center>
								<div className='flex flex-row'></div>
							</Center>
						</div>
					</div>

					<div className='w-full bg-dark h-full border-solid border-r-2 border-primary'>
						<div className='bg-primary mx-8 my-8 rounded-xl  space-y-4 h-96'>
							<h1 className='text-white text-4xl font-bold text-center pt-4'>Session Stats</h1>

							<div className='flex flex-col px-16'>
								<div className='flex flex-row w-full text-center'>
									<h4 className={cardStyle}>
										Accuracy <br></br>
										{numCorrect == 0 ? 0 : Math.floor((numCorrect / numAnswers) * 100)}%
									</h4>
									<h4 className={cardStyle}>
										Score <br /> {numCorrect}/{numAnswers}
									</h4>
								</div>
								<div className='flex flex-row'>
									<h4 className={cardStyle}>
										Time <br /> {seconds} s
									</h4>
									<h4 className={cardStyle}>
										Average Time
										<br /> {averageTime.toFixed(2)} s
									</h4>
								</div>
							</div>
						</div>
					</div>
				</SimpleGrid>
			</div>
		</div>
	);
}

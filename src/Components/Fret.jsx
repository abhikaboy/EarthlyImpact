import { useToast } from '@chakra-ui/react';
import React from 'react';
export default function Fret({ index, setNumAnswers, note, generateNewTarget, target, strings, string, numAnswers }) {
	const fretMarkers = [
		{ string: 2, fret: 3 },
		{ string: 2, fret: 5 },
		{ string: 2, fret: 7 },
		{ string: 2, fret: 9 },
		{ string: 2, fret: 3 },
		{ string: 1, fret: 12 },
		{ string: 3, fret: 12 },
	];
	const toast = useToast();
	return (
		<td className={`border-solid w-24 h-8 border-black ${index != 5 ? 'border-l-4 border-r-4' : ''}`}>
			{(
				fretMarkers.filter((marker) => {
					return marker.string == index + 1 && marker.fret == string.indexOf(note) + 1;
				}) || []
			).length > 0 ? (
				<div class='absolute text-center z-10 mt-10 h-0 justify-center m-auto'>
					<button class=' rounded-full bg-slate-800 w-4 h-4 justify-center align-middle mt-4 ml-10'></button>
				</div>
			) : (
				''
			)}
			<button
				onClick={() => {
					setNumAnswers(numAnswers + 1);
					console.log(note);
					let correctNote = note == target.note;
					let correctString = strings[index] == target.string;
					if (correctNote && correctString) {
						generateNewTarget();
					} else {
						let message = '';
						if (!correctNote) {
							console.log('wrong note');
							message += 'Wrong Note! ';
						}
						if (!correctString) {
							console.log('wrong string');
							message += 'Wrong String! ';
						}
						toast({
							title: message,
							status: 'error',
							duration: 1500,
							isClosable: true,
							position: 'top',
						});
					}
				}}
				className='bg-black z-50 w-full h-1 align-top bottom-0 p-0 mt-0 mb-8 hover:bg-red-500 transition-all duration-300'></button>
		</td>
	);
}

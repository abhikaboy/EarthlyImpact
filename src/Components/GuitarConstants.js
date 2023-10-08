const eString = ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'];
const eStringFrequencies = [87.31, 92.5, 98.0, 103.83, 110.0, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81];
const aString = ['A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A'];
const aStringFrequecies = [116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.0, 196.0, 207.65, 220.0];
const dString = ['D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D'];
const dStringFrequencies = [
	155.56, 164.81, 174.61, 185.0, 196.0, 207.65, 220.0, 233.08, 246.94, 261.63, 277.18, 293.66,
];
const gString = ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'];
const gStringFrequencies = [
	207.65, 220.0, 233.08, 246.94, 261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.0,
];
const bString = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const bStringFrequencies = [
	261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.0, 415.3, 440.0, 466.16, 493.88,
];
const highEString = ['F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E'];
const highEStringFrequencies = [
	349.23, 369.99, 392.0, 415.3, 440.0, 466.16, 493.88, 523.25, 554.37, 587.33, 622.25, 659,
];
const combinedStrings = [highEString, bString, gString, dString, aString, eString];
const combinedStringFrequencies = [
	highEStringFrequencies,
	bStringFrequencies,
	gStringFrequencies,
	dStringFrequencies,
	aStringFrequecies,
	eStringFrequencies,
];

const strings = ['e', 'B', 'G', 'D', 'A', 'E'];
const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const notewIndex = [
	{ note: 'A', index: [0, 1] },
	{ note: 'B', index: [2] },
	{ note: 'C', index: [3, 4] },
	{ note: 'D', index: [5, 6] },
	{ note: 'E', index: [7] },
	{ note: 'F', index: [8, 9] },
	{ note: 'G', index: [10, 11] },
];
const pitchTolerance = 6;

export {
	eString,
	eStringFrequencies,
	aString,
	aStringFrequecies,
	dString,
	dStringFrequencies,
	gString,
	gStringFrequencies,
	bString,
	bStringFrequencies,
	highEString,
	highEStringFrequencies,
	combinedStrings,
	combinedStringFrequencies,
	strings,
	pitchTolerance,
	notewIndex,
	notes,
};

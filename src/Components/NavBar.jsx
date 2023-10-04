import React from 'react';
import SettingsIcon from './settings.svg';

export default function NavBar() {
	return (
		<div className='w-full'>
			<div class='navbar bg-dark'>
				<div class='flex-1'>
					<a class='btn btn-ghost normal-case text-lg text-white'>
						learnthefretboard.com
					</a>
				</div>
				<div class='flex-none'>
					<button class='btn btn-square btn-ghost'>
						<img src={SettingsIcon}></img>
					</button>
				</div>
			</div>
		</div>
	);
}

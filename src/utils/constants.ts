import { StaticImageData } from 'next/image';
import defaultImage from '../assets/images/default.png';

export const INTimeFormatter = (time: Date | string, showMillis = false) => {
	time = time.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }).split(', ')[1] as string;
	const hours = time.split(':')[0];
	const minutes = time.split(':')[1];
	const millis = time.split(':')[2];
	return showMillis ? `${hours}:${minutes}:${millis}` : `${hours}:${minutes} ${millis?.replace(/\d+ /g, '')}`;
};

export const RelativeTimeFormatter = new Intl.RelativeTimeFormat('en', {
	style: 'long',
});

export const discordId = '592707660604899328';
export const dob = new Date('2001-11-27'); // Replace with your actual date of birth
export const age = new Date(Date.now() - dob.getTime()).getUTCFullYear() - 1970;
export const hasHadBirthdayThisYear = new Date().getMonth() >= dob.getMonth() && new Date().getDate() >= dob.getDate();
export const today = new Date();
export const nextBirthdayYear =
	today.getFullYear() +
	(today.getMonth() > dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate())
		? 1
		: 0);
export const daysUntilBirthday = Math.floor(
	(new Date(nextBirthdayYear, dob.getMonth(), dob.getDate()).getTime() - today.getTime()) / 1000 / 60 / 60 / 24,
);
// export const daysUntilBirthday = RelativeTimeFormatter.formatToParts(
// 	Math.floor(
// 		(new Date(nextBirthdayYear, dob.getMonth(), dob.getDay() + 1).getTime() - Date.now()) / 1000 / 60 / 60 / 24,
// 	),
// 	'day',
// )[1]!.value.toString();

export interface ActivityProps {
	id: string;
	name: string | null;
	state: string | null;
	details: string | null;
	image: string | StaticImageData;
	link: string;
	icon: string;
}

export const getMetaData = () => {
	return {
		title: 'Sarcaster',
		description: 'Portfolio of Sarcaster',
		image: defaultImage.src,
		color: '#2b363e',
		url: 'https://sarcaster.is-a.dev',
	};
};

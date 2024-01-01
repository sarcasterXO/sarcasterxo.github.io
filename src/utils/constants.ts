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
export const calculateAge = (dob: Date) => {
	const today = new Date();
	const birthDate = new Date(dob);

	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDiff = today.getMonth() - birthDate.getMonth();

	// Adjust age if birthday hasn't occurred yet this year
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}

	return age;
};

export const hasHadBirthdayThisYear = (dob: Date) => {
	const today = new Date();
	return today.getMonth() >= dob.getMonth() && today.getDate() >= dob.getDate();
};

export function calculateDaysUntilBirthday(dateOfBirth: Date) {
	const today = new Date();
	const nextBirthdayYear =
		today.getMonth() > dateOfBirth.getMonth() ||
		(today.getMonth() === dateOfBirth.getMonth() && today.getDate() >= dateOfBirth.getDate())
			? today.getFullYear() + 1
			: today.getFullYear();

	const nextBirthday = new Date(nextBirthdayYear, dateOfBirth.getMonth(), dateOfBirth.getDate());

	// Calculate the difference in milliseconds
	const timeDifference = nextBirthday.getTime() - today.getTime();

	// Convert the time difference to days
	const daysUntilBirthday = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

	return daysUntilBirthday;
}

// Example usage:
export const age = calculateAge(dob);
export const hadBirthdayThisYear = hasHadBirthdayThisYear(dob);
export const daysUntilNextBirthday = calculateDaysUntilBirthday(dob);

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

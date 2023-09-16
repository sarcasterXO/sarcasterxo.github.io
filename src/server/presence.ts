import type { Data, LanyardResponse, Snowflake } from 'use-lanyard';
import coding from '../assets/images/coding.jpg';
import editing from '../assets/images/editing.jpg';
import porsche from '../assets/images/porsche.jpg';
import { ActivityProps } from '../utils/constants';

export async function getLanyard(id: Snowflake) {
	const lanyard = await fetch(`https://api.lanyard.rest/v1/users/${id}`).then(
		(res) => res.json() as Promise<LanyardResponse>,
	);

	if (!lanyard.success) {
		const presenceData = extractPresenceData(null);
		return { data: null, presence: presenceData };
	}

	const presenceData = extractPresenceData(lanyard.data);

	return { data: lanyard.data, presence: presenceData };
}

export function extractPresenceData(lanyardData: Data | null): ActivityProps {
	let icon = 'porsche';
	let data = {
		id: 'driving',
		name: `On a long drive`,
		state: `With loud music`,
		details: 'Roaring up at full throttle! ❤️‍🔥',
		image: porsche,
		link: 'https://www.youtube.com/watch?v=BHZtcZ0-Ss8&pp=ygUmcG9yc2NoZSBjYXJyZXJhIDkxMSBndCBjaW5lbWF0aWMgdmlkZW8%3D',
		icon,
	} as ActivityProps;

	if (!lanyardData) return data;

	const spotify = lanyardData.spotify;
	if (spotify) {
		icon = 'spotify';
		data = {
			id: 'spotify',
			name: `Listening to ${spotify.song}`,
			state: `by ${spotify.artist}`,
			details: `from ${spotify.album}`,
			image: spotify.album_art_url,
			link: `https://open.spotify.com/track/${spotify.track_id}`,
			icon,
		} as ActivityProps;
	}
	const vsc = lanyardData.activities.find((a) => a?.name?.toLowerCase()?.includes('visual studio code'));
	if (!spotify && vsc) {
		icon = 'vsc';
		data = {
			id: 'vsc',
			name: `Using ${vsc.name}`,
			state: vsc.state || null,
			details: vsc.details || null,
			image: coding,
			link: 'https://github.com/sarcasterXO',
			icon,
		} as ActivityProps;
	}
	const adobe = lanyardData.activities.find((a) => a?.assets?.large_text?.toLowerCase()?.includes('adobe'));
	if (!spotify && !vsc && adobe) {
		const softwareName = adobe.name?.toLowerCase();
		if (softwareName.includes('photoshop')) {
			icon = 'photoshop';
		} else if (softwareName.includes('premiere pro')) {
			icon = 'premierepro';
		} else if (softwareName.includes('after effects')) {
			icon = 'aftereffects';
		} else if (softwareName.includes('lightroom')) {
			icon = 'lightroom';
		} else if (softwareName.includes('illustrator')) {
			icon = 'illustrator';
		}
		data = {
			id: 'adobe',
			name: `Using Adobe ${adobe.name}`,
			state: adobe.state || null,
			details: adobe.details || null,
			image: editing,
			link: 'https://drive.google.com/drive/folders/15fgoHWJ1gkNbFRWETm7JDdaJQ45QIe4a?usp=drive_link',
			icon,
		} as ActivityProps;
	}
	const other = lanyardData.activities[0];
	if (!spotify && !vsc && !adobe && other && other.assets) {
		const image = other.assets.large_image
		data = {
			id: 'other',
			name: `Using ${other.name}`,
			state: other.state || null,
			details: other.details || null,
			image: image
				? (image.match(/https\/.*/gm) || [''])[0]?.replace('https/', 'https://')
				: '',
			link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs',
		} as ActivityProps;
	}
	return data;
}

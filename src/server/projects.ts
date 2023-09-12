import sofi from '../assets/images/sofi.png';
import adobe from '../assets/images/adobe.png';
import cohzie from '../assets/images/cohzie.jpg';

export function getCurrentProjects() {
	return [
		{
			id: 1,
			image: sofi.src,
			name: 'Sofi - Backend Developer',
			description: 'A Discord game bot with more than 20M users.',
			link: 'https://sofi.gg',
		},
		{
			id: 2,
			image: adobe.src,
			name: 'Freelancer - Graphic Designer/Video Editor',
			description: 'Designing eye-catching thumbnails and editing content for YouTubers and Social Media Influencers.',
			link: 'https://drive.google.com/drive/folders/15fgoHWJ1gkNbFRWETm7JDdaJQ45QIe4a?usp=drive_link',
		},
		{
			id: 3,
			image: cohzie.src,
			name: 'Cohzie - Owner',
			description:
				'A multifunctional Discord bot with more than 400K users. Currently, rewriting it to keep it up-to-date with latest Discord updates.',
			link: 'https://discord.com/oauth2/authorize?client_id=788799817908092978&permissions=8589934591&scope=bot%20applications.commands',
		},
	];
}

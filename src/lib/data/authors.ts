import type { Author } from '$lib/types';

const exampleBio =
	'Selected by NASA in 2000. Board certified in Internal and Aerospace Medicine, they have participated in two spaceflights. In 2009, served as Flight Engineer for Expedition 19/20. This marked the transition from three to six permanent International Space Station crew members. During this time, they performed two spacewalks. They also flew on STS-133, which delivered the Permanent Multipurpose Module and fourth Express Logistics Carrier. Served in the Mission Support branches providing medical and human factors expertise to multiple spaceflight programs. They have spent a total of 212 days in space across two spaceflights.';

export const authors: Author[] = [
	{
		id: 0,
		slug: 'alex',
		name: 'Alex Smith',
		title: 'Astronaut and Author',
		// Source: https://unsplash.com/photos/Wrw_VHLir8o
		profile_image:
			'https://images.unsplash.com/photo-1635243541748-ec8ed7063ccc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&h=512&q=80',
		bio: exampleBio,
		location: 'Houston, Texas',
		website: 'https://www.nasa.gov',
		twitter: '@nasa',
		facebook: 'NASA'
	},
	{
		id: 0,
		slug: 'jane',
		name: 'Jane Sanderson',
		title: 'Contributing Author',
		// Source: https://unsplash.com/photos/l3IHXOdMyHQ
		profile_image:
			'https://images.unsplash.com/photo-1531727991582-cfd25ce79613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&h=512&q=80',
		bio: exampleBio,
		location: 'Houston, Texas',
		website: 'https://www.nasa.gov',
		twitter: '@nasa',
		facebook: 'NASA'
	},
	{
		id: 0,
		slug: 'michelle',
		name: 'Michelle Li',
		title: 'Contributing Author',
		// Source: https://unsplash.com/photos/_l9LXmpgzRY
		profile_image:
			'https://images.unsplash.com/photo-1514161955277-4ea47eef2ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&h=512&q=80',
		bio: exampleBio,
		location: 'Houston, Texas',
		website: 'https://www.nasa.gov',
		twitter: '@nasa',
		facebook: 'NASA'
	}
];

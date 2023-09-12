import { type Data, type Snowflake, useLanyard } from 'use-lanyard';
import { extractPresenceData } from '../server/presence';
import { useInterval } from './timers';

export function useUpdatingLanyard(id: Snowflake, initialData: Data | null) {
	if (!initialData)
		return {
			data: null,
			presence: extractPresenceData(null),
		};

	const state = useLanyard(id);

	useInterval(5000, {
		callback: state.revalidate,
		deps: [],
	});

	const presenceData = extractPresenceData(state.data!);

	return {
		...state,
		data: state.data!,
		presence: presenceData,
	};
}

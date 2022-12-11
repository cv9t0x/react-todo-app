import { ETodoImportance } from 'types/todo';

export const TodoImportanceList: Array<{
	value: ETodoImportance;
	label: string;
}> = [
	{
		value: ETodoImportance.HIGH_IMPORTANCE,
		label: 'Высокая важность',
	},
	{
		value: ETodoImportance.MIDDLE_IMPORTANCE,
		label: 'Средняя важность',
	},
	{
		value: ETodoImportance.LOW_IMPORTANCE,
		label: 'Низкая важность',
	},
];

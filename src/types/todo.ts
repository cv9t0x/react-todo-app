export enum ETodoImportance {
	HIGH_IMPORTANCE = 'HIGH_IMPORTANCE',
	MIDDLE_IMPORTANCE = 'MIDDLE_IMPORTANCE',
	LOW_IMPORTANCE = 'LOW_IMPORTANCE',
}

export enum ETodoStatus {
	COMPLETED = 'COMPLETED',
	ACTIVE = 'ACTIVE',
}

export interface ITodoCreate {
	name: string;
	description?: string;
	importance: ETodoImportance;
	deleteAfterComplete: boolean;
}

export interface ITodo extends ITodoCreate {
	id: string;
	status: ETodoStatus;
}

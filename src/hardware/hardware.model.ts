export interface Hardware {
	id: string;
	serialNumber: string;
	type: HardwareType;
	status: HardwareStatus;
	lastRepair: Date;
}

export enum HardwareStatus {
	OK = 'OK',
	REPAIRED = 'REPAIRED',
	UNDER_REPAIRED = 'UNDER_REPAIRED',
	UNREAPIRABLE = 'UNREAPIRABLE'
}

export enum HardwareType {
	CPU = 'CPU',
	MAINBOARD = 'MAINBOARD',
	MONITOR = 'MONITOR',
	RAM = 'RAM',
	CASE = 'CASE',
	POWER = 'POWER'
}

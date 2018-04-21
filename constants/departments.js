'use strict';

const FIZMAT = 1;
const PHILOLOGY = 2;
const GEOGRAPHICAL = 3;
const ENGINEERING_PEDAGOGICAL = 4;
const HISTORICAL = 5;
const BIOLOGICAL = 6;
const PHYSICAL = 7;
const FOREIGN = 8;
const ARTS = 9;
const PEDAGOGICAL_PSYCHOLOGY = 10;

const CENTRAL_PAVILION = 'Центральний корпус';

module.exports = {
	[FIZMAT]: {
		"main_name": "Фізико-математичний факультет",
		"local_name": "Фізико-математичному факультеті",
		"pavilion": "Корпус №4"
	},
	[PHILOLOGY]: {
		"main_name": "Факультет філології і журналістики",
		"local_name": "Факультеті філології і журналістики",
		"pavilion": CENTRAL_PAVILION
	},
	[GEOGRAPHICAL]: {
		"main_name": "Географічний факультет",
		"local_name": "Географічному факультеті",
		"pavilion": CENTRAL_PAVILION
	},
	[ENGINEERING_PEDAGOGICAL]: {
		"main_name": "Інженерно-педагогічний факультет",
		"local_name": "Інженерно-педагогічному факультеті",
		"pavilion": "Корпус №2"
	},
	[HISTORICAL]: {
		"main_name": "Історичний факультет",
		"local_name": "Історичному факультеті",
		"pavilion": "Корпус №10"
	},
	[BIOLOGICAL]: {
		"main_name": "Хіміко-біологічний факультет",
		"local_name": "Хіміко-біологічному факультеті",
		"pavilion": CENTRAL_PAVILION
	},
	[PHYSICAL]: {
		"main_name": "Факультет фізичного виховання",
		"local_name": "Факультеті фізичного виховання",
		"pavilion": CENTRAL_PAVILION
	},
	[FOREIGN]: {
		"main_name": "Факультет іноземних мов",
		"local_name": "Факультеті іноземних мов",
		"pavilion": CENTRAL_PAVILION
	},
	[ARTS]: {
		"main_name": "Факультет мистецтв",
		"local_name": "Факультеті мистецтв",
		"pavilion": "Корпус №3"
	},
	[PEDAGOGICAL_PSYCHOLOGY]: {
		"main_name": "Факультет педагогіки та психології",
		"local_name": "Факультеті педагогіки та психології",
		"pavilion": CENTRAL_PAVILION
	}
};
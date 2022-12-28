const exams = [
  {
    id: 1,
    subject: 'maths',
    unit: 'subtraction and addition',
    tasks: 'calculation of fields',
    teacher: 'Thomas Miller',
    date: new Date(2022, 11, 18),
    grade: 1,
  },
  {
    id: 2,
    subject: 'history',
    unit: 'kings of Poland',
    tasks: 'polish kings in the 12th century',
    teacher: 'John Smith',
    date: new Date(2022, 11, 16),
    grade: '',
  },
  {
    id: 3,
    subject: 'maths',
    unit: 'multiplication and addition',
    tasks: 'calculation of area',
    teacher: 'Andrew Black',
    date: new Date(2022, 11, 23),
    grade: 6,
  },
  {
    id: 4,
    subject: 'chemistry',
    unit: 'acids',
    tasks: 'usage acids',
    teacher: 'Max Grey',
    date: new Date(2022, 11, 18),
    grade: '',
  },
  {
    id: 5,
    subject: 'maths',
    unit: 'exponentiation',
    tasks: 'exponentiation',
    teacher: 'Dave Wilson',
    date: new Date(2022, 12, 30),
    grade: '',
  },
  {
    id: 6,
    subject: 'biology',
    unit: 'about heart',
    tasks: 'the structure of the heart ',
    teacher: 'Tina Yellow',
    date: new Date(2022, 12, 31),
    grade: '',
  },
  {
    id: 7,
    subject: 'music',
    unit: 'classical music',
    tasks: 'Vivaldi',
    teacher: 'Kate Bush',
    date: new Date(2022, 10, 19),
    grade: '3',
  },
  {
    id: 8,
    subject: 'music',
    unit: 'rock music',
    tasks: 'Metallica',
    teacher: 'James Black',
    date: new Date(2022, 11, 26),
    grade: '',
  },
];

const initialStoreData = {
  background: 'primary',
  exams: [...exams],
  filters: [],
};

export default initialStoreData;

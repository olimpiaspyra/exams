export const getExamStatus = (grade, date) => {
  if (grade === 1) {
    return 'failed';
  } else if (grade > 2) {
    return 'passed';
  } else if (date < new Date()) {
    return 'unrated';
  } else return 'future';
};

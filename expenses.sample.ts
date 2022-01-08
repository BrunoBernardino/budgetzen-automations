import { DateTime } from 'luxon';

const now = DateTime.now();

// NOTE: The date transformations below assume you're running this on the first day of the month.

const expenses = [
  {
    cost: 100,
    description: 'Rent',
    budget: 'Home',
    date: now.plus({ days: 5 }).toISODate(),
  },
  {
    cost: 500,
    description: 'Monthly Saving',
    budget: 'Savings',
  },
];

export default expenses;

import { getAllProjects } from '../src/contentful';
import '@testing-library/jest-dom';
import { nestArray } from '../src/utils';

describe('get all projects', () => {
  it('returns correct structure for cards', async () => {
    const projects = await getAllProjects();
    expect(projects).toBeTruthy();
  });
});

describe('format carousel for two rows', () => {
  const even = [
    { name: 'alex' },
    { name: 'Ellinor' },
    { name: 'Adam' },
    { name: 'Nils' },
  ];

  const uneven = [{ name: 'alex' }, { name: 'Ellinor' }, { name: 'Adam' }];

  it('formats an even array', () => {
    const evenNested = nestArray(even);
    expect(evenNested).toEqual([
      [{ name: 'alex' }, { name: 'Ellinor' }],
      [{ name: 'Adam' }, { name: 'Nils' }],
    ]);
  });

  it('formats an uneven array', () => {
    const unEevenNested = nestArray(uneven);
    expect(unEevenNested).toEqual([
      [{ name: 'alex' }, { name: 'Ellinor' }],
      [{ name: 'Adam' }],
    ]);
  });
});

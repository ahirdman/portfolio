import { getSingleProject, getAllProjects } from '../src/contentful';
import '@testing-library/jest-dom';

type Field = {
  title: string;
  type: string;
  screenshot: any;
};

describe('get all projects', () => {
  it('returns correct structure for cards', async () => {
    const projects = await getAllProjects();
    expect(projects).toBeTruthy();
  });
});

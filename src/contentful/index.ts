import client from './config';

const getSingleProject = async () => {
  const query = await client.getEntry('3ZvtujrVwLzqNFuDYnjBtq');
  return query;
};

const getAllProjects = async () => {
  const query = await client.getEntries();
  const cards = query.items.map((project: any) => {
    return {
      title: project.fields.title,
      type: project.fields.type,
      image: project.fields.screenshot.fields.file.url,
      id: project.sys.id,
    };
  });
  return cards;
};

export { getSingleProject, getAllProjects };

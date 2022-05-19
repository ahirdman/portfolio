import client from './config';

const getSingleProject = async () => {
  const query = await client.getEntry('3ZvtujrVwLzqNFuDYnjBtq');
  return query;
};

interface IContentfulQuery {
  sys: { type: string };
  total: number;
  skip: number;
  limit: number;
  items: [{ metadata: [Object]; sys: [Object]; fields: [Object] }];
  includes: { Asset: [[Object], [Object], [Object], [Object]] };
}

const filterCards = (query: IContentfulQuery) => {
  return query.items.filter(
    (entry: any) => entry.sys.contentType.sys.id === 'project'
  );
};

const getAllProjects = async () => {
  const query = await client.getEntries();
  const projects = filterCards(query);
  const cards = projects.map((project: any) => {
    return {
      title: project.fields.title,
      type: project.fields.type,
      image: project.fields.screenshot.fields.file.url,
      ref: project.fields.ref.fields,
    };
  });
  return cards;
};

export { getSingleProject, getAllProjects };

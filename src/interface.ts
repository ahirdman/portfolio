interface ICard {
  title: string;
  type: string;
  image: string;
  ref: any;
}

interface IProjectDetails {
  details: string;
  gitHub: string;
  deployed?: string;
  result: string;
  screenshot: {
    metadata: [object];
    sys: [object];
    fields: {
      descrption: string;
      file: {
        contentType: string;
        details: [object];
        fileName: string;
        url: string;
      };
      title: string;
    };
  };
  title: string;
  tools: string[];
  why: string;
}

export type { ICard, IProjectDetails };

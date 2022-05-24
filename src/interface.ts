interface ICard {
  title: string;
  type: string;
  image: string;
  ref: any;
}

interface IExpCard {
  title: string;
  header: string;
  body: string;
  location: string;
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

interface IWindow {
  width: undefined | number;
  height: undefined | number;
}

export type { ICard, IExpCard, IProjectDetails, IWindow };

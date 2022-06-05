interface ICard {
  title: string;
  type: string;
  image: string;
  ref: any;
  order: number;
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
  screenshots: [
    {
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
    }
  ];
  title: string;
  tools: string[];
  why: string;
}

interface IWindow {
  width: undefined | number;
  height: undefined | number;
}

interface ISVGProps {
  fill?: string;
  stroke?: string;
  className?: string;
}

export type { ICard, IExpCard, IProjectDetails, IWindow, ISVGProps };

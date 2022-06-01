import * as s from './styled';

export const content = {
  leisure: [
    {
      svg: <s.StyledPlanet />,
      title: 'stargazing',
      body: 'Space is my muse. Nothing beats a dark sky on a clear night. It humbles and inspires me. ',
    },
    {
      svg: <s.StyledJeep />,
      title: 'roadtrips',
      body: 'I love driving and exploring new places. During covid, I would frequently load my car with camping gear and hit the road.',
    },
    {
      svg: <s.StyledPaw />,
      title: 'cornelis',
      body: 'My Old English Bulldog, the best four-legged companion I could ask for. He loves running in the woods and swallowing my socks.',
    },
  ],
  skills: [
    {
      svg: <s.StyledTypeScript />,
      title: 'languages',
      body: 'JavaScript & TypeScript. I learned the bare basics of programming with Swift. I will continue learning Swift in the future.',
    },
    {
      svg: <s.StyledReact />,
      title: 'frontend',
      body: 'React, Redux, Next.js, HTML, CSS, SASS, Styled Components, Framer Motion',
    },
    {
      svg: <s.StyledDatabase />,
      title: 'backend',
      body: 'Node.js, Express, REST, NoSql, SQL, Docker, Firebase',
    },
  ],
  dev: [
    {
      svg: <s.StyledTest />,
      title: 'tdd',
      body: 'Writing good tests helps me sleep better at night. I use mocha, jest, and postman in my projects.',
    },
    {
      svg: <s.StyledTeam />,
      title: 'team',
      body: 'If you want to go fast, go alone. If you want to go far, go together.',
    },
    {
      svg: <s.StyledUser />,
      title: 'user first',
      body: 'We create applications for users, not computers. I try to keep that in mind at all times and prioritize accordingly.',
    },
  ],
};

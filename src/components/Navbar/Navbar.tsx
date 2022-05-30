import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { highlight } from 'src/styled/colors';
import { popUp } from './motionVariants';
import * as s from './styled';

const tabs = ['Home', 'Projects', 'About', 'Experience'];

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState<string>();

  return (
    <AnimatePresence
      initial={true}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      <s.NavContainer>
        <s.Nav variants={popUp} initial="hidden" animate="visible" exit="exit">
          {tabs.map((tab: string) => (
            <Link
              key={tab}
              to={tab}
              smooth={true}
              spy={true}
              onSetActive={() => setSelectedTab(tab)}
              style={{
                display: 'flex',
                position: 'relative',
              }}
            >
              <s.NavLink hoverColor={highlight}>{tab}</s.NavLink>
              {selectedTab === tab ? (
                <s.Underline layoutId="underline" />
              ) : null}
            </Link>
          ))}
        </s.Nav>
      </s.NavContainer>
    </AnimatePresence>
  );
};

export default Navbar;

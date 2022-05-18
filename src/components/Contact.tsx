import { Header, Title, Details } from '../styled';
// import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Header>
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      > */}
      <Title grey>CONTACT</Title>
      <Details>Get in touch</Details>
      {/* </motion.div> */}
    </Header>
  );
};

export default Contact;

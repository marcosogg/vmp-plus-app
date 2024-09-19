import React from 'react';
import ButtonExample from '../components/examples/ButtonExample';
import ModalExample from '../components/examples/ModalExample';
import TableExample from '../components/examples/TableExample';
import FormInputExample from '../components/examples/FormInputExample';
import { GetStaticProps } from 'next';

const ComponentShowcase: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">Component Showcase</h1>
      <ButtonExample />
      <ModalExample />
      <TableExample />
      <FormInputExample />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default ComponentShowcase;
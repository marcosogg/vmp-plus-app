import React from 'react';
import Button from '../common/Button';

const ButtonExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Button Examples</h2>
      <div className="space-x-2">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="destructive">Destructive Button</Button>
      </div>
      <div className="space-x-2">
        <Button size="sm">Small Button</Button>
        <Button size="lg">Large Button</Button>
      </div>
    </div>
  );
};

export default ButtonExample;
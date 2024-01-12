import { ContentProps } from '../types';

const Content = ({ name, exerciseCount }: ContentProps) => (
  <p>
    {name} {exerciseCount}
  </p>
);

export default Content;

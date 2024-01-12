import { CoursePart } from '../types';
import Part from './Part';

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => (
  <Part courseParts={courseParts} />
);

export default Content;

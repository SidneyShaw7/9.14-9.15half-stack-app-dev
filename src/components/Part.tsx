import { CoursePart } from '../types';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <div>
      {courseParts.map((part) => {
        switch (part.kind) {
          case 'basic':
            return (
              <div key={part.name}>
                <p>
                  <b>
                    {part.name} {part.exerciseCount}
                  </b>
                  <br />
                  <i>{part.description}</i>
                </p>
              </div>
            );
          case 'group':
            return (
              <div key={part.name}>
                <p>
                  <b>
                    {part.name} {part.exerciseCount}
                  </b>
                  <br />
                  project exercises {part.groupProjectCount}
                </p>
              </div>
            );
          case 'background':
            return (
              <div key={part.name}>
                <p>
                  <b>
                    {part.name} {part.exerciseCount}
                  </b>
                  <br />
                  <i>{part.description}</i> <br />
                  submit to {part.backgroundMaterial}
                </p>
              </div>
            );
          default:
            return assertNever(part);
        }
      })}
    </div>
  );
};

export default Part;

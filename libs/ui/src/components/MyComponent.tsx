import React, { FC, MouseEventHandler, useState } from 'react';

export type MyComponentProps = {
  action: string;
  emoji: string;
};

const MyComponent: FC<MyComponentProps> = ({
  action = 'Refactor',
  emoji = '🙂',
}) => {
  const [state, setState] = useState({ prop1: 'org', prop2: 100 });

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setState({ prop1: 'MyOrg', prop2: 200 });
  };

  return (
    <>
      I am a {state} React Component {emoji}
      <p>
        Please &nbsp;
        <button type="button" onClick={handleClick}>
          {action}
        </button>
        &nbsp; me!
      </p>
    </>
  );
};

export default MyComponent;

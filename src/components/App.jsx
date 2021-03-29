import React from 'react';
import SignIn from './SignIn';

export default () => {
  const [name, setName] = useState("");
  console.log({ name });
  return (
    <SignIn setName={setName} />
  );
};

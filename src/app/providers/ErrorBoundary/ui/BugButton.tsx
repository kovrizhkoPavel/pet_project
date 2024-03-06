import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
  const [isError, setIsError] = useState(false);

  const throwError = () => {
    setIsError(!isError);
  };

  useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={throwError}>
      throw error
    </Button>
  );
};

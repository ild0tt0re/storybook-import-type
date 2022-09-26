import { useCallback } from 'react';

const AnyOfCustomOperatorComponentNew = (props: any) => {
  const onValueChanged = useCallback(
    (e: { value: string | any[] }) => {
      props.data.setValue(e.value && e.value.length ? e.value : null);
    },
    [props.data]
  );

  return <div>test</div>;
};

export default AnyOfCustomOperatorComponentNew;

type StatusProps = {
  // status: string;
  status: 'success' | 'error';
};

export const Status = (props: StatusProps) => {
  let message: string;
  // if (props.status === 'loading') message = 'Loading...';
  // else if (props.status === 'success') message = 'Fetched Data Successfully';
  // else if (props.status === 'error') message = 'Error Fetching Data';
  // else message = 'This is the Default Status';
  if (props.status === 'success') message = 'Fetched Data Successfully';
  else if (props.status === 'error') message = 'Error Fetching Data';
  else message = 'Loading...';
  return (
    <div>
      <h2> Status: {message}</h2>
    </div>
  );
};

// We can split this
// Also, we can export this and use this particular type in multiple places
export type Name = {
  first: string;
  last: string;
};

export type PersonProps = {
  // name: {
  //   first: string;
  //   last: string;
  // };
  name: Name;
};

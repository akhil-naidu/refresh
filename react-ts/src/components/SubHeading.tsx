type SubHeadingProps = {
  children: string;
};

export const SubHeading = (props: SubHeadingProps) => {
  return <h1>{props.children}</h1>;
};

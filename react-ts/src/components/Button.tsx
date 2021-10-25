// Intentionally made this button complicated so that I can only have one button component

type ButtonProps = {
  // for most of the button can be doping nothing, in such cases () => void
  voidButton: boolean;
  handleClickVoid?: () => void;
  handleClickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: ButtonProps) => {
  const { voidButton, handleClickVoid, handleClickEvent } = props;
  return (
    <button onClick={voidButton ? handleClickVoid : handleClickEvent}>
      Click It
    </button>
  );
};

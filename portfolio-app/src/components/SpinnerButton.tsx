import "./bloks/css/ButtonBlok.css"; // css shared with normal ButtonBlok

interface SpinnerButtonBaseProps {
  text: string;
  spinning: boolean;
  disabled?: boolean;
  textSpinning?: string;
  title?: string;
}

interface FormSubmitProps extends SpinnerButtonBaseProps {
  type: "formSubmit";
}

interface ManualProps extends SpinnerButtonBaseProps {
  type: "manual";
  onSubmit: () => void;
}

const SpinnerButton = (props: FormSubmitProps | ManualProps): JSX.Element => {
  const roundSpinnerWithText = (spinningText?: string): JSX.Element => {
    const button = (
      <span className="spinner-border spinner-border-sm" role="status" />
    );
    if (!spinningText) {
      return button;
    }
    return (
      <span className="d-flex justify-content-center gap-1 align-items-center">
        {button}
        {spinningText}
      </span>
    );
  };

  return (
    <button
      type={props.type === "formSubmit" ? "submit" : undefined}
      className={"btn btn-primary w-100 w-lg-0"}
      disabled={props.disabled}
      title={props.title}
      onSubmit={props.type === "manual" ? props.onSubmit : undefined}
    >
      {props.spinning ? roundSpinnerWithText(props.textSpinning) : props.text}
    </button>
  );
};

export default SpinnerButton;

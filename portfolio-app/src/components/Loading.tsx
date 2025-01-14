interface LoadingScreenProps {
  height: number | "100vh";
}

const Loading = (props: LoadingScreenProps): JSX.Element => {
  return (
    <div className={"spinner-container"} style={{ minHeight: props.height }}>
      <div className="spinner-border spinner" role="status" />
    </div>
  );
};

export default Loading;

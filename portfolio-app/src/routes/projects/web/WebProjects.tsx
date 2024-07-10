type WebProjectsProps = {
  message: string;
};

const WebProjects: React.FC<WebProjectsProps> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default WebProjects;

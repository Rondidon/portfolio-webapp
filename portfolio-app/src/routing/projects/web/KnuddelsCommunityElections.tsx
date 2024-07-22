type KnuddelsCommunityElectionsProps = {
  message: string;
};

const KnuddelsCommunityElections: React.FC<KnuddelsCommunityElectionsProps> = ({
  message,
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default KnuddelsCommunityElections;

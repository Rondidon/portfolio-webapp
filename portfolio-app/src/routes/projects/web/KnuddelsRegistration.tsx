type KnuddelsRegistrationProps = {
  message: string;
};

const KnuddelsRegistration: React.FC<KnuddelsRegistrationProps> = ({
  message,
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default KnuddelsRegistration;

type KnuddelsLandingPageProps = {
  message: string;
};

const KnuddelsLandingPage: React.FC<KnuddelsLandingPageProps> = ({
  message,
}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default KnuddelsLandingPage;

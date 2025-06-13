

interface WelcomeProps {
  name: string;
}

function Welcome(props: WelcomeProps) {
  return (
    <div id="welcome">
      <h2>Welcome, {props.name}!</h2>
    </div>
  );
}

export default Welcome; 
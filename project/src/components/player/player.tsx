type PlayerProps = {
  videoSrc: string;
  posterImageSrc: string;
  muted: boolean;
}

function Player(props: PlayerProps): JSX.Element {
  return (
    <video src={props.videoSrc} muted={props.muted} autoPlay poster={props.posterImageSrc} width="280" height="175" />
  );
}

export default Player;

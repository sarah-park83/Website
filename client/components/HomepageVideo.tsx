export default function HomepageVideo() {
  return (
    <video
      controls
      width="889"
      height="500"
      style={{ left: '26px', top: '0px' }}
    >
      <track kind="captions" />
      <source
        src="blob:https://www.youtube.com/ba2428c8-a679-4bcc-b488-f2790f63c7a5"
        type="video/mp4"
      />
    </video>
  )
}

import React from "react";

export default function Video({ className }: { className: string }) {
  return (
    <video
      width="320"
      height="240"
      controls={false}
      preload="none"
      autoPlay
      muted
      loop
      playsInline
      className={className}
    >
      <source src="/home.mp4" type="video/mp4" />
      {/* <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      /> */}
      Your browser does not support the video tag.
    </video>
  );
}

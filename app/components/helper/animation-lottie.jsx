"use client";

import dynamic from "next/dynamic";

// lottie-web touches `document` as soon as it is imported, which breaks
// server-side prerendering (`next build`). Load it in the browser only.
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath }) => {
  return (
    <Lottie
      loop
      autoplay
      animationData={animationPath}
      style={{ width: "95%" }}
    />
  );
};

export default AnimationLottie;

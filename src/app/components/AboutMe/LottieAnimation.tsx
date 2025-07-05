import React from 'react';
import Lottie from 'react-lottie';

type AnimationData = {
  v: string;
  fr: number;
  ip: number;
  op: number;
};

interface Props {
  animacion: AnimationData;
  className?: string;
}

export default function LottieAnimation({ animacion, className = "" }: Props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacion,
  };

  return (
    <div className={className}>
      <Lottie 
        options={defaultOptions}
        isClickToPauseDisabled={true}
      />
    </div>
  );
}
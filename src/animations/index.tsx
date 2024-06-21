import { gsap, Power2, Sine } from 'gsap';

export const parallaxIt = (
  event: MouseEvent,
  containerRef: HTMLDivElement,
  targetClassName: string,
  movement: number
) => {
  const locationX = event.pageX;
  const locationY = event.pageY;

  const x =
    ((locationX - containerRef.offsetWidth / 2) / containerRef?.offsetWidth) *
    movement;
  const y =
    ((locationY - containerRef.offsetHeight / 2) / containerRef.offsetHeight) *
    movement;

  gsap.to(targetClassName, {
    x: x,
    y: y,
    ease: Power2.easeOut,
  });
};

export const floatIt = (targetClassName: string) => {
  gsap.to(targetClassName, {
    yPercent: 50,
    ease: Sine.easeInOut,
    duration: 2,
    stagger: {
      each: 0.2,
      repeat: -1,
      yoyo: true,
    },
  });
};

export const rotateIt = ({
  targetClassName,
  transformOrigin,
  rotation,
  duration,
}: {
  targetClassName: string | string[];
  transformOrigin: string;
  rotation: gsap.TweenValue;
  duration: gsap.TweenValue;
}) => {
  gsap.fromTo(
    targetClassName,
    {
      rotation,
      transformOrigin,
      ease: Sine.easeInOut,
      duration,
      stagger: {
        each: 2,
        repeat: -1,
        yoyo: true,
      },
    },
    {
      rotation: -rotation,
      transformOrigin,
      ease: Sine.easeInOut,
      duration,
      stagger: {
        each: 0.5,
        repeat: -1,
        yoyo: true,
      },
    }
  );
};

export const spinIt = ({
  targetClassName,
  duration,
  direction,
}: {
  targetClassName: string | string[];
  duration: gsap.TweenValue;
  direction: 1 | -1;
}) => {
  gsap.to(targetClassName, {
    rotation: 360 * direction,
    transformOrigin: 'center',
    duration,
    ease: 'none',
    stagger: {
      each: 2,
      repeat: -1,
    },
  });
};

export const scaleIt = ({
  targetClassName,
  duration,
}: {
  targetClassName: string;
  duration: gsap.TweenValue;
}) => {
  gsap.to(targetClassName, {
    scale: 1.1,
    transformOrigin: 'left bottom',
    duration,
    ease: Sine.easeInOut,
    stagger: {
      each: 0.5,
      repeat: -1,
      yoyo: true,
      from: 'random',
    },
  });
};

import React, { createContext, useContext, useState, useEffect } from "react";
import { type AnimationStep } from "~/data/animations";
import { ANIMATION_1_1_1 } from "~/data/animations/animation-1-1-1";
import { ANIMATION_3_3_3 } from "~/data/animations/animation-3-3-3";

type AnimationContextType = {
  activeAnimation: AnimationStep[];
  currentAnimation: string;
  setCurrentAnimation: (id: string) => void;
};

const defaultContext: AnimationContextType = {
  activeAnimation: ANIMATION_3_3_3,
  currentAnimation: "3-3-3",
  setCurrentAnimation: () => undefined,
};

const AnimationContext = createContext<AnimationContextType>(defaultContext);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [currentAnimation, setCurrentAnimation] = useState(
    defaultContext.currentAnimation,
  );
  const [activeAnimation, setActiveAnimation] = useState(
    defaultContext.activeAnimation,
  );

  useEffect(() => {
    const newAnimation = (() => {
      switch (currentAnimation) {
        case "1-1-1":
          return ANIMATION_1_1_1;
        case "3-3-3":
          return ANIMATION_3_3_3;
        default:
          return ANIMATION_3_3_3;
      }
    })();
    setActiveAnimation(newAnimation);
  }, [currentAnimation]);

  const value = {
    activeAnimation,
    currentAnimation,
    setCurrentAnimation,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimationContext() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error(
      "useAnimationContext must be used within an AnimationProvider",
    );
  }
  return context;
}

import { ReactNode } from "react";
import { useReactFlow, useStore } from "@xyflow/react";
import { STYLES } from "~/config";

type ContainerProps = {
  children?: ReactNode;
  label?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  dashed?: boolean;
};

export function Container({ children, label, x, y, width, height, color = STYLES.COLORS.RED, dashed = true }: ContainerProps) {
  const { transform } = useStore();
  const [transformX, transformY, zoom] = transform;

  // Determine background color based on container color
  const backgroundColor = color === STYLES.COLORS.GREEN 
    ? STYLES.CONTAINERS.BACKGROUNDS.GREEN 
    : STYLES.CONTAINERS.BACKGROUNDS.RED;

  return (
    <div
      className="absolute"
      style={{
        transform: `translate(${x * zoom + transformX}px, ${y * zoom + transformY}px) scale(${zoom})`,
        width,
        height,
        border: `2px ${dashed ? 'dashed' : 'solid'} ${color}`,
        borderRadius: '8px',
        padding: '20px',
        backgroundColor,
        pointerEvents: 'none',
        zIndex: -1,
        transformOrigin: '0 0',
      }}
    >
      {label && (
        <div
          className="absolute -top-3 left-4 bg-white px-2 text-sm text-gray-600"
          style={{ color }}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
} 
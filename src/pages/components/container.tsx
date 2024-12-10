import { ReactNode } from "react";
import { useReactFlow, useStore } from "@xyflow/react";

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

export function Container({ children, label, x, y, width, height, color = "#ff9999", dashed = true }: ContainerProps) {
  const { transform } = useStore();
  const [transformX, transformY, zoom] = transform;

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
        backgroundColor: 'rgba(255, 153, 153, 0.05)',
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
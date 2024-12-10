export type NodeData = {
  label: string;
  color?: string;
  group?: string;
  style?: {
    backgroundColor?: string;
  };
  onClick?: () => void;
}; 
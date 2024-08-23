import { BaseEdge, EdgeLabelRenderer, getBezierPath, MarkerType } from '@xyflow/react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';


type LatexEdgeProps = {
    id: string;
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    style: React.CSSProperties;
    markerEnd: any;
    label: string;
};


export default function LatexEdge({ id, sourceX, sourceY, targetX, targetY, style, markerEnd, label }: LatexEdgeProps) {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    const info = "Hello"
    console.log(id, sourceX, sourceY, targetX, targetY, label)

    return (
        <>
            <BaseEdge id={id} path={edgePath} style={style} markerEnd={markerEnd}/>
            <EdgeLabelRenderer>
                <div style={{
                    position: 'absolute',
                    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                    pointerEvents: 'all',
                    fontSize: '12px',
                }}>
                    <Latex>{label}</Latex>
                </div>
            </EdgeLabelRenderer>
        </>
    );
}
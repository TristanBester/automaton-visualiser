import { BaseEdge, EdgeLabelRenderer, getBezierPath, MarkerType } from '@xyflow/react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function latexEdge({ id, sourceX, sourceY, targetX, targetY, markerEnd, style }) {
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });


    // const thing = {
    //     strokeWidth: 10,
    //     stroke: '#FF0000',

    // };



    return (
        <>
            <BaseEdge id={id} path={edgePath} style={style} markerEnd={markerEnd} />
            <EdgeLabelRenderer>
                <div style={{
                    position: 'absolute',
                    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                    pointerEvents: 'all',
                    fontSize: '6px',
                }}>
                    <Latex>$\langle P_A, [1], [1], 0 \rangle$</Latex>
                </div>
            </EdgeLabelRenderer>
        </>
    );
}
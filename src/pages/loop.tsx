import { BaseEdge, EdgeLabelRenderer, getBezierPath, getSmoothStepPath, MarkerType } from '@xyflow/react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';



export default function LoopEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
  }) {
    const offset = 40; // adjust this value to make the loop larger or smaller

    // Define the control points for the Bezier curve to make it circular
    const [edgePath] = getBezierPath({
        sourceX,
        sourceY: sourceY - offset,
        sourcePosition,
        targetX,
        targetY: targetY - offset,
        targetPosition,
        curvature: 3
    });

    const path = generateParabolaCurve(sourceX ,sourceY , targetX, targetY, 40);
    const labelX = (sourceX + targetX) / 2;
    const labelY = (sourceY + targetY) / 2 - 60;

    return (
        <>
            <BaseEdge id={id} path={path} style={style} markerEnd={markerEnd}/>
            <EdgeLabelRenderer>
                <div style={{
                    position: 'absolute',
                    transform: `translate(-50%, -150%) translate(${labelX}px,${labelY}px)`,
                    pointerEvents: 'all',
                    fontSize: '12px',
                }}>
                    <Latex>$\alpha$</Latex>
                </div>
            </EdgeLabelRenderer>
        </>
    );
}


function generateParabolaCurve(x1, y1, x2, y2) {
    // Move curve so not behind node
    y1 -= 20;
    y2 -= 20;

    const innerShift = 10;
    x1 = x1 - innerShift;
    x2 = x2 + innerShift;

    // Calculate the midpoint between the start and end points
    const verticalStretch = 75;
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2 - verticalStretch;

    // Calculate the control point position
    // The control point is offset vertically by controlPointDistance from the midpoint
    const cpX = midX;
    const cpY = midY;

    // Generate the path string
    const path = `M${x1},${y1} Q${cpX},${cpY} ${x2},${y2}`;

    return path;
}
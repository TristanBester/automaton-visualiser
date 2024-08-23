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

    console.log(edgePath)

    // const path = generateSemiCirclePath(sourceX, sourceY, targetX, targetY, 10);
    const path = generateParabolaCurve(sourceX, sourceY, targetX, targetY, 40);

    return (
        <>
            <BaseEdge id={id} path={path} style={style} markerEnd={markerEnd}/>
        </>
    );
}


function generateSemiCirclePath(x1, y1, x2, y2, radius) {
    // Calculate the distance between the two points
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // If the radius is smaller than half the distance, adjust the radius to fit the semi-circle
    if (radius < distance / 2) {
        radius = distance / 2;
    }

    // Calculate the large-arc-flag (always 0 for semi-circle) and sweep-flag (1 for clockwise)
    const largeArcFlag = 0;
    const sweepFlag = 0;

    // Generate the path string
    const path = `M${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},${sweepFlag} ${x2},${y2}`;

    return path;
}

function generateParabolaCurve(x1, y1, x2, y2, controlPointDistance) {
    // Calculate the midpoint between the start and end points
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    // Calculate the control point position
    // The control point is offset vertically by controlPointDistance from the midpoint
    const cpX = midX;
    const cpY = midY - controlPointDistance;

    // Generate the path string
    const path = `M${x1 + 100},${y1 + 100} Q${cpX},${cpY} ${x2 + 100},${y2 + 100}`;

    return path;
}
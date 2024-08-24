import { ReactFlow, Controls, Background, MarkerType, Position, EdgeTypes } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { internalNode, terminalNode } from './node';
import LatexEdge from './edge';
import LoopEdge from './loop';
import { AnimatedNode } from './animated';


const nodes = [
    {
        id: '1',
        type: 'internal',
        position: { x: 0, y: 0 },
        data: { label: 'Hello' },
    },
    {
        id: '2',
        type: 'animated',
        position: { x: 200, y: 0 },
        data: { label: 'Hello' },
    },
    {
        id: '3',
        type: 'internal',
        position: { x: 400, y: 0 },
        data: { label: 'Hello' },
    },
    {
        id: '4',
        type: 'terminal',
        position: { x: 400, y: 200 },
        data: { label: 'Hello' },
    },
];
const edges = [
    {
        id: 'e-1-2',
        source: '1',
        target: '2',
        type: 'latex',
        markerEnd: { type: MarkerType.ArrowClosed, color: '#FF0072', width: 15, height: 15 },
        style: { stroke: '#FF0072', strokeWidth: 2 },
        edgeText: 'hello',
        label: '$\\langle a, b, \\rangle$',
        animated: true,
    },
    {
        id: 'e2-3',
        source: '2',
        target: '3',
    },
    {
        id: 'e3-4',
        source: '3',
        target: '4',
    },
    {
        id: 'e3-3',
        source: '3',
        target: '3',
        type: 'loop',
        markerEnd: { type: MarkerType.ArrowClosed, color: '#FF0072', width: 15, height: 15 },
        animated: true,
    },
    
];

const nodeTypes = {
    internal: internalNode,
    terminal: terminalNode,
    animated: AnimatedNode,
};
const edgeTypes = {
    latex: LatexEdge,
    loop: LoopEdge,
};

function Flow() {
    return (
        <div style={{ height: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes as EdgeTypes}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Flow;
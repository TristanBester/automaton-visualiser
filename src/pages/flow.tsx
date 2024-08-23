import { ReactFlow, Controls, Background, MarkerType, Position, EdgeTypes } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { internalNode, terminalNode } from './node';
import LatexEdge from './edge';


const nodes = [
    {
        id: '1',
        type: 'internal',
        position: { x: -100, y: 0 },
        data: { label: 'Hello' },
    },
    {
        id: '2',
        type: 'internal',
        position: { x: 100, y: 100 },
        data: { label: 'Hello' },
    },
    {
        id: '3',
        type: 'terminal',
        position: { x: 400, y: 400 },
        data: { label: 'Hello' },
    },
];
const edges = [
    {
        id: 'edge-bi-1',
        source: '1',
        target: '2',
        type: 'latex',
        markerEnd: { type: MarkerType.ArrowClosed, color: '#FF0072', width: 25, height: 25 },
        style: { stroke: '#FF0072', strokeWidth: 2 },
        edgeText: 'hello',
        label: '$\\langle a, b, \\rangle$',
        animated: true,
    },
    {
        id: 'e2-3',
        source: '2',
        target: '3',
        animated: true,
    },
];

const nodeTypes = {
    internal: internalNode,
    terminal: terminalNode,
};
const edgeTypes = {
    latex: LatexEdge
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
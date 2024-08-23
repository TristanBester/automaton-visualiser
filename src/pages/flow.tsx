import { ReactFlow, Controls, Background, MarkerType, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { internalNode, terminalNode } from './node';
import latexEdge from './edge';
import CustomEdge from './bedge';


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
        // id: 'e1-2',
        // type: 'bi',
        // source: '1',
        // target: '2',
        // label: 'marker size and color',
        id: 'edge-bi-1',
        source: '1',
        target: '2',
        type: 'latexbidirectional',
        markerEnd: { type: MarkerType.ArrowClosed, color: '#FF0072', width: 50, height: 50 },
        style: { stroke: '#FF0072', strokeWidth: 2 },
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
    bidirectional: CustomEdge,
    latex: latexEdge
};

function Flow() {
    return (
        <div style={{ height: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
}

export default Flow;
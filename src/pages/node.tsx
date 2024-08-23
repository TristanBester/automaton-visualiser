import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const handleStyle = { left: 10 };


export function internalNode() {
    return (
        <>
            <div className={`w-16 h-16 rounded-full bg-gray-100 shadow-md border border-gray-300 flex items-center justify-center`}>
                <Latex>$u_0$</Latex>
            </div>
            <Handle type="source" position={Position.Right} id="a" />
            <Handle type="target" position={Position.Left} />
        </>
    )

}

export function startNode() {

}

export function terminalNode() {
    return (
        <>
            <div className={`w-4 h-4 rounded-full bg-black shadow-md border border-gray-300 `} />
            <Handle type="target" position={Position.Left} />
        </>
    )

}












// export function CustomNode({ data }) {
//     const onChange = useCallback((evt) => {
//         console.log(evt.target.value);
//     }, []);


//     return (
//         <>
//             <Handle type="target" position={Position.Top} />
//             {/* Style the following div with tailwind */}
//             <div className={`w-16 h-16 rounded-full bg-gray-100 shadow-md border border-gray-300 flex items-center justify-center`}>
//                 <Latex>$u_0$</Latex>
//             </div>
//             <Handle type="source" position={Position.Bottom} id="a" />
//         </>
//     );
// }

// export default CustomNode;
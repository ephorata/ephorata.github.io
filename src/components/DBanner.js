import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import Box from '@material-ui/core/Box';

export default function Model(props) {
    const group = useRef();
    const { nodes, materials } = useGLTF("./assets/3D/SBM Credit CC itr1.glb");
    // const { nodes, materials } = useGLTF("./assets/3D/donut48.glb");
    
    console.log("nodes: ", nodes)
    console.log("materials: ", materials)
    const [colour, setColour] = useState("#ED91A8")
    
    return (
        <group ref={group} {...props} dispose={null}>
            {/* <mesh
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={[33.365, 33.365, 33.365]}
            >
            </mesh> */}

            <mesh 
                geometry={nodes.Cube001.geometry} 
                material={nodes.Cube001.material} 
                position={[0,0,0]}
                rotation={[0,0,0]}
                scale={[1,1,1]}
                >
            </mesh>

            <mesh 
                geometry={nodes.Cube001_1.geometry} 
                material={nodes.Cube001_1.material} 
                position={[0,0,0]}
                rotation={[0,0,0]}
                scale={[1,1,1]}
                >
            </mesh>

            <mesh 
                geometry={nodes.Curve.geometry} 
                material={nodes.Curve.material} 
                position={[0,0,0]}
                rotation={[0,0,0]}
                scale={[33.365,33.365,33.365]}
                >
            </mesh>

            <mesh 
                geometry={nodes.Curve001.geometry} 
                material={nodes.Curve001.material} 
                position={[0,0,0]}
                rotation={[0,0,0]}
                scale={[33.365,33.365,33.365]}
                >
            </mesh>

            <mesh 
                geometry={nodes.Text.geometry} 
                material={nodes.Text.material} 
                position={[-0.3971,0.0028,0.8585]}
                rotation={[0,0,0]}
                scale={[0.145422,0.145422,0.14542]}
                >
            </mesh>



        </group>
    );
}

useGLTF.preload('./assets/3D/SBM Credit CC itr1.glb');
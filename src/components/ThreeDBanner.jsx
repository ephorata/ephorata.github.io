import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

//import Model from "./DBanner";

function Model() {
  const { scene } = useGLTF("/assets/3D/SBM Credit CC itr1.glb");
  const { nodes, materials } = useGLTF("./assets/3D/SBM Credit CC itr2.glb");
  console.log("nodes: ", nodes);
  console.log("materials: ", materials);
  return <primitive object={scene} />;
}
const useStyles = makeStyles((theme) => ({
  threeD: {
    width: "80%",

    margin: "0 auto",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
  },
}));

export const ThreeDBanner = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.threeD}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box style={{ height: "60vh", backgroundColor: "white" }}>
            <Canvas camera={{ position: [2, 10, 5], fov: 0.5 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, 1, 0]} intensity={2} />
              <directionalLight position={[0, 200, 500]} intensity={2} />
              <directionalLight position={[50, 100, 0]} intensity={2} />
              <directionalLight position={[0, 100, -100]} intensity={2} />
              <directionalLight position={[-500, 300, 500]} intensity={2} />
              <spotLight
                angle={0.1}
                position={[10, -10, -10]}
                castShadow
                penumbra={1}
              />
              <pointLight position={[-10, -10, -10]} intensity={1} />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
              <OrbitControls />
            </Canvas>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

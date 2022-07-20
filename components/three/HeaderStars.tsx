import { Suspense } from "react";
import { CameraShake, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Sepia,
} from "@react-three/postprocessing";

import styles from "@styles/modules/HeaderStars.module.scss";

export default function HeaderStars() {
  return (
    <Suspense>
      <Canvas className={styles["app-header-stars"]}>
        <EffectComposer>
          <DepthOfField
            focusDistance={2}
            focalLength={0.02}
            bokehScale={1}
            height={480}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <CameraShake />
          <Stars radius={100} depth={120} count={2000} factor={4} />
          <Sepia intensity={1.0} />
        </EffectComposer>
      </Canvas>
    </Suspense>
  );
}

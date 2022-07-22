import { Suspense } from "react";
import { CameraShake, Stars, Stats } from "@react-three/drei";
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
        <CameraShake />
        <Stars radius={100} depth={120} count={2000} factor={4} />
      </Canvas>
    </Suspense>
  );
}

import { Suspense } from "react";
import * as THREE from "three";
import { CameraShake, Stars, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Glitch,
  Scanline,
  Sepia,
} from "@react-three/postprocessing";

import styles from "@styles/modules/HeaderStars.module.scss";
import { useUIStore } from "store/ui.store";

export default function HeaderStars() {
  const headerGlitch = useUIStore((s) => s.headerGlitch);

  return (
    <Suspense>
      <Canvas className={styles["app-header-stars"]}>
        <EffectComposer>
          <Glitch
            duration={new THREE.Vector2(0.5, 1)}
            delay={new THREE.Vector2(0, 0.2)}
            active={headerGlitch}
          />

          <CameraShake intensity={headerGlitch ? 10 : 1} />
          {headerGlitch ? <Scanline density={10} /> : <></>}

          <Stars radius={100} depth={120} count={2000} factor={4} />
        </EffectComposer>
      </Canvas>
    </Suspense>
  );
}

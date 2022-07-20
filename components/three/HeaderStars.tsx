import { CameraShake, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { Suspense } from "react";

export default function HeaderStars() {
  return (
    <Suspense>
      <Canvas className="home-canvas">
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <CameraShake />
          <Stars
            radius={100}
            depth={120}
            count={2000}
            factor={4}
          />
        </EffectComposer>
      </Canvas>
    </Suspense>
  );
}

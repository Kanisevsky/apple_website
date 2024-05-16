import { PerspectiveCamera, View } from '@react-three/drei';
import { AmbientLight } from 'three';
import Lights from './Lights';
import { Suspense } from 'react';
const ModelView = (
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item
) => {
  return (
    <div>
      <View
        index={index}
        id={gsapType}
        className={`w-full h-full absolute ${
          index === 2 ? 'right-[-100%]' : ''
        }`}
      >
        {/* Ambient Light */}
        <ambientLight intensity={0.3} />
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Lights />
        <Suspense fallback={<div>Loading</div>} />
      </View>
    </div>
  );
};

export default ModelView;

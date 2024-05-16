import { PerspectiveCamera, View } from '@react-three/drei';
import { AmbientLight } from 'three';

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
        <AmbientLight intensity={0.3} />
        <PerspectiveCamera makeDefault position={[0, 0]} />
      </View>
    </div>
  );
};

export default ModelView;

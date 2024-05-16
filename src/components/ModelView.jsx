import { View } from '@react-three/drei';

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
      ></View>
    </div>
  );
};

export default ModelView;

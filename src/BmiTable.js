import React from 'react';
import {View, Animated} from 'react-native';
import Style from './Styles';
import BmiCard from './Card';

function getSharedElementOpacityStyle(animatedValue) {
  const opacityInterpolation = animatedValue.interpolate({
    inputRange: [0, 0.995, 1],
    outputRange: [0, 0, 1],
  });
  return {
    opacity: opacityInterpolation,
    paddingHorizontal: 0,
  };
}
const BmiTable = ({index, data, onCardClicked, animatedValue}) => {
  const transitionLayerStyle = getSharedElementOpacityStyle(animatedValue);

  return (
    <Animated.View style={[Style.containerStyle, transitionLayerStyle]}>
      <View style={Style.tableContainer}>
        <Animated.View>
          <BmiCard
            index={index}
            data={data}
            isOpen
            style={{marginTop: 0}}
            onCardClicked={() => {
              if (onCardClicked) {
                onCardClicked();
              }
            }}
          />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default BmiTable;

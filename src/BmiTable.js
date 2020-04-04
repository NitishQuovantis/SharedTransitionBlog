import React, {Component} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import Style from './Styles';
import BmiCard from './Card';

export default class BmiTable extends Component {
  render() {
    const {index, data, onCardClicked} = this.props;

    return (
      <Animated.View style={[Style.containerStyle]}>
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
  }
}

function getSharedElementOpacityStyle(animatedValue) {
  const opacityInterpolation = animatedValue.interpolate({
    inputRange: [0, 0.995, 1],
    outputRange: [0, 0, 1],
  });
  return {opacity: opacityInterpolation};
}

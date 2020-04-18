import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import Styles from './Styles';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.cardRef = null;
  }

  render() {
    const {data, onCardClicked, index, style, isOpen, animating} = this.props;

    let rotation = '90deg';

    if (isOpen) {
      rotation = '-90deg';
    } else if (animating) {
      rotation = animating.interpolate({
        inputRange: [0, 1],
        outputRange: ['90deg', '-90deg'],
      });
    } else {
      rotation = '90deg';
    }

    return (
      <TouchableOpacity
        key={Math.random()}
        style={[Styles.bmiCardContainerStyle, style]}
        activeOpacity={0.5}
        onPress={() => {
          if (this.cardRef) {
            this.cardRef.measure((x, y, width, height, pageX, pageY) => {
              const layout = {x: pageX, y: pageY, width, height};
              if (onCardClicked) {
                onCardClicked({data, index, layout});
              }
            });
          }
        }}
        ref={(ref) => {
          this.cardRef = ref;
        }}>
        <View
          style={[
            Styles.bmiCardInnerContainer,
            {
              backgroundColor: data.cardColor,
            },
          ]}>
          <View
            style={[
              Styles.bmiCardImageContainerStyle,
              {backgroundColor: data.colorLight},
            ]}>
            <Image source={data.inRangeIcon} style={Styles.bmiCardImageStyle} />
          </View>

          {/* Figure Container... */}
          <View style={Styles.bmiCardFigureContainerStyle}>
            <View>
              <Text style={Styles.bmiStageNameStyle}>{data.name}</Text>
              <Text
                style={
                  Styles.rangeTextStyle
                }>{`${data.minValue} - ${data.maxValue}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

import React from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import Styles from './Styles';

const BmiCard = ({data, onCardClicked, index, style, isOpen, animating}) => {
  let cardRef = null;
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

  // when we are on detail screen hide bottom radius, a very small curve is visible when looked
  // carefully, so removing it
  const borderRadius = isOpen ? 0 : 8;

  return (
    <TouchableOpacity
      style={[
        Styles.bmiCardContainerStyle,
        style,
        {
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        },
      ]}
      activeOpacity={0.9}
      onPress={() => {
        if (cardRef) {
          cardRef.measure((x, y, width, height, pageX, pageY) => {
            const layout = {x: pageX, y: pageY, width, height};
            if (onCardClicked) {
              onCardClicked({data, index, layout});
            }
          });
        }
      }}
      ref={(ref) => {
        cardRef = ref;
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
};

export default BmiCard;

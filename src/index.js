import React, {Component} from 'react';
import {View, SafeAreaView, Animated} from 'react-native';
import {BmiData} from './Data';
import BMICard from './Card';
import Styles from './Styles';
import BmiTable from './BmiTable';
import BmiList from './BmiList';

const ANIMATION_DURATION = 500;
const TRANSITION_TO_SCREEN_CUTOFF_VALUE = 0.001;

export default class BmiTableScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowInfo: false,
      startTransition: false,
      transitionCompleted: false,
      animatedValue: new Animated.Value(0),
      selectedIndex: 0,
      selectedViewLayoutParam: {x: 0, y: 0, width: 0, height: 0},
      isAnimating: false,
    };

    this.infoLayoutParam = {x: 0, y: 0};
    this.seeMoreLayoutParam = {x: 0, y: 0};
  }

  onCardClicked = ({data, index, layout}) => {
    this.state.animatedValue.setValue(0);
    this.setState(
      {
        startTransition: true,
        selectedIndex: index,
        selectedViewLayoutParam: layout,
        transitionCompleted: false,
        isAnimating: true,
        shouldShowInfo: true,
      },
      () => {
        this.startAnimation();
      },
    );
  };

  getTransitionCardStyle = () => {
    const {selectedViewLayoutParam} = this.state;
    const initialPosition = selectedViewLayoutParam.y - 15;
    const finalPosition = 28;
    const top = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [initialPosition, finalPosition],
    });

    const opacityInterpolation = this.state.animatedValue.interpolate({
      inputRange: [
        0,
        TRANSITION_TO_SCREEN_CUTOFF_VALUE,

        1 - TRANSITION_TO_SCREEN_CUTOFF_VALUE,
        1,
      ],
      outputRange: [0, 1, 1, 0],
    });

    return {
      position: 'absolute',
      top,
      left: selectedViewLayoutParam.x,
      opacity: opacityInterpolation,
      width: selectedViewLayoutParam.width,
    };
  };

  getListingStyle = () => {
    const opacityInterpolation = this.state.animatedValue.interpolate({
      inputRange: [0, TRANSITION_TO_SCREEN_CUTOFF_VALUE],
      outputRange: [1, 0],
    });

    return {
      opacity: opacityInterpolation,
    };
  };

  startAnimation = () => {
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
    }).start(() => {
      this.setState({
        transitionCompleted: true,
        isAnimating: false,
      });
    });
  };

  reverseAnimation = () => {
    this.setState(
      {
        startTransition: true,
        transitionCompleted: false,
        isAnimating: true,
      },
      () => {
        Animated.timing(this.state.animatedValue, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: false,
        }).start(() => {
          this.setState({
            transitionCompleted: true,
            isAnimating: false,
            shouldShowInfo: false,
          });
        });
      },
    );
  };

  render() {
    const {
      startTransition,
      selectedIndex,
      shouldShowInfo,
      animatedValue,
      transitionCompleted,
    } = this.state;

    const transitionLayerCardStyle = this.getTransitionCardStyle();
    const listingStyle = this.getListingStyle();

    return (
      <View style={Styles.containerStyle}>
        {/* Listing part. */}
        <Animated.View style={listingStyle}>
          <BmiList
            BmiData={BmiData}
            onCardClicked={this.onCardClicked}
            bmi={1}
          />
        </Animated.View>

        {/* Detail screen */}
        {shouldShowInfo && (
          <View style={[Styles.absoluteStyle]}>
            <BmiTable
              index={0}
              data={BmiData[selectedIndex]}
              animatedValue={this.state.animatedValue}
              onCardClicked={this.reverseAnimation}
            />
          </View>
        )}

        {/* Transition layer */}
        {startTransition && !transitionCompleted && (
          <React.Fragment>
            <Animated.View style={transitionLayerCardStyle}>
              <BMICard
                animating={animatedValue}
                index={selectedIndex}
                data={BmiData[selectedIndex]}
              />
            </Animated.View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

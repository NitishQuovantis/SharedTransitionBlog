import React, {Component} from 'react';
import {View, SafeAreaView, Animated} from 'react-native';
import {BmiData} from './Data';
import BMICard from './Card';
import Styles from './Styles';
import BmiTable from './BmiTable';

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

  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView />
        <View style={Styles.containerStyle}>
          {/* Listing part */}

          {BmiData.map((item, index) => {
            return <BMICard key={index} data={item} index={index} />;
          })}

          {/* Detail screen */}
          <View style={[Styles.absoluteStyle]}>
            <BmiTable
              index={0}
              data={BmiData[0]}
              animatedValue={this.state.animatedValue}
            />
          </View>

          {/* Transition layer */}
        </View>
      </View>
    );
  }
}

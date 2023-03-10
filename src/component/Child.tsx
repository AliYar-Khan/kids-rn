import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import { ArabicNumbers } from 'react-native-arabic-numbers';

const Child = ({ style, item, index, length, ...props }) => (
    <View
        style={[style, {
            width: 72,
            display: "flex",
            alignItems: "center",
            alignContent: 'center',
            marginHorizontal: "3%"
        }]}
    >

        {
            item.gender ?
                item.gender == 'F' ?
                    <Image style={styles.genderImg} source={require('../assets/images/GirlCircle.png')}></Image>
                    : <Image style={styles.genderImg} source={require('../assets/images/BoyCircle.png')}></Image>
                : null
        }

        {
            item.name ?
                <Text GulfSemiBold color={"#2c2953"} size={15}
                    style={styles.name}>
                    {item.name}
                </Text>
                : null
        }
        {
            item.age ?
                <Text style={styles.age} GulfText color={"#63626d"} size={13}>
                    {
                        item.age == 1 ? "سنة" :
                            item.age == 2 ? "سنتان" :
                                item.age < 11 ? `${ArabicNumbers(item.age)} سنوات` : `${ArabicNumbers(item.age)} سنة`}
                </Text> : null
        }
    </View>

)
export default Child;

const styles = StyleSheet.create({
    age: {
        lineHeight: 15
    }
})

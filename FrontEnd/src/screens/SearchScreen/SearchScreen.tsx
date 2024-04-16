// import React, {useState, useEffect, useRef} from 'react';
// import {View, TextInput, Text, StyleSheet, FlatList} from 'react-native';
// import {debounce} from 'lodash';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   interpolateColor,
//   runOnJS,
//   interpolate,
//   Extrapolate,
// } from 'react-native-reanimated';
// import LinearGradient from 'react-native-linear-gradient';

// const dataFake = ['document', 'doctor', 'dock', 'doctrine'];

// const SearchComponent = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const animation = useSharedValue(0);
//   // Refs for animated values
//   const highlightColor = useSharedValue(0);

//   const searchFilterFunctionRef = useRef(
//     debounce(text => {
//       const formattedQuery = text.toLowerCase();
//       const filteredData = dataFake.filter(item =>
//         item.toLowerCase().includes(formattedQuery),
//       );
//       setResults(filteredData);
//       highlightColor.value = 0; // Reset animation
//       highlightColor.value = withTiming(1, {duration: 500}, () => {
//         highlightColor.value = withTiming(0, {duration: 500});
//       });
//     }, 500),
//   ).current;

//   useEffect(() => {
//     return () => searchFilterFunctionRef.cancel();
//   }, [searchFilterFunctionRef]);

//   const onChangeSearch = text => {
//     setSearchTerm(text);
//     searchFilterFunctionRef(text);
//   };

//   const animatedStyle = useAnimatedStyle(() => {
//     const translateX = interpolate(
//       animation.value,
//       [0, 1],
//       [-100, 100], // Trượt từ -100 đến 100
//     );
//     return {
//       transform: [{translateX}],
//     };
//   });

//   const renderHighlightedText = (text, searchTerm) => {
//     const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
//     return parts.map((part, index) =>
//       part.toLowerCase() === searchTerm.toLowerCase() ? (
//         <Animated.View key={index} style={[animatedStyle]}>
//           <LinearGradient
//             colors={['#transparent', '#f00', '#transparent']}
//             start={{x: 0, y: 0}}
//             end={{x: 1, y: 0}}
//             style={{paddingHorizontal: 5}}>
//             <Text style={styles.highlightedText}>{part}</Text>
//           </LinearGradient>
//         </Animated.View>
//       ) : (
//         part
//       ),
//     );
//   };

//   //   const animatedStyle = useAnimatedStyle(() => {
//   //     const backgroundColor = interpolateColor(
//   //       highlightColor.value,
//   //       [0, 1],
//   //       ['transparent', 'yellow'],
//   //     );

//   //     return {backgroundColor};
//   //   });

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search here..."
//         onChangeText={text => setSearchTerm(text)}
//         value={searchTerm}
//       />
//       <FlatList
//         data={results}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => (
//           <View style={styles.item}>
//             {renderHighlightedText(item, searchTerm)}
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 40,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   item: {
//     padding: 10,
//   },
//   highlightedText: {
//     color: 'red', // Default text color
//   },
// });

// export default SearchComponent;

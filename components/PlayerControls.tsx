import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import {BackwardIcon, ForwardIcon} from 'react-native-heroicons/outline';
import {PlayPauseButton} from './PlayPauseButton';

const performSkipToNext = () => TrackPlayer.skipToNext();
const performSkipToPrevious = () => TrackPlayer.skipToPrevious();

export const PlayerControls: React.FC = () => {
  const playback = usePlaybackState();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={performSkipToPrevious}>
          <BackwardIcon color={'white'} size={30} />
        </TouchableWithoutFeedback>
        <PlayPauseButton />
        <TouchableWithoutFeedback onPress={performSkipToNext}>
          <ForwardIcon color={'white'} size={30} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

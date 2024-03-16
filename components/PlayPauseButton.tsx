import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {PauseIcon, PlayIcon} from 'react-native-heroicons/outline';
import TrackPlayer, {useIsPlaying} from 'react-native-track-player';

export const PlayPauseButton: React.FC = () => {
  const {playing, bufferingDuringPlay} = useIsPlaying();
  const PauseVideo = () => {
    TrackPlayer.pause;
  };

  return (
    <View style={styles.container}>
      {/* {bufferingDuringPlay ? (
        <ActivityIndicator />
      ) : (
        <TouchableWithoutFeedback
          onPress={playing ? TrackPlayer.pause : TrackPlayer.play}>
          {playing ? (
            <PauseIcon color={'white'} size={48} />
          ) : (
            <PlayIcon color={'white'} size={48} />
          )}
        </TouchableWithoutFeedback>
      )} */}
      <Pressable onPress={playing ? TrackPlayer.pause : TrackPlayer.play}>
        {playing ? (
          <PauseIcon color={'white'} size={48} />
        ) : (
          <PlayIcon color={'white'} size={48} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

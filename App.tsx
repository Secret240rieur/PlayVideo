import React, {useEffect, useRef} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import tw from 'twrnc';
import TrackPlayer, {isPlaying, useIsPlaying} from 'react-native-track-player';
import {PlayerControls} from './components/PlayerControls';
import {PlayPauseButton} from './components/PlayPauseButton';
import {PauseIcon, PlayIcon} from 'react-native-heroicons/outline';
import {getPlaybackState} from 'react-native-track-player/lib/trackPlayer';

function App(): React.JSX.Element {
  const video = require('./src/video2.mp4');
  const videoRef = useRef<VideoRef>(null);

  const {playing} = useIsPlaying();
  useEffect(() => {
    const start = async () => {
      // Set up the player
      await TrackPlayer.setupPlayer();

      // Add a track to the queue
      await TrackPlayer.add({
        id: 'trackId',
        url: video,
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: require('./src/image.png'),
      });

      // Start playing it
      await TrackPlayer.play();
    };
    start();
  }, []);

  const handlePlaybackState = (state: boolean) => {
    if (!state) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  return (
    <SafeAreaView>
      <Text style={tw`text-white text-center text-2xl mb-4`}>VideoPlayer</Text>
      <Video
        source={video}
        ref={videoRef}
        style={tw`h-1/2`}
        volume={0}
        controls
        playInBackground
        playWhenInactive
        onPlaybackStateChanged={e => handlePlaybackState(e.isPlaying)}
        onSeek={e => console.log(e)}
        resizeMode="contain"></Video>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
}

export default App;

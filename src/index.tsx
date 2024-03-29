import React from 'react';
import { View, ViewStyle } from 'react-native';
import { WebView } from 'react-native-webview';

interface SynkdSdkProps {
  sKey: string;
  tag: number;
  mraid?: boolean;
  height?: number;
  width?: number;
  styles?: ViewStyle;
}

export const SynkdSdk = ({
  sKey,
  tag,
  mraid = false,
  height = 400,
  width = 400,
  styles,
}: SynkdSdkProps) => {
  const URL =
    'https://insprep.s3.eu-west-1.amazonaws.com/SDK/apptags/adsdk2.html?';
  const SRC = 'https://media-cdn.synkd.life/fenix.js';
  return (
    <View style={[{ height: height, width: width }, styles]}>
      <WebView
        originWhitelist={['*']}
        source={{
          uri: `${URL}src=${SRC}&tag=${tag}&key=${sKey}&mraid=${mraid}`,
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
};

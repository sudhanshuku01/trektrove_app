// BingMap.js
import React from 'react';
import { WebView } from 'react-native-webview';

const BingMap = () => {
  const bingMapsUrl ='Ap_S3WtEeUjSyYVjGfAk0FFmU8Ks3Lo8A7N2J51qr65sr_LRvBdlY3kuoI4yjWEH'
  return (
    <WebView
      source={{ uri: bingMapsUrl }}
      style={{ flex: 1 }}
    /> 
  );
};

export default BingMap;

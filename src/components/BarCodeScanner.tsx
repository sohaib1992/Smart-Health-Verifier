import React, { ReactChildren, useState, useEffect } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { View, StyleSheet } from "react-native";


export type CameraType = 'back' | 'front' | undefined;

export type BarcodeProps = {
  children: JSX.Element[]
  onBarCodeScanned?: any
  type: CameraType,
  styles?: any
}


const BarCodeScanner = ({onBarCodeScanned, type, styles}: BarcodeProps) => {
	return <View style={styles}>
          <QRCodeScanner
            reactivate={true}
            showMarker={false}
            cameraType={type}
            cameraStyle={cameraStyles.camerPreview}
            containerStyle={cameraStyles.cameraContainer}
            onRead={onBarCodeScanned}F
          >
          </QRCodeScanner>
        </View>

}

const Type = 
  {
    back: "back",
    front: "front"
  };

const Constants = {
  Type
}

BarCodeScanner.Constants = Constants
    
const cameraStyles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  camerPreview: {
    flex: 1,
    alignItems: 'center',
    minHeight:"100%"
  }
})



export default BarCodeScanner
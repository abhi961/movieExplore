import { StyleSheet, View,Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLOR } from '../../theme/color';

interface LoaderProps {
  visible: boolean;

}

const Loader:React.FC<LoaderProps> = ({visible}) => {
  return (
       <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={COLOR.lightGreen} />
        </View>
      </View>
    </Modal>
  )
}

export default Loader

const styles = StyleSheet.create({
     overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>


      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
      />


      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>


      <View style={styles.content}>


        <View style={styles.profileImageContainer}>
          <Image
            source={require('./assets/profile.png')}
            style={styles.profileImage}
          />


          <View style={styles.checkContainer}>
            <Ionicons
              name="checkmark"
              size={25}
              color="#00e600"
            />
          </View>
        </View>

        <View style={styles.divider} />


        <View style={styles.infoSection}>
          <Text style={styles.label}>Name</Text>

          <Text style={styles.value}>
            Diluka
          </Text>
        </View>


        <View style={styles.infoSection}>
          <Text style={styles.label}>Email</Text>

          <View style={styles.row}>
            <Ionicons
              name="mail"
              size={15}
              color="#111"
              style={styles.icon}
            />

            <Text style={styles.value}>
              diluka.w@nsbm.ac.lk
            </Text>
          </View>
        </View>


        <View style={styles.infoSection}>
          <Text style={styles.label}>Points</Text>

          <View style={styles.row}>
            <Ionicons
              name="star"
              size={15}
              color="#111"
              style={styles.icon}
            />

            <Text style={styles.value}>
              0
            </Text>
          </View>
        </View>

      </View>


      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => {
          console.log('Add button pressed');
        }}
      >
        <Ionicons
          name="add"
          size={25}
          color="#ffffff"
        />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  // Main screen
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },

  // Black header
  header: {
    height: 55,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',

    // Small shadow
    elevation: 4,
  },

  headerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Main content
  content: {
    flex: 1,
    paddingHorizontal: 35,
    paddingTop: 15,
  },

  // Profile image outer circle
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,

    backgroundColor: '#ffffff',

    alignSelf: 'center',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#eeeeee',

    marginBottom: 8,
  },

  profileImage: {
    width: 82,
    height: 82,
    borderRadius: 41,
  },

  // Green verification icon
  checkContainer: {
    position: 'absolute',

    right: 3,
    bottom: 3,

    backgroundColor: '#ffffff',

    width: 28,
    height: 28,

    borderRadius: 14,

    justifyContent: 'center',
    alignItems: 'center',
  },

  // Horizontal line
  divider: {
    height: 2,
    backgroundColor: '#222222',

    width: '100%',

    marginTop: 3,
    marginBottom: 12,
  },

  // Information section
  infoSection: {
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111111',

    marginBottom: 7,
  },

  value: {
    fontSize: 13,
    color: '#333333',
  },

  // Icon + text
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginRight: 7,
  },

  // Floating button
  fab: {
    position: 'absolute',

    right: 18,
    bottom: 18,

    width: 48,
    height: 48,

    borderRadius: 24,

    backgroundColor: '#000000',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 7,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

});
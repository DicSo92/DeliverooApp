import React from "react";
import {Image, View, StyleSheet, TouchableOpacity} from "react-native";
import { Text } from "native-base";
import {SharedElement} from "react-navigation-shared-element";

import { COLORS, TYPOGRAPHY, ELEVATION } from "../Assets";

export const FEATURE_WIDTH = 310

export const FeaturesComponent = ({ navigation, item, style }) => (
  // <View style={{ ...styles.wrapperFeature, ...style }}>
  <TouchableOpacity onPress={() => navigation.navigate("Product", {itemId: item.id, img_url: item.url})} style={{ ...styles.wrapperFeature, ...style }}>
    <View style={styles.wrapperFeatureImage}>
      <SharedElement id={`item.${item.id}.url`}>
        <Image source={{ uri: item.url }} style={ styles.featureImage }/>
      </SharedElement>
      <View style={styles.featurePromoWrapper}>
        <Text style={styles.featurePromoLabel}>{item.promoLabel}</Text>
      </View>
      <View style={styles.featureTimeWrapper}>
        <Text style={styles.featureTimeValue}>
          {item.deliveryTime}
        </Text>
        <Text style={styles.featureTimeUnit}>
          min
        </Text>
      </View>
    </View>
    <Text style={styles.featureTitle}>
      {item.title}
    </Text>

    <Text>
      <Text style={styles.featureDescriptionNote}>
        {item.note}
      </Text>
      <Text style={styles.textGray}>
        {item.describe}
      </Text>
    </Text>
    <Text style={styles.textGray}>
      {item.distance + (item.deliveryFree && ' - Free delivery')}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  textGray: {
    ...TYPOGRAPHY.M3,
  },
  wrapperFeature: {
    marginRight: 7,
    flexDirection: "column",
    width: FEATURE_WIDTH,
    overflow: "hidden",
  },
  wrapperFeatureImage: {
    overflow: "hidden",
    paddingBottom: 15,
    position: "relative",
  },
  featureImage: {
    width: "100%",
    height: 180,
    borderRadius: 5,
    resizeMode: 'cover'
  },
  featurePromoWrapper: {
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.warning,
    borderWidth: 2,
    position: 'absolute',
    alignSelf: "flex-start",
    borderRadius: 50,
    top: 8, left: 8,
    width: 65, height: 65,
    display: 'flex',
    justifyContent: 'center',
    transform: [{rotate: '-16deg'}],
  },
  featurePromoLabel: {
    ...TYPOGRAPHY.M1,
    fontWeight: "700",
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 14
  },
  featureTimeWrapper: {
    paddingVertical: 6,
    paddingHorizontal: 17,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
    overflow: "hidden",
    position: "absolute",
    bottom: 3,
    right: 12,
    ...ELEVATION.E1
  },
  featureTimeUnit: {
    ...TYPOGRAPHY.M1,
    textAlign: "center",
    color: COLORS.FONT.gray,
    lineHeight: 14,
  },
  featureTimeValue: {
    ...TYPOGRAPHY.M2
  },
  featureTitle: {
    fontWeight: "bold",
  },
  featureDescriptionNote: {
    ...TYPOGRAPHY.M3,
    color: COLORS.FONT.primaryDarken,
  },
})

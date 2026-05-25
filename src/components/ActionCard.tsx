import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const CARD_WIDTH = (Dimensions.get('window').width - 52) / 2;

export interface ActionCardProps {
  icon: string;
  title: string;
  count?: string;
  color: string;
  bg: string;
  onPress?: () => void;
}

export default function ActionCard({
  icon,
  title,
  count,
  color,
  bg,
  onPress,
}: ActionCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: bg}]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View style={[styles.iconWrapper, {backgroundColor: color + '25'}]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      {count ? (
        <Text style={[styles.count, {color}]}>{count}</Text>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 4,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2D2D3A',
    marginBottom: 6,
  },
  count: {
    fontSize: 22,
    fontWeight: '800',
  },
});

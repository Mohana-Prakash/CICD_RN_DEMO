import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export interface ActivityItemProps {
  icon: string;
  title: string;
  subtitle: string;
  time: string;
  badge?: string;
  badgeColor?: string;
}

export default function ActivityItem({
  icon,
  title,
  subtitle,
  time,
  badge,
  badgeColor = '#6C63FF',
}: ActivityItemProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>
          {badge ? (
            <View style={[styles.badge, {backgroundColor: badgeColor + '20'}]}>
              <Text style={[styles.badgeText, {color: badgeColor}]}>
                {badge}
              </Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  iconWrapper: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#F3F2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  icon: {fontSize: 22},
  content: {flex: 1},
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },
  title: {fontSize: 14, fontWeight: '700', color: '#2D2D3A'},
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  badgeText: {fontSize: 10, fontWeight: '700'},
  subtitle: {fontSize: 12, color: '#888', marginBottom: 2},
  time: {fontSize: 11, color: '#BBB'},
  arrow: {fontSize: 26, color: '#DDD', fontWeight: '300'},
});

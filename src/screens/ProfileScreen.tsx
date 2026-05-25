import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const STATS = [
  {label: 'Orders', value: '24'},
  {label: 'Reviews', value: '4.9★'},
  {label: 'Points', value: '1.2K'},
];

const MENU_ITEMS = [
  {icon: '👤', title: 'Edit Profile',      subtitle: 'Update your personal info'},
  {icon: '🔔', title: 'Notifications',     subtitle: 'Manage your alerts'},
  {icon: '🔒', title: 'Privacy & Security',subtitle: 'Password and security'},
  {icon: '🌐', title: 'Language',           subtitle: 'English (US)'},
  {icon: '❓', title: 'Help & Support',     subtitle: 'FAQs and contact'},
  {icon: '📄', title: 'Terms & Privacy',   subtitle: 'Legal information'},
];

export default function ProfileScreen() {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* ─── Gradient Header ─── */}
        <LinearGradient
          colors={['#6C63FF', '#4A90E2']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.header}>
          <SafeAreaView style={styles.headerInner}>
            {/* Circular Avatar */}
            <LinearGradient
              colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.15)']}
              style={styles.avatar}>
              <Text style={styles.avatarText}>P</Text>
            </LinearGradient>

            <Text style={styles.name}>Prakash Kumar</Text>
            <Text style={styles.email}>prakash@example.com</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>⚡ Pro Member</Text>
            </View>

            {/* Stats */}
            <View style={styles.statsRow}>
              {STATS.map((s, i) => (
                <React.Fragment key={i}>
                  <View style={styles.statItem}>
                    <Text style={styles.statValue}>{s.value}</Text>
                    <Text style={styles.statLabel}>{s.label}</Text>
                  </View>
                  {i < STATS.length - 1 && <View style={styles.divider} />}
                </React.Fragment>
              ))}
            </View>
          </SafeAreaView>
        </LinearGradient>

        {/* ─── Menu ─── */}
        <View style={styles.menu}>
          {MENU_ITEMS.map((item, i) => (
            <TouchableOpacity key={i} style={styles.menuItem} activeOpacity={0.7}>
              <View style={styles.menuIcon}>
                <Text style={styles.menuEmoji}>{item.icon}</Text>
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}

          {/* App version chip */}
          <View style={styles.versionChip}>
            <Text style={styles.versionText}>🚀 CICDDemo v1.0.0</Text>
          </View>

          {/* Sign out */}
          <TouchableOpacity style={styles.signOutBtn} activeOpacity={0.8}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#F5F6FA'},

  /* Header */
  header: {
    paddingBottom: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerInner: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  /* Avatar */
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.7)',
    marginBottom: 14,
  },
  avatarText: {fontSize: 40, fontWeight: '800', color: '#fff'},
  name: {fontSize: 22, fontWeight: '800', color: '#fff', marginBottom: 4},
  email: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.78)',
    marginBottom: 12,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginBottom: 22,
  },
  badgeText: {fontSize: 12, fontWeight: '700', color: '#fff'},

  /* Stats */
  statsRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {alignItems: 'center'},
  statValue: {fontSize: 20, fontWeight: '800', color: '#fff'},
  statLabel: {fontSize: 11, color: 'rgba(255,255,255,0.75)', marginTop: 3},
  divider: {width: 1, height: 36, backgroundColor: 'rgba(255,255,255,0.25)'},

  /* Menu */
  menu: {padding: 20},
  menuItem: {
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
  menuIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#F3F2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  menuEmoji: {fontSize: 22},
  menuContent: {flex: 1},
  menuTitle: {fontSize: 14, fontWeight: '700', color: '#2D2D3A'},
  menuSubtitle: {fontSize: 12, color: '#999', marginTop: 2},
  menuArrow: {fontSize: 26, color: '#DDD', fontWeight: '300'},

  /* Version & Sign out */
  versionChip: {alignItems: 'center', paddingVertical: 16},
  versionText: {fontSize: 12, color: '#BBB', fontWeight: '500'},
  signOutBtn: {
    backgroundColor: '#FF6B6B',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 4,
    shadowColor: '#FF6B6B',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  signOutText: {fontSize: 15, fontWeight: '800', color: '#fff', letterSpacing: 0.5},
});

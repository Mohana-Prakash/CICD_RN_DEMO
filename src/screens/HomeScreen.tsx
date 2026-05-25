import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ActionCard from '../components/ActionCard';
import ActivityItem from '../components/ActivityItem';

const {width} = Dimensions.get('window');

const ACTION_CARDS = [
  {id: '1', icon: '📦', title: 'Orders',    count: '24',   color: '#FF6B6B', bg: '#FFF5F5'},
  {id: '2', icon: '💬', title: 'Messages',  count: '12',   color: '#4ECDC4', bg: '#F0FFFD'},
  {id: '3', icon: '📊', title: 'Analytics', count: '98%',  color: '#6C63FF', bg: '#F3F2FF'},
  {id: '4', icon: '⚙️', title: 'Settings',  count: '',     color: '#FFA94D', bg: '#FFF8F0'},
];

const RECENT_ACTIVITIES = [
  {
    id: '1',
    icon: '📦',
    title: 'New Order #1042',
    subtitle: 'iPhone 15 Case — 2 items',
    time: '2 min ago',
    badge: 'NEW',
    badgeColor: '#6C63FF',
  },
  {
    id: '2',
    icon: '💬',
    title: 'Message from Sarah',
    subtitle: '"Hey, is the order ready?"',
    time: '15 min ago',
    badge: 'UNREAD',
    badgeColor: '#4ECDC4',
  },
  {
    id: '3',
    icon: '📊',
    title: 'Monthly Report Ready',
    subtitle: 'May 2026 — Sales up 18%',
    time: '1 hour ago',
    badge: 'DONE',
    badgeColor: '#96CEB4',
  },
  {
    id: '4',
    icon: '🚀',
    title: 'App Deployment Success',
    subtitle: 'v1.2.0 deployed via GitHub Actions',
    time: '3 hours ago',
    badge: 'CI/CD',
    badgeColor: '#FFA94D',
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  const filtered = RECENT_ACTIVITIES.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}>

        {/* ─── Gradient Header ─── */}
        <LinearGradient
          colors={['#6C63FF', '#4A90E2']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.header}>
          <SafeAreaView>
            <View style={styles.headerTop}>
              <View>
                <Text style={styles.subGreeting}>Good Morning ☀️</Text>
                <Text style={styles.greeting}>Hello Prakash 👋</Text>
              </View>
              {/* Circular Avatar */}
              <TouchableOpacity style={styles.avatarWrapper} activeOpacity={0.85}>
                <LinearGradient
                  colors={['rgba(255,255,255,0.4)', 'rgba(255,255,255,0.15)']}
                  style={styles.avatar}>
                  <Text style={styles.avatarText}>P</Text>
                </LinearGradient>
                <View style={styles.onlineDot} />
              </TouchableOpacity>
            </View>

            {/* Stats strip */}
            <View style={styles.statsStrip}>
              {[
                {label: 'Revenue', value: '$4.2K'},
                {label: 'Orders', value: '24'},
                {label: 'Rating', value: '4.9★'},
              ].map((s, i) => (
                <View key={i} style={styles.statItem}>
                  <Text style={styles.statValue}>{s.value}</Text>
                  <Text style={styles.statLabel}>{s.label}</Text>
                </View>
              ))}
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
              <Text style={styles.searchIcon}>🔍</Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Search orders, messages..."
                placeholderTextColor="#AAA"
                value={search}
                onChangeText={setSearch}
                returnKeyType="search"
              />
              {search.length > 0 && (
                <TouchableOpacity onPress={() => setSearch('')}>
                  <Text style={styles.clearBtn}>✕</Text>
                </TouchableOpacity>
              )}
            </View>
          </SafeAreaView>
        </LinearGradient>

        {/* ─── Body ─── */}
        <View style={styles.body}>

          {/* Quick Actions */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardsGrid}>
            {ACTION_CARDS.map(card => (
              <ActionCard key={card.id} {...card} />
            ))}
          </View>

          {/* Recent Activity */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>

          {filtered.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyIcon}>🔍</Text>
              <Text style={styles.emptyText}>No results for "{search}"</Text>
            </View>
          ) : (
            filtered.map(activity => (
              <ActivityItem key={activity.id} {...activity} />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#F5F6FA'},
  scroll: {paddingBottom: 30},

  /* Header */
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 36,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 8,
  },
  subGreeting: {fontSize: 13, color: 'rgba(255,255,255,0.75)', marginBottom: 4},
  greeting: {fontSize: 26, fontWeight: '800', color: '#fff', letterSpacing: 0.2},

  /* Avatar */
  avatarWrapper: {position: 'relative'},
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  avatarText: {fontSize: 24, fontWeight: '800', color: '#fff'},
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4ECDC4',
    borderWidth: 2,
    borderColor: '#fff',
  },

  /* Stats strip */
  statsStrip: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
    justifyContent: 'space-around',
  },
  statItem: {alignItems: 'center'},
  statValue: {fontSize: 18, fontWeight: '800', color: '#fff'},
  statLabel: {fontSize: 11, color: 'rgba(255,255,255,0.75)', marginTop: 2},

  /* Search */
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 13,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 8,
  },
  searchIcon: {fontSize: 16, marginRight: 10},
  searchInput: {flex: 1, fontSize: 14, color: '#333'},
  clearBtn: {fontSize: 14, color: '#BBB', paddingLeft: 8},

  /* Body */
  body: {padding: 20},
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    marginTop: 4,
  },
  sectionTitle: {fontSize: 18, fontWeight: '800', color: '#2D2D3A'},
  seeAll: {fontSize: 13, fontWeight: '600', color: '#6C63FF'},

  /* Cards grid */
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 28,
  },

  /* Empty state */
  emptyState: {alignItems: 'center', paddingVertical: 40},
  emptyIcon: {fontSize: 40, marginBottom: 12},
  emptyText: {fontSize: 14, color: '#999'},
});

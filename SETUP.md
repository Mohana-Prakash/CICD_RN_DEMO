# CICDDemo — Setup Guide

## Step 1 — Create the React Native project

```bash
npx react-native@latest init CICDDemo --template react-native-template-typescript
cd CICDDemo
```

## Step 2 — Install dependencies

```bash
# Navigation core
npm install @react-navigation/native @react-navigation/bottom-tabs

# Navigation peer deps
npm install react-native-screens react-native-safe-area-context

# Gesture handler (required by React Navigation)
npm install react-native-gesture-handler

# Gradient header
npm install react-native-linear-gradient

# iOS — link native pods
cd ios && pod install && cd ..
```

## Step 3 — Replace generated files

Copy these files from this repo into your project (overwrite existing):

```
App.tsx                                   ← replace
src/
  navigation/AppNavigator.tsx             ← new
  screens/HomeScreen.tsx                  ← new
  screens/ProfileScreen.tsx               ← new
  components/ActionCard.tsx               ← new
  components/ActivityItem.tsx             ← new
  assets/                                 ← empty folder (keep)
.github/workflows/ci.yml                  ← new
```

## Step 4 — Run the app

```bash
# Start Metro bundler
npm start

# Android (in a new terminal)
npm run android

# iOS (in a new terminal)
npm run ios
```

## Step 5 — Push to GitHub & watch CI run

```bash
git init
git add .
git commit -m "feat: initial app setup"
git remote add origin https://github.com/<your-username>/CICDDemo.git
git push -u origin main
```

GitHub Actions will automatically:
1. Lint and type-check your code
2. Build an Android Debug APK
3. Build for iOS Simulator

## Project structure

```
CICDDemo/
├── .github/
│   └── workflows/
│       └── ci.yml          ← GitHub Actions CI pipeline
├── src/
│   ├── assets/             ← images, fonts (empty for now)
│   ├── components/
│   │   ├── ActionCard.tsx  ← reusable card tile
│   │   └── ActivityItem.tsx← reusable list row
│   ├── navigation/
│   │   └── AppNavigator.tsx← bottom tab navigator
│   └── screens/
│       ├── HomeScreen.tsx  ← main screen
│       └── ProfileScreen.tsx
├── App.tsx                 ← root component
└── SETUP.md
```

## What the CI pipeline does

| Job           | Trigger         | What it checks                     |
|---------------|-----------------|-------------------------------------|
| `lint`        | every push/PR   | ESLint + TypeScript (`tsc --noEmit`)|
| `android-build`| after lint     | Builds a Debug APK, uploads artifact|
| `ios-build`   | after lint      | Builds for iOS Simulator (macOS)    |

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

TO Enable New Architecture(Bridgeless) in Android change the flag of newArchEnabled=false to  newArchEnabled=true in gradle.properties file.

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash

#TO Enable New Architecture(Bridgeless) in Ios simply go inside the ios directory and run the following command

bundle install && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install.

# Now start your application

# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## If the bridgeless architecture is successful then you see the fabric flag set to true in the terminal while app running.


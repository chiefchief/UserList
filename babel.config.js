module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.tsx', '.android.tsx', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@components': ['./src/components'],
          '@constants': ['./src/constants'],
          '@hooks': ['./src/hooks'],
          '@reducers': ['./src/reducers'],
          '@screens': ['./src/screens'],
          '@services': ['./src/services'],
          '@types': ['./src/types'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};

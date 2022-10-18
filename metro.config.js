const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      extraNodeModules: {
        crypto: require.resolve('react-native-crypto'),
        stream: require.resolve('readable-stream'),
        events: require.resolve('events/'),
      },
      sourceExts: [...sourceExts, 'cjs'],
    },
  };
})();

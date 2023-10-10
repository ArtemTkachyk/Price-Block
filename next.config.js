module.exports = {
  generateBuildId: async () => {
    return `build-id-${Date.now()}`;
  },
};

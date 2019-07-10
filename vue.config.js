module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vk-profile-viewer/dist/'
    : '/'
}
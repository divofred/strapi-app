module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      defaultLimit: 10,
      maxLimit: 20,
      apolloServer: {
        tracing: true,
      },
    }
  }
})
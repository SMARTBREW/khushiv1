const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const { connect, close } = require('./models');

let server;

const exitHandler = async () => {
  if (!server) {
    await close();
    process.exit(1);
    return;
  }

  server.close(async () => {
    logger.info('Server closed');
    await close();
    process.exit(1);
  });
};

const start = async () => {
  await connect();
  server = app.listen(config.port, () => {
    logger.info(`Listening on port ${config.port}`);
  });
};

process.on('uncaughtException', (error) => {
  logger.error(error);
  exitHandler();
});

process.on('unhandledRejection', (error) => {
  logger.error(error);
  exitHandler();
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close(async () => {
      await close();
    });
  }
});

start().catch((error) => {
  logger.error(error);
  process.exit(1);
});

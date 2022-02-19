module.exports = {
  appPort: process.env.APP_PORT,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE,
  logsTable: process.env.LOGS_TABLE,
  logsBody: process.env.LOGS_BODY === 'true',
  logsToDB: process.env.LOGS_TO_DB === 'true',
  awsRegion: process.env.AWS_REGION,
  awsAccessKeyId: process.env.AWS_ACCESSKEYID,
  awsSecretAccessKey: process.env.AWS_SECRETACCESSKEY,
  awsBucketName: process.env.AWS_BUCKETNAME,
};
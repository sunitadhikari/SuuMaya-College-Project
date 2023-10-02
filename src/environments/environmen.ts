export const environment = {
  serverUrl: 'http://localhost:4200/',
  apiUrl: 'http://localhost:3000/',
  production: false,

  s3Config: {
    region: 'ap-south-1',
    credentials: {
      accessKeyId: 'AKIA2ADY6YFMGJ42TUP6',
      secretAccessKey: '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',
      signatureVersion: 'v4',
    },
  },
  s3Bucket: 'yashi-labs',
  s3Object: 'sumaya-app/files/',
  s3Url: 'https://yashi-labs.s3.ap-south-1.amazonaws.com/',
};

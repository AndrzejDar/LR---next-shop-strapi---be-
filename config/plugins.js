module.exports = ({ env }) => {
  if (env("NODE_ENV") === "production") {
    return {
      upload: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccesKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          parame: {
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
    };
  }
  return {};
};

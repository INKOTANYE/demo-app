const serviceAccountKey = {
  type: "service_account",
  project_id: "bold-ally-439719-s6",
  private_key_id: "411fa97f8c59b52ca999bc02c28008f8b0f0203b",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDabdS8HEtzIRfP\nOCicGKI1CV87J0zjTx4dEAjCudeZLJOOvnWWvkkwKiVbwkQFMqJ/oDd0meTV5xbb\nJuSniB8p2AqTEThmUHpbffYZNXZSsD+b7H8FeovkYMROPrWTT/OvPfjHckbx0zgd\nsdRpu29HZdbctWQyVcKHfEr9IxjgwMnpXb2lW0UT75eg+msZkCjKTqlSI+E91g6p\nWRNmeDMTHJmswvTCU3KuxBWXJixU6mXxsCWTEbCVx2xwf8xmjGbibSB+F9rTg7Jz\nFrOFpF7+A3ibPXiA3IN/7z9ukQLXyGvwqwy8qqt8kDHS5AmSudSDH7DkVJrvUY45\nlQbNsGuJAgMBAAECggEAJ8iGTSa4JUV7QS5A00F3VcKZujvruKEB4pg3iEPx/T+N\ntpuA7k5FJUUf3ckRu4Kf7y/eudmHwN/gnVTFo6/awTPMpUGnLJdu2bgk+S1wGhpo\n03ztG7HYxeVMC9ZHGwgeYaYfaDArtMLcPyhTAFj3qSDm0/cjwzk0f5nHTLi2QMT2\nMGYYo+T9viLpUIr96PR/FcKMi/uDhb/ZpCS9gsQpfa9ZZsiXInX6wzl/W8yVxXQV\nUeTXnVws3JacTddWU/bj+0iB6lqx+uzzjtIotOP6JeyvoUHpM9CA84YuPQ2a8OSd\nEj5i6xWy/Tgncy0SW/2k5AI1mrVDqK29fHUm5l5FCQKBgQD04DkpWTgZ7ZbAEdpf\nCr/IQc/6BBR4hqC1xlX7HHrsLlbAnvpENm39JIZ2aeYFbPTaMkqWlATmmacQ9vYV\niSIM+zGtk4wB0ARYdOpfwlZZr5KOylMn23SFGtQXakHke9cfgBd6y2mXXGp0odAD\nuiT37iGYAmtcrIZGXyBR0UeknQKBgQDkWgt/E3Na87fwM9SIqkB30aWoZfuaUQcZ\nd/k53SdcXX1d0UsZSqnSSwrFA2i3leVhPZNbq3Gri9IZpQ+touSho58Qq9gYPz0y\n/GjssvrT4mKCuO/WpBqxlSInL6VNgpEvd9kLKRPo9zEPL8I+zrSFCyQWe3Dlr894\nUaTFuYuQ3QKBgQCD9772iK2SU5eVpUlxRQK8MrOZws8hcTR1IhE+Rkf8trBsGIE5\nd7fo3+FTOZkMPX7rhITsB5Noj1AY9W8DhicCpfFM4SJn66ob3c5dkwckSFmMeH8+\nEKgH/8BjahFeyFrUEB0XQT6DovuAJaBMEepQb1ZNbKhdhmDK1gM99LJOhQKBgQCr\n7iA5zatND7OuZ1fejlF75Z2U7TRDPD7cLji4GItKQBnkSXEB2fWDIH07WRW/JF1Q\nmcwZeTxcrSnDpUPouHzsNwXMx5Ysq3CosuNNVHUGk60YP6ZVNbnjeyX72yPa+DPY\nSaRhgsw62+NUS+E06O2CPqEtTEP0rCrJrK8jMFClAQKBgQDWmdV9p33SlGGwshgb\npvHh/bwnURqFl757bzNFROnLtYrL4ZdPsLLQ991ybTHaYxN6bg3b5AlJ4o3xwObQ\n5XcKquGPUC5ZENK8QCwj9ft7tO94iwcc2Zfac20ZhApNXpys4Wrq/2gw5LW7C3qQ\njRvGvjD1TaTabFQPP9gsp5ZXUw==\n-----END PRIVATE KEY-----\n",
  client_email:
    "feedback-logging-service-636@bold-ally-439719-s6.iam.gserviceaccount.com",
  client_id: "107526887940652065986",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/feedback-logging-service-636%40bold-ally-439719-s6.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

const mockState = {
  userId: 0,
  spreadsheetId: "1xkF40X-Imxq9W72MULc6Ydm1X8td1p9PbycyAc_mrZQ",
  sheetName: "Sayfa1",
  serviceUrl: "http://localhost:3000/api/write",
  serviceAccountKey: serviceAccountKey,
  title: "SHARE YOUR FEEDBACK",
  buttonText: "SHARE",
  loadingContent: "Loading...",
  placeHolder: "Share Your Feedback...",
  responseSuccessText: "WE HAVE GOT YOUR MESSAGE!",
  responseErrorText: "PLEASE TRY AGAIN!",
};

export const setFeedbackyProps = (userId) => {
  return userId ? { ...mockState, userId } : { ...mockState };
};


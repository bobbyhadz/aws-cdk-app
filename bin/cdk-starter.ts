#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import {CdkStarterStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();

new CdkStarterStack(app, 'cdk-stack-dev', {
  stackName: 'cdk-stack-dev',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
new CdkStarterStack(app, 'cdk-stack-prod', {
  stackName: 'cdk-stack-prod',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});

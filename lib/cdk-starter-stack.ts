import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';

// 👇 Stack definition
export class CdkStarterStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 👇 using a Construct
    const bucket = new s3.Bucket(this, 'uploads-bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}

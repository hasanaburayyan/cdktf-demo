import { s3 } from '@cdktf/provider-aws';
import { Construct } from 'constructs';

export class TestConstruct extends Construct {
  public readonly bucket: s3.S3Bucket;

  constructor(scope: Construct, name: string, bucketName: string) {
    super(scope, name);

    this.bucket = new s3.S3Bucket(this, 'MyBucket', {
      bucket: bucketName,
    });
  }
}

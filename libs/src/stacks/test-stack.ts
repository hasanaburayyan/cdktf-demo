// import { AwsProvider } from '@cdktf/provider-aws';
import { TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { TestConstruct } from '../constructs/test-construct';

export interface TestStackProps {
  bucketName: string;
  region: string;
}

export class TestStack extends TerraformStack {
  constructor(scope: Construct, name: string, props: TestStackProps) {
    super(scope, name);
    // define resources here
    new TestConstruct(this, 'TestConstruct', props.bucketName);
  }
}

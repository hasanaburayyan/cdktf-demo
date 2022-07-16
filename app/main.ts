import { App, TerraformStack } from "cdktf";
import { AwsProvider } from '@cdktf/provider-aws';
import { Construct } from "constructs";
import { TestConstruct } from "./constructs/test-construct";

const app = new App();

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    new AwsProvider(this, 'AWSProvider', {region: 'us-east-1'})
    new TestConstruct(this, 'TestConstruct', 'hasan-test-bucket-12345')
  }
}

new MyStack(app, 'TestStack')
app.synth();

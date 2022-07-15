import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import {AwsProvider} from "@cdktf/provider-aws";
import { TestConstruct } from "../constructs/test-construct";

export interface TestStackProps {
  bucketName: string
  region: string
}

export class TestStack extends TerraformStack {
  constructor(scope: Construct, name: string, props: TestStackProps) {
    super(scope, name);

    new AwsProvider(this, 'AWSProvider', {region: props.region});

    // define resources here
    new TestConstruct(this, 'TestConstruct', props.bucketName);
  }
}

import { App, TerraformStack } from "cdktf";
import { Construct } from "constructs";

import {AwsProvider} from "@cdktf/provider-aws";
// import {TestConstruct} from "@hasanaburayyan/cdktf-demo-lib";
import {TestConstruct} from "../lib/index";

// const {TestStack} = require('@hasanaburayyan/cdktf-demo-lib')

const app = new App();

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    
    new AwsProvider(this, "AWSProvider", {region: "us-east-1"});

    new TestConstruct(this, "TestConstruct", "hasan-test-bucket-cdktf-112")
    
  }
}

new MyStack(app, "MyStack")
app.synth();

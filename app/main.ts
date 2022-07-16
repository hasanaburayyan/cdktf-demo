import { App } from "cdktf";

import {TestStack} from "@hasanaburayyan/cdktf-demo-lib";

const app = new App();

new TestStack(app, 'MyTestStack', {region: "us-east-1", bucketName: "hasan-test-bucket"});
app.synth();

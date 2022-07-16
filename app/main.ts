import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    // Some random fix
  }
}

const app = new App();
new MyStack(app, "app");
app.synth();

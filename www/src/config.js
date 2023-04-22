// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2d64bjvglejeshl5nklfssm4e",     // CognitoClientID
  "api_base_url": "https://ow1j7nq3ub.execute-api.eu-west-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-webapp.auth.eu-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1dw51pmmrqevm.amplifyapp.com"                                      // AmplifyURL
};

export default config;

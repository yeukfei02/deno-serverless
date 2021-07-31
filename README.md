# deno-serverless

deno-serverless

documentation: <https://documenter.getpostman.com/view/3827865/TVYF9eVi>

api url: <https://d43sixm19g.execute-api.ap-southeast-1.amazonaws.com/prod/api>

## Requirement

- install yarn
- install node (v14+)
- install serverless
- install deno

## Testing and run

```zsh
// deploy to serverless
$ yarn run deploy

// open serverless dashboard
$ yarn run dashboard

// run test case
$ yarn run test

// remove serverless services in aws (api gateway, lambda, s3, cloudformation)
$ yarn run remove
```

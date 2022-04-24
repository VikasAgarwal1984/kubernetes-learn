
## Build
    cd scripts
    ./build.ps1

## Publish
    cd scripts
    ./publish.ps1

## Deploy
    cd scripts
    ./deploy.ps1

## Uninstall
    cd scripts
    ./uninstall.ps1

## If want to build image manually
    cd MySln
    docker build -t webapi:local-2 -f WebApi/Dockerfile .

    cd webapp
    docker build -t webapp:local-2 .

Reference:
https://andrewlock.net/deploying-asp-net-core-applications-to-kubernetes-part-2-configuring-resources-with-yaml-manifests/
https://jamesdefabia.github.io/docs/admin/limitrange/#:~:text=Note%20that%20a%20default%20value,that%20resource%20across%20all%20containers.

## Build
    cd scripts
    ./build.ps1

## Publish
    cd scripts
    ./publish.ps1
    ./publish.ps1 -WebAppVersion local-1 -WebApiVersion local-1

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


## install ingress controller
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml

    kubectl delete -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml


helm upgrade --install ingress-nginx ingress-nginx --repo https://kubernetes.github.io/ingress-nginx --namespace ingress-nginx --create-namespace
helm delete ingress-nginx


kubectl wait --namespace ingress-nginx --for=condition=ready pod --selector=app.kubernetes.io/component=controller --timeout=120s

kubectl create deployment demo --image=httpd --port=80
kubectl expose deployment demo

kubectl create ingress demo-localhost --class=nginx --rule=demo.localdev.me/*=demo:80

kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80


kubectl get pods
kubectl exec -it webapp-bc4847fcb-9r6xv bash

cd usr/share/nginx/html

Reference:
https://andrewlock.net/deploying-asp-net-core-applications-to-kubernetes-part-2-configuring-resources-with-yaml-manifests/
https://jamesdefabia.github.io/docs/admin/limitrange/#:~:text=Note%20that%20a%20default%20value,that%20resource%20across%20all%20containers.
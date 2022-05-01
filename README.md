
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

# not required
kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80


kubectl get pods
kubectl exec -it webapp-bc4847fcb-9r6xv bash

cd usr/share/nginx/html

# service accounts
    kubectl create serviceaccount websac --dry-run=client -o=yaml
    kubectl create serviceaccount websac
    kubectl get serviceaccount
    kubectl get secret
    kubectl get secret websac-token-zq2gv -o yaml

    apt-get update
    apt-get install curl

    cd /var/run/secrets/kubernetes.io/serviceaccount
    CA=/var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    TOKEN=$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)

    echo $CA
    echo $TOKEN

    curl --cacert $CA -X GET https://kubernetes/api
    curl --cacert $CA -X GET https://kubernetes/api --header  "Authorization: Bearer $TOKEN"
    curl -X GET https://kubernetes/api --header  "Authorization: Bearer $TOKEN" --insecure

    ## create role
    kubectl create role podlister --verb=list --resource=pods
    kubectl create rolebinding websac-podlist --serviceaccount=default:websac --role podlister

    kubectl get role
    kubectl get rolebinding

    # [tested with default and websac] podlister role is required to access below url or list pods
    curl --cacert $CA -X GET https://kubernetes/api/v1/namespaces/default/pods --header  "Authorization: Bearer $TOKEN"

    [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String("")

# starting a new pod
    kubectl run -it --rm alpine --image=alpine -- sh

Reference:
https://andrewlock.net/deploying-asp-net-core-applications-to-kubernetes-part-2-configuring-resources-with-yaml-manifests/
https://jamesdefabia.github.io/docs/admin/limitrange/#:~:text=Note%20that%20a%20default%20value,that%20resource%20across%20all%20containers.





## HELM READ ME

    cd helm-learn
    helm create basichart
        update values.yaml

    # generate normal template and then can review changes
    helm template basichart


    # lint
    helm lint basicchart

    # Debug
    helm install basicchart --debug --dry-run basicchart

    # install
    helm install mybasicchart basicchart

    # uninstall
    helm uninstall mybasicchart

    


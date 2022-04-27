
$dir = (get-item $PSScriptRoot).parent.FullName
Push-Location $dir

try {
    # Deploy solution

    # install kubernetes deployment for web api
    kubectl apply -f ./basic-deployment/deply-webapi.yml

    # install kubernetes deployment for web app
    kubectl apply -f ./basic-deployment/deply-webapp.yml

    # install ingress
    kubectl apply -f ./basic-deployment/ingres-manifest.yml

    kubectl get services
} finally {
    Pop-Location
}

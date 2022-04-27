
Write-Host "Uninstalling kubernetes"
kubectl delete service webapi
kubectl delete deploy webapi
kubectl delete service webapp
kubectl delete deploy webapp
kubectl delete ingress webapi-ingress
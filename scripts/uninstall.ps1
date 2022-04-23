
Write-Host "Uninstalling kubernetes"
kubectl delete service webapi
kubectl delete deploy webapi

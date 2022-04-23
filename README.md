

cd basic-deployment
kubectl apply -f deploy-webapi.yml

kubectl delete deploy webapi
kubectl delete service webapi

Reference:
https://andrewlock.net/deploying-asp-net-core-applications-to-kubernetes-part-2-configuring-resources-with-yaml-manifests/
https://jamesdefabia.github.io/docs/admin/limitrange/#:~:text=Note%20that%20a%20default%20value,that%20resource%20across%20all%20containers.
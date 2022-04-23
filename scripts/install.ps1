$dir = (get-item $PSScriptRoot).parent.FullName
Push-Location $dir
try {
    # build solution
    dotnet build ./MySln/MySln.sln


    # Build web api docker image
    try {
        Push-Location MySln
        docker build -t vikas/webapi:1.1 -f WebApi/Dockerfile .
    } finally {
        Pop-Location
    }


    #uninstall kubernetes deployment
    Write-Host "Current location $(Get-Location)"
    .\scripts\uninstall.ps1

    # install kubernetes deployment
    kubectl apply -f ./basic-deployment/deply-webapi.yml
    kubectl get services

} finally {
    Pop-Location
}



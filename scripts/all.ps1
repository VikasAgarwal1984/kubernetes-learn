
Write-Host "*************************************************Building Begin*************************************************"
./build.ps1
Write-Host "*************************************************Building End*************************************************"
Write-Host "*************************************************Publishing Begin*************************************************"
./publish.ps1 -WebApiVersion local-1 -WebAppVersion local-1
Write-Host "*************************************************Publishing End*************************************************"
Write-Host "*************************************************Deploying Begin*************************************************"
./deploy.ps1
Write-Host "*************************************************Deploying Emd*************************************************"

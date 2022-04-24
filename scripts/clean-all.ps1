
./uninstall.ps1

$dir = (get-item $PSScriptRoot).parent.FullName
Push-Location $dir

try {
    # build solution

    # Build web api docker image
    try {
        Push-Location MySln
        Write-Host "******************WEBAPI******************"
        Write-Host "Cleaning..."
        dotnet clean MySln.sln

        cd webapp
        Write-Host "******************WEBAPP******************"
        Write-Host "Cleaning..."
        npm run clean
    } finally {
        Pop-Location
    }
} finally {
    Pop-Location
}

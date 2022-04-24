
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
        Write-Host "Building..."
        dotnet build MySln.sln
        Write-Host "Cleaning..."
        dotnet clean MySln.sln


        cd webapp
        Write-Host "******************WEBAPP******************"
        Write-Host "Installing..."
        npm ci
        Write-Host "Cleaning..."
        npm run clean
        Write-Host "Building..."
        npm run build
        Write-Host "Cleaning..."
        npm run clean
    } finally {
        Pop-Location
    }
} finally {
    Pop-Location
}

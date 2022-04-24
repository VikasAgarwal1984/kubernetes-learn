
param([string] $WebApiVersion="", [string] $WebAppVersion= "") 


$dir = (get-item $PSScriptRoot).parent.FullName
Push-Location $dir

try {
    # build solution

    # Build web api docker image
    try {
        Push-Location MySln

        $Env:WebApiVersion=$WebApiVersion
        $Env:WebAppVersion=$WebAppVersion

        docker-compose down
        docker-compose build
    } finally {
        Pop-Location
    }
} finally {
    Pop-Location
}

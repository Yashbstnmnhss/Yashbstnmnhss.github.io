$branch = "vue"
cd ../
git add .
git checkout $branch
$message = Read-Host "Commit"
git commit -m $message
git push -u -f origin $branch
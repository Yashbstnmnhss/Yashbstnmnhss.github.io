$branch = "gh-pages"
yarn run build
cd ../dist
git add .
git checkout $branch
$message = Read-Host "Commit"
git commit -m $message
git push -u --force origin $branch 
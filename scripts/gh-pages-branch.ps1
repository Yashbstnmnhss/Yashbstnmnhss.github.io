$branch = "gh-pages"
npm run build
cd ../dist
git add .
git checkout $branch
$message = Read-Host "Commit"
git commit -m $message
git push -u --froce origin $branch 
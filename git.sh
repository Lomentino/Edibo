
#!/bin/bash
git config --global user.email komar112@inbox.lv
git add .
git commit -m `date +%Y%m%d_%H_%M`
git pull
git push origin master

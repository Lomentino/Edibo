#!/bin/bash
if [ $# == 1 ]
then
	git config --global user.email komar112@inbox.lv
	git add .
	git commit -m $1
        git push
	git pull
	git push origin master
fi

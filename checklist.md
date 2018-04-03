
git push -u origin master

.............EADDRINUSE, Address already in use - Kill server
..................................................................................................


Run cmd.exe as 'Administrator':

C:\Windows\System32>taskkill /F /IM node.exe
SUCCESS: The process "node.exe" with PID 11008 has been terminated.

or---------------------------------------------------------------------------------------------------

ps aux | grep node
ps ax
you can check if it worked.


............................................................
remote github
git branch -a
git remote show
git remote prune origin
git branch -rd origin/whatever


------------------------------------------------------------------------------

git push -u origin master
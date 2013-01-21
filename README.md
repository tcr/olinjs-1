# olin.js #1 — git init

The first lesson for this class will be a litmus test to see if your development "environment" is set up properly. In the process, we'll learn the most important tool in a programmer's toolbox: version control. Programming is iterative.

First, read this cute explanation of version control at <http://www-cs-students.stanford.edu/~blynn/gitmagic/ch01.html#_version_control>.

## 1. Forking

Go to heroku and fork this very repository:

![http://i.imgur.com/AnpW5Bx.png](http://i.imgur.com/AnpW5Bx.png)

This will bring you to your own page (e.g. **tcr/1-git**). 

## 2. Cloning

```sh
$ cd ~/olinjs # your class folder
$ git clone https://github.com/olinjs/1-git.git
```

## 3. Testing

```sh
$ node app.js
Open the address http://localhost:3000/
```

## 4. Pushing

```
git push -u origin master
```

## 5. Heroku

```
heroku create
git push heroku master
```

## 6. Taking control of your own destiny

Change the text

push

Horray!


## References

1. <https://devcenter.heroku.com/articles/nodejs> — Heroku article on developing with Node.js
2. <http://marklodato.github.com/visual-git-guide/index-en.html> — Advanced graphical guide explaining what Git commands do.
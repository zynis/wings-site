# Wings Site

Official Wings Site repository. Based on HTML5/CSS/AngularJs.

## Launch

The following shows how to launch a local version of the site with `http-server` nodejs module.

The method requires `nodejs`, `npm`, `bower` and `gulp` to be installed.

```sh
npm install -g http-server
cd <site-folder>
npm install
bower install
gulp
http-server
```

## Translations

This tutorial explains how to add translation.

### Fork Repository

Fork this repository by clicking on next button:


### Create new branch

Create new branch in your version of repository, call it: `feature/<lang>` 

Replace `lang` with name of your language translation.

### Create language files

First go to `assets/app/translations` directory.

Create new file in this directory with next name:

```
<langCode>.js
```

Replace `<langCode>` with lang that you going to translate.

For example:

* en - Great Britain English.
* ru - Russian.

See full list of codes on this [page](http://www.lingoes.net/en/translator/langcode.htm) (**Important**: use '_' instead of '-' in file name).

Open `assets/app/translations/chat/` folder and create same file for chat animation translation.
Format of file name `<langCode>.json`. You need to replace <langCode> with **your** lang code.

### Start translations (Site)

Open 'assets/app/translations/ru.js` file with russian translation and see format of this file:

This is **json** file and contains **json** array of messages to translate.

```
"<key>":"<message>"
```

Where is `key` is english text that you translate and where is `message` should be translation of english text.

For example 

This message in english

```
"A decentralized platform to create, join and manage projects"
```

Will look like this in russian

```
Wings - Децентрализованная платформа для создания, участия и управления проектами
```

So translation will look like:

```
"A decentralized platform to create, join and manage projects": "Wings - Децентрализованная платформа для создания, участия и управления проектами",
```

Do same for you language in your lang file.

In the end, replace language in next line of your translation file:

```
$translateProvider.translations('ru', {
```

Replace `ru` with **your** language code.

### Start translations (Chat)


To translate chat, open created file `assets/app/translations/chat/<langCode>.json` and copy to this file content from `assets/app/translations/chat/ru.json`.

This is **json** file and contains **json** array of message.

One element of array:

```json
{
	"author": "bot",
	"avatar": "images/bot.svg",
	"msg": "Hi! I am Wings DAO management bot. How may i be of service ?"
}
```

You need to translate `msg` field in each element of array to make translation of chat.

### Make pull request of your translation

Commit your changes and make pull request from your branch to our repository.

## Copyright © 2016 Wings Siftung
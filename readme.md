# Wings Site

Official Wings Site repository. Based on Bootstrap/HTML5/CSS.

## Launch

It shows how to launch local version of site with `http-server` nodejs module.

This method requires `nodejs` and `npm` installed.

```sh
npm install -g http-server
cd <site-folder>
http-server
```

## Contribution 

We are ready for any contribution and ready to pay bounties for it.

Only one important note: we are using git flow to manage branches. Read more in [gitflow tutorial](http://danielkummer.github.io/git-flow-cheatsheet/) to follow our repo rules.

## Translations

This tutorial explains how to add translation.

### Fork Repository

Fork this repository by clicking on next button:


### Create new brunch

Create new brunch in your version of repository, call it: `feature/<lang>` 

Replace `lang` with name of your language translation.

### Create language files

First go to `bundle` directory.

Create new file in this directory with next name:

```
Content_<langCode>.properties
```

Replace `<langCode>` with lang that you going to translate.

For example:

* en_GB - Grate Britain English.
* ru_RU - Russian.

See full list of codes on this [page](http://www.lingoes.net/en/translator/langcode.htm) (**Important**: use '_' instead of '-' in file name).

Open `bundle/languages.json` and add your translation to list, for example:

```json
{
	"languages": [
		"en_GB",
		"ru_RU"
		"<add here>"
	]
}
```

Where is `<add here>` place for you lang code.

Open `bundle/json` folder and create same file for chat animation translation (see pic).
Format of file name: `chat_<langCode>.json`. You need to replace <langCode> with **your** lang code.

### Start translations (Site)

Open 'bundle/Content_en_GB.properties` file with english translation and see format of this file:

```
<key>=<message>
```

Where is `key` id of block of text that you translate and where is `message` is message to translate.

For example 

This message in english

```
title=Wings - A decentralized platform to create, join and manage DAOs
```

Will look like this in russian

```
title=Wings - Децентрализованная платформа для создания, участия и управления DAO
```

`key` is `title` and it hasn't changed, but message yes.

Do same for you language in your lang file.


### Start translations (Chat)

To translate chat, open created file `bundle/json/chat_<langCode>.json` and copy to this file content from `bundle/json/chat_en_GB.json`.

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

## Copyrights

© 2016 ChainLab

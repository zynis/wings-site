# Wings Site

Official Wings Site repository. Based on Bootstrap/HTML5/CSS.

## Launch

The following shows how to launch a local version of the site with `http-server` nodejs module.

The method requires `nodejs` and `npm` to be installed.

```sh
npm install -g http-server
cd <site-folder>
http-server
```

## Contribution & Compensation

We are ready for any contribution and ready to pay bounties for it.  In general bounties are 125 Eggs per file/article, however if the word count exceeds 500, there is an additional payment of 125 per 500 words.  Please see https://blog.wings.ai/wings-content-and-translation-bounties-1f8e075dd50a for more information.

To make a claim, you must set up an account at https://bounty.wings.ai and pick a username.  In the file which you are editing on the first line you must make a comment and insert the username you registered with. Once your pull request is approved, go pack to https://bounty.wings.ai and make a "claim" for translations and insert the URL of your approved pull request.

Only one important note: we are using git flow to manage branches. Read more in [gitflow tutorial](http://danielkummer.github.io/git-flow-cheatsheet/) to follow our repo rules.

## Translations

This tutorial explains how to add translation.

### Fork Repository

Fork this repository by clicking on next button:


### Create new branch

Create new branch in your version of repository, call it: `feature/<lang>` 

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

At the beginning of the your file you must also add your Eggs username which you picked when registering with https://bounty.wings.ai.

```
eggs_username=<username>
```


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

You need to insert a new data field called `translator` and set the value to your Eggs username, like so:

```json
{
	"author": "bot",
	"translator": "Bob",
	"avatar": "images/bot.svg",
	"msg": "Hi! I am Wings DAO management bot. How may i be of service ?"
}
```

You need to translate `msg` field in each element of array to make translation of chat.

### Make pull request of your translation

Commit your changes and make pull request from your branch to our repository.

## Copyright © 2016 Wings Siftung
# CiviCRM Search Kit Block
Requirements:
- CiviCRM 5.x with Search Kit
- Gutenberg editor enabled

This plugin provides a Gutenberg block for displaying a CiviCRM Search kit display to front end users. It will display fields and columns as configured in your Search Kit Display using customizable templates. This could be useful for creating directories or other public listings of any CiviCRM data you can get at with the api v4.

## Usage
1) Install and Enable the plugin and requirements
2) Configure a CiviCRM Search Kit Search (CiviCRM > Search > Search Kit) and save it
![Search Kit Config](/images/searchKitConfigExample.png)
3) Add or Edit a Post or Page with the Gutenberg editor. When you "Add a Block", the option for a "civicrm-search-kit" block will be available
![Choose Block](/images/chooseBlock.png)
4) Configure the Block in the right-hand column under "CiviCRM Search Display Options". You'll choose the search to display, the display template, and whether to check if the front-end viewer has permission to access the data displayed.
![Gutenberg Block](/images/gutenbergBlock.png)

![Front End Block](/images/frontEndBlock.png)

## Customizing Displays
Displays are rendered with html partials in the plugin under /templates. The plugin will search any folder under /templates for display template options, so you can extend these to add whatever html, classes, etc you need for a nice display.

## Common Issues
- Block displays "Invalid Parameters": Display ID may no longer be valid, template directory chosen may not exist or permissions are incorrect
- Block displays Nothing: Check if you are checking permissions, check if the CiviCRM Search Kit search actually comes up with results

## Development Notes
Development kit left in for easy debugging and/or extension of features.

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

## 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

## 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

## 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

---

###### Feel free to tweet and say 👋 at me [@MrAhmadAwais](https://twitter.com/mrahmadawais/)

[![npm](https://img.shields.io/npm/v/create-guten-block.svg?style=flat-square)](https://www.npmjs.com/package/create-guten-block) [![npm](https://img.shields.io/npm/dt/create-guten-block.svg?style=flat-square&label=downloads)](https://www.npmjs.com/package/create-guten-block)  [![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ahmadawais/create-guten-block) [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/) [![GitHub stars](https://img.shields.io/github/stars/ahmadawais/create-guten-block.svg?style=social&label=Stars)](https://github.com/ahmadawais/create-guten-block/stargazers) [![GitHub followers](https://img.shields.io/github/followers/ahmadawais.svg?style=social&label=Follow)](https://github.com/ahmadawais?tab=followers)

# switchtocode README

This extension allows to quickly switch between view/codebehind and from view/codebehind to css/scss

## Usage

- Open e.g. Default.aspx file.
- Press 'Ctrl+Shift+P' ('Cmd+Shift+P' on mac) and select 'Switch to Code/Designer' command to switch between view/codebehind

or 

- Press 'Ctrl+Shift+P' ('Cmd+Shift+P' on mac) and select 'Switch to CSS/SCSS' command to switch from view/codebehind to css/scss

Alternatively, you can edit your keyboard shortcuts and assign e.g. 'F7' to 'Switch to Code/Designer' command and 'Shift + F7' to 'Switch to CSS/SCSS'.

## Features

'Switch to Code/Designer' command supports:
- *.aspx to *.aspx.cs and *.aspx.cs to *.aspx
- *.ascx to *.ascx.cs and *.ascx.cs to *.ascx
- *.master to *.master.cs and *.master.cs to *.master
- *.vue.html to *.ts
- *.html to *.ts
- *.ts to *.html and if not exists then to *.vue.html
- *.css to *.html and if not exists then to *.vue.html
- *.scss to *.html and if not exists then to *.vue.html

'Switch to CSS/SCSS' command supports:
- *.html to *.scss and if not exists then to *.css
- *.vue.html to *.scss and if not exists then to *.css
- *.ts to *.scss and if not exists then to *.css
# Kite for Hugo

## Documentation

## Installation

### Config
```toml
baseurl = "http://www.example.com"
title = "Dashi's Blog"
theme = "kite"
languagecode = "ja"
defaultcontentlanguage = "ja"

paginate = 20
canonifyurls = true

pygmentsstyle = "bw"
pygmentscodefences = true
pygmentscodefencesguesssyntax = true

disqusShortname = "yourdiscussshortname"

[params]
    author = "dashi296"
    info = "Web Engineer"
    description = "Cool Blog"
    keywords = "blog,developer,personal"
    avatarurl = "images/avatar.jpg"

    favicon_32 = "/img/favicon-32x32.png"
    favicon_16 = "/img/favicon-16x16.png"

    hidecredits = false
    hidecopyright = false

    rtl = false

    math = true
    custom_css = ["css/custom.css"]

# Social links
[[params.social]]
    name = "Github"
    icon = "fab fa-github fa-2x"
    weight = 1
    url = "https://github.com/dashi296/"
[[params.social]]
    name = "Gitlab"
    icon = "fab fa-gitlab fa-2x"
    weight = 2
    url = "https://gitlab.com/dashi296/"
[[params.social]]
    name = "Twitter"
    icon = "fab fa-twitter fa-2x"
    weight = 3
    url = "https://twitter.com/dashi296/"

# Menu links
[[menu.main]]
    name = "Blog"
    weight = 1
    url  = "/posts/"
[[menu.main]]
    name = "About"
    weight = 2
    url = "/about/"
[[menu.main]]
    name = "Contact"
    weight = 1
    url  = "/contact/"
```
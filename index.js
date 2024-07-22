// we can also write: import express from "express instead of const express = require('express')" 
require('dotenv').config()
const express = require('express') 
const app = express()
const port = 4000

const githubData = {
    "login": "Sumeet7774",
    "id": 162693516,
    "node_id": "U_kgDOCbKBjA",
    "avatar_url": "https://avatars.githubusercontent.com/u/162693516?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sumeet7774",
    "html_url": "https://github.com/Sumeet7774",
    "followers_url": "https://api.github.com/users/Sumeet7774/followers",
    "following_url": "https://api.github.com/users/Sumeet7774/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sumeet7774/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sumeet7774/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sumeet7774/subscriptions",
    "organizations_url": "https://api.github.com/users/Sumeet7774/orgs",
    "repos_url": "https://api.github.com/users/Sumeet7774/repos",
    "events_url": "https://api.github.com/users/Sumeet7774/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sumeet7774/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sumeet Kapadia",
    "company": null,
    "blog": "",
    "location": "Gandhinagar, Gujarat, India",
    "email": null,
    "hireable": null,
    "bio": "Aspiring Full Stack App Developer | DSA Enthusiast | BTECH Computer Engineering Student",
    "twitter_username": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2024-03-08T10:00:35Z",
    "updated_at": "2024-07-09T11:40:35Z"
  }

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('twitter', (req,res) => {
    res.send('sumeetdotcom')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Char aur code</h2>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
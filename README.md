[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<samp>
<p align="center">
  <a href="https://github.com/SilasRodrigues19/LOL-RUNES">
    <img src="./public/assets/logo.svg" alt="Logo" width="100" height="80">
  </a>

  <h3 align="center">LOL - Runes</h3>

  <p align="center">
    Get the runes a given summoner is using in an active game
    <br />
    <a href="https://get-runes.onrender.com/getRunesRoute">Demo</a>
    <a href="https://github.com/SilasRodrigues19/LOL-RUNES/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#pre-requisites">Pre requisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

| StreamElements Command                          | 
| ----------------------------------------------- |
| [![Preview][product-screenshot]][project-link]  | 


## How it works

The project was created with the aim of querying information through Riot Games' APIS and using this information in lives on Twitch, through commands from the StreamElements bot.

To create the command, simply use the syntax below in the Twitch live chat where you want to create the command. Remembering that the project must be hosted and use the hosting address followed by the route name.

```
  !cmd add runes $(customapi.https://mydomain.com/getRunesRoute)
```

Replacing `mydomain.com` with your real domain, just use `!runes` and the command will return with the summoner's data.

<hr>


### Built With

Technologies used in the project.

### Libraries

- [tsup](https://tsup.egoist.dev/)
  Bundle your TypeScript library with no config, powered by esbuild. 

### Frameworks

- [Fastify](https://fastify.dev/)
  Fast and low overhead web framework, for Node.js.

### Technologies

- [TypeScript](https://www.typescriptlang.org/)
  A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

### APIS

- [Riot Developer Portal](https://developer.riotgames.com/)

Endpoints: 
[SUMMONER-V4](https://developer.riotgames.com/apis#summoner-v4) fetch the invoker ID provided in the SUMMONER_NAME environment variable and use it in the SPECTATOR endpoint

[SPECTATOR-V4](https://developer.riotgames.com/apis#spectator-v4) to get runes in an active game from a given summoner


<!-- GETTING STARTED -->

## Pre requisites

1. Access the [`.env.example`](/.env.example)  file and rename it to `.env`

2. Generate your api key in the following
  ```sh
    https://developer.riotgames.com/
  ```
Copy the value and paste it inside the quotes in `RIOT API` in the `.env` file

3. Do the same with the summoner's nickname, pasting it into `SUMMONER_NAME`

4. Get the region code from the summoner and paste it into `REGION`

Here is a list of the acronyms for the regions:

| Region Code | Host                        |
|------------ |-----------------------------|
| BR1         | br1.api.riotgames.com       |
| EUN1        | eun1.api.riotgames.com      |
| EUW1        | euw1.api.riotgames.com      |
| JP1         | jp1.api.riotgames.com       |
| KR          | kr.api.riotgames.com        |
| LA1         | la1.api.riotgames.com       |
| LA2         | la2.api.riotgames.com       |
| NA1         | na1.api.riotgames.com       |
| OC1         | oc1.api.riotgames.com       |
| TR1         | tr1.api.riotgames.com       |
| RU          | ru.api.riotgames.com        |
| PH2         | ph2.api.riotgames.com       |
| SG2         | sg2.api.riotgames.com       |
| TH2         | th2.api.riotgames.com       |
| TW2         | tw2.api.riotgames.com       |
| VN2         | vn2.api.riotgames.com       |



## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SilasRodrigues19/LOL-RUNES.git
   ```
2. Install dependencies (you can use npm, pnpm, yarn or anything else)
   ```sh
   pnpm install
   ```
3. In the project directory, you can run development mode with the following
   ```sh
   pnpm run dev
   ```
   or build and run production mode with the following
   ```sh
   pnpm run build && pnpm start
   ```

4. You can access the main route at the following address
   ```sh
     http://localhost:3333/getRunesRoute
   ```
   <!-- CONTRIBUTING -->


###### Optionally, you can install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension and run directly through VSCode using the [`routes.http`](/routes.http) file 

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Silas Rodrigues - [@jinuye1](https://twitter.com/jinuye1) - silasrodrigues.fatec@gmail.com

Project Link: [https://github.com/SilasRodrigues19/LOL-RUNES](https://github.com/SilasRodrigues19/LOL-RUNES) <br>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/SilasRodrigues19/NLW-IA.svg?style=for-the-badge
[contributors-url]: https://github.com/SilasRodrigues19/LOL-RUNES/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SilasRodrigues19/NLW-IA.svg?style=for-the-badge
[forks-url]: https://github.com/SilasRodrigues19/LOL-RUNES/network/members
[stars-shield]: https://img.shields.io/github/stars/SilasRodrigues19/NLW-IA.svg?style=for-the-badge
[stars-url]: https://github.com/SilasRodrigues19/LOL-RUNES/stargazers
[issues-shield]: https://img.shields.io/github/issues/SilasRodrigues19/NLW-IA.svg?style=for-the-badge
[issues-url]: https://github.com/SilasRodrigues19/LOL-RUNES/issues
[license-shield]: https://img.shields.io/github/license/SilasRodrigues19/NLW-IA.svg?style=for-the-badge
[license-url]: https://github.com/SilasRodrigues19/LOL-RUNES/blob/master/LICENSE
[license-url]: https://github.com/SilasRodrigues19/LOL-RUNES/blob/master/LICENSE.txt
[product-screenshot]: ./public/screenshots/preview.png
[project-link]: https://get-runes.onrender.com/getRunesRoute

<br><hr>
[🔼 Back to top](#LOL---runes)
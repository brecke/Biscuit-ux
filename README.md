# Biscuit-ux
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbrecke%2FBiscuit-ux.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbrecke%2FBiscuit-ux?ref=badge_shield)


This is an experimental frontend for Apereo's Open Academic Environment. In time this will implement the new design for OAE and connect to the [backend](https://github.com/oaeproject/Hilary/).

## Development

This project is based on the [Polymer project PWA starter kit](https://pwa-starter-kit.polymer-project.org/) so feel free to check its documentation online. With time Biscuit-ux will slowly drop most of the built-in functionality and become its own project.

To kickstart development:

1. `git clone https://github.com/oaeproject/Biscuit-ux.git && cd Biscuit-ux` 
2. `npm install`
3. `npm run start:webpack`

## Integration with Hilary

Integration with the backend is still experimental and requires a few changes to Hilary. One must use Hilary's `biscuit-ux-integration` [branch](https://github.com/oaeproject/Hilary/tree/biscuit-ux-integration) and change the `nginx.conf` file linked in `docker-compose.yml` to the one this project provides (check folder `dev-utils`). Restart `oae-nginx` docker to make sure the config is loaded:

1. `docker-compose stop oae-nginx`
2. `docker-compose rm -f oae-nginx`
3. `docker-compose up -d oae-nginx`
4. `docker-compose logs -f oae-nginx`

## Help

Find us on [discord](https://discord.gg/RShTcdq).

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbrecke%2FBiscuit-ux.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbrecke%2FBiscuit-ux?ref=badge_large)
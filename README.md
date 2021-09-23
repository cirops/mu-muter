# Mu Online Selective Muter

## Description
Have you ever wondered if you can leave your MU Online character semi-afk, and only hear when the jewels drop, so that you can pick them up? Say no more, this is a hacky but 100% effective way of doing it. It basically overwrite all your sound effect files with an mute sound, except for the jewel sound.

# Running
- Clone the project;
- Copy your `Sound` folder from MU (located at /Data/Sound) into the same folder as this file;
- Run `node muMuter.js`;
- Overwrite your original Sound folder on at /Data/Sound;
- A backup of your original files will be created on the `bk` folder;

## Versions Tested
- v96;

## Roadmap
- [x] Basic functionality, for proof of concept;
- [x] Backup original files, so that you can revert if something goes wrong;
- [ ] Implement reversion to backup files;
- [ ] Implement CLI function so that the user can provide the MU sound folder;
- [ ] Decent error handling for exceptions (cleanup, etc);
- [ ] Compile an executable version for windows;
- [ ] Implement a .bat file that does the same;
- [ ] Make it able to accept a handful of sounds (e.g spell scrolls), not just gems;
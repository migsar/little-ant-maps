# Project architecture

This project is all contained in the repo, but it is not a mono repo. The reason for this is that we want to minimize the effort to get the project files. Once we reach a size in which it is easier to have separate repositories, or we find a technical reason not to have things here, we will move it.

## Life cycle
The project deals with the whole map cycle:
1. Data acquisition (WMS, GPS, etc.)
2. Data optimization for consumption (Cleaning data and converting to reasonable format)
3. Data delivery (Backend)
4. Data display and consumption (Frontend)

We already have some ideas for some parts but not all of them.

### Data acquisition
 - Be able to use open data from map servers
 - Generate data from GPS trackers

### Data display
 - Cesium
 - [Terrain rendering](https://github.com/topics/terrain-rendering)

## Misc
 - [3D terrain rendering based on elevation map for game design](https://www.programmersought.com/article/33254272778/)

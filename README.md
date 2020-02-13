# Youtube Downloader

A Zero dependency Youtube downloader, great for deploying in serverless environments where node modules packaging is not supported.

## Installation

- Clone this repository and open this project in the Terminal.
- Run the command to install all the node modules.
```
npm install
```
- Start development server
```
npm run dev
```
- Start production server
```
npm start
```
## API Documentation

- ### **GET /download**  
Query:  
id - Video id of the youtube video

**Sample Response:**
```json
{
    "expiresInSeconds": "Integer",
    "formats": [],
    "adaptiveFormats": []
}
```

- ### **GET /candownload**  
Query:  
id - Video id of the youtube video

**Sample Response:** OK | UNAVAILABLE

- ### **GET /details**  
Query:  
id - Video id of the youtube video

**Sample Response:**
```json
{
    "videoId": "String",
    "title": "String",
    "lengthSeconds": "Integer",
    "keywords": [],
    "channelId": "String",
    "shortDescription": "String",
    "thumbnail": {
        "thumbnails": [],
        "averageRating": "double",
        "author": "String"
    }
}
```

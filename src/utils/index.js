const getURL = url => process.env.environment === 'development' ? `http://roadmapservice.azurewebsites.net/api/${url}` :
  `https://roadmapservice.azurewebsites.net/api/${url}`


const utils = {
  getURL,
}

export default utils

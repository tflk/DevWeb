const qandlAPI = require('./finance.js')
const asyncApiCall = async () => {
    const response = await qandlAPI.getCompatibility('annual', '100', 'asc', '1')
    console.log(response.data)
    //console.log(response.data.data.Compatibility.heading)
    //console.log(response.data.data.Compatibility)
}
asyncApiCall()
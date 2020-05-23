import axios from "axios"

let apikey = 'AIzaSyBEKDFIt2ArDdzr5OmPHT9WiVzHOfLiTHo'

export const getGeoLocWithLatAndLang = async (lat,lang) =>{
        let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng
        =${lat},${lang}&location_type=ROOFTOP&result_type=street_address&key=${apikey}`)
        console.log(res)
        if(res.status === 200) return res.data
}
  
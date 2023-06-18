import * as Location from 'expo-location'
import Geocoder from 'react-native-geocoding'
import { GOOGLE_MAPS_APIKEY } from '@env'

Geocoder.init(GOOGLE_MAPS_APIKEY)

export const reverseGeocode = async (lat, long) => {
    const code = await Geocoder.from({ 
        latitude: lat,
        longitude: long
    })

    const address = code.results[0].formatted_address
   
    return address
}

export const getPermissions = async () => {
    let currentLocation, address
    try {
        await Location.requestForegroundPermissionsAsync()
        currentLocation = await Location.getCurrentPositionAsync({})
        address = await reverseGeocode(currentLocation.coords.latitude, currentLocation.coords.longitude)
    } catch (e) {
        console.log("Permission not granted.")
    }
    
    return { address, currentLocation }
}


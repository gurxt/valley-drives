import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BriefcaseIcon, HomeIcon } from 'react-native-heroicons/solid'
import { ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { RFPercentage } from 'react-native-responsive-fontsize'

const FavouritesCard = ({ handlePress }) => {
    const simulate_data = [
        {
            id: "123",
            icon: <HomeIcon size={RFPercentage(3)} color="azure" />,
            location: "Home",
            description: "244 Welland Street, Pembroke, ON, Canada",
            geometry: { location: {"lat": 45.8212731, "lng": -77.11632569999999}}
        },
        {
            id: "1234",
            icon: <BriefcaseIcon size={RFPercentage(3)} color="azure" />,
            location: "Work",
            description: "6225 Millcreek Drive, Mississauga, ON, Canada",
            geometry: { location: {"lat": 43.5901376, "lng": -79.72994039999999}}
        },
        {
            id: "12345",
            icon: <BriefcaseIcon size={RFPercentage(3)} color="azure" />,
            location: "Work",
            description: "6225 Millcreek Drive, Mississauga, ON, Canada",
            geometry: { location: {"lat": 43.5901376, "lng": -79.72994039999999}}
        },
    ]

    return (
        <ScrollView className="mb-2 mt-1">
            { simulate_data.map(item => (
                <TouchableOpacity 
                    key={item.id} 
                    className="pb-1 flex-row items-center"
                    onPress={() => handlePress(item, item)}
                >
                    <View 
                        style={{ backgroundColor: "#9fc9bc" }}
                        className="mt-2 mx-2 rounded-lg bg-gray-300 p-3"
                    >
                    { item.icon }
                    </View>
                    <View className="">
                        <Text style={{ color: "#F0FFFF99", fontSize: RFPercentage(2) }}>{ item.location }</Text>
                        <Text style={{ color: "azure", fontSize: RFPercentage(2) }}>{ item.description }</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default FavouritesCard
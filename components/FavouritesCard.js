import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BriefcaseIcon, HomeIcon } from 'react-native-heroicons/solid'
import { ScrollView } from 'react-native'


const FavouritesCard = () => {
    const simulate_data = [
        {
            id: "123",
            icon: <HomeIcon size={30} color="azure" />,
            location: "Home",
            destination: "244 Welland Street, Pembroke, ON, Canada"
        },
        {
            id: "1234",
            icon: <BriefcaseIcon size={30} color="azure" />,
            location: "Work",
            destination: "6225 Millcreek Drive, Mississauga, ON, Canada"
        },
        {
            id: "121",
            icon: <HomeIcon size={30} color="azure" />,
            location: "Home",
            destination: "244 Welland Street, Pembroke, ON, Canada"
        },
        {
            id: "12345",
            icon: <BriefcaseIcon size={30} color="azure" />,
            location: "Work",
            destination: "6225 Millcreek Drive, Mississauga, ON, Canada"
        },
    ]

    return (
        <ScrollView
            className="mb-2 mt-1"
        >
            { simulate_data.map(item => (
                <TouchableOpacity key={item.id} className="pb-1 h-1/8 flex-row items-center">
                    <View 
                        style={{ backgroundColor: "#9fc9bc" }}
                        className="mt-2 mx-2 rounded-lg bg-gray-300 p-3"
                    >
                    { item.icon }
                    </View>
                    <View className="">
                        <Text style={{ color: "azure" }}>{ item.location }</Text>
                        <Text style={{ color: "azure" }}>{ item.destination }</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default FavouritesCard
import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { urlFor } from '../sanity'

const TaxiOptionsCard = ({ taxiInformation, handleTaxiSwap }) => {
    return (
        <ScrollView horizontal className="w-full flex-1 my-2">
            { taxiInformation?.map((taxi, idx) => (
                <TouchableOpacity 
                    style={{ borderColor: "#80847e", backgroundColor: "azure" }}
                    className="mx-1 border-2 border-r-4 border-b-4 rounded-xl" 
                    key={taxi.name} 
                    onPress={() => handleTaxiSwap(idx)}
                >
                    <View className="w-54 px-1 pt-1 rounded-t-xl flex-row">
                        <View borderColor="#80847e99" className="w-32 border-b-2 border-r-2 mr-2">
                            <Text 
                                style={{ color: `${taxi.theme}` }}
                                className="uppercase text-sm text-center"
                            >
                                {taxi.name}
                            </Text>
                        </View>
                        <View className="flex-row flex-1 justify-end items-end">
                            <Text style={{ color: `${taxi.theme}`}} className="text-xs">{ taxi.rating }</Text>
                            <StarIcon size={20} color={taxi.theme} />
                        </View>
                    </View>
                    <View className="flex-1 justify-center items-center">
                        <Image 
                            source={{ uri: urlFor(taxi.logo) }}
                            className="h-32 w-40 self-center"
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={{ borderBottomColor: "#80847e99" }} className="mx-1 border-b-2"></Text>
                    <View className=" rounded-b-xl p-1">
                        <Text style={{ color: `${taxi.theme}`}}>
                            Rate:&nbsp; 
                            {   new Intl.NumberFormat('en-ca', {
                                    style: 'currency',
                                    currency: 'CAD'
                                }).format(taxi.rate)
                            }/m
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default TaxiOptionsCard
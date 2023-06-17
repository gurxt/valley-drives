import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Visa from '../assets/visa.png'
import MasterCard from '../assets/mastercard.png'
import { CheckIcon } from 'react-native-heroicons/solid'

const PaymentOptions = ({ payments }) => {
    const [selected, setSelected] = useState(0)

    useEffect(() => {

    }, [selected])

    return (
        <ScrollView className="flex-1">
            { payments?.map((payment, idx) => (
                <TouchableOpacity
                    key={payment.id}
                    className="h-14 w-full rounded-xl flex-row items-center mb-1"
                    style={{ backgroundColor: "#80847e66"}}
                    onPress={() => setSelected(idx)}
                >
                        { payment.type === "Visa" && (
                            <Image 
                                source={Visa} 
                                style={{ width: "20%", height: "75%", resizeMode: "contain" }}
                            />
                        )}
                        { payment.type === "MasterCard" && (
                            <Image 
                                source={MasterCard} 
                                style={{ width: "20%", height: "75%", resizeMode: "contain" }}
                            />
                        )}
                    <View className="h-full pl-2 pb-2 flex-row items-end" borderColor="#80857e99">
                        <View>
                            <Text className="text-lg font-light text-gray-900">
                                *{ payment.cardNumber.slice(
                                    payment.cardNumber.length - 4,
                                    payment.cardNumber.length
                                )} 
                            </Text>
                            <Text className="text-right font-light text-sm text-gray-900">
                                { payment.expireDate }
                            </Text>
                        </View>
                        <Text className="pl-4 pb-0 text-sm font-light text-gray-900">
                            { payment.name } 
                        </Text>
                    </View>
                    <View className="flex-1 p-2 items-end">
                        <View backgroundColor="azure" className="p-2 rounded-xl">
                            <CheckIcon size={30} color={ selected === idx ? "#9fc9be" : "#0000"} />
                        </View>
                    </View>
                </TouchableOpacity>
            ))} 
        </ScrollView>
    )
}

export default PaymentOptions 
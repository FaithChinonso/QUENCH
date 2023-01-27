import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import React from "react";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

export default function RestaurantCard({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="text-lg pt-2 font-bold">{title}</Text>
        <View className="flex-row items-center space-x-1">
          {Platform.OS === "android" ? (
            ""
          ) : (
            <StarIcon color="green" opacity={0.5} size={22} />
          )}
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating} </Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          {Platform.OS === "android" ? (
            ""
          ) : (
            <MapPinIcon color="gray" opacity={0.4} size={22} />
          )}
          <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

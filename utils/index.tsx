import { PlaceType } from "@/types";
import { CakeSliceIcon, MartiniIcon, PizzaIcon } from "lucide-react";

export const getPlaceIcon = (place: PlaceType) => {
    switch (place) {
        case PlaceType.Bar:
            return <MartiniIcon />;
        case PlaceType.Cafe:
            return <CakeSliceIcon />;
        case PlaceType.Restaurant:
            return <PizzaIcon />;
    }
}

export const getPlaceLabel = (place: PlaceType) => {
    switch (place) {
        case PlaceType.Bar:
            return 'Bar';
        case PlaceType.Cafe:
            return 'Café';
        case PlaceType.Restaurant:
            return 'Restaurant';
    }
}

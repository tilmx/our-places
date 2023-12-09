import { CakeSliceIcon, MartiniIcon, PizzaIcon } from "lucide-react";

export const getPlaceIcon = (place: string) => {
    switch (place) {
        case "Bar":
            return <MartiniIcon />;
        case "Café":
            return <CakeSliceIcon />;
        case "Restaurant":
            return <PizzaIcon />;
    }
}

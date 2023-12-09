import { CakeSliceIcon, MartiniIcon, SoupIcon } from "lucide-react";

export const getPlaceIcon = (place: string) => {
    switch (place) {
        case "Bar":
            return <MartiniIcon />;
        case "Café":
            return <CakeSliceIcon />;
        case "Restaurant":
            return <SoupIcon />;
    }
}

export const getPersonImage = (person: string) => {
    switch (person) {
        case "Tilman":
            return "/assets/images/recommended-by/tilman.jpg";
    }
}

import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GrassIcon from '@mui/icons-material/Grass';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LandscapeIcon from '@mui/icons-material/Landscape';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <HomeIcon />,
        link:   "/dashboard"                  
    
    },
    {
        title: "Nursery Reports",
        icon: <GrassIcon />,
        link: "/nursery"
    },
    {
        title: "Distribution Reports",
        icon: <VolunteerActivismIcon />,
        link: "/distribution"
    },
    {
        title: "PM Survived Reports",
        icon: <ThumbUpAltIcon />,
        link: "/pmsurvived"
    },
    {
        title: "Expansion Reports",
        icon: <LandscapeIcon />, 
        link: "/expansion"
    },
    {
        title: "Cotton Reports",
        icon: <LandscapeIcon />, 
        link: "/cotton"
    }
]
 


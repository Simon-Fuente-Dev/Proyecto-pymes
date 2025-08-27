import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {Box,Chip, Button} from '@mui/material';

import {useLocation, useNavigate} from 'react-router-dom'


const Star = ({value}: { value: number }) => {
    const iconStyle = {fontSize: {xs: 70, sm: 50, md: 60, lg: 80}, color: "gold"};
    if (value === 1) return <StarIcon sx={iconStyle}/>;
    if (value === 0.5) return <StarHalfIcon sx={iconStyle}/>;
    return <StarOutlineIcon sx={iconStyle}/>;
};

const StarCardBento = () => {

    const navigate = useNavigate();

    const rating = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);


    return (
        <Box sx={{
            flexGrow: 1,
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px"
        }}>

            <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={`full-${i}`} value={1}/>
                ))}
                {hasHalfStar && <Star value={0.5}/>
                }
                {[...Array(emptyStars)].map((_, i) => (
                    <Star key={`empty-${i}`} value={0}/>
                ))}
            </Box>
            <Chip sx={{marginTop: "2px"}} label={"3.000 Reseñas"}/>
            <Button
                sx={{marginTop: "10px"}}
                variant={"contained"}
                onClick={()=> navigate("/Review")}
            >
                Ver detalle</Button>
        </Box>

    )
}


export default StarCardBento
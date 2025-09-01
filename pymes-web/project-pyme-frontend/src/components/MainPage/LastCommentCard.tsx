import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import {Avatar, Box, Paper, Typography} from "@mui/material"

const Star = ({value}: { value: number }) => {
    const iconStyle = {fontSize: {xs: 15, sm: 15, md: 15, lg: 15}, color: "gold"};
    if (value === 1) return <StarIcon sx={iconStyle}/>;
    if (value === 0.5) return <StarHalfIcon sx={iconStyle}/>;
    return <StarOutlineIcon sx={iconStyle}/>;
};

const LastCommentCard = () => {

    const rating = 3.2;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <Box sx={{
            backgroundColor: 'blue',
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: 'column',
            alignItems: 'center',
            gap: "12px",
            paddingBlock: "12px",
            paddingInline: "24px",
        }}>
            <Paper sx={{
                width: "100%",
                padding: "8px",
                display: "flex",
                flexDirection: 'column',
                gap: "8px",
            }}>
                {/*Seccion de los datos del usuario que hizo el comentario*/}
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    gap: "8px"
                }}>
                    <Avatar>M</Avatar>
                    <Box>
                        <Typography>Maria antonieta</Typography>
                        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
                            {[...Array(fullStars)].map((_, i) => (
                                <Star key={`full-${i}`} value={1}/>
                            ))}
                            {hasHalfStar && <Star value={0.5}/>
                            }
                            {[...Array(emptyStars)].map((_, i) => (
                                <Star key={`empty-${i}`} value={0}/>
                            ))}
                        </Box>
                    </Box>

                </Box>
                {/*Seccion del comentario*/}
                <Box sx={{width: '100%' }}>
                    <Typography
                    sx={{
                        wordWrap: 'break-word', overflowWrap: 'break-word', whiteSpace: 'normal', fontSize: '0.8rem',
                    }}
                    >asdkljljljljlj ljljljljl jljljljljljljl jljljljljljljljljljljlj ljljljljljljljjaskdljas dsadjlsadjlkasjldasj</Typography>

                </Box>
            </Paper>
        </Box>
    )
}

export default LastCommentCard;
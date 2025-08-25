import {Card, CardContent, CardHeader, Grid, Typography, Paper, Stack, Divider} from "@mui/material";
import '../styles/MainPage.css'
import {useAppContext} from "../context/AppContext";
import StarCardBento from "../components/MainPage/StarCardBento.tsx";
import BentoCard from "../components/MainPage/BentoCard.tsx";
import StarIcon from '@mui/icons-material/Star';
import BarChartIcon from '@mui/icons-material/BarChart';
import CommentIcon from '@mui/icons-material/Comment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const MainPage = () => {
    const {userId} = useAppContext()

    return (
        <div className="parent">
            <div className="div1">
                <BentoCard
                    title="Mi Calificación"
                    icon={<StarIcon sx={{fontSize: 'inherit'}}/>}
                    colorIcon="gold">
                    <StarCardBento/>
                </BentoCard>
            </div>
            <div className="div2">
                <BentoCard
                    title="Estadísticas"
                    icon={<BarChartIcon sx={{fontSize: 'inherit'}}/>}
                    colorIcon="#44F814">2</BentoCard>

            </div>
            <div className="div3">
                <BentoCard
                    title="Top productos y servicios"
                    icon={<StarIcon sx={{fontSize: 'inherit'}}/>}
                    colorIcon="gold">3</BentoCard>

            </div>
            <div className="div4">
                <BentoCard
                    title="Ultimas Ventas"
                    icon={<MonetizationOnIcon sx={{fontSize: 'inherit'}}/>}
                    colorIcon="gold">4</BentoCard>

            </div>
            <div className="div5">
                <BentoCard
                    title="Ultimos Comentarios"
                    icon={<CommentIcon sx={{fontSize: 'inherit'}}/>}
                    colorIcon="gold">5</BentoCard>

            </div>
        </div>

    )
}

export default MainPage;
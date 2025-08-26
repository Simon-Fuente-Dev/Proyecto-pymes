
import {BarChart, PieChart} from "@mui/x-charts";
import {Typography, Box} from "@mui/material";
const DashCardBento = () => {
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: '1fr', p: "3px", placeContent: 'center', height: '100%'}}>
            <Box sx={{display:"flex", flexDirection: "column", textAlign: "center"}}>
                <Typography variant={"h4"}>Ventas de los ùltimos 3 meses </Typography>
                <BarChart
                    xAxis={[{data: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']}]}
                    series={[{
                        data: [3,6,9, 3,6,9],
                        color: "#c237db"
                    }]}
                    height={400}
                />
            </Box>

        </Box>

    )
}

export default DashCardBento;



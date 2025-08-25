import { Card, CardContent, CardHeader, Grid, Typography, Paper, Stack } from "@mui/material";
import '../styles/MainPage.css'
import { useAppContext } from "../context/AppContext";
const BentoCard = ({ children }: { children: React.ReactNode }) => (
    <Paper sx={{ height: "100%", borderColor: "white" }} elevation={3} variant="outlined">
        {children}
    </Paper>
)
const MainPage = () => {
    const {userId} = useAppContext()
    console.log(userId)

    return (
        <div className="parent">
            <div className="div1">
                <BentoCard>1</BentoCard>
            </div>
            <div className="div2">
                <BentoCard>2</BentoCard>

            </div>
            <div className="div3">
                <BentoCard>3</BentoCard>

            </div>
            <div className="div4">
                <BentoCard>4</BentoCard>

            </div>
            <div className="div5">
                <BentoCard>5</BentoCard>

            </div>
        </div>

    )
}

export default MainPage;
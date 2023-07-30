import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter()

    const tracks: ITrack[] = [
        {_id: '1', name: 'Трек 1', artist: 'Испольнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/ed9d59ab-4c34-4802-b6b7-2dbcc33de75e.mp3', picture: 'http://localhost:5000/image/b89b5480-8357-4edb-88b3-244c89fb2ad5.jpg', comments: []},
        {_id: '2', name: 'Трек 2', artist: 'Испольнитель 2', text: 'Какой-то текст', listens: 6, audio: 'http://localhost:5000/audio/be047806-b650-4907-bef7-6fd0357ff1a2.mp3', picture: 'http://localhost:5000/image/d7125a02-207d-4434-88e2-ea52fa18cf46.jpg', comments: []},
        {_id: '3', name: 'Трек 3', artist: 'Испольнитель 3', text: 'Какой-то текст', listens: 7, audio: 'http://localhost:5000/audio/9c8d7638-005c-48d5-9944-32cf9b621a76.mp3', picture: 'http://localhost:5000/image/2b19ea4f-1f08-41e6-9aec-a7e0486bb065.jpg', comments: []},
    ]

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список треков</h1>
                            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index;
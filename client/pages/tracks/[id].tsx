import React from "react";
import { ITrack } from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";

const TrackPage = () => {
    const track: ITrack = {_id: '3', name: 'Трек 3', artist: 'Испольнитель 3', text: 'Какой-то текст', listens: 7, audio: 'http://localhost:5000/audio/9c8d7638-005c-48d5-9944-32cf9b621a76.mp3', picture: 'http://localhost:5000/image/2b19ea4f-1f08-41e6-9aec-a7e0486bb065.jpg', comments: []}
    const router = useRouter()
    
    return (
        <MainLayout>
            <Button 
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={() => router.push('/tracks')}
            >
                К списку
            </Button>
            <Grid container style={{margin: '20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{marginLeft: '30px'}}>
                    <h1>Название трека - {track.name}</h1>
                    <h1>Исполнитель - {track.artist}</h1>
                    <h1>Прослушиваний - {track.listens}</h1>
                </div>
            </Grid>
            <h1>Слова в треке</h1>
            <p>{track.text}</p>
            <h1>Комментарии</h1>
            <Grid container>
                <TextField 
                    label="Ваше имя"
                    fullWidth
                />
                <TextField 
                    label="Комментарий"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(comment => 
                    <div>
                        <div>Автор - {comment.username}</div>
                        <div>Комментарий - {comment.text}</div>
                    </div>
                )}
            </div>
        </MainLayout>
    )
}

export default TrackPage
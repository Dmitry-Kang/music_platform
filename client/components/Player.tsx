import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import styles from '../styles/Player.module.scss'
import TrackProgress from "./TrackProgress";
import { ITrack } from "../types/track";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useEffect } from "react";

let audio;

const Player = () => {
    const track: ITrack = {_id: '3', name: 'Трек 3', artist: 'Испольнитель 3', text: 'Какой-то текст', listens: 7, audio: 'http://localhost:5000/audio/9c8d7638-005c-48d5-9944-32cf9b621a76.mp3', picture: 'http://localhost:5000/image/2b19ea4f-1f08-41e6-9aec-a7e0486bb065.jpg', comments: []}
    const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)
    const {pauseTrack, playTrack} = useActions()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
            audio.src = track.audio
        }
    }, [])

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={() => ({})}/>
        </div>
    )
}

export default Player;
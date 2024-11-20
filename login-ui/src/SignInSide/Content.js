import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';

const items = [
  {
    icon: <MusicNoteIcon sx={{ color: 'text.secondary' }} />,
    title: 'MUI-SIC',
    description: 'A musical harmony to enhance your experience.',
  },
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Adaptable performance',
    description:
      'A symphony of solutions, a harmony of ease,Our product’s performance, a musical decree.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Built to last',
    description:
      'A durable duet, a long-lasting pair,Our product’s reliability, beyond compare.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Great user experience',
    description:
      'A user-friendly tune, a melodic delight,Our interface, a harmonious sight.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Innovative functionality',
    description:
      'A future-forward beat, a cutting-edge sound,Our features, a revolutionary ground.',
  },
];

export default function Content() {
  const audioRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  React.useEffect(() => {
    const audio = new Audio('/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    return () => {
    
      audio.pause();
    };
  }, []);

  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
        <IconButton onClick={togglePlay} sx={{ color: 'primary.main', fontSize: 48 }}>
          <MusicNoteIcon />
        </IconButton>  {}
        <Typography variant="h1" sx={{ ml: 2, color: 'primary.main', fontWeight: 'medium' }}>
          MUI-SIC
        </Typography>
      </Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}

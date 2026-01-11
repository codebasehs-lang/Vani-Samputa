import { cryingSchoolVideoData as cryingSchoolVideoDataEnglish } from './cryingSchoolVideoData.generated';
import { cryingSchoolVideoDataOdia } from './cryingSchoolVideoData.odia.generated';
import { cryingSchoolVideoDataHindi } from './cryingSchoolVideoData.hindi.manual';

export const audioData = [
  {
    id: 1,
    playlistName: "Sriman Mahaprabhu & Prema Bhakti",
    category: ["Chaitanya Charitamrita"],
    description: "lecture series on Sriman Mahaprabhu & Prema Bhakti",
    language: "Hindi",
    location: "ISKCON Vrindavan",
    icon: "/icons/Sriman_Mahaprabhu_&_Prema_Bhakti_Day.jpg",
    audios: [
      {
        id: 101,
        title: "Sriman Mahaprabhu & Prema Bhakti Day 1",
        audioUrl: "https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Oriya_Lectures/Bhagavad_Gita/Chapter-03/Haladhar_Sw_BG_03-01_Oriya_-_Introduction_to_Chapter-03_-_2022-02-15.mp3",
        duration: "1:51:50",
        date: "2024-01-02",
        hasTranscription: true,
        transcription: `coming soon...`
      },
      {
        id: 102,
        title: "Sriman Mahaprabhu & Prema Bhakti Day 2",
        audioUrl: "https://res.cloudinary.com/dds3bav6u/video/upload/v1767424183/Sriman_Mahaprabhu___Prema_Bhakti_Day_2_slnazk.mp3",
        duration: "1:50:39",
        date: "2024-01-15",
        hasTranscription: true,
        transcription: `coming soon...`
      },
      {
        id: 103,
        title: "Sriman Mahaprabhu & Prema Bhakti Day 3",
        audioUrl: "https://res.cloudinary.com/dds3bav6u/video/upload/v1767424166/Sriman_Mahaprabhu__amp__Prema_Bhakti_Day_3_qqpcws.mp3",
        duration: "1:49:16",
        date: "2024-01-15",
        hasTranscription: true,
        transcription: `coming soon...`
      },
      {
        id: 104,
        title: "Sriman Mahaprabhu & Prema Bhakti Day 4",
        audioUrl: "https://res.cloudinary.com/dds3bav6u/video/upload/v1767420883/Sriman_Mahaprabhu___Prema_Bhakti_Day_4_gb5ii7.mp3",
        duration: "2:02:08",
        date: "2024-01-15",
        hasTranscription: true,
        transcription: `Your transcription text...`
      }
    ]
  }
];

const parseTsvVideoRows = (raw) => {
  const lines = String(raw || '')
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter((line) => Boolean(line.trim()));

  const videos = [];
  let nextId = 101;

  for (const line of lines) {
    const parts = line.split('\t').map((part) => part.trim());

    const date = parts[0] || '';
    const title = parts[1] || '';
    const speaker = parts[2] || '';
    const originalLanguage = parts[3] || '';
    const kind = parts[4] || '';
    const location = parts[5] || '';

    const duration =
      parts.find((p) => /^\d{1,2}:\d{2}:\d{2}$/.test(p)) ||
      parts.find((p) => /^\d{1,2}:\d{2}$/.test(p)) ||
      '';

    const youtubeUrl = parts.find((p) => /^https?:\/\//i.test(p)) || '';

    const description = [date, speaker, originalLanguage, kind, location].filter(Boolean).join(' • ');

    videos.push({
      id: nextId++,
      title,
      youtubeUrl,
      duration,
      description
    });
  }

  return videos;
};

const bhagavadGitaHaladharaSwamiRaw = `6/1/2021\tIntroduction to Bhagavad Gita(part-1)-HH Haladhara Swami Maharaj(31/5/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:10:44\thttps://www.youtube.com/watch?v=mNwauTGIAlo
6/2/2021\tSrimad Bhagavad Gita(introduction Part-2)-Sri Srimad Haladhara Swami Maharaj(1/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:18\thttps://www.youtube.com/watch?v=qVB6NsHkO20
6/3/2021\tIntroduction 2 Srimad Bhagavad Gita&1.1 (Part-3)-HH Haladhara Swami Maharaj(2/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:26:15\thttps://www.youtube.com/watch?v=V3c-HyWE6jY
6/4/2021\tSrimad Bhagavad Gita(1.2-3)(Part-3)-HH Haladhara Swami Maharaj(3/6/2\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:16:25\thttps://www.youtube.com/watch?v=2PLDmw4ObM4
6/5/2021\tSrimad Bhagavad Gita(1.3)-HH Haladhara Swami Maharaj(4/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:11:39\thttps://www.youtube.com/watch?v=Y7VicgdSxTs
6/6/2021\tSrimad Bhagavad Gita(1.6)-HH Haladhara Swami Maharaj(5/6/21)Topic:-Result of duplicity\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:06:45\thttps://www.youtube.com/watch?v=OvtzKm7w6d4
6/7/2021\tSrimad Bhagavad Gita(1.8-9)-HH Haladhara Swami Maharaj(6/6/21) Topic-Shelter of duryodhan Vs Arjun\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:07:41\thttps://www.youtube.com/watch?v=tmSnstqkccc
6/8/2021\tSrimad Bhagavad Gita(1.9-11)-HH Haladhara Swami Maharaj(7/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:05:40\thttps://www.youtube.com/watch?v=SIMwY9MnD04
6/9/2021\tBhagavad Gita(1.12)-HH Haladhara Swami Maharaj(8/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:39\thttps://www.youtube.com/watch?v=9vP0C1v3xeY
6/10/2021\tSrimad Bhagavad Gita(1.15-20)HH Haladhara Swami Maharaj(9/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:23:39\thttps://www.youtube.com/watch?v=QTEHZ1uvXUo
6/11/2021\tBhagavad Gita(1.20)-HH Haladhara Swami Maharaj(10/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:25:40\thttps://www.youtube.com/watch?v=ON3amuYyVnU
6/12/2021\tSrimad Bhagavad Gita(1.23)-HH Haladhara Swami Maharaj(11/6/21) Topic:- Cause of Durbuddhi ?\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:13:19\thttps://www.youtube.com/watch?v=FX8ZE-wvfqA
6/13/2021\tBhagavad Gita(1.23)-HH Haladhara Swami Maharaj(12/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:20:56\thttps://www.youtube.com/watch?v=QZhlZlarkDU
6/14/2021\tSrimad Bhagavad Gita(1.25-26)-HH Haladhara Swami Maharaj(13/6/21) Topic- ଭଜନ ର ପ୍ରାଣ ଆତ୍ମୀୟତା l👌👌👌\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:22:29\thttps://www.youtube.com/watch?v=J6X9zzzbW9c
6/15/2021\tSrimad Bhagavad Gita(1.27)-HH Haladhara Swami Maharaj(14 /6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:05\thttps://www.youtube.com/watch?v=PcFSlFA94kM
6/16/2021\tBhagavad Gita(1.28)-HH Haladhara Swami Maharaj(15/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:22:31\thttps://www.youtube.com/watch?v=1EoCkvvE3bk
6/17/2021\tSrimad Bhagavad Gita(1.28-30)-HH Haladhara Swami Maharaj(16/6/21) Topic:- "Jiva daya"\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:22\thttps://www.youtube.com/watch?v=tHN028sB7Io
6/19/2021\tSrimad Bhagavad Gita(1.32-35)-HH Haladhara Swami Maharaj(18/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:18:32\thttps://www.youtube.com/watch?v=fqdtzq4KJNI
6/20/2021\tSrimad Bhagavad Gita(1:36)-HH Haladhar Swami Maharaj (19/06/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:15:39\thttps://www.youtube.com/watch?v=Svz7tgmeHd8
6/21/2021\tBhagavad Gita(1.37)-HH Haladhara Swami Maharaj(20/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:03:32\thttps://www.youtube.com/watch?v=m7QLWlmIGTQ
6/23/2021\tSrimad Bhagavad Gita(1.37-38)-HH Haladhara Swami Maharaj(22/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:16:40\thttps://www.youtube.com/watch?v=VJ0evVnsisQ
6/24/2021\tSrimad Bhagavad Gita(1.39-40)-HH Haladhara Swami Maharaj(23/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:20:07\thttps://www.youtube.com/watch?v=NCm4ILX2YfQ
6/25/2021\tSrimad Bhagavad Gita(1.40)-HH Haladhara Swami Maharaj(24/6/21)Topic:-Woman 's role in good society.\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:18:40\thttps://www.youtube.com/watch?v=hCFDBybRTZY
6/26/2021\tSrimad Bhagavad Gita(1.41-42)-HH Haladhara Swami Maharaj(25/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:23:15\thttps://www.youtube.com/watch?v=IB-rEdxCkkM
6/27/2021\tSrimad Bhagavad Gita(1.42-43)-HH Haladhara Swami Maharaj(26/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:13\thttps://www.youtube.com/watch?v=LPN9aIAeEKw
6/28/2021\tSrimad Bhagavat Gita(1.43,44,45,46) HH Haladhar Swami Maharaj(27/6/21\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:23:15\thttps://www.youtube.com/watch?v=NvwwSbnQGSM
6/29/2021\tSrimad Bhagavad Gita(1.46)-HH Haladhar Swami Maharaj(28/6/21)Topic:- Lessons from 2nd Chapter\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:03:15\thttps://www.youtube.com/watch?v=fTqp1KRxazY
6/30/2021\tSrimad Bhagavad Gita(Lesson from 2nd chapter by Srila BV Thakur)-HH Haladhara Swami Maharaj(29/6/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:02:50\thttps://www.youtube.com/watch?v=nV0agAw1zSk
7/2/2021\tBhagavad Gita(2.2)-HH Haladhara Swami Maharaj(1/7/21)Topic: Obstacle in bhakti:-Hrudaya doubarlyata\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:14:00\thttps://www.youtube.com/watch?v=rhqhhpRN4xQ
7/3/2021\tSrimad Bhagavad Gita(2.4-5)-HH Haladhara Swami Maharaj(2/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:10\thttps://www.youtube.com/watch?v=gX-4b9VTTcU
7/4/2021\tSrimad Bhagavad Gita(2.6)-HH Haladhara Swami Maharaj(3/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:09:26\thttps://www.youtube.com/watch?v=CiTLXMkF2O8
7/6/2021\tSrimad Bhagavad Gita(2.6)-HH Haladhara Swami Maharaj(5/7/21)Topic:-Qualification to be a disciple.\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:09:35\thttps://www.youtube.com/watch?v=EboKwtwKZVc
7/7/2021\tSrimad Bhagavad Gita(2.7)-HH Haladhara Swami Maharaj(6/7/21)Topic:-Dealings between Guru & Disciple.\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:24:55\thttps://www.youtube.com/watch?v=-UVWzXSFPks
7/8/2021\tSrimad Bhagavad Gita(2.7-8)HH Haladhar Swami Maharaj(07/07/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:12:51\thttps://www.youtube.com/watch?v=T8GslHwuOoU
7/9/2021\tSrimad Bhagavad Gita(2.8)-HH Haladhara Swami Maharaj(8/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:03:55\thttps://www.youtube.com/watch?v=xvNoa3LKPqI
7/14/2021\tSRIMAD BHAGABAT GITA KATHA KIRTAN  ON 11/7/21 || HH HALADHARA SWĀMI MAHĀRĀJA\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t0:02:12\thttps://www.youtube.com/watch?v=j59XO60Khdg
7/15/2021\tSrimad Bhagavad Gita(2.11)-HH Haladhara Swami Maharaj(14/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:10\thttps://www.youtube.com/watch?v=TBZQTA7b3B8
7/16/2021\tBhagavad Gita(2.11)-HH Haladhara Swami Maharaj(15/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:05:20\thttps://www.youtube.com/watch?v=5me715pNDyU
7/17/2021\tBhagavad Gita(2:12)H H Haladharswami Maharaj(16/07/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:09:09\thttps://www.youtube.com/watch?v=IFL8fmKHGb8
7/18/2021\tBhagavad Gita(2.13)HH Haladhar Swami Maharaj(17/07/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:18:32\thttps://www.youtube.com/watch?v=ps4IXpjIMBk
7/19/2021\tBhagavad Gita (2.14)-HH Haladhara Swami Maharaj (18/7/21) Topic:-Formula 2 increase tolerance power.\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:05:30\thttps://www.youtube.com/watch?v=TTsLRSKyCGo
7/20/2021\tSrimad Bhagavat Gita(2.15)HHHaladhar Swami Maharaj 19/7/2021\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:04:25\thttps://www.youtube.com/watch?v=lyByj76BAqg
7/21/2021\tBhagavad Gita(2.16)-HH Haladhara Swami Maharaj(20/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:50\thttps://www.youtube.com/watch?v=xmXAJ0yU4n8
7/22/2021\tSrimd Bhagavad Gita(2.16-17)-HH Haladhara Swami Maharaj(21/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:13:20\thttps://www.youtube.com/watch?v=LEQ6_qHlwaQ
7/23/2021\tSrimad Bhagavad Gita(2.18-20)-HH Haladhara Swami Maharaj(22/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:05\thttps://www.youtube.com/watch?v=3sSf6TkgT8s
7/26/2021\tBhagavad Gita(2.21)-HH Haladhara Swami Maharaj(25/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:03:20\thttps://www.youtube.com/watch?v=j7pjC8inrOE
7/27/2021\tBhagavad Gita(2.22)HH Haladhar Swami Maharaj(26/07/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:03:49\thttps://www.youtube.com/watch?v=er46uW2KaBE
7/28/2021\tSrimad Bhagavat Gita(2.23)-HH Haladhara Swami maharaj (27/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:05:01\thttps://www.youtube.com/watch?v=CeDEmVSH7hY
7/29/2021\tSrimad Bhagavad Gita(2.24)-HH Haladhara Swami Maharaj(28/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:02:13\thttps://www.youtube.com/watch?v=9NCzehFQyJU
7/30/2021\tBhagavad Gita(2.24)-HH Haladhara Swami Maharaj(29/7/21)Topic- "Atma Tattva" in a simple way\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:11:01\thttps://www.youtube.com/watch?v=H6R-iv4fz1I
7/31/2021\tBhagavad Gita-HH Haladhara Swami Maharaj(30/7/21)Topic:-Obstacles in the path of self realisation\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:15:15\thttps://www.youtube.com/watch?v=giuRDdLmW9o
8/1/2021\tBhagavad Gita(2.26)-HH Haladhara Swami Maharaj(31/7/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:04:21\thttps://www.youtube.com/watch?v=V5ivhPqNjx4
8/3/2021\tSrimad Bhagavad Gita(2.26)-HH Haladhara Swami Maharaj(2/821)Topic-why to read different  commentary\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:09:24\thttps://www.youtube.com/watch?v=7I0Oeizbe9o
8/4/2021\tSrimadBhagavad Gita(2.27)-HH Haladhara Swami Maharaj(3/8/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:06:55\thttps://www.youtube.com/watch?v=FIOsuc98GyI
8/5/2021\tSrimad Bhagavad Gita(2.28)HH Haladhar Swami Maharaj(4/8/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:10\thttps://www.youtube.com/watch?v=dQxyLNkTwiw
8/6/2021\tBhagavad Gita(2.28)-HH Haladhara Swami Maharaj(5/8/21)T-How to get rid of bodily conception of life.\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:10:52\thttps://www.youtube.com/watch?v=oHZjhIZWXk8
8/7/2021\tSrimad Bhagavad-Gita Gita(2.28)HH Haladhara Swami Maharaj(6/8/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:06:35\thttps://www.youtube.com/watch?v=xnEYfsplm48
8/8/2021\tBhagavad Gita(2.29)HH Haladhar Swami Maharaj(07/08/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:03:59\thttps://www.youtube.com/watch?v=V5F6oaGKQsY
8/9/2021\tSrimad Bhagavad Gita(2.30)-HH Haladhara Swami Maharaj(8/7/21)Topic:-Bhakti yoga- Optimistic Path\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:20:39\thttps://www.youtube.com/watch?v=-uloFy6iPGc
8/10/2021\tBhagavad Gita(2.29)-HH Haladhara Swami Maharaj(9/8/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:09:56\thttps://www.youtube.com/watch?v=I6CEocM2rJM
8/11/2021\tBhagavad Gita(2.31)HH Haladhar Swami Maharaj(10/08/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:14:39\thttps://www.youtube.com/watch?v=uUKXWlYz4xY
8/13/2021\tBhagavad Gita (10.16) HH Haladhar swami maharaj (12.08.2021)\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t0:09:38\thttps://www.youtube.com/watch?v=SlzYs6pvB2k
8/14/2021\tBhagavad Gita (10.17) HH Haladhar swami maharaj (13.08.2021)\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t1:15:08\thttps://www.youtube.com/watch?v=Dsclxwxdfvo
8/16/2021\tBHAGAVAT GITA KATHA KIRTAN  ON 14/08/21 ||   HH Haladhara Swāmi Mahārāja\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t1:21:55\thttps://www.youtube.com/watch?v=eGx1Os3N9Jw
8/16/2021\tBhagvad Gita(2.31)-HH Haladhara Swami Maharaj(15/8/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:02:09\thttps://www.youtube.com/watch?v=K8SXTHE1lEQ
8/18/2021\tBhagavad Gita(2.32)HH Haladhar Swami Maharaj(17/08/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:30:01\thttps://www.youtube.com/watch?v=fB0--k3BLpE
8/24/2021\tBhagavad Gita(2.31)-HH Haladhara Swami Maharaj(23/8/31)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:12:21\thttps://www.youtube.com/watch?v=1ZNMu3ubYF4
8/25/2021\tSrimad Bhagavad-Gita (2.32)-HH Haladhara Swami Maharaj (24/8/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:13:17\thttps://www.youtube.com/watch?v=Ul_-Pu_kBJk
8/26/2021\tBhagavad Gita(2.33)-HH Haladhara Swami Maharaj(25/8/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:12:41\thttps://www.youtube.com/watch?v=xyQlK9sT6Hc
8/27/2021\tBhagavad Gita(2.33)-HH Haladhara Swami Maharaj(26/8/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:09:42\thttps://www.youtube.com/watch?v=haRkk5RMqIg
8/28/2021\tBhagavad Gita(2.34)-HH Haladhara Swami Maharaj(27/8/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:03:15\thttps://www.youtube.com/watch?v=Oyn-QRuR6pk
8/29/2021\tSrimad Bhagavad Gita(2.33)-HH Haladhara Swami (28/8/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:27\thttps://www.youtube.com/watch?v=HI482r7oDSs
8/30/2021\tBhagavad Gita(2.35)  ||  HH Haladhara Swami Maharaj (29/08/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:07:42\thttps://www.youtube.com/watch?v=BO-WNongxDk
9/3/2021\tBhagavad Gita(2.35)  ||  HH Haladhara Swāmi Mahārāja (02/09/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:04:29\thttps://www.youtube.com/watch?v=_lIo51BhZB8
9/4/2021\tBhagavad Gita(2.35)-HH Haladhara Swami Maharaj(3/9/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:13:03\thttps://www.youtube.com/watch?v=AZkcmEEqlww
9/5/2021\tBhagavad Gita(2.36)HH Haladhar Swami Maharaj(04/09/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:04:28\thttps://www.youtube.com/watch?v=K6TT-r--3q8
9/6/2021\tBhagavad Gita(2.38)HH Haladhar Swami Maharaj(05/09/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:04:23\thttps://www.youtube.com/watch?v=OEvqlaaH-XA
9/7/2021\tBhagavad Gita(2.39)HH Haladhar Swami Maharaj(06/09/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:05:59\thttps://www.youtube.com/watch?v=gJRl3bGlyZE
9/10/2021\tBhagavad Gita(2.48)-HH Haladhara Swami Maharaj(9/9/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:45:58\thttps://www.youtube.com/watch?v=igpCOLvPRRs
9/11/2021\tBhagavad Gita(2.49)-HH Haladhara Swami Maharaj(10/9/21)Topic-Sadhu -Last mercy of Krsna personified\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:40:40\thttps://www.youtube.com/watch?v=4YI7jLe-Ov8
9/12/2021\tBhagavad Gita(2.39)-HH Haladhara Swami Maharaj(11/09/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:13:06\thttps://www.youtube.com/watch?v=S3tfnv41jZ8
9/13/2021\tSrimad Bhagavad Gita(2.39)-HH Haladhara Swami Maharaj(12/09/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:01:47\thttps://www.youtube.com/watch?v=AAqhMheUHUU
9/16/2021\tBhagavad Gita(2.41)-HH Haladhara Swami Maharaj(15/09/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:03:03\thttps://www.youtube.com/watch?v=qIP93Z-xfJM
9/17/2021\tBhagavad Gita(2.41)-HH Haladhara Swami Maharaj(16/09/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:12:07\thttps://www.youtube.com/watch?v=lVyX_U4VI98
9/18/2021\tBhagavad Gita(2.41)-HH Haladhara Swami Maharaj(17/9/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:13:09\thttps://www.youtube.com/watch?v=DHZcpgreU7U
9/19/2021\tBhagavad Gita(2.41)-HH Haladhara Swami Maharaj(18/9/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:12:35\thttps://www.youtube.com/watch?v=8Y-8VwZH4uA
9/23/2021\tBHAGAVAT GITA (VIBHUTI YOGA) ||  HH  Haladhara Swāmi Mahārāja ||  22/09/21\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t0:06:00\thttps://www.youtube.com/watch?v=trQAPfWinkA
9/24/2021\tBHAGAVAT GITA (VIBHUTI YOGA) ||  HH  Haladhara Swāmi Mahārāja || 23/09/21\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t1:03:15\thttps://www.youtube.com/watch?v=T42xzPftgYo
10/7/2021\tBhagavad Gita(2.41)-HH Haladhara Swami Maharaj(6/10/21)Topic:-Symptoms of Kanistha adhikari\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:14:32\thttps://www.youtube.com/watch?v=0W3dys6JKzs
10/8/2021\tBhagavad Gita(2.42)-HH Haladhara Swami Maharaj(7/10/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:00:59\thttps://www.youtube.com/watch?v=Kqa-e8DG2CQ
10/9/2021\tBhagavad Gita(2.41)HH Haladhar Swami Maharaj(08/10/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:02:47\thttps://www.youtube.com/watch?v=q1LJWTrqFkI
10/10/2021\tBhagavad Gita(2.42)-HH Haladhara Swami Maharaj(9/10/21)Topic:-ଭୋଗୀ ଭକ୍ତ ହୋଇପାରିବ ନାହିଁ l\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:09:53\thttps://www.youtube.com/watch?v=yr8RTywwGFg
10/11/2021\tBhagavad Gita(2.42) || HH Haladhara Swami (10/10/21)Topic-ଗୁରୁ ଙ୍କ ବୁଦ୍ଧି ରେ ଚାଲିଲେ ବୁଦ୍ଧି ସ୍ଥିର ହୁଏ\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:26:24\thttps://www.youtube.com/watch?v=AjBQSMd1rXc
10/12/2021\tSrimad Bhagavat Gita(2.43)  ||  HH Haladhar Swāmi Mahārāja (11/10/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:06:37\thttps://www.youtube.com/watch?v=3BwAV8gcKkE
10/13/2021\tBhagavad Gita(2.44)-HH Haladhara Swami Maharaj(12/10/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:12:59\thttps://www.youtube.com/watch?v=AuGGv1Hm5eE
10/14/2021\tBhagavad Gita(2.44) ||  HH Haladhara Swami Maharaj (13/10/21) Topic:-Reason of  unsteady mind.\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:39:56\thttps://www.youtube.com/watch?v=W3WoyyEdoCU
10/15/2021\tBhagavad Gita (2.45)  || HH Haladhara Swāmi Mahārāja (14/10/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:29:07\thttps://www.youtube.com/watch?v=4QoAha3LStk
10/16/2021\tSrimad Bhagavad Gita (2.44) || HH Haladhara Swāmi Maharaja (15/10/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:38:27\thttps://www.youtube.com/watch?v=JLWKAFApa6g
10/17/2021\tBhagavad Gita (2.44) || HH Haladhara Swami Maharaja (16/10/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:25:59\thttps://www.youtube.com/watch?v=N9G6DofVGVo
10/18/2021\tBhagavad Gita (2.45) || HH Haladhara Swāmi Maharaja (17/10/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:23:55\thttps://www.youtube.com/watch?v=yrC70JJn3gs
10/20/2021\tBhagavad Gita(2.45)-HH Haladhara Swami Maharaj(19/10/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:37:30\thttps://www.youtube.com/watch?v=ML6C488D5Zk
11/1/2021\tGopi Gita\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t0:07:04\thttps://www.youtube.com/watch?v=YCKLoBe8Co0
11/21/2021\tBhagvad Gita(2.46) (Language - Hindi) || HH Haladhara Swami Maharaj (20.11.2021)\tHH Haladhara Swami Maharaj\tHindi\tlive\t\t1:08:14\thttps://www.youtube.com/watch?v=K9trIv2oZVg
11/22/2021\tBhagavad Gita(2.46) (Language - Hindi) ||  HH Haladhara Swami Maharaj (21/11/2021)\tHH Haladhara Swami Maharaj\tHindi\tlive\t\t1:08:30\thttps://www.youtube.com/watch?v=XBsVtdc3ayQ
11/23/2021\tBhagavad Gita(2.46) (Language - Hindi)  ||  HH Haladhara Swami Maharaj (22/11/21)\tHH Haladhara Swami Maharaj\tHindi\tlive\t\t1:06:51\thttps://www.youtube.com/watch?v=3C58t2wpT2k
11/26/2021\tBhagvab Gita(2.46)-HH Haladhara Swami Maharaj(25/11/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:13:49\thttps://www.youtube.com/watch?v=VQQr5HV62yE
11/27/2021\tBhagavad Gita(2.46)HH Haladhar Swami Maharaj(26/11/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:07:15\thttps://www.youtube.com/watch?v=y6xz2YLwdbs
11/28/2021\tBhagavad Gita(2.47)-HH Haladhara Swami Maharaj(27/11/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:13:52\thttps://www.youtube.com/watch?v=9pZCXIlJZgc
11/29/2021\tBhagavad Gita(2.47)-HH Haladhara Swami Maharaj(28/11/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:34\thttps://www.youtube.com/watch?v=iMmHy8vWwtM
11/30/2021\tBhagavad Gita (2.48) HH Haladhar Swami Maharaj(29/11/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:00:54\thttps://www.youtube.com/watch?v=HcKkAZ-pSz8
12/1/2021\tBhagavad Gita(2.49)-HH Haladhara Swami Maharaj(30/11/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:05:39\thttps://www.youtube.com/watch?v=cCm0IUmWAsY
12/4/2021\tBhagavad Gita(2.50)(AUDIO) ||  HH Haladhara Swami Maharaj (02/12/21)\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t0:11:39\thttps://www.youtube.com/watch?v=8NJPyy92dN8
12/4/2021\tBhagavad Gita(2.51)-HH Haladhara Swami Maharaj(3/12/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:24:25\thttps://www.youtube.com/watch?v=9DS-jwfRsKE
12/7/2021\tBhagavad Gita(2.52)-HH Haladhara Swami Maharaj(6/12/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:30:55\thttps://www.youtube.com/watch?v=g9q_sNWxXPo
12/15/2021\tCELEBRATING THE APPEARANCE OF SRIMAD BHAGAVAT GITA\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t2:27:07\thttps://www.youtube.com/watch?v=xAsKFKdPnV0
12/17/2021\tBhagavad Gita(2.53)-HH Haladhara Swami Maharaj(16/12/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:10:01\thttps://www.youtube.com/watch?v=A7Jad3BVq54
12/18/2021\tBhagavad Gita(2.53)-HH Haladhara Swami Maharaj(17/12/21)ବିଷୟ-ନିର୍ଭରତା ହେଲେ ନିଶ୍ଚଳତା ବୁଦ୍ଧି ହେବ।\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:05:46\thttps://www.youtube.com/watch?v=0D4a_JnNZjg
12/19/2021\tBhagavad Gita(2.53)-HH Haladhara Swami Maharaj(18/12/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:05:45\thttps://www.youtube.com/watch?v=jDvWfnSgcGc
12/22/2021\tBhagavad Gita(HINDI)  || HH Haladhara Swami Maharaj (21/12/21)\tHH Haladhara Swami Maharaj\tHindi\tlive\t\t0:12:22\thttps://www.youtube.com/watch?v=FJOpMM8PfNw
12/22/2021\tBhagavadgita(2.55)HH Haladhar swami Maharaj(21/12/2021)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:21:15\thttps://www.youtube.com/watch?v=QxOYXagxNZI
12/30/2021\tBhagavad Gita(2.54-55)-HH Haladhara Swami Maharaj(29/12/21)Topic- 2 qualities of a sthita prajna\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:46\thttps://www.youtube.com/watch?v=PHY_OFphTPY
12/31/2021\tBhagavad Gita(2.55)-HH Haladhara Swami Maharaj(30/12/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:12:51\thttps://www.youtube.com/watch?v=QnEViqxP8gA
1/1/2022\tBhagavad Gita(2.57)HH Haladhar Swami Maharaj(31/12/21)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:07:36\thttps://www.youtube.com/watch?v=TguWEZRMRh8
1/7/2022\tSrimad Bhagavad Gita(2.58)-HH Haladhara Swami Maharaj(6/01/2022)ବିଷୟ-ଆଧ୍ୟାତ୍ମିକ ପ୍ରଗତି ର ମାନଦଣ୍ଡ କଣ?\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t0:10:30\thttps://www.youtube.com/watch?v=bs_ibDkYTcU
1/8/2022\tBhagavad Gita(2.58) HH Haladhar Swami Maharaj(08/01/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:19:08\thttps://www.youtube.com/watch?v=qfg23jrOWqk
1/8/2022\tBhagavad Gita(2.58,59)HH Haladhar Swami Maharaj(07/01/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:04\thttps://www.youtube.com/watch?v=bRP83D3brtg
1/11/2022\tBhagavad Gita(2.60 Hindi)-HH Haladhara Swami Maharaj(10/01/22)\tHH Haladhara Swami Maharaj\tHindi\tlive\t\t0:07:18\thttps://www.youtube.com/watch?v=9m7nyRUHDHw
1/11/2022\tBhagavad Gita(2.60)-HH Haladhara Swami Maharaj(10/01/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:17:33\thttps://www.youtube.com/watch?v=Wo_dcjDTbdg
1/12/2022\tBhagavad Gita(2.60)-HH Haladhara Swami Maharaj(11/01/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:01:45\thttps://www.youtube.com/watch?v=XRRXKKosrWk
1/13/2022\tBhagavad Gita(2.61)-HH Haladhara Swami Maharaj(12/01/2022) Topic- Easy way to control the senses.\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:00:31\thttps://www.youtube.com/watch?v=-b7U0deeHJ0
1/14/2022\tBhagavad Gita(2.61)-HH Haladhara Swami Maharaj(13/01/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:26\thttps://www.youtube.com/watch?v=31oWW0WJjKM
1/15/2022\tBhagavad Gita(2.61)-HH Haladhara Swami Maharaj(14/01/2022)\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t0:23:32\thttps://www.youtube.com/watch?v=ZzUSUbV75ZQ
1/16/2022\tBhagavad Gita(2.61)-HH Haladhara Swami Maharaj(15/1/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:15:28\thttps://www.youtube.com/watch?v=wiy9FOXrTEM
1/18/2022\tBhagavad Gita(2.64)-HH Haladhara Swami Maharaj(17/01/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:03\thttps://www.youtube.com/watch?v=PcgAPe6juV8
1/19/2022\tBhagavad Gita (2.64)-HH Haladhara Swami Maharaj(18/01/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:10:36\thttps://www.youtube.com/watch?v=-jl0y2CRV7c
1/20/2022\tBhagavad Gita(2.65)-HH Haladhara Swami Maharaj(19/1/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:34\thttps://www.youtube.com/watch?v=GpoMARAsWIM
1/21/2022\tBhagavad Gita(2.65)-HH Haladhara Swami Maharaj(20/1/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:14:08\thttps://www.youtube.com/watch?v=gNE3JDI11oo
1/22/2022\tBhagavad Gita(2.66)-HH Haladhara Swami Maharaj(21/01/2022)ବିଷୟ:-ଇନ୍ଦ୍ରିୟ ସଞ୍ଜମ\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:08:01\thttps://www.youtube.com/watch?v=u0XQ2EbQ3Ug
1/22/2022\tBhagavad Gita(2.68)-HH Haladhara Swami Maharaj(22/01/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:20:45\thttps://www.youtube.com/watch?v=QEgXnyrjMic
1/25/2022\tBhagavad Gita(2.69)-HH Haladhara Swami Maharaj(24/01/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:15:30\thttps://www.youtube.com/watch?v=QVt9lnH-gyQ
2/1/2022\tBhagavad Gita(2.70)- HH Haladhara swami Maharaj(31/01/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:26:18\thttps://www.youtube.com/watch?v=5sTQwZ-RxSQ
2/2/2022\tBhagavad Gita(2.71)-HH Haladhara Swami Maharaj(1/2/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:11:23\thttps://www.youtube.com/watch?v=9ewR1NER2iU
2/4/2022\tBhagavad Gita(2.71)-HH Haladhara Swami Maharaj(3/2/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:11:23\thttps://www.youtube.com/watch?v=PtywBckjArw
2/7/2022\tBhagavad Gita(2.72)-HH Haladhara Swami Maharaj(6/2/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:08:40\thttps://www.youtube.com/watch?v=R3FhBotpXOQ
2/8/2022\tBhagavad Gita (3.1)-HH Haladhara Swami Maharaj (7/2/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:00:16\thttps://www.youtube.com/watch?v=3bIWgaDPI4c
2/16/2022\tBhagavad Gita (3.1)(English)HH Haladhar Swami Maharaj(15/02/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:10:01\thttps://www.youtube.com/watch?v=x6-I7Chd7Us
2/18/2022\tBhagavad Gita(3.2) HH Haladhar Swami Maharaj(17/02/2022\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:04:33\thttps://www.youtube.com/watch?v=u9gGjMpkEbM
2/19/2022\tBhagavad Gita(3.3) HH Haladhara Swami Maharaj (18/02/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:16:32\thttps://www.youtube.com/watch?v=Sh5XNSbqCOQ
3/8/2022\tBhagavad Gita(3.3)HH Haladhar Swami Maharaj(07/03/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:10:44\thttps://www.youtube.com/watch?v=MpZE9Vd59HE
3/9/2022\tBhagavad Gita(3.5)HH Haladhar Swami Maharaj(08/03/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:11:41\thttps://www.youtube.com/watch?v=gbM5bzTf80E
3/20/2022\tBhagavad Gita(3.5)HH Haladhar Swami Maharaj(19/03/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:02:44\thttps://www.youtube.com/watch?v=ZPaQt7FoE8E
3/22/2022\tBhagavad Gita(3.7)-HH Haladhara Swami Maharaj(21/03/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:20:50\thttps://www.youtube.com/watch?v=h49dyq2pe2A
3/23/2022\tBhagavad Gita(3.7)-HH Haladhara Swami Maharaj (22/03/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:02:02\thttps://www.youtube.com/watch?v=3TPHFtnwZrk
3/24/2022\tBhagavad Gita (3.8)-HH Haladhara Swami Maharaj (23/03/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:02:33\thttps://www.youtube.com/watch?v=CwhCS6Cdo3c
4/5/2022\tBhagavad Gita(3.8)HH Haladhar Swami Maharaj(04/04/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:23:31\thttps://www.youtube.com/watch?v=GCiWUcYPI40
4/6/2022\tBhagavad Gita (3.9)-HH Haladhara Swami Maharaj (5/4/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:09:45\thttps://www.youtube.com/watch?v=rnmft7BrMpI
4/8/2022\tBhagavad Gita (3.9-10)-HH Haladhara Swami Maharaj (7/4/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:23:29\thttps://www.youtube.com/watch?v=cbZ7_MQCSJw
4/9/2022\tBhagavad Gita (3.10)-HH Haladhara Swami Maharaj (8/4/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:02:09\thttps://www.youtube.com/watch?v=7Sfye3UEWCY
4/12/2022\tBhagavad Gita (3.10)-HH Haladhara Swami Maharaj (11/4/22)Topic-mood of DG worship.Bhojana Vs Bhajan.\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:04:49\thttps://www.youtube.com/watch?v=mBG5nv6mSYM
4/19/2022\tBhagavad Gita(3.10)-HH Haladhara Swami Maharaj (18/4/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:23:59\thttps://www.youtube.com/watch?v=AuU0rM5c480
4/20/2022\tBhagavad Gita (3.11)-HH Haladhara Swami Maharaj (19/4/22) Topic- Importance of honoring mahaprasaad\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:06:36\thttps://www.youtube.com/watch?v=JHzUx3MdlY4
4/21/2022\tBhagavad Gita (3.13-14)-HH Haladhara Swami Maharaj (20/4/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:03:09\thttps://www.youtube.com/watch?v=BAOrbfXU8Kk
4/22/2022\tBhagavad Gita(3.14)HH Haladhar Swami Maharaj (21/04/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:05:13\thttps://www.youtube.com/watch?v=TvA2GnuF0ww
4/23/2022\tBhagavad Gita (3.15)-HH Haladhara Swami Maharaj (22/4/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:10:48\thttps://www.youtube.com/watch?v=fFGXY8MpunA
4/24/2022\tBhagavad Gita (3.15)HH Haladhar Swami Maharaj(23/04/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:09:06\thttps://www.youtube.com/watch?v=ts30NwVfNiw
4/27/2022\tSREEMAD BHAGABAT GITA(3:16)HH HALADHARA SWAMI MAHARAJ\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:11:06\thttps://www.youtube.com/watch?v=MUVmSrI3OKs
4/28/2022\tBhagavad Gita(3.17)HH Haladhar Swami Maharaj(27/04/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:05:30\thttps://www.youtube.com/watch?v=R2CS-AkA6Tg
4/29/2022\tSrimad Bhagavat Gita(3.17)HH  Haladhar Swami Maharaj(28/4/22\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:01:00\thttps://www.youtube.com/watch?v=OVMXTgtBeIE
4/30/2022\tBhagavad Gita(3.17)(English)HH Haladhar Swami Maharaj(29/04/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:04:48\thttps://www.youtube.com/watch?v=-OW3P44uBkA
5/3/2022\tSrimad Bhagavad Gita(3.18)-HH Haldhara Swami Maharaj(2/5/22) Topic- Nature of a self-realized person\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:04:06\thttps://www.youtube.com/watch?v=4yTdgmAi308
5/18/2022\tBhagavad-Gita (3.19)-HH Haladhara Swami Maharaj (17/5/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:09:53\thttps://www.youtube.com/watch?v=94DaTkqF2iU
5/19/2022\tBhagavad Gita (3.20)-HH Haladhara Swami Maharaj (18/5/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:12:59\thttps://www.youtube.com/watch?v=1yV2oVKcDHg
5/20/2022\tBhagavad-Gita (3.20)-HH Haladhara Swami Maharaj (19/5/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:02:27\thttps://www.youtube.com/watch?v=JLrVmwGW7jI
6/12/2022\tBhagavad Gita (3.20)-HH Haladhara Swami Maharaj (11/6/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:01:08\thttps://www.youtube.com/watch?v=5DqQY-Y9rR4
6/13/2022\tBhagavad Gita(3.20)-HH Haladhar Swami Maharaj(13/06/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:11:47\thttps://www.youtube.com/watch?v=i9CvCUthpxk
6/16/2022\tBhagavad Gita (3.21)-HH Haladhara Swami Maharaj (15/06/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:06:03\thttps://www.youtube.com/watch?v=f-OMkel0jaw
6/17/2022\tBhagavad Gita 3.23)HH Haladhar Swami Maharaj(16/06/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:03:07\thttps://www.youtube.com/watch?v=CpibOgc1Tus
6/18/2022\tBhagavad Gita (3.23)-HH Haladhara Swami Maharaj (17/5/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:23\thttps://www.youtube.com/watch?v=eqkneQtjJxA
7/13/2022\tBhagavad Gita 3.24)HH Haladhar Swami Maharaj(12/07/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:20:45\thttps://www.youtube.com/watch?v=QzfTyHlTK_Q
7/15/2022\tBhagavad Gita(3.25)HH Haladhar Swami Maharaj(14/07/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:00:50\thttps://www.youtube.com/watch?v=95JJ1GSdNOY
7/16/2022\tBhagavad Gita(3.25)HH Haladhar Swami Maharaj(15/07/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:23:44\thttps://www.youtube.com/watch?v=DdNALjsWTQM
7/20/2022\tଶ୍ରୀମଦ୍ ଭଗବତ ଗୀତା (୩.୨୮) [] Bhagavad Gita [] ମୌଳିକ ରୂପରେ [] HH Haladhara Swami Maharaja\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:02:50\thttps://www.youtube.com/watch?v=TtIsNhB6jJU
7/21/2022\tଶ୍ରୀମଦ୍ ଭଗବତ ଗୀତା (୩.୨୯)[] Bhagavad Gita [] ମୌଳିକ ରୂପରେ [] HH Haladhara Swami Maharaja\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t0:03:45\thttps://www.youtube.com/watch?v=zdN2VgvU1Bc
7/22/2022\tଶ୍ରୀମଦ୍ ଭଗବତ ଗୀତା (୩.୩୦)[] Bhagavad Gita [] ମୌଳିକ ରୂପରେ [] HH Haladhara Swami Maharaja\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t0:11:18\thttps://www.youtube.com/watch?v=lCUaGkOnXlg
7/23/2022\tଶ୍ରୀମଦ୍ ଭଗବତ ଗୀତା (୩.୩୧)[] Bhagavad Gita [] ମୌଳିକ ରୂପରେ [] HH Haladhara Swami Maharaja\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:05:07\thttps://www.youtube.com/watch?v=IkKTg6WywUo
7/24/2022\tBhagavad Gita(3.32)HH Haladhar Swami Maharaj(23/07/2022)\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:06:28\thttps://www.youtube.com/watch?v=QX-A0Bvo0EE
7/26/2022\tBhagavad Gita 3.33 || HH Haladhara Swami Maharaj\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:00:54\thttps://www.youtube.com/watch?v=Pyrf_9kBJNU
7/27/2022\tBhagavad Gita(3.34)HH Haladhar Swami Maharaj(26/07/2022)\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:05:14\thttps://www.youtube.com/watch?v=WoAu8vjMdIM
8/2/2022\tBhagavad Gita(3.35)HH Haladhar Swami Maharaj (01/08/2022)\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t0:09:35\thttps://www.youtube.com/watch?v=7rWwoulMDxo
8/3/2022\tBhagavad Gita(3.36)-HH Haladhara Swami Maharaj (2/8/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:04:09\thttps://www.youtube.com/watch?v=NY2b5TKSPd8
8/4/2022\tBhagavad Gita (3.37)-HH Haldhara Swami Maharaj (3/8/2022) Topic - How to win over lust\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t0:56:38\thttps://www.youtube.com/watch?v=yJch7OUOEAQ
8/5/2022\tBhagavad Gita (3.38)-HH Haladhara Swami Maharaj (4/8/2022)Topic-Degree of lust\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:00:55\thttps://www.youtube.com/watch?v=FF5avPmzuAw
8/6/2022\tBhagavad Gita (3.39) [] HH Haladhara Swami Maharaj [] 5/8/2022\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:05:38\thttps://www.youtube.com/watch?v=fBqM9kjoGUU
8/7/2022\tSrimad Bhagavat Gita ( 3.40)HH Haladhara Swami Maharaj (06/08/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:01:22\thttps://www.youtube.com/watch?v=_MJbUJhkfko
8/31/2022\tBhagavad Gita(3.42) HH Haladhar Swami Maharaj\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:04:46\thttps://www.youtube.com/watch?v=PCuURk88s-U
8/31/2022\tBhagavad Gita-HH Haladhara Swami Maharaj (30/08/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:03:13\thttps://www.youtube.com/watch?v=iNVFyf4kNvw
9/1/2022\tBhagavad Gita (3.42)-HH Haldhara Swami Maharaj\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:01:42\thttps://www.youtube.com/watch?v=es_j1_X9TmU
9/2/2022\tBhagavad Gita (3.43) HH Haldhar Swami Maharaj (01/09/2022)\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t0:50:40\thttps://www.youtube.com/watch?v=KFC8Tec50Ug
9/16/2022\tBhagvad Gita (4.1)--HH Haladhara Swami Maharaj (15/9/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:20:39\thttps://www.youtube.com/watch?v=gPKAAor8O0g
9/17/2022\tBhagavad Gita (4.1)- HH Haldhar Swami Maharaj (16/09/2022)\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t0:56:30\thttps://www.youtube.com/watch?v=1XBdeZAuQPY
9/28/2022\tBhagavad Gita(4.2)(HH Haladhar Swami Maharaj(27/09/2022)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:43\thttps://www.youtube.com/watch?v=3Asc-tlsw4M
9/29/2022\tBhagavad Gita (4.4)-HH Haladhara Swami Maharaj (28/9/22)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:00:24\thttps://www.youtube.com/watch?v=zQxLSQLEPt4
9/29/2022\tBhagavad Gita (4.5) in Odia - HH Haladhara Swami Maharaja (29/09/2022)\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t0:09:19\thttps://www.youtube.com/watch?v=S0NbV_8FV4c
9/30/2022\tBhagavad Gita (4.6) in Odia - HH Haladhara Swami Maharaja (29/09/2022)\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t0:04:44\thttps://www.youtube.com/watch?v=_fTPh8ezQkY
10/2/2022\tBhagavad Gita (11.23) in Odia - HH Haladhara Swami Maharaja - ISKCON Jajapur - 02/10/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON Jajapur\t1:22:10\thttps://www.youtube.com/watch?v=HYZSwoacPXY
10/2/2022\tBhagavad Gita 4.6 - part 2 - HH Haladhara Swami Maharaj\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:09:45\thttps://www.youtube.com/watch?v=c13KC01BMW8
10/4/2022\tBhagavad Gita (4.7) - HH Haladhara Swami Maharaja (4/10/2022)\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t0:11:28\thttps://www.youtube.com/watch?v=uVhHZ8oQlSE
10/5/2022\tBhagavad Gita (4.8) in Odia - HH Haladhara Swami Maharaja (5/10/2022)\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:05:28\thttps://www.youtube.com/watch?v=OeZPOUipxso
10/7/2022\tBhagavad Gita (4.9) in Odia - HH Haladhara Swami Maharaja (6/10/2022)\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:02:35\thttps://www.youtube.com/watch?v=N0t3616iPLs
10/8/2022\tBhagavad Gita (4.10) | Part-2 | in Odia | HH Haladhara Swami Maharaja (8/10/2022)\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:09:00\thttps://www.youtube.com/watch?v=RsnIOWcPHtA
10/8/2022\tBhagavad Gita (4.10) in Odia - HH Haladhara Swami Maharaja (7/10/2022)\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:19:03\thttps://www.youtube.com/watch?v=cX9-EP0rqvo
10/8/2022\tBhagavad Gita 4.4 in Odia। HH Haladhara Swami Maharaja\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:00:29\thttps://www.youtube.com/watch?v=U_yF_HPX9aw
10/24/2022\tBhagavad-Gita Recitation | 13th Chapter | HH Haladhara Swāmī Mahāraja\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t0:06:09\thttps://www.youtube.com/watch?v=oQYMmpmhBYk
11/17/2022\tBhagavad Gita 4.11 | Odia | HH Haladhara Swami Maharaja | 17/11/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t0:10:31\thttps://www.youtube.com/watch?v=93FLOND2r4U
11/19/2022\tBhagavad Gita 4.12 | Odia | HH Haladhara Swami Maharaja | 18/11/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:05:23\thttps://www.youtube.com/watch?v=yovPx8n8S30
11/20/2022\tBhagavad Gita 4.13 | Odia | HH Haladhara Swami Maharaja | 19/11/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:16:14\thttps://www.youtube.com/watch?v=fs7kc2pSy80
11/21/2022\tBhagavad Gita 4.14 | Odia | HH Haladhara Swami Maharaja | 20/11/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t0:10:53\thttps://www.youtube.com/watch?v=o8qZXaFEKaw
11/22/2022\tBhagavad Gita 4.15 | Odia | HH Haladhara Swami Maharaja | 21/11/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t0:10:50\thttps://www.youtube.com/watch?v=CiIrDcsgCNE
12/6/2022\tBhagavad Gita 4.16 | Odia | HH Haladhara Swami Maharaja | 5/12/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:04:56\thttps://www.youtube.com/watch?v=7mJpYzCM_Vk
12/9/2022\tBhagavad Gita 4.17 | Odia | HH Haladhara Swami Maharaja | 8/12/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:07:11\thttps://www.youtube.com/watch?v=hlFzal0pwOg
12/18/2022\tBhagavad Gita 4.18 | Odia | HH Haladhara Swami Maharaja | 18/12/2022\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:23:04\thttps://www.youtube.com/watch?v=dwqvs1pocr0
12/20/2022\tBhagavad Gita 4.20 | Odia | HH Haladhara Swami Maharaja | 19/12/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t0:05:58\thttps://www.youtube.com/watch?v=kLSZWxlmny8
12/20/2022\tBhagavad Gita 4.21 | Odia | HH Haladhara Swami Maharaja | 20/12/2022\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t0:59:37\thttps://www.youtube.com/watch?v=uSCAWJrHL9I
12/22/2022\tBhagavad Gita 4.22 | Odia | HH Haladhara Swami Maharaja | 21/12/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:05:34\thttps://www.youtube.com/watch?v=kZcDlCqBvqA
12/22/2022\tBhagavad Gita 4.23 | Odia | HH Haladhara Swami Maharaja | 22/12/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:07:22\thttps://www.youtube.com/watch?v=KwwlHXpaXh4
12/24/2022\tBhagavad Gita 4.24 | Odia | HH Haladhara Swami Maharaja | 23/12/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t0:10:56\thttps://www.youtube.com/watch?v=Qpxw-5uGqqg
12/24/2022\tBhagavad Gita 4.25 | Odia | HH Haladhara Swami Maharaja |\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:10:21\thttps://www.youtube.com/watch?v=ABRRNuRd1aM
12/28/2022\tBhagavad Gita 4.26 | Odia | HH Haladhara Swami Maharaja |\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:08:46\thttps://www.youtube.com/watch?v=qhN20FPm3Dg
12/29/2022\tBhagavad Gita 4.27 | Odia | HH Haladhara Swami Maharaja |\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:12:24\thttps://www.youtube.com/watch?v=bpq6ABfumWA
12/31/2022\tBhagavad Gita 4.28 | Odia | HH Haladhara Swami Maharaja | 30/12/2022\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:05:49\thttps://www.youtube.com/watch?v=bn2vN99yYU4
1/2/2023\tBhagavad Gita 4.29 | Odia | HH Haladhara Swami Maharaja |\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:22:52\thttps://www.youtube.com/watch?v=P6ouycV_PHw
1/4/2023\tBhagavad Gita 4.29\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:21:32\thttps://www.youtube.com/watch?v=J_Fm51ON2p4
1/4/2023\tBhagavad Gita 4.30 | Odia | HH Haladhara Swami Maharaja |\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:00:56\thttps://www.youtube.com/watch?v=HGtX-6s_n0g
1/8/2023\tBhagavad Gita 4.32 | Odia | HH Haladhara Swami Maharaja |\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:19:47\thttps://www.youtube.com/watch?v=pY4t31FOAMk
1/22/2023\tBhagavad Gita 4.19 | Odia | HH Haladhara Swami Maharaja | 03/01/2023\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:10:21\thttps://www.youtube.com/watch?v=EbyqkmGTb_E
1/22/2023\tBhagavad Gita 4.34 | Odia | HH Haladhara Swami Maharaja | 21/01/2023\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:11:58\thttps://www.youtube.com/watch?v=ZzJ4SWhk1CE
1/23/2023\tBhagavad Gita 4.35 | Odia | 22/01/2023\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:04:58\thttps://www.youtube.com/watch?v=T8v_cEWUw3M
1/24/2023\tBhagavad Gita 4.36 | Odia | HH Haladhara Swami Maharaja | 23/01/2023\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t0:10:36\thttps://www.youtube.com/watch?v=Z2F1SLrMZho
3/3/2023\tBhagavad Gita Recitation | 9th Chapter | HH Hladhara Swami Maharaj\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t0:06:20\thttps://www.youtube.com/watch?v=rxWWGNgJ2D0
4/5/2023\tBhagavad Gita | 4.37 | HH Haladhara Swami Maharaja | 3/3/2023\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t0:06:11\thttps://www.youtube.com/watch?v=LqHHxXeGRXc
5/19/2023\tBhagavad Gita 4.38 | Hindi | HH Haladhara Swami Maharaj | ISKCON Pattamundai | 18/05/2023\tHH Haladhara Swami Maharaj\tHindi\tstandard\tISKCON PATTAMUNDAI\t1:08:11\thttps://www.youtube.com/watch?v=wSmEM4BsgtM
5/19/2023\tBhagavad Gita 4.39 | Hindi | HH Haladhara Swami Maharaj | ISKCON Pattamundai | 19/05/2023\tHH Haladhara Swami Maharaj\tHindi\tstandard\tISKCON PATTAMUNDAI\t1:06:32\thttps://www.youtube.com/watch?v=g7KO2jYl81Y
6/7/2023\tBhagavad Gita | 4.40 | HH Haladhara Swami Maharaja | 7/6/2023\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:20:25\thttps://www.youtube.com/watch?v=4ImiEYO3Hdg
6/24/2023\tBhagavad Gita | 4.41 | HH Haladhara Swami Maharaja | 22/6/2023\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t0:11:20\thttps://www.youtube.com/watch?v=81I6oOCct3U
6/24/2023\tBhagavad Gita | 4.42 | HH Haladhara Swami Maharaja | 23/6/2023\tHH Haladhara Swami Maharaj\tEnglish\tstandard\t\t1:05:34\thttps://www.youtube.com/watch?v=FVSysdt8znQ
6/25/2023\tBhagavad Gita | 5.1-2 | ଓଡ଼ିଆ | HH Haladhara Swami Maharaja | 23/6/2023\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:03:18\thttps://www.youtube.com/watch?v=XkpAjnUJITg
6/26/2023\tBhagavad Gita | 5.3 | ଓଡ଼ିଆ | HH Haladhara Swami Maharaja | 25/6/2023\tHH Haladhara Swami Maharaj\tOdia\tstandard\t\t1:02:39\thttps://www.youtube.com/watch?v=QUucrQN_Fd8
6/30/2023\tBhagavad Gita | 5.5 | हिंदी | ISKCON Pattamundai | 27/06/23\tHH Haladhara Swami Maharaj\tHindi\tstandard\tISKCON PATTAMUNDAI\t0:52:20\thttps://www.youtube.com/watch?v=HQuuUGI_zoE
7/28/2023\tBhagavad Gita | 5.6 | ISKCON Pattamundai | 27/07/23\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON PATTAMUNDAI\t0:58:51\thttps://www.youtube.com/watch?v=1wQHI_otHos
8/5/2023\tBhagavad Gita | 5.7 | Odia | ISKCON Pattamundai | 05/08/23\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON PATTAMUNDAI\t0:51:24\thttps://www.youtube.com/watch?v=kQ7jKR2Kwy8
8/7/2023\tBhagavad Gita | 5.8-9 | Odia | ISKCON Pattamundai | 06/08/23\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON PATTAMUNDAI\t0:55:18\thttps://www.youtube.com/watch?v=tPYP9ut6lbg
8/8/2023\tBhagavad Gita | 5.10 | Odia | ISKCON Pattamundai | 07/08/23\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON PATTAMUNDAI\t0:58:10\thttps://www.youtube.com/watch?v=K60h0wnBbbg
8/9/2023\tBhagavad Gita | 5.10 | Part 2 | Odia | ISKCON Pattamundai | 08/08/23\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON PATTAMUNDAI\t0:59:52\thttps://www.youtube.com/watch?v=dgLHjBxgJd4
8/11/2023\tBhagavad Gita | 5.10 | Part 3 | Odia | ISKCON Pattamundai | 09/08/23\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON PATTAMUNDAI\t1:13:15\thttps://www.youtube.com/watch?v=GAbjC4NAgnY
8/11/2023\tBhagavad Gita | 5.11 | Odia | ISKCON Pattamundai | 10/08/23\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON PATTAMUNDAI\t1:05:21\thttps://www.youtube.com/watch?v=M_dcqRvhDFo
8/11/2023\tBhagavad Gita | 5.12 | ISKCON Pattamundai | 11/08/23\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON PATTAMUNDAI\t1:01:31\thttps://www.youtube.com/watch?v=h6BH36hfkmw
8/19/2023\tBhagavad Gita 5.13 | Odia\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t0:59:16\thttps://www.youtube.com/watch?v=bY7KtZqUVNo
8/20/2023\tBhagavad Gita | 5.13 | Odia\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:01:34\thttps://www.youtube.com/watch?v=uCp4Tgre2k8
10/7/2023\tBhagavad Gita | 5.14 | ISKCON Pattamundai | 07.10.23\tHH Haladhara Swami Maharaj\tOdia\tlive\tISKCON PATTAMUNDAI\t1:05:42\thttps://www.youtube.com/watch?v=W4tHmXKpHD4
10/20/2023\tBhagavad Gita | 5.14 | ISKCON Pattamundai | 18.10.23\tHH Haladhara Swami Maharaj\tEnglish\tlive\tISKCON PATTAMUNDAI\t0:01:55\thttps://www.youtube.com/watch?v=Wx6Rm161eyM
10/21/2023\tBhagavad Gita | 5.18 | ISKCON Pattamundai | 20.10.23\tHH Haladhara Swami Maharaj\tEnglish\tlive\tISKCON PATTAMUNDAI\t0:58:18\thttps://www.youtube.com/watch?v=I4-2lzIog_M
12/6/2023\tBhagavad Gita Sammilani - 2023 | Puri | 02/12/23\tHH Haladhara Swami Maharaj\tOdia\tstandard\tPuri\t0:52:14\thttps://www.youtube.com/watch?v=7Uh6cWN85JM
12/12/2023\tBhagavad Gita 5.18 | Odia | ISKCON Pattamundai\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON PATTAMUNDAI\t0:58:18\thttps://www.youtube.com/watch?v=AHCGEA7Jr6c
12/12/2023\tBhagavad Gita 5.19 | Odia | ISKCON Bhubaneswar | 11/12/2023\tHH Haladhara Swami Maharaj\tOdia\tstandard\tISKCON Bhubaneswar\t1:08:06\thttps://www.youtube.com/watch?v=Q8xrG4MKokE
12/15/2023\tBhagavad Gita 5.21(Odia) HH Haladhar Swami Maharaj  ISKCON Pattamundai 14/12/23\tHH Haladhara Swami Maharaj\tOdia\tlive\tISKCON PATTAMUNDAI\t1:31:41\thttps://www.youtube.com/watch?v=Og9Q7SIZnPY
12/16/2023\tCause of unhappiness- Srimad Bhagavad Gita 5.22 (15/12/23)\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:34:21\thttps://www.youtube.com/watch?v=Jqv8ZILJg0Y
12/29/2023\tSrimad Bhagvd Gita 5.23(28/12/23)\tHH Haladhara Swami Maharaj\tOdia\tlive\t\t1:07:55\thttps://www.youtube.com/watch?v=lCoAg3Qidvw
12/30/2023\tSrimad Bhagavad Gita 5.24  29/12/2023              HH Haladhar Swami Maharaj\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:02\thttps://www.youtube.com/watch?v=ZY3T6MWflGw
12/31/2023\tSrimad Bhagavad Gita 5.25 | 30/12/3023  HH Haladhar Swami Maharaj\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:06:25\thttps://www.youtube.com/watch?v=dD-wYKtRpUI
2/4/2024\tBhagavad Gita 5.27 HH Haladhar Swami Maharahaj 03/02/2024\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:34\thttps://www.youtube.com/watch?v=D3HnMapVYa8
4/23/2024\tHH Haladhara Swami Maharaj, Bhagbat Gita 5.29 (22/04/24)\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t0:02:51\thttps://www.youtube.com/watch?v=EXn1-E1gWWk
5/15/2024\tBhagavad gita 6.2 HH Haladhara Swami Maharaj 14/05/2024\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:27:20\thttps://www.youtube.com/watch?v=G_DpZQBOiFs
5/16/2024\tBhagavad gita 6.3 (Odia) HH Haladhara Swami Maharaj 15/05/2/2024 Iskcon Pattamundai\tHH Haladhara Swami Maharaj\tOdia\tlive\tISKCON PATTAMUNDAI\t1:22:20\thttps://www.youtube.com/watch?v=ZsCqklCCffk
5/17/2024\tBhagavad Gita 6.4 (Odia) HH Haladhar Swami Maharaj 16/05/2024 Iskcon Pattamundai\tHH Haladhara Swami Maharaj\tOdia\tlive\tISKCON PATTAMUNDAI\t1:29:29\thttps://www.youtube.com/watch?v=dcnSwIr0i1U
6/12/2024\tSrimad Bhagavad Gita 6.6 HH Haladhara Swami Maharahaj 11/06/2024 Iskcon Pattamundai\tHH Haladhara Swami Maharaj\tEnglish\tlive\tISKCON PATTAMUNDAI\t1:10:00\thttps://www.youtube.com/watch?v=ywFmEbcq-mQ
6/30/2024\tSrimad Bhagavad Gita 6.9-HH Haladhara Swami Maharaj\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:08:06\thttps://www.youtube.com/watch?v=lrrEKOs4KRA
7/1/2024\tSrimad Bhagavad Gita 6.10 (Odia) HH Haladhara Swami Maharaj 30/06/2024 ISKCON Pattamundai\tHH Haladhara Swami Maharaj\tOdia\tlive\tISKCON PATTAMUNDAI\t1:05:47\thttps://www.youtube.com/watch?v=C4LdDFE5Dns
7/2/2024\tSrimad Bhagavad Gita 6.11HH Haladhara Swami Maharaj 01/07/2024 ISKCON Pattamundai\tHH Haladhara Swami Maharaj\tEnglish\tlive\tISKCON PATTAMUNDAI\t1:00:20\thttps://www.youtube.com/watch?v=0G2WQlqA7jM
10/3/2024\tSrimad Bhagavad Gita 6.13-14 ll HH Haladhar Swami Maharaj ll 02/10/2024 ll ISKCON PATTAMUNDAI\tHH Haladhara Swami Maharaj\tEnglish\tlive\tISKCON PATTAMUNDAI\t1:16:15\thttps://www.youtube.com/watch?v=IqJMw2r_HBI
10/4/2024\tSrimad Bhagavad Gita 6.15-HH Haladhar Swami Maharaj\tHH Haladhara Swami Maharaj\tEnglish\tlive\t\t1:07:45\thttps://www.youtube.com/watch?v=QpW43niGivQ
10/11/2024\tSrimad Bhagavad Gita 6.16 HH  Haladhara Swami Maharaj 10/10/2024 Iskcon Pattamundai\tHH Haladhara Swami Maharaj\tEnglish\tlive\tISKCON PATTAMUNDAI\t1:08:56\thttps://www.youtube.com/watch?v=NBH3_kqToSY
10/12/2024\tSrimad Bhagavad Gita 6.18 ll HH Haladhara Swami Maharaj ll ISKCON PATTAMUNDAI\tHH Haladhara Swami Maharaj\tEnglish\tlive\tISKCON PATTAMUNDAI\t1:29:20\thttps://www.youtube.com/watch?v=aixvCQpxS64
10/13/2024\tSrimad Bhagavad gita 6.18 HH Haladhara Swami Maharaj 12/10/2024 Iskcon Pattamundai\tHH Haladhara Swami Maharaj\tEnglish\tlive\tISKCON PATTAMUNDAI\t0:07:40\thttps://www.youtube.com/watch?v=bV2OvJSOV_Y
11/2/2024\tSrimad Bhagavad Gita 6.19 HH Haladhara Swami Maharaj 01/11/2024 Iskcon Pattamundai\tHH Haladhara Swami Maharaj\tEnglish\tlive\tISKCON PATTAMUNDAI\t0:02:51\thttps://www.youtube.com/watch?v=hXU_y_LxYYA
12/19/2024\tSrimad Bhagavad Gita 6.20-23 | HH Haladhara Swami Maharaj | ISKCON Pattamundai | 18/12/2024\tHH Haladhara Swami Maharaj\tEnglish\tlive\tISKCON PATTAMUNDAI\t1:08:12\thttps://www.youtube.com/watch?v=8pP2LpJTzMY`;

const bhagavadGitaHaladharaSwamiVideos = parseTsvVideoRows(bhagavadGitaHaladharaSwamiRaw);

export const videoData = [
  {
    id: 1,
    playlistName: "Stages of Bhakti (Shraddha-Prema)",
    category: ["Bhakti-rasamrta-sindhu","Chaitanya-Charitamrita"],
    description: "A comprehensive series exploring the progressive stages of devotional service from initial faith to pure love",
    language: "Hindi",
    location: "ISKCON Dwarka",
    icon: "/icons/shraddha-prema-icon.jpg",
    thumbnail: "https://img.youtube.com/vi/xxKdp4pcS94/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Stages of Bhakti Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=xxKdp4pcS94",
        duration: "N/A",
        description: "Introduction to the stages of devotional service"
      },
      {
        id: 102,
        title: "Stages of Bhakti Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=-o1KJfBzxRg",
        duration: "N/A",
        description: "Continuing the exploration of devotional stages"
      },
      {
        id: 103,
        title: "Stages of Bhakti Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=jQPzu6U7ACU",
        duration: "N/A",
        description: "Deeper understanding of spiritual progression"
      },
      {
        id: 104,
        title: "Stages of Bhakti Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=qXeZh3eJnGg",
        duration: "N/A",
        description: "Further stages in the path of devotion"
      },
      {
        id: 105,
        title: "Stages of Bhakti Part 5",
        youtubeUrl: "https://www.youtube.com/watch?v=peZUerT1uew",
        duration: "N/A",
        description: "Advanced topics in devotional service"
      },
      {
        id: 106,
        title: "Stages of Bhakti Part 6",
        youtubeUrl: "https://www.youtube.com/watch?v=CiAW01kRm2I",
        duration: "N/A",
        description: "Continuing the journey through bhakti stages"
      },
      {
        id: 107,
        title: "Stages of Bhakti Part 7",
        youtubeUrl: "https://www.youtube.com/watch?v=QpELAY-HSM4",
        duration: "N/A",
        description: "Approaching the higher stages of devotion"
      },
      {
        id: 108,
        title: "Stages of Bhakti Part 8",
        youtubeUrl: "https://www.youtube.com/watch?v=B5M8A4djAEk",
        duration: "1:52:28",
        description: "Conclusion of the stages of devotional service"
      }
    ]
  },
  {
    id: 2,
    playlistName: "Teachings of Lord Chaitanya",
    category: ["Chaitanya Charitamrita"],
    description: "",
    language: "Hindi",
    location: "Iskcon Bhopal BYC",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/e4rkQodDUOM/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Teachings of Lord Chaitanya Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=e4rkQodDUOM",
        duration: "1:46:30",
        description: "Lecture at Iskcon Bhopal BYC"
      },
      {
        id: 102,
        title: "Teachings of Lord Chaitanya Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=POVomU5LY2Y",
        duration: "1:05:24",
        description: "Lecture at Iskcon Bhopal BYC"
      },
      {
        id: 103,
        title: "Teachings of Lord Chaitanya Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=nZUt2GKDWW4",
        duration: "1:45:36",
        description: "Lecture at Iskcon Bhopal BYC"
      },
      {
        id: 104,
        title: "Teachings of Lord Chaitanya Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=ByVW_gPPx5I",
        duration: "1:27:34",
        description: "Lecture at Iskcon Bhopal BYC"
      }
    ]
  },
  {
    id: 3,
    playlistName: "Brahma Vimohan Lila",
    description: "",
    category: ["Srimad Bhagavatam"],
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/zsE06DuWsFw/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Brahma Vimohan Lila Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=zsE06DuWsFw",
        duration: "1:54:15",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 102,
        title: "Brahma Vimohan Lila Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=6PD711zEUGI",
        duration: "2:00:27",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 103,
        title: "Brahma Vimohan Lila Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=lHpbgFxXZ8Y",
        duration: "2:18:00",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 104,
        title: "Brahma Vimohan Lila Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=eUOUktK4qLk",
        duration: "2:19:00",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 105,
        title: "Brahma Vimohan Lila Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=UZUGzTfY_x4",
        duration: "2:05:00",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 106,
        title: "Brahma Vimohan Lila Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=N83ASuZUVbM",
        duration: "2:09:00",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 107,
        title: "Brahma Vimohan Lila Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=PLlZcns8s4c",
        duration: "1:43:00",
        description: "Lecture at ISKCON Bhubaneswar"
      }
    ]
  },
  {
    id: 4,
    playlistName: "Aghasura Lila",
    description: "",
    category: ["Srimad Bhagavatam"],
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/_djrhswvSPo/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Aghasura Lila Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=_djrhswvSPo",
        duration: "1:27:12",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 102,
        title: "Aghasura Lila Day 2 Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=QsZ3pNl484c",
        duration: "1:21:21",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 103,
        title: "Aghasura Lila Day 2 Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=ZALI4wpgp1I",
        duration: "0:21:11",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 104,
        title: "Aghasura Lila Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=PecPX-nntVE",
        duration: "1:58:00",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 105,
        title: "Aghasura Lila Day 4 Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=gLjdPS-dmwo",
        duration: "1:56:00",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 106,
        title: "Aghasura Lila Day 4 Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=HfVPi5da3go",
        duration: "0:16:00",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 107,
        title: "Aghasura Lila Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=B5RS-rD0B9o",
        duration: "1:45:52",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 108,
        title: "Aghasura Lila Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=vSMzPwT-CNM",
        duration: "1:46:00",
        description: "Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 109,
        title: "Aghasura Lila Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=_A84wT_rdic",
        duration: "2:12:00",
        description: "Lecture at ISKCON Bhubaneswar"
      }
    ]
  },
  {
    id: 5,
    playlistName: "Sanatana Goswami",
    category: ["Chaitanya Charitamrita"],
    language: "Hindi",
    location: "ISKCON Ravet Sri Govind Dham",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/5YpY_cB3BJo/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Sanatana Goswami Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=5YpY_cB3BJo",
        duration: "1:02:56",
        description: "27/06/2018 • Lecture at ISKCON Ravet Sri Govind Dham"
      },
      {
        id: 102,
        title: "Sanatana Goswami Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=f5hKMGF5W3g",
        duration: "1:22:03",
        description: "28/06/2018 • Lecture at ISKCON Ravet Sri Govind Dham"
      },
      {
        id: 103,
        title: "Sanatana Goswami Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=Wegjo6lHzus",
        duration: "1:27:55",
        description: "29/06/2018 • Lecture at ISKCON Ravet Sri Govind Dham"
      }
    ]
  },
  {
    id: 6,
    playlistName: "Avadhut Yadu Samvaad",
    category: ["Srimad Bhagavatam"],
    description: "",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/zYcQqtgQm8g/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Avadhut Yadu Samvaad Day-1",
        youtubeUrl: "https://www.youtube.com/watch?v=zYcQqtgQm8g",
        duration: "1:52:10",
        description: "03/03/2018 • Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 102,
        title: "Avadhut Yadu Samvaad Day-2",
        youtubeUrl: "https://www.youtube.com/watch?v=m1wvgbDSP6U",
        duration: "2:06:16",
        description: "04/03/2018 • Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 103,
        title: "Avadhut Yadu Samvaad Day-3",
        youtubeUrl: "https://www.youtube.com/watch?v=IneB14XkoFM",
        duration: "2:25:46",
        description: "05/03/2018 • Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 104,
        title: "Avadhut Yadu Samvaad Day-4",
        youtubeUrl: "https://www.youtube.com/watch?v=47CahGrHmcY",
        duration: "2:16:00",
        description: "06/03/2018 • Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 105,
        title: "Avadhut Yadu Samvaad Day-5",
        youtubeUrl: "https://www.youtube.com/watch?v=lF3hUmCGxuM",
        duration: "2:07:00",
        description: "07/03/2018 • Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 106,
        title: "Avadhut Yadu Samvaad Day-6",
        youtubeUrl: "https://www.youtube.com/watch?v=l6Zvh_o6UE0",
        duration: "2:22:00",
        description: "08/03/2018 • Lecture at ISKCON Bhubaneswar"
      },
      {
        id: 107,
        title: "Avadhut Yadu Samvaad Day-7",
        youtubeUrl: "https://www.youtube.com/watch?v=sBJyGWwh3uc",
        duration: "2:18:00",
        description: "09/03/2018 • Lecture at ISKCON Bhubaneswar"
      }
    ]
  },
  {
    id: 7,
    playlistName: "24 Gurus",
    category: ["Srimad Bhagavatam"],
    description: "Bali Tour lecture series at Sri Sri Radha Rasesvara Ashram",
    language: "English",
    location: "Sri Sri Radha Rasesvara Ashram, Bali",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/24Dmgs-tbfI/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "24 Gurus, Day - 1",
        youtubeUrl: "https://www.youtube.com/watch?v=24Dmgs-tbfI",
        duration: "1:49:52",
        description: "25/09/2018 • Sri Sri Radha Rasesvara Ashram • Bali Tour"
      },
      {
        id: 102,
        title: "24 Gurus, Day - 2",
        youtubeUrl: "https://www.youtube.com/watch?v=yIOnOHPc6o0",
        duration: "2:09:19",
        description: "26/09/2018 • Sri Sri Radha Rasesvara Ashram • Bali Tour"
      },
      {
        id: 103,
        title: "24 Gurus, Day - 3",
        youtubeUrl: "https://www.youtube.com/watch?v=2lAsZmYSYII",
        duration: "2:02:31",
        description: "27/09/2018 • Sri Sri Radha Rasesvara Ashram • Bali Tour"
      },
      {
        id: 104,
        title: "24 Gurus, Day - 4",
        youtubeUrl: "https://www.youtube.com/watch?v=hghg2MaoDqM",
        duration: "2:22:37",
        description: "28/09/2018 • Sri Sri Radha Rasesvara Ashram • Bali Tour"
      }
    ]
  },
  {
    id: 8,
    playlistName: "Ajamila Charitra",
    category: ["Srimad Bhagavatam"],
    description: "Lecture series at ISKCON Phulbani",
    language: "Odia",
    location: "ISKCON PHULBANI",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/pnh02nLURQ4/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Ajamila Charitra Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=pnh02nLURQ4",
        duration: "1:40:02",
        description: "04/02/2023 • Lecture at ISKCON Phulbani"
      },
      {
        id: 102,
        title: "Ajamila Charitra Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=J4UT78zhVV4",
        duration: "2:04:28",
        description: "05/02/2023 • Lecture at ISKCON Phulbani"
      },
      {
        id: 103,
        title: "Ajamila Charitra Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=MTI-LLi-w1Y",
        duration: "1:57:43",
        description: "06/02/2023 • Lecture at ISKCON Phulbani"
      },
      {
        id: 104,
        title: "Ajamila Charitra Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=hhIwCE1jUpw",
        duration: "2:20:29",
        description: "07/02/2023 • Lecture at ISKCON Phulbani"
      },
      {
        id: 105,
        title: "Ajamila Charitra Part 5",
        youtubeUrl: "https://www.youtube.com/watch?v=bOcAPwK9N1M",
        duration: "2:19:45",
        description: "08/02/2023 • Lecture at ISKCON Phulbani"
      },
      {
        id: 106,
        title: "Ajamila Charitra Part 6",
        youtubeUrl: "https://www.youtube.com/watch?v=UQ7ShaY7kIs",
        duration: "2:06:37",
        description: "07/02/2023 • Lecture at ISKCON Phulbani"
      },
      {
        id: 107,
        title: "Ajamila Charitra Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=iQcKrQPcTr4",
        duration: "1:54:40",
        description: "10/02/2023 • Lecture at ISKCON Phulbani"
      }
    ]
  },
  {
    id: 9,
    playlistName: "Aparādha (ଅପରାଧ)",
    category: ["Chaitanya Charitamrita","Chaitanya Bhagavat"],
    description: "Lecture series on Aparādha (offenses)",
    language: "Odia",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/dVX6H2PNjiU/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Aparādha Day- 1",
        youtubeUrl: "https://www.youtube.com/watch?v=dVX6H2PNjiU",
        duration: "1:15:08",
        description: "24/07/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Aparādha Day- 2",
        youtubeUrl: "https://www.youtube.com/watch?v=pg03YmWT7M0",
        duration: "1:46:10",
        description: "25/07/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Aparādha Day- 3",
        youtubeUrl: "https://www.youtube.com/watch?v=P5eygDY70ec",
        duration: "1:40:41",
        description: "26/07/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Aparādha Day- 4",
        youtubeUrl: "https://www.youtube.com/watch?v=Z4-r0iRsvt4",
        duration: "1:38:20",
        description: "30/07/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Aparādha Day- 5",
        youtubeUrl: "https://www.youtube.com/watch?v=futcBa0UpBI",
        duration: "1:33:32",
        description: "31/07/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Aparādha Day- 6",
        youtubeUrl: "https://www.youtube.com/watch?v=qhvG3FGYRT0",
        duration: "1:44:16",
        description: "01/08/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "Aparādha Day- 7",
        youtubeUrl: "https://www.youtube.com/watch?v=E2rZayQ9AeU",
        duration: "1:36:39",
        description: "02/08/2023 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 10,
    playlistName: "Āśrayā (ଆଶ୍ରୟ)",
    category: ["Chaitanya Charitamrita", "Chaitanya Bhagavat"],
    description: "Lecture series on Āśrayā (shelter)",
    language: "Odia",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/iKIniOlNasY/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Āśrayā Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=iKIniOlNasY",
        duration: "2:00:00",
        description: "20/07/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Āśrayā Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=snRXlrmWL8o",
        duration: "2:19:05",
        description: "21/07/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Āśrayā Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=8NCkBR2pmHk",
        duration: "2:43:03",
        description: "22/07/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Āśrayā Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=4aTWik4M8i0",
        duration: "2:46:31",
        description: "23/07/2023 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 11,
    playlistName: "Saranāgati",
    category: ["Other"],
    description: "Rotterdam, The Netherlands • July 2019",
    language: "Hindi",
    location: "Rotterdam, The Netherlands",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/2--tygygY1A/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Saranāgati Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=2--tygygY1A",
        duration: "1:23:02",
        description: "31/07/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Saranāgati Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=b9GLrPjBOZc",
        duration: "0:15:29",
        description: "31/07/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Saranāgati Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=BUDddmLeSOU",
        duration: "0:03:46",
        description: "31/07/2019 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 12,
    playlistName: "Aila Gita",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Punjabi Bagh • Jan 2019",
    language: "Hindi",
    location: "ISKCON Punjabi Bagh",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/WTzZomJJZEM/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Aila Gita - 1",
        youtubeUrl: "https://www.youtube.com/watch?v=WTzZomJJZEM",
        duration: "1:30:44",
        description: "25/01/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Aila Gita - 2",
        youtubeUrl: "https://www.youtube.com/watch?v=oD8VKEJ2a1I",
        duration: "9:40:37",
        description: "25/01/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Aila Gita - 3",
        youtubeUrl: "https://www.youtube.com/watch?v=nH6OB6J30-E",
        duration: "2:14:20",
        description: "26/01/2019 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 13,
    playlistName: "Bali Maharaj Charitra",
    category: ["Srimad Bhagavatam"],
    description: "Lecture series on Bali Maharaj (Apr 2019)",
    language: "Odia",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/4WQ1fGN9FBc/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Bali Maharaj Charitra Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=4WQ1fGN9FBc",
        duration: "1:23:26",
        description: "21/04/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Bali Maharaj Charitra Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=23DQGchZxeA",
        duration: "1:54:20",
        description: "22/04/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Bali Maharaj Charitra Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=cY6MmzByOj0",
        duration: "2:08:24",
        description: "23/04/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Bali Maharaj Charitra Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=ZAf2CaGTH9M",
        duration: "2:16:24",
        description: "24/04/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Bali Maharaj Charitra Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=-kL6BL07kME",
        duration: "2:18:55",
        description: "25/04/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Bali Maharaj Charitra Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=NygnDkMtbpM",
        duration: "2:16:54",
        description: "26/04/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "Bali Maharaj Charitra Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=xt4-DCYd9ss",
        duration: "2:03:28",
        description: "27/04/2019 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 14,
    playlistName: "Bali Mahārāja Charita (2023)",
    category: ["Srimad Bhagavatam"],
    description: "Live lecture series on Bali Mahārāja Charita (2023)",
    language: "Odia",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/mVTS3RMI_s0/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Bali Mahārāja Charita Day- 1",
        youtubeUrl: "https://www.youtube.com/watch?v=mVTS3RMI_s0",
        duration: "0:00:47",
        description: "03/08/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Bali Mahārāja Charita Day- 2",
        youtubeUrl: "https://www.youtube.com/watch?v=-HuLaZzpr_w",
        duration: "1:54:09",
        description: "04/08/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Bali Mahārāja Charita Day- 3",
        youtubeUrl: "https://www.youtube.com/watch?v=Kvdu5Sufas4",
        duration: "1:32:57",
        description: "05/08/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Bali Mahārāja Charita Day- 4",
        youtubeUrl: "https://www.youtube.com/watch?v=n6HFdIWzXz4",
        duration: "1:57:06",
        description: "08/08/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Bali Mahārāja Charita Day- 5",
        youtubeUrl: "https://www.youtube.com/watch?v=aPjZODOAi6I",
        duration: "1:26:27",
        description: "14/08/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Bali Mahārāja Charita Day- 6",
        youtubeUrl: "https://www.youtube.com/watch?v=dEi97dxokwU",
        duration: "1:54:43",
        description: "15/08/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "Bali Mahārāja Charita Day- 7",
        youtubeUrl: "https://www.youtube.com/watch?v=b5-gnHoYK2M",
        duration: "1:31:58",
        description: "16/08/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 108,
        title: "Bali Mahārāja Charita Day- 8",
        youtubeUrl: "https://www.youtube.com/watch?v=w82DoDBsbp4",
        duration: "2:00:58",
        description: "17/08/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 109,
        title: "Bali Mahārāja Charita Day- 9",
        youtubeUrl: "https://www.youtube.com/watch?v=c1KlEEIBFdY",
        duration: "1:33:25",
        description: "29/09/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 110,
        title: "Bali Mahārāja Charita Day- 10",
        youtubeUrl: "https://www.youtube.com/watch?v=IW7cY9VgHGk",
        duration: "2:04:12",
        description: "30/09/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 111,
        title: "Bali Mahārāja Charita Day- 11",
        youtubeUrl: "https://www.youtube.com/watch?v=f67745C13q0",
        duration: "1:27:39",
        description: "01/10/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 112,
        title: "Bali Mahārāja Charita Day- 12",
        youtubeUrl: "https://www.youtube.com/watch?v=tUF6-qfDu6U",
        duration: "2:01:28",
        description: "02/10/2023 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 15,
    playlistName: "Bali Maharaja Charitra (Pattamundai)",
    category: ["Srimad Bhagavatam"],
    description: "English lecture series • ISKCON Pattamundai • Dec 2019 – Jan 2020",
    language: "English",
    location: "ISKCON PATTAMUNDAI",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/uXiVU4AeKiI/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Bali Maharaja Charitra Day 1/16",
        youtubeUrl: "https://www.youtube.com/watch?v=uXiVU4AeKiI",
        duration: "0:10:28",
        description: "11/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Bali Maharaja Charitra Day 2/16",
        youtubeUrl: "https://www.youtube.com/watch?v=JJI0rGACrGM",
        duration: "0:01:48",
        description: "13/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Bali Maharaja Charitra Day 3/16",
        youtubeUrl: "https://www.youtube.com/watch?v=91sM5Zlmxxs",
        duration: "0:07:54",
        description: "14/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Bali Maharaja Charitra Day 4/16",
        youtubeUrl: "https://www.youtube.com/watch?v=h2EH43l3WLA",
        duration: "0:02:34",
        description: "15/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Bali Maharaja Charitra Day 5/16",
        youtubeUrl: "https://www.youtube.com/watch?v=sWtyk1mzpoA",
        duration: "0:01:03",
        description: "16/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Bali Maharaja Charitra Day 6/16",
        youtubeUrl: "https://www.youtube.com/watch?v=iyekrZ8WRTk",
        duration: "1:02:41",
        description: "17/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "Bali Maharaja Charitra Day 7/16",
        youtubeUrl: "https://www.youtube.com/watch?v=VEypLFARN1k",
        duration: "1:00:10",
        description: "18/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 108,
        title: "Bali Maharaja Charitra Day 8/16",
        youtubeUrl: "https://www.youtube.com/watch?v=5liUfg1kT78",
        duration: "0:08:00",
        description: "20/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 109,
        title: "Bali Maharaja Charitra Day 9/16",
        youtubeUrl: "https://www.youtube.com/watch?v=b9hLtteTHLo",
        duration: "0:03:33",
        description: "21/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 110,
        title: "Bali Maharaja Charitra Day 10/16",
        youtubeUrl: "https://www.youtube.com/watch?v=FXU_ou0ojug",
        duration: "0:05:19",
        description: "22/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 111,
        title: "Bali Maharaja Charitra Day 11/16",
        youtubeUrl: "https://www.youtube.com/watch?v=MPHS-awQxEg",
        duration: "0:00:14",
        description: "24/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 112,
        title: "Bali Maharaja Charitra Day 12/16",
        youtubeUrl: "https://www.youtube.com/watch?v=IBm0fLNS1YE",
        duration: "0:05:06",
        description: "25/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 113,
        title: "Bali Maharaja Charitra Day 13/16",
        youtubeUrl: "https://www.youtube.com/watch?v=t66z2Kj3bxs",
        duration: "0:03:43",
        description: "26/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 114,
        title: "Bali Maharaja Charitra Day 14/16",
        youtubeUrl: "https://www.youtube.com/watch?v=_OUhQ1sK9MY",
        duration: "0:07:42",
        description: "27/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 115,
        title: "Bali Maharaja Charitra Day 15/16",
        youtubeUrl: "https://www.youtube.com/watch?v=um_j6gaTnTg",
        duration: "0:11:33",
        description: "31/12/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 116,
        title: "Bali Maharaja Charitra Day 16/16",
        youtubeUrl: "https://www.youtube.com/watch?v=8bYWtiBr0V8",
        duration: "0:09:44",
        description: "03/01/2020 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 16,
    playlistName: "BRĀHMANAS WIVES BLESSED",
    category: ["Srimad Bhagavatam"],
    description: "Bhāgabatam Kathā (Brāhmanas Wives Blessed) • Bhubaneswar • Oct 2019",
    language: "English",
    location: "Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/I2k6p4e3WSs/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "BRĀHMANAS WIVES BLESSED Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=I2k6p4e3WSs",
        duration: "2:02:17",
        description: "12/10/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "BRĀHMANAS WIVES BLESSED Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=wIqYW7Y_BO8",
        duration: "1:58:00",
        description: "13/10/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "BRĀHMANAS WIVES BLESSED Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=4LPpQDeIs-4",
        duration: "2:08:15",
        description: "14/10/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "BRĀHMANAS WIVES BLESSED Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=wp_FKfM7S0c",
        duration: "2:26:06",
        description: "15/10/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "BRĀHMANAS WIVES BLESSED Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=VKILutoZpwM",
        duration: "2:18:17",
        description: "16/10/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "BRĀHMANAS WIVES BLESSED Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=bRECM4p2ykQ",
        duration: "2:17:32",
        description: "17/10/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "BRĀHMANAS WIVES BLESSED Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=tI1SNDo_DEc",
        duration: "2:18:16",
        description: "18/10/2019 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 17,
    playlistName: "Kunti Stuti",
    category: ["Srimad Bhagavatam"],
    description: "Bhagavatam katha • Topic: Kunti Stuti • Jan 2020",
    language: "Odia",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/z3gTGKy78pQ/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Kunti Stuti Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=z3gTGKy78pQ",
        duration: "1:47:31",
        description: "04/01/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Kunti Stuti Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=OOWQuDDcnQ8",
        duration: "2:17:33",
        description: "05/01/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Kunti Stuti Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=EdWVQI9JMoE",
        duration: "2:30:14",
        description: "06/01/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Kunti Stuti Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=JZZlu-iVcEY",
        duration: "2:17:27",
        description: "07/01/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Kunti Stuti Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=GcGyCKiEftI",
        duration: "2:35:45",
        description: "08/01/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Kunti Stuti Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=ihFieUsd2rw",
        duration: "2:35:45",
        description: "09/01/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "Kunti Stuti Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=jK_xbD8R7hY",
        duration: "2:17:08",
        description: "10/01/2020 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 18,
    playlistName: "Pralambāsura Badha",
    category: ["Srimad Bhagavatam"],
    description: "Bhagavatam katha • ISKCON Pattamundai • Mar 2020",
    language: "Odia",
    location: "ISKCON PATTAMUNDAI",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/Hf4lWuk-4pU/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Pralambāsura Badha - Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=Hf4lWuk-4pU",
        duration: "0:11:17",
        description: "17/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Pralambāsura Badha - Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=-E6-BpFPwv4",
        duration: "0:16:52",
        description: "18/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Pralambāsura Badha - Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=0BU9xD4gvEo",
        duration: "0:14:54",
        description: "19/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Pralambāsura Badha - Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=IpLLMrI-f-Y",
        duration: "0:18:01",
        description: "20/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Pralambāsura Badha - Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=l41NlAKq6Qk",
        duration: "0:13:01",
        description: "21/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Pralambāsura Badha - Days 6",
        youtubeUrl: "https://www.youtube.com/watch?v=puwQn1domAQ",
        duration: "0:14:34",
        description: "22/03/2020 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 19,
    playlistName: "KĀLIYA DALANA",
    category: ["Srimad Bhagavatam"],
    description: "Bhagavatam katha (English) • ISKCON Pattamundai • 2020",
    language: "English",
    location: "ISKCON PATTAMUNDAI",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/JQ2vR_5lmmI/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "KĀLIYA DALANA Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=JQ2vR_5lmmI",
        duration: "1:09:31",
        description: "17/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "KĀLIYA DALANA Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=sz0URdRkzB4",
        duration: "1:15:23",
        description: "18/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "KĀLIYA DALANA Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=z01ONTSeSPM",
        duration: "0:05:10",
        description: "20/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "KĀLIYA DALANA Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=oLidvyFnxLA",
        duration: "0:11:48",
        description: "21/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "KĀLIYA DALANA Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=8JyEZF99Bq8",
        duration: "0:20:17",
        description: "22/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "KĀLIYA DALANA Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=eMcTL-6pQas",
        duration: "0:04:54",
        description: "23/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "KĀLIYA DALANA Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=hVmh6NmS9RI",
        duration: "0:11:48",
        description: "26/03/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 108,
        title: "KĀLIYA DALANA Day 8",
        youtubeUrl: "https://www.youtube.com/watch?v=zdozQ2fc2no",
        duration: "1:07:03",
        description: "07/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 109,
        title: "KĀLIYA DALANA Day 9",
        youtubeUrl: "https://www.youtube.com/watch?v=r7JcLCD0dfk",
        duration: "0:11:48",
        description: "09/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 110,
        title: "KĀLIYA DALANA Day 10",
        youtubeUrl: "https://www.youtube.com/watch?v=W8rGY0omqQY",
        duration: "0:09:51",
        description: "10/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 111,
        title: "KĀLIYA DALANA Day 11",
        youtubeUrl: "https://www.youtube.com/watch?v=x63dgcbIIaQ",
        duration: "1:05:45",
        description: "11/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 112,
        title: "KĀLIYA DALANA Day 12",
        youtubeUrl: "https://www.youtube.com/watch?v=8vZusxm1jbU",
        duration: "1:09:53",
        description: "12/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 113,
        title: "KĀLIYA DALANA Day 13",
        youtubeUrl: "https://www.youtube.com/watch?v=1l7icOZrk6g",
        duration: "1:08:35",
        description: "13/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 114,
        title: "KĀLIYA DALANA Day 14",
        youtubeUrl: "https://www.youtube.com/watch?v=j5-yCIT_4zg",
        duration: "1:12:49",
        description: "14/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 115,
        title: "KĀLIYA DALANA Day 15",
        youtubeUrl: "https://www.youtube.com/watch?v=BfHp9Jx1v6c",
        duration: "1:08:14",
        description: "15/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 116,
        title: "KĀLIYA DALANA Day 16",
        youtubeUrl: "https://www.youtube.com/watch?v=RkFz5XcdCP8",
        duration: "0:08:38",
        description: "16/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 117,
        title: "KĀLIYA DALANA Day 17",
        youtubeUrl: "https://www.youtube.com/watch?v=2lbFfdQ0SX0",
        duration: "1:07:48",
        description: "17/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 118,
        title: "KĀLIYA DALANA Day 18",
        youtubeUrl: "https://www.youtube.com/watch?v=t7-dyCqpQdU",
        duration: "1:06:29",
        description: "18/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 119,
        title: "KĀLIYA DALANA Day 19",
        youtubeUrl: "https://www.youtube.com/watch?v=PpufAY66OxI",
        duration: "1:12:43",
        description: "19/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 120,
        title: "KĀLIYA DALANA Day 20",
        youtubeUrl: "https://www.youtube.com/watch?v=pzTGaMkVkus",
        duration: "1:03:27",
        description: "21/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 121,
        title: "KĀLIYA DALANA Day 21",
        youtubeUrl: "https://www.youtube.com/watch?v=5YGYb8WvBPs",
        duration: "1:01:34",
        description: "22/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 122,
        title: "KĀLIYA DALANA Day 22",
        youtubeUrl: "https://www.youtube.com/watch?v=F6S1l9pcDf0",
        duration: "0:08:31",
        description: "24/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 123,
        title: "KĀLIYA DALANA Day 23",
        youtubeUrl: "https://www.youtube.com/watch?v=hpOIAH4ao88",
        duration: "1:00:34",
        description: "26/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 124,
        title: "KĀLIYA DALANA Day 24",
        youtubeUrl: "https://www.youtube.com/watch?v=OC3NX_uQ2oE",
        duration: "0:08:19",
        description: "28/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 125,
        title: "KĀLIYA DALANA Day 25",
        youtubeUrl: "https://www.youtube.com/watch?v=DfIXvcXmg4g",
        duration: "0:07:51",
        description: "30/04/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 126,
        title: "KĀLIYA DALANA Day 26",
        youtubeUrl: "https://www.youtube.com/watch?v=nY76Vsy0-ew",
        duration: "1:00:47",
        description: "01/05/2020 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 20,
    playlistName: "Bhakt Sudama Charitra",
    category: ["Srimad Bhagavatam"],
    description: "Live lecture series • ISKCON Nayagarh, Odisha • Aug 2022",
    language: "Odia",
    location: "ISKCON Nayagarh, Odisha",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/HidcnVzlOHw/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Bhakt Sudama Charitra Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=HidcnVzlOHw",
        duration: "2:00:16",
        description: "13/08/2022 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Bhakt Sudama Charitra Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=w2an53mXbLA",
        duration: "2:27:14",
        description: "14/08/2022 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Bhakt Sudama Charitra Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=_O3PAxWDBWk",
        duration: "2:28:17",
        description: "15/08/2022 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Bhakt Sudama Charitra Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=Y1LHAEVMZ2o",
        duration: "1:58:13",
        description: "16/08/2022 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 21,
    playlistName: "Bhakta Mahima",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Vrindavan • Oct 2019",
    language: "Hindi",
    location: "ISKCON Vrindavan",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/WqE49ECzA9c/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Bhakta Mahima Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=WqE49ECzA9c",
        duration: "1:24:38",
        description: "24/10/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Bhakta Mahima Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=lAIZZoIs5rg",
        duration: "1:33:18",
        description: "25/10/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Bhakta Mahima Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=HZuX3twO68o",
        duration: "1:21:56",
        description: "26/10/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Bhakta Mahima Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=oz_pURGThUA",
        duration: "1:32:51",
        description: "27/10/2019 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 22,
    playlistName: "Bhakta Maryādā",
    category: ["Bhakti-rasamrta-sindhu"],
    description: "ISKCON NVCC Pune • Jul 2024",
    language: "Hindi",
    location: "ISKCON NVCC Pune",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/AuSVKJvhzvE/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Bhakta Maryādā Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=AuSVKJvhzvE",
        duration: "1:50:17",
        description: "19/07/2024 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Bhakta Maryādā Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=3hUPQEyeIHk",
        duration: "1:30:20",
        description: "20/07/2024 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Bhakta Maryādā Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=iFsSY9ar2Xw",
        duration: "1:51:37",
        description: "21/07/2024 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Bhakta Maryādā Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=4vPSzqNaVCo",
        duration: "1:56:32",
        description: "22/07/2024 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 23,
    playlistName: "Bhakti Tattva",
    category: ["Bhakti-rasamrta-sindhu"],
    description: "Live series • ISKCON Vrindavan • Nov 2023",
    language: "Hindi",
    location: "ISKCON Vrindavan",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/jTHfus1UG5o/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Bhakti Tattva Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=jTHfus1UG5o",
        duration: "1:36:50",
        description: "18/11/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Bhakti Tattva Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=whYqH70BV0A",
        duration: "2:10:07",
        description: "19/11/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Bhakti Tattva Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=AQeH62_YFm0",
        duration: "1:56:33",
        description: "21/11/2023 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 24,
    playlistName: "Bhishma Dev Ki Mahima",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Ujjain • Mar 2021",
    language: "Hindi",
    location: "ISKCON UJJAIN",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/8Xn73h7GUyc/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Bhishma Dev Ki Mahima Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=8Xn73h7GUyc",
        duration: "1:03:09",
        description: "06/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Bhishma Dev Ki Mahima Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=tXPHD7dKdrc",
        duration: "1:10:28",
        description: "06/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Bhishma Dev Ki Mahima Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=nBVPjbbnft8",
        duration: "0:04:59",
        description: "07/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Bhishma Dev Ki Mahima Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=08ecufRWgKM",
        duration: "1:26:21",
        description: "07/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Bhishma Dev Ki Mahima Part 5",
        youtubeUrl: "https://www.youtube.com/watch?v=5qtlBRnh_po",
        duration: "1:01:43",
        description: "08/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Bhishma Dev Ki Mahima Part 6",
        youtubeUrl: "https://www.youtube.com/watch?v=PsAcBPEc3AI",
        duration: "1:27:38",
        description: "09/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "Bhishma Dev Ki Mahima Part 7",
        youtubeUrl: "https://www.youtube.com/watch?v=uB67VYz686o",
        duration: "1:04:27",
        description: "10/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 108,
        title: "Bhishma Dev Ki Mahima Part 8",
        youtubeUrl: "https://www.youtube.com/watch?v=YjpLS6zUpCY",
        duration: "1:05:09",
        description: "10/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 109,
        title: "Bhishma Dev Ki Mahima Part 9",
        youtubeUrl: "https://www.youtube.com/watch?v=ugHAH1PyCs0",
        duration: "0:23:34",
        description: "11/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 110,
        title: "Bhishma Dev Ki Mahima Part 10",
        youtubeUrl: "https://www.youtube.com/watch?v=-OCKZGAQIo0",
        duration: "1:03:40",
        description: "11/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 111,
        title: "Bhishma Dev Ki Mahima Part 11",
        youtubeUrl: "https://www.youtube.com/watch?v=X6hBC-n8opM",
        duration: "0:10:09",
        description: "12/03/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 112,
        title: "Bhishma Dev Ki Mahima Part 12",
        youtubeUrl: "https://www.youtube.com/watch?v=mIkOYYzMmsw",
        duration: "1:01:04",
        description: "13/03/2021 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 25,
    playlistName: "Chaitanya Mahaprabhu Lila Kirtan",
    category: ["Chaitanya Bhagavat"],
    description: "ISKCON Bhubaneswar • Odia • Feb 2020",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/HmDl6wp7im8/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Chaitanya Mahaprabhu Lila Kirtan Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=HmDl6wp7im8",
        duration: "1:30:40",
        description: "08/02/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Chaitanya Mahaprabhu Lila Kirtan Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=53mtTqVumlM",
        duration: "2:08:52",
        description: "09/02/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Chaitanya Mahaprabhu Lila Kirtan Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=J1Ackfvptko",
        duration: "2:07:28",
        description: "10/02/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Chaitanya Mahaprabhu Lila Kirtan Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=XQK8nb-or2A",
        duration: "2:17:21",
        description: "11/02/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Chaitanya Mahaprabhu Lila Kirtan Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=ZOXXWo8ZTWo",
        duration: "1:47:59",
        description: "12/02/2020 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 26,
    playlistName: "Damodara Lila",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Pattamundai • English • Nov 2021",
    language: "English",
    location: "ISKCON PATTAMUNDAI",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/YE_o80t7vCI/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Damodara Lila Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=YE_o80t7vCI",
        duration: "0:18:14",
        description: "01/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Damodara Lila Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=lD3E1POQznw",
        duration: "0:34:41",
        description: "06/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Damodara Lila Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=mTaQM1_zYlo",
        duration: "0:43:45",
        description: "09/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Damodara Lila Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=6yVR4JyMCBI",
        duration: "0:34:33",
        description: "10/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Damodara Lila Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=kKMoZyxHK34",
        duration: "0:40:55",
        description: "11/11/2021 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 27,
    playlistName: "Damodara Lila",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Pattamundai • Odia • Oct–Nov 2021 • Day 1–16",
    language: "Odia",
    location: "ISKCON PATTAMUNDAI",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/l3LNGaWO2sY/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Damodara Lila Day 1/16",
        youtubeUrl: "https://www.youtube.com/watch?v=l3LNGaWO2sY",
        duration: "1:09:44",
        description: "20/10/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Damodara Lila Day 2/16",
        youtubeUrl: "https://www.youtube.com/watch?v=yCs0S9W1e60",
        duration: "1:09:56",
        description: "21/10/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Damodara Lila Day 3/16",
        youtubeUrl: "https://www.youtube.com/watch?v=3VCNv8N7NKU",
        duration: "1:12:17",
        description: "22/10/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Damodara Lila Day 4/16",
        youtubeUrl: "https://www.youtube.com/watch?v=HPOd8q4bT9M",
        duration: "1:14:23",
        description: "23/10/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Damodara Lila Day 5/16",
        youtubeUrl: "https://www.youtube.com/watch?v=pJt3mssAKks",
        duration: "1:14:55",
        description: "24/10/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Damodara Lila Day 6/16",
        youtubeUrl: "https://www.youtube.com/watch?v=aAfd3o6gJA8",
        duration: "1:01:59",
        description: "25/10/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "Damodara Lila Day 7/16",
        youtubeUrl: "https://www.youtube.com/watch?v=0b5UtbC9Qy8",
        duration: "1:04:56",
        description: "26/10/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 108,
        title: "Damodara Lila Day 8/16",
        youtubeUrl: "https://www.youtube.com/watch?v=lEPkVKpF5HI",
        duration: "1:10:03",
        description: "27/10/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 109,
        title: "Damodara Lila Day 9/16",
        youtubeUrl: "https://www.youtube.com/watch?v=TmubXvDX_3o",
        duration: "1:00:38",
        description: "01/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 110,
        title: "Damodara Lila Day 10/16",
        youtubeUrl: "https://www.youtube.com/watch?v=E9U2Frh_8uQ",
        duration: "0:57:21",
        description: "06/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 111,
        title: "Damodara Lila Day 11/16",
        youtubeUrl: "https://www.youtube.com/watch?v=CLlfH0BDGLY",
        duration: "0:50:42",
        description: "09/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 112,
        title: "Damodara Lila Day 12/16",
        youtubeUrl: "https://www.youtube.com/watch?v=3VN_KWW8P5E",
        duration: "0:55:20",
        description: "10/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 113,
        title: "Damodara Lila Day 13/16",
        youtubeUrl: "https://www.youtube.com/watch?v=ft3N2mLTUwY",
        duration: "0:55:32",
        description: "11/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 114,
        title: "Damodara Lila Day 14/16",
        youtubeUrl: "https://www.youtube.com/watch?v=rlbNy5Df7WE",
        duration: "1:01:56",
        description: "26/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 115,
        title: "Damodara Lila Day 15/16",
        youtubeUrl: "https://www.youtube.com/watch?v=HwK8gEZRmx4",
        duration: "1:23:19",
        description: "17/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 116,
        title: "Damodara Lila Day 16/16",
        youtubeUrl: "https://www.youtube.com/watch?v=YalP6t2OJIg",
        duration: "1:25:20",
        description: "18/11/2021 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 28,
    playlistName: "Determined Dhruva Maharaja",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Kanpur • Hindi • May 2023",
    language: "Hindi",
    location: "ISKCON Kanpur",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/UrL_IW3Dp2c/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Determined Dhruva Maharaja Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=UrL_IW3Dp2c&t=1s",
        duration: "1:33:59",
        description: "06/05/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Determined Dhruva Maharaja Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=htOXlzBGsWQ",
        duration: "1:57:01",
        description: "06/05/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Determined Dhruva Maharaja Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=gqRYaa14TTo",
        duration: "1:36:36",
        description: "07/05/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Determined Dhruva Maharaja Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=qqJxlZQl5C0",
        duration: "1:53:32",
        description: "08/05/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Determined Dhruva Maharaja Part 5",
        youtubeUrl: "https://www.youtube.com/watch?v=T7T5YJCQxIw",
        duration: "1:37:21",
        description: "09/05/2023 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 29,
    playlistName: "Devotion in Grihastha Ashram",
    category: ["Bhakti-rasamrta-sindhu"],
    description: "House Program • Hindi • 28/01/2019",
    language: "Hindi",
    location: "House Program",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/UUIj7IbhLNQ/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Devotion in Grihastha Ashram Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=UUIj7IbhLNQ",
        duration: "0:32:59",
        description: "28/01/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Devotion in Grihastha Ashram Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=h0il10wvqwA",
        duration: "0:32:58",
        description: "28/01/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Devotion in Grihastha Ashram Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=PalFrEeiAq8",
        duration: "0:32:59",
        description: "28/01/2019 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 30,
    playlistName: "Gaura Katha (Raghunatha Bhatta Goswami)",
    category: ["Chaitanya Charitamrita"],
    description: "ISKCON Bhubaneswar • English • Jun 2025 • Day 1–3",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/kA5_Wg5y5UU/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Gaura Katha Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=kA5_Wg5y5UU",
        duration: "1:28:12",
        description: "28/06/2025 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Gaura Katha Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=SMA4L1-6nwk",
        duration: "1:31:28",
        description: "29/06/2025 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Gaura Katha Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=suvoNRjXBA4",
        duration: "1:39:46",
        description: "30/06/2025 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 31,
    playlistName: "Gaura Katha (Raghunatha Bhatta Goswami)",
    category: ["Chaitanya Charitamrita"],
    description: "ISKCON Bhubaneswar • Odia • Jul 2025 • Day 5–8",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/_PIs2U-BruE/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Gaura Katha Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=_PIs2U-BruE",
        duration: "1:44:19",
        description: "02/07/2025 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Gaura Katha Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=KIlAbc3LIZA",
        duration: "1:45:14",
        description: "03/07/2025 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Gaura Katha Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=UQFcvNOa05s",
        duration: "1:29:36",
        description: "04/07/2025 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Gaura Katha Day 8",
        youtubeUrl: "https://www.youtube.com/watch?v=Al2Pe0riqc4",
        duration: "1:57:33",
        description: "05/07/2025 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 32,
    playlistName: "Gaura Katha",
    category: ["Chaitanya Charitamrita"],
    description: "The Netherlands • English • Mar 2023 • Day 1–3",
    language: "English",
    location: "The Netherlands",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/vIQR3z-gftc/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Gaura Katha Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=vIQR3z-gftc",
        duration: "1:41:45",
        description: "14/03/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Gaura Katha Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=LRIJntkT8lk",
        duration: "2:00:00",
        description: "15/03/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Gaura Katha Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=AjVUii5ZKcU",
        duration: "1:51:38",
        description: "16/03/2023 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 33,
    playlistName: "Gaura Katha",
    category: ["Chaitanya Charitamrita"],
    description: "ISKCON Bhubaneswar • Odia • May–Jun 2019 • Day 1–7",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/kWw74uDKLkA/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Gaura Katha Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=kWw74uDKLkA",
        duration: "1:54:31",
        description: "29/05/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Gaura Katha Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=yPd5jmXly1U",
        duration: "2:11:05",
        description: "30/05/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Gaura Katha Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=4Ee_kC6fez8",
        duration: "2:09:25",
        description: "31/05/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Gaura Katha Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=t3DU98wmHvc",
        duration: "2:16:33",
        description: "01/06/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Gaura Katha Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=Xv4Cfa6udiY",
        duration: "2:26:21",
        description: "02/06/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Gaura Katha Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=VgqpVc_gSFQ",
        duration: "2:35:01",
        description: "03/06/2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "Gaura Katha Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=afrLKfHzZSA",
        duration: "2:34:01",
        description: "04/06/2019 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 34,
    playlistName: "Glorification of Hari Nama",
    category: ["Other"],
    description: "Suriname • English • Jun 2019",
    language: "English",
    location: "Suriname",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/5doxiqjGC60/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Glorification of Hari Nama Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=5doxiqjGC60",
        duration: "1:29:51",
        description: "Jun 2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Glorification of Hari Nama Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=T0e6pOj6i2Q",
        duration: "0:05:25",
        description: "Jun 2019 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Glorification of Hari Nama Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=EfvaKW6HIoI",
        duration: "0:23:41",
        description: "Jun 2019 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 35,
    playlistName: "Glorification",
    category: ["Festival Lecture"],
    description: "Festival / special glorifications • English",
    language: "English",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/rFTA3Tq8JW8/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Glorification of HDG Bhakti Siddhanta Saraswati Thakur (Disappearance Day)",
        youtubeUrl: "https://www.youtube.com/watch?v=rFTA3Tq8JW8",
        duration: "1:06:56",
        description: "03/01/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Glorification of HG Sulabha Devi Dasi",
        youtubeUrl: "https://www.youtube.com/watch?v=FcmjmffpMRo",
        duration: "0:09:05",
        description: "06/10/2022 • HH Haladhara Swami Maharaj • Niala, Kendrapada"
      },
      {
        id: 103,
        title: "Glorification of HH Bhakti Charu Swami Maharaja",
        youtubeUrl: "https://www.youtube.com/watch?v=-kYBTj8LfBU",
        duration: "0:09:46",
        description: "25/07/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Glorification of HH Gopal Krishna Goswami Maharaj",
        youtubeUrl: "https://www.youtube.com/watch?v=Vj5vYr0584Q",
        duration: "0:22:38",
        description: "30/08/2024 • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Glorification of HH Gopal Krishna Goswami Maharaj",
        youtubeUrl: "https://www.youtube.com/watch?v=l0QyplbuCZU",
        duration: "1:27:30",
        description: "26/04/2025 • HH Haladhara Swami Maharaj • Apex, North Carolina"
      },
      {
        id: 106,
        title: "Glorification of HH Loknath Swami Maharaj (Vyas Puja)",
        youtubeUrl: "https://www.youtube.com/watch?v=MpsPkwj-6Hw",
        duration: "0:07:10",
        description: "06/07/2025 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 107,
        title: "Glorification of HH Radha Govinda Maharaj (Vyas Puja)",
        youtubeUrl: "https://www.youtube.com/watch?v=G50ti4bHz_M",
        duration: "0:20:05",
        description: "27/06/2025 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 108,
        title: "Glorification of HDG A.C. Bhaktivedanta Swami Srila Prabhupada",
        youtubeUrl: "https://www.youtube.com/watch?v=tY8vS5ZQZvo",
        duration: "0:05:09",
        description: "13/08/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 109,
        title: "Glorification of Sri Srimad Gour Govinda Swami (Appearance Day)",
        youtubeUrl: "https://www.youtube.com/watch?v=FADsPlUNcR0",
        duration: "0:09:41",
        description: "08/09/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 110,
        title: "Glorification of Sri Srimad Gour Govinda Swami (Appearance Day)",
        youtubeUrl: "https://www.youtube.com/watch?v=2RsdbJTm-Vc",
        duration: "0:11:43",
        description: "05/09/2024 • HH Haladhara Swami Maharaj"
      },
      {
        id: 111,
        title: "Glorification of Sri Srimad Gour Govinda Swami",
        youtubeUrl: "https://www.youtube.com/watch?v=p5haGx-rEzI",
        duration: "0:02:50",
        description: "20/08/2020 • HH Haladhara Swami Maharaj"
      },
      {
        id: 112,
        title: "Glorification of Srila Gour Govinda Swami Maharaj",
        youtubeUrl: "https://www.youtube.com/watch?v=BH1yfvaIXLk",
        duration: "0:02:01",
        description: "16/09/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 113,
        title: "Glorification of Srila Gurudev by Maharajas",
        youtubeUrl: "https://www.youtube.com/watch?v=DWkFK8Ip1Vs",
        duration: "0:11:54",
        description: "24/08/2025 • Others"
      },
      {
        id: 114,
        title: "Glorification of Srila Prabhupada",
        youtubeUrl: "https://www.youtube.com/watch?v=Us2ot_qP3tE",
        duration: "0:20:20",
        description: "08/11/2021 • HH Haladhara Swami Maharaj"
      },
      {
        id: 115,
        title: "Glorification of Srila Prabhupada",
        youtubeUrl: "https://www.youtube.com/watch?v=S3xV6gDgxRA",
        duration: "0:02:08",
        description: "20/08/2022 • HH Haladhara Swami Maharaj"
      },
      {
        id: 116,
        title: "Glorification of HH Bhakti Charu Swami Maharaja",
        youtubeUrl: "https://www.youtube.com/watch?v=LDm4lgFVy9o",
        duration: "0:20:29",
        description: "17/09/2023 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 36,
    playlistName: "Glorification",
    category: ["Festival Lecture"],
    description: "Festival / special glorifications • Hindi",
    language: "Hindi",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/6A47kjFd4a0/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Glorification of HH Subhag Swami Maharaj",
        youtubeUrl: "https://www.youtube.com/watch?v=6A47kjFd4a0",
        duration: "0:10:14",
        description: "16/12/2022 • HH Haladhara Swami Maharaj • Puri"
      },
      {
        id: 102,
        title: "Glorification of Srila Bhaktisiddhanta Saraswati Thakura",
        youtubeUrl: "https://www.youtube.com/watch?v=q5NAoqhO6O4",
        duration: "2:06:46",
        description: "12/12/2022 • HH Haladhara Swami Maharaj • ISKCON Nasik"
      }
    ]
  },
  {
    id: 37,
    playlistName: "Govardhan Puja",
    category: ["Festival Lecture"],
    description: "ISKCON Pattamundai • Hindi • 16/11/2020",
    language: "Hindi",
    location: "ISKCON PATTAMUNDAI",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/Ewa_nOETUyQ/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Govardhan Puja Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=Ewa_nOETUyQ",
        duration: "0:58:39",
        description: "16/11/2020 • HH Haladhara Swami Maharaj • ISKCON PATTAMUNDAI"
      },
      {
        id: 102,
        title: "Govardhan Puja Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=BdeYZgdRNcQ",
        duration: "0:23:27",
        description: "16/11/2020 • HH Haladhara Swami Maharaj • ISKCON PATTAMUNDAI"
      }
    ]
  },
  {
    id: 38,
    playlistName: "Govardhan Puja",
    category: ["Festival Lecture"],
    description: "ISKCON Pattamundai • English • 16/11/2020",
    language: "English",
    location: "ISKCON PATTAMUNDAI",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/EiOMwUDm2fc/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Govardhan Puja Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=EiOMwUDm2fc",
        duration: "0:01:25",
        description: "16/11/2020 • HH Haladhara Swami Maharaj • ISKCON PATTAMUNDAI"
      }
    ]
  },
  {
    id: 39,
    playlistName: "Guru Makes the Lord Appear in the Heart",
    category: ["Chaitanya Charitamrita"],
    description: "English series • ISKCON Mayapur • Mar 2025",
    language: "English",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/_LOCy1uMt-g/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Guru Makes Gouranga Appear In Heart Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=_LOCy1uMt-g",
        duration: "1:49:35",
        description: "09/03/2025 • HH Haladhara Swami Maharaj • ISKCON MAYAPUR"
      },
      {
        id: 102,
        title: "Guru Makes Gouranga Appear In Heart Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=8RToiltjlA0",
        duration: "1:42:23",
        description: "10/03/2025 • HH Haladhara Swami Maharaj • ISKCON MAYAPUR"
      },
      {
        id: 103,
        title: "Guru Makes Gouranga Appear In Heart Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=ac1PgmtTO-Q",
        duration: "2:02:07",
        description: "11/03/2025 • HH Haladhara Swami Maharaj • ISKCON MAYAPUR"
      },
      {
        id: 104,
        title: "Guru Makes Gouranga Appear In Heart Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=DSOCFGb1ejc",
        duration: "1:57:08",
        description: "12/03/2025 • HH Haladhara Swami Maharaj • ISKCON MAYAPUR"
      }
    ]
  },
  {
    id: 40,
    playlistName: "Guru Tattva",
    category: ["Tattva"],
    description: "Live series • ISKCON Rohini • Dec 2024",
    language: "Hindi",
    location: "ISKCON ROHINI",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/4gXpGgkT8qw/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Guru Tattva Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=4gXpGgkT8qw",
        duration: "2:00:10",
        description: "05/12/2024 • HH Haladhara Swami Maharaj • ISKCON ROHINI"
      }
    ]
  },
  {
    id: 41,
    playlistName: "Guru Tattva",
    category: ["Tattva"],
    description: "Live series • ISKCON Rohini • Dec 2024",
    language: "Hindi",
    location: "ISKCON ROHINI",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/jk-vfNIMbjw/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Guru Tattva Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=jk-vfNIMbjw",
        duration: "2:08:22",
        description: "06/12/2024 • HH Haladhara Swami Maharaj • ISKCON ROHINI"
      },
      {
        id: 102,
        title: "Guru Tattva Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=1gDnZ0sp70w",
        duration: "2:10:32",
        description: "07/12/2024 • HH Haladhara Swami Maharaj • ISKCON ROHINI"
      },
      {
        id: 103,
        title: "Guru Tattva Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=htHeYqwF9B0",
        duration: "2:01:14",
        description: "08/12/2024 • HH Haladhara Swami Maharaj • ISKCON ROHINI"
      }
    ]
  },
  {
    id: 42,
    playlistName: "Guru Vaishnav Anugatya",
    category: ["Guru Seva", "Anugatya", "Vaisnava Seva"],
    description: "ISKCON Vrindavan • Hindi • Oct 2022",
    language: "Hindi",
    location: "ISKCON Vrindavan",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/5YAF1H6E1dY/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Guru Vaishnav Anugatya Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=5YAF1H6E1dY",
        duration: "2:04:23",
        description: "30/10/2022 • HH Haladhara Swami Maharaj • ISKCON Vrindavan"
      }
    ]
  },
  {
    id: 43,
    playlistName: "Guru Vaishnav Anugatya",
    category: ["Guru Seva", "Anugatya", "Vaisnava Seva"],
    description: "ISKCON Vrindavan • English • Oct–Nov 2022 • Day 2–7",
    language: "English",
    location: "ISKCON Vrindavan",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/PDzi_xJ5Kfo/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Guru Vaishnav Anugatya Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=PDzi_xJ5Kfo",
        duration: "1:49:12",
        description: "31/10/2022 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Guru Vaishnav Anugatya Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=xwU0Ieu7y4c",
        duration: "2:07:59",
        description: "01/11/2022 • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Guru Vaishnav Anugatya Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=rgpHpWPiZFM",
        duration: "2:07:03",
        description: "02/11/2022 • HH Haladhara Swami Maharaj • ISKCON Vrindavan"
      },
      {
        id: 104,
        title: "Guru Vaishnav Anugatya Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=ommfaDP1718",
        duration: "2:04:59",
        description: "03/11/2022 • HH Haladhara Swami Maharaj • ISKCON Vrindavan"
      },
      {
        id: 105,
        title: "Guru Vaishnav Anugatya Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=hbhNauIvstc",
        duration: "1:53:53",
        description: "04/11/2022 • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Guru Vaishnav Anugatya Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=vx-pwNIazlo",
        duration: "2:00:17",
        description: "05/11/2022 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 44,
    playlistName: "Guru-Vaisnava Seva",
    category: ["Guru Seva", "Anugatya", "Vaisnava Seva"],
    description: "ISKCON Juhu • Hindi • Jun 2022 • Part 1–4",
    language: "Hindi",
    location: "ISKCON Juhu",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/esGA6UmJYVY/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Guru-Vaisnava Seva Part 1/4",
        youtubeUrl: "https://www.youtube.com/watch?v=esGA6UmJYVY",
        duration: "1:17:44",
        description: "08/06/2022 • HH Haladhara Swami Maharaj • ISKCON Juhu"
      },
      {
        id: 102,
        title: "Guru-Vaisnava Seva Part 2/4",
        youtubeUrl: "https://www.youtube.com/watch?v=BYjsvSnpBN4",
        duration: "1:18:12",
        description: "09/06/2022 • HH Haladhara Swami Maharaj • ISKCON Juhu"
      },
      {
        id: 103,
        title: "Guru-Vaisnava Seva Part 3/4",
        youtubeUrl: "https://www.youtube.com/watch?v=jHqXojOSG7I",
        duration: "1:33:38",
        description: "09/06/2022 • HH Haladhara Swami Maharaj • ISKCON Juhu"
      },
      {
        id: 104,
        title: "Guru-Vaisnava Seva Part 4/4",
        youtubeUrl: "https://www.youtube.com/watch?v=yaiXq8lGCzA",
        duration: "1:04:02",
        description: "10/06/2022 • HH Haladhara Swami Maharaj • ISKCON Juhu"
      }
    ]
  },
  {
    id: 45,
    playlistName: "Guru Tattva (Special Lecture Series)",
    category: ["Tattva"],
    description: "ISKCON Dwarka • Hindi • May 2022 • Part 1–10",
    language: "Hindi",
    location: "ISKCON Dwarka",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/IiDASM6Wyjk/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Guru Tattva Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=IiDASM6Wyjk",
        duration: "1:26:34",
        description: "23/05/2022 • HH Haladhara Swami Maharaj • ISKCON Dwarka"
      },
      {
        id: 102,
        title: "Guru Tattva Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=tcKdmcqx2J0",
        duration: "1:38:55",
        description: "23/05/2022 • HH Haladhara Swami Maharaj • ISKCON Dwarka"
      },
      {
        id: 103,
        title: "Guru Tattva Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=JsutU3PxnTc",
        duration: "1:47:03",
        description: "24/05/2022 • HH Haladhara Swami Maharaj • ISKCON Dwarka"
      },
      {
        id: 104,
        title: "Guru Tattva Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=Itlt01KQjIk",
        duration: "1:49:47",
        description: "24/05/2022 • HH Haladhara Swami Maharaj • ISKCON Dwarka"
      },
      {
        id: 105,
        title: "Guru Tattva Part 5",
        youtubeUrl: "https://www.youtube.com/watch?v=b61fEE7EKos",
        duration: "1:58:41",
        description: "25/05/2022 • HH Haladhara Swami Maharaj • ISKCON Dwarka"
      },
      {
        id: 106,
        title: "Guru Tattva Part 6",
        youtubeUrl: "https://www.youtube.com/watch?v=p6FH4iktOUs",
        duration: "2:16:56",
        description: "25/05/2022 • HH Haladhara Swami Maharaj • ISKCON Dwarka"
      },
      {
        id: 107,
        title: "Guru Tattva Part 7",
        youtubeUrl: "https://www.youtube.com/watch?v=ovWv8XAOMkU",
        duration: "1:58:36",
        description: "26/05/2022 • HH Haladhara Swami Maharaj • ISKCON Dwarka"
      },
      {
        id: 108,
        title: "Guru Tattva Part 8",
        youtubeUrl: "https://www.youtube.com/watch?v=X4wrEeZxzmc",
        duration: "2:04:54",
        description: "26/05/2022 • HH Haladhara Swami Maharaj • ISKCON Dwarka"
      },
      {
        id: 109,
        title: "Guru Tattva Part 9",
        youtubeUrl: "https://www.youtube.com/watch?v=rQqZS5_QJdE",
        duration: "2:32:28",
        description: "27/05/2022 • HH Haladhara Swami Maharaj • ISKCON Dwarka"
      },
      {
        id: 110,
        title: "Guru Tattva Part 10",
        youtubeUrl: "https://www.youtube.com/watch?v=rtm2DkTcVC4",
        duration: "2:01:29",
        description: "27/05/2022 • HH Haladhara Swami Maharaj • ISKCON Dwarka"
      }
    ]
  },
  {
    id: 46,
    playlistName: "How to Take Krsna Consciousness Wholeheartedly",
    category: ["Krishna Conciousness"],
    description: "ISKCON Bhopal (BHEL) • Hindi • Jun 2023 • Part 1–4",
    language: "Hindi",
    location: "ISKCON BHOPAL (BHEL)",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/wxC4vALcupc/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "How to Take Krsna Consciousness Wholeheartedly Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=wxC4vALcupc",
        duration: "1:42:37",
        description: "03/06/2023 • HH Haladhara Swami Maharaj • ISKCON BHOPAL (BHEL)"
      },
      {
        id: 102,
        title: "How to Take Krsna Consciousness Wholeheartedly Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=CpVkB7CjlEU",
        duration: "1:42:24",
        description: "03/06/2023 • HH Haladhara Swami Maharaj • ISKCON BHOPAL (BHEL)"
      },
      {
        id: 103,
        title: "How to Take Krsna Consciousness Wholeheartedly Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=7wpOtg72-_E",
        duration: "1:51:23",
        description: "03/06/2023 • HH Haladhara Swami Maharaj • ISKCON BHOPAL (BHEL)"
      },
      {
        id: 104,
        title: "How to Take Krsna Consciousness Wholeheartedly Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=LHVDZeEWmaA",
        duration: "1:36:40",
        description: "05/06/2023 • HH Haladhara Swami Maharaj • ISKCON BHOPAL (BHEL)"
      }
    ]
  },
  {
    id: 47,
    playlistName: "Initiation Ceremony",
    category: ["Initiation"],
    description: "Odia initiations • 2022–2023",
    language: "Odia",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/_YL8UZfGl3I/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Initiation Ceremony",
        youtubeUrl: "https://www.youtube.com/watch?v=_YL8UZfGl3I",
        duration: "3:52:06",
        description: "03/02/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Initiation Ceremony",
        youtubeUrl: "https://www.youtube.com/watch?v=3_8agS7kZJc",
        duration: "0:05:03",
        description: "07/09/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar • (Odia/English)"
      },
      {
        id: 103,
        title: "Initiation Ceremony (Rama Navami)",
        youtubeUrl: "https://www.youtube.com/watch?v=7T8xsFxtceM",
        duration: "2:52:54",
        description: "10/04/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      }
    ]
  },
  {
    id: 48,
    playlistName: "Initiation Ceremony",
    category: ["Initiation"],
    description: "English initiations • 2022–2024",
    language: "English",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/YJ3oIsthwA0/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Initiation Ceremony",
        youtubeUrl: "https://www.youtube.com/watch?v=YJ3oIsthwA0",
        duration: "0:06:00",
        description: "03/02/2023 • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Initiation Ceremony (Gadeigiri, Odisha)",
        youtubeUrl: "https://www.youtube.com/watch?v=xBTCYf7wphI",
        duration: "3:54:47",
        description: "12/02/2022 • HH Haladhara Swami Maharaj • Gadeigiri, Odisha"
      },
      {
        id: 103,
        title: "Initiation Lecture (ISKCON NYC)",
        youtubeUrl: "https://www.youtube.com/watch?v=6hc4YZJlcOQ",
        duration: "0:10:23",
        description: "19/08/2024 • HH Haladhara Swami Maharaj • ISKCON NYC"
      },
      {
        id: 104,
        title: "Initiation Lecture (ISKCON Antwerp, Belgium)",
        youtubeUrl: "https://www.youtube.com/watch?v=Zbmyn3Sv8W4",
        duration: "2:10:05",
        description: "26/03/2023 • HH Haladhara Swami Maharaj • ISKCON Antwerp, Belgium"
      },
      {
        id: 105,
        title: "Initiation Ceremony (Olasuni)",
        youtubeUrl: "https://www.youtube.com/watch?v=RhekhGmyNn4",
        duration: "2:10:18",
        description: "10/10/2023 • HH Haladhara Swami Maharaj • Olasuni"
      }
    ]
  },
  {
    id: 49,
    playlistName: "Initiation Ceremony",
    category: ["Initiation"],
    description: "Hindi initiations • 2024",
    language: "Hindi",
    location: "",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/9CgFla0nQQ8/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Initiation Ceremony (ISKCON Pattamundai)",
        youtubeUrl: "https://www.youtube.com/watch?v=9CgFla0nQQ8",
        duration: "3:18:24",
        description: "17/10/2024 • HH Haladhara Swami Maharaj • ISKCON PATTAMUNDAI"
      },
      {
        id: 102,
        title: "Initiation Lecture (Rama Navami)",
        youtubeUrl: "https://www.youtube.com/watch?v=yR7FSr14RcM",
        duration: "1:30:42",
        description: "17/04/2024 • HH Haladhara Swami Maharaj"
      }
    ]
  },
  {
    id: 50,
    playlistName: "Krishna Aghāsura Līlā",
    category: ["Srimad Bhagavatam"],
    description: "Bali Tour • English • Jul 2025 • Part 1–14",
    language: "English",
    location: "Bali",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/Tq-uRIDxDEo/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Krishna Aghāsura Līlā Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=Tq-uRIDxDEo",
        duration: "1:25:35",
        description: "21 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 102,
        title: "Krishna Aghāsura Līlā Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=TaJJ6dVKits",
        duration: "1:47:06",
        description: "22 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 103,
        title: "Krishna Aghāsura Līlā Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=SJ2xHmmQGns",
        duration: "1:26:01",
        description: "22 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 104,
        title: "Krishna Aghāsura Līlā Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=I5HnfGq98Dc",
        duration: "1:45:16",
        description: "23 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 105,
        title: "Krishna Aghāsura Līlā Part 5",
        youtubeUrl: "https://www.youtube.com/watch?v=EYp5G8pkq8c",
        duration: "1:13:02",
        description: "23 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 106,
        title: "Krishna Aghāsura Līlā Part 6",
        youtubeUrl: "https://www.youtube.com/watch?v=6b1TBgn2OjI",
        duration: "1:28:37",
        description: "24 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 107,
        title: "Krishna Aghāsura Līlā Part 7",
        youtubeUrl: "https://www.youtube.com/watch?v=w86NRmfCqNc",
        duration: "1:47:33",
        description: "25 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 108,
        title: "Krishna Aghāsura Līlā Part 8",
        youtubeUrl: "https://www.youtube.com/watch?v=MjeavBU2lpQ",
        duration: "1:52:49",
        description: "26 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 109,
        title: "Krishna Aghāsura Līlā Part 9",
        youtubeUrl: "https://www.youtube.com/watch?v=k_RMf28d5YM",
        duration: "1:22:45",
        description: "26 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 110,
        title: "Krishna Aghāsura Līlā Part 10",
        youtubeUrl: "https://www.youtube.com/watch?v=zpVtasBrYTU",
        duration: "2:00:45",
        description: "28 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 111,
        title: "Krishna Aghāsura Līlā Part 11",
        youtubeUrl: "https://www.youtube.com/watch?v=uRypggQCR4Y",
        duration: "1:54:32",
        description: "29 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 112,
        title: "Krishna Aghāsura Līlā Part 12",
        youtubeUrl: "https://www.youtube.com/watch?v=mRNs-nzCfZY",
        duration: "1:35:51",
        description: "29 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 113,
        title: "Krishna Aghāsura Līlā Part 13",
        youtubeUrl: "https://www.youtube.com/watch?v=wlqKxBbRCqc",
        duration: "1:51:56",
        description: "30 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      },
      {
        id: 114,
        title: "Krishna Aghāsura Līlā Part 14",
        youtubeUrl: "https://www.youtube.com/watch?v=xHUh-PmhH6s",
        duration: "1:33:04",
        description: "30 Jul 2025 • HH Haladhara Swami Maharaj • Bali"
      }
    ]
  },
  {
    id: 51,
    playlistName: "Kunti Devi's Prayers",
    category: ["Srimad Bhagavatam"],
    description: "Sri Sri Radha Rasesvara Ashram Bali • English • Jun–Jul 2022 • Part 1–15",
    language: "English",
    location: "Bali",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/PP_T8jrwqEc/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Kunti Devi's Prayers Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=PP_T8jrwqEc",
        duration: "2:05:31",
        description: "Sri Sri Radha Rasesvara Ashram Bali • HH Haladhara Swami Maharaj"
      },
      {
        id: 102,
        title: "Kunti Devi's Prayers Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=6Nn5wQjaAkw",
        duration: "1:48:04",
        description: "Sri Sri Radha Rasesvara Ashram Bali • HH Haladhara Swami Maharaj"
      },
      {
        id: 103,
        title: "Kunti Devi's Prayers Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=5XZ42Oi6_LY",
        duration: "2:23:00",
        description: "Sri Sri Radha Rasesvara Ashram Bali • HH Haladhara Swami Maharaj"
      },
      {
        id: 104,
        title: "Kunti Devi's Prayers Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=pt8rkT0fr10",
        duration: "1:46:56",
        description: "Sri Sri Radha Rasesvara Ashram Bali • HH Haladhara Swami Maharaj"
      },
      {
        id: 105,
        title: "Kunti Devi's Prayers Part 5",
        youtubeUrl: "https://www.youtube.com/watch?v=BEK-Npa4udM",
        duration: "2:26:24",
        description: "Sri Sri Radha Rasesvara Ashram Bali • HH Haladhara Swami Maharaj"
      },
      {
        id: 106,
        title: "Kunti Devi's Prayers Part 6",
        youtubeUrl: "https://www.youtube.com/watch?v=LAy6rsDOE4g",
        duration: "1:55:46",
        description: "Sri Sri Radha Rasesvara Ashram Bali • HH Haladhara Swami Maharaj"
      },
      {
        id: 107,
        title: "Kunti Devi's Prayers Part 7",
        youtubeUrl: "https://www.youtube.com/watch?v=nm37qmuCYP0&t=2s",
        duration: "2:02:32",
        description: "25 Jun 2022 • HH Haladhara Swami Maharaj • Sri Sri Radha Rasesvara Ashram Bali"
      },
      {
        id: 108,
        title: "Kunti Devi's Prayers Part 8",
        youtubeUrl: "https://www.youtube.com/watch?v=FFaN6n_VILQ",
        duration: "2:22:41",
        description: "25 Jun 2022 • HH Haladhara Swami Maharaj • Sri Sri Radha Rasesvara Ashram Bali"
      },
      {
        id: 109,
        title: "Kunti Devi's Prayers Part 9",
        youtubeUrl: "https://www.youtube.com/watch?v=JcCKl6N6H04&t=4s",
        duration: "2:11:21",
        description: "26 Jun 2022 • HH Haladhara Swami Maharaj • Sri Sri Radha Rasesvara Ashram Bali"
      },
      {
        id: 110,
        title: "Kunti Devi's Prayers Part 10",
        youtubeUrl: "https://www.youtube.com/watch?v=Sw4ZFTsY75Q",
        duration: "2:17:36",
        description: "27 Jun 2022 • HH Haladhara Swami Maharaj • Sri Sri Radha Rasesvara Ashram Bali"
      },
      {
        id: 111,
        title: "Kunti Devi's Prayers Part 11",
        youtubeUrl: "https://www.youtube.com/watch?v=a31MQgvoxzs",
        duration: "1:57:57",
        description: "27 Jun 2022 • HH Haladhara Swami Maharaj • Sri Sri Radha Rasesvara Ashram Bali"
      },
      {
        id: 112,
        title: "Kunti Devi's Prayers Part 12",
        youtubeUrl: "https://www.youtube.com/watch?v=DIJNJh8P9bI",
        duration: "1:59:45",
        description: "28 Jun 2022 • HH Haladhara Swami Maharaj • Sri Sri Radha Rasesvara Ashram Bali"
      },
      {
        id: 113,
        title: "Kunti Devi's Prayers Part 13",
        youtubeUrl: "https://www.youtube.com/watch?v=XalML_oyqoQ",
        duration: "1:37:04",
        description: "28 Jun 2022 • HH Haladhara Swami Maharaj • Sri Sri Radha Rasesvara Ashram Bali"
      },
      {
        id: 114,
        title: "Kunti Devi's Prayers Part 14",
        youtubeUrl: "https://www.youtube.com/watch?v=qXD8tyxC9zA",
        duration: "2:11:24",
        description: "01 Jul 2022 • HH Haladhara Swami Maharaj • Sri Sri Radha Rasesvara Ashram Bali"
      },
      {
        id: 115,
        title: "Kunti Devi's Prayers Part 15",
        youtubeUrl: "https://www.youtube.com/watch?v=eBQa9iLO-CY",
        duration: "1:19:12",
        description: "02 Jul 2022 • HH Haladhara Swami Maharaj • Sri Sri Radha Rasesvara Ashram Bali"
      }
    ]
  },
  {
    id: 52,
    playlistName: "Kunti Stuti",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Mayapur • English • Part 1–6",
    language: "English",
    location: "ISKCON MAYAPUR",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/LrE9Lly3jH0/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Kunti Stuti Part 1/6",
        youtubeUrl: "https://www.youtube.com/watch?v=LrE9Lly3jH0",
        duration: "1:54:41",
        description: "2019 • HH Haladhara Swami Maharaj • ISKCON MAYAPUR"
      },
      {
        id: 102,
        title: "Kunti Stuti Part 2/6",
        youtubeUrl: "https://www.youtube.com/watch?v=3ahwiLOxtDo",
        duration: "2:00:28",
        description: "2019 • HH Haladhara Swami Maharaj • ISKCON MAYAPUR"
      },
      {
        id: 103,
        title: "Kunti Stuti Part 3/6",
        youtubeUrl: "https://www.youtube.com/watch?v=n9Zx9e5apoU",
        duration: "2:08:45",
        description: "2019 • HH Haladhara Swami Maharaj • ISKCON MAYAPUR"
      },
      {
        id: 104,
        title: "Kunti Stuti Part 4/6",
        youtubeUrl: "https://www.youtube.com/watch?v=s2VRexpjW48",
        duration: "1:59:32",
        description: "05/03/2020 • HH Haladhara Swami Maharaj • ISKCON MAYAPUR"
      },
      {
        id: 105,
        title: "Kunti Stuti Part 5/6",
        youtubeUrl: "https://www.youtube.com/watch?v=sVYM1yNu5C8",
        duration: "2:08:11",
        description: "06/03/2020 • HH Haladhara Swami Maharaj • ISKCON MAYAPUR"
      },
      {
        id: 106,
        title: "Kunti Stuti Part 6/6",
        youtubeUrl: "https://www.youtube.com/watch?v=IjslNfQZVZ4",
        duration: "1:49:31",
        description: "08/03/2020 • HH Haladhara Swami Maharaj • ISKCON MAYAPUR"
      }
    ]
  },
  {
    id: 53,
    playlistName: "Mood Of Separation",
    category: ["Chaitanya Charitamrita"],
    description: "ISKCON Dallas • English • Apr 2025 • Session 1–5",
    language: "English",
    location: "ISKCON Dallas",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/vRdUbkb0vFc/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Mood Of Separation Session 1",
        youtubeUrl: "https://www.youtube.com/watch?v=vRdUbkb0vFc",
        duration: "1:04:56",
        description: "21/04/2025 • HH Haladhara Swami Maharaj • ISKCON Dallas"
      },
      {
        id: 102,
        title: "Mood Of Separation Session 2",
        youtubeUrl: "https://www.youtube.com/watch?v=WYElmoaVT7M",
        duration: "1:17:10",
        description: "21/04/2025 • HH Haladhara Swami Maharaj • ISKCON Dallas"
      },
      {
        id: 103,
        title: "Mood Of Separation Session 3",
        youtubeUrl: "https://www.youtube.com/watch?v=a0NAMwPjWWk",
        duration: "1:21:01",
        description: "22/04/2025 • HH Haladhara Swami Maharaj • ISKCON Dallas"
      },
      {
        id: 104,
        title: "Mood Of Separation Session 4",
        youtubeUrl: "https://www.youtube.com/watch?v=UUonswDy2n0",
        duration: "1:14:20",
        description: "22/04/2025 • HH Haladhara Swami Maharaj • ISKCON Dallas"
      },
      {
        id: 105,
        title: "Mood Of Separation Session 5",
        youtubeUrl: "https://www.youtube.com/watch?v=lR7z_VQW298",
        duration: "1:19:06",
        description: "23/04/2025 • HH Haladhara Swami Maharaj • ISKCON Dallas"
      }
    ]
  },
  {
    id: 54,
    playlistName: "Namahatta Mela Katha-Kirtana",
    category: ["Tattva"],
    description: "ISKCON Bhubaneswar • Odia • May 2022 • Day 1–2",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/rNzHlG_W57s/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Namahatta Mela Katha-Kirtana Day 1/2",
        youtubeUrl: "https://www.youtube.com/watch?v=rNzHlG_W57s",
        duration: "1:12:39",
        description: "21/05/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 102,
        title: "Namahatta Mela Katha-Kirtana Day 2/2",
        youtubeUrl: "https://www.youtube.com/watch?v=G0athe3Nh7g",
        duration: "1:35:50",
        description: "22/05/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      }
    ]
  },
  {
    id: 55,
    playlistName: "Namahatta Mela",
    category: ["Tattva"],
    description: "ISKCON Bhubaneswar • Dec 2024 • Day 1–3",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/ztBVQpTRTa4/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Namahatta Mela Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=ztBVQpTRTa4",
        duration: "1:05:50",
        description: "17/12/2024 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 102,
        title: "Namahatta Mela Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=U0tU7b8Y5dg",
        duration: "1:09:46",
        description: "19/12/2024 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 103,
        title: "Namahatta Mela Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=7G0aRy8n-g4",
        duration: "1:44:56",
        description: "20/12/2024 • Odia • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      }
    ]
  },
  {
    id: 56,
    playlistName: "Narsimha Katha",
    category: ["Festival Lecture"],
    description: "ISKCON Juhu • Hindi • May 2016 • Day 1–6",
    language: "Hindi",
    location: "ISKCON Juhu",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/Q-f5nHjwL7A/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Narsimha Katha Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=Q-f5nHjwL7A",
        duration: "1:39:35",
        description: "14/05/2016 • HH Haladhara Swami Maharaj • ISKCON Juhu"
      },
      {
        id: 102,
        title: "Narsimha Katha Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=lm9q6Iq1qsU",
        duration: "1:12:20",
        description: "15/05/2016 • HH Haladhara Swami Maharaj • ISKCON Juhu"
      },
      {
        id: 103,
        title: "Narsimha Katha Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=O2JhOaJGOy4",
        duration: "1:40:25",
        description: "16/05/2016 • HH Haladhara Swami Maharaj • ISKCON Juhu"
      },
      {
        id: 104,
        title: "Narsimha Katha Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=9kxkOOybjVA",
        duration: "1:58:17",
        description: "17/05/2016 • HH Haladhara Swami Maharaj • ISKCON Juhu"
      },
      {
        id: 105,
        title: "Narsimha Katha Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=0Retp_qVXkI",
        duration: "1:56:50",
        description: "18/05/2016 • HH Haladhara Swami Maharaj • ISKCON Juhu"
      },
      {
        id: 106,
        title: "Narsimha Katha Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=NQqB6qY2rwA",
        duration: "1:47:32",
        description: "19/05/2016 • HH Haladhara Swami Maharaj • ISKCON Juhu"
      }
    ]
  },
  {
    id: 57,
    playlistName: "Nityananda Prabhu Katha",
    category: ["Chaitanya Charitamrita"],
    description: "ISKCON Delhi • Hindi • Feb 2020 • Day 1–5 (Morning/Evening)",
    language: "Hindi",
    location: "ISKCON Delhi",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/GPKSOw-Pps0/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Nityananda Prabhu Katha Day 1 (Morning)",
        youtubeUrl: "https://www.youtube.com/watch?v=GPKSOw-Pps0",
        duration: "1:39:05",
        description: "01/02/2020 • Morning • HH Haladhara Swami Maharaj • ISKCON Delhi"
      },
      {
        id: 102,
        title: "Nityananda Prabhu Katha Day 1 (Evening)",
        youtubeUrl: "https://www.youtube.com/watch?v=JI7OqQbCf3s",
        duration: "1:40:14",
        description: "01/02/2020 • Evening • HH Haladhara Swami Maharaj • ISKCON Delhi"
      },
      {
        id: 103,
        title: "Nityananda Prabhu Katha Day 2 (Morning)",
        youtubeUrl: "https://www.youtube.com/watch?v=-u2Avot2qjs",
        duration: "1:43:08",
        description: "02/02/2020 • Morning • HH Haladhara Swami Maharaj • ISKCON Delhi"
      },
      {
        id: 104,
        title: "Nityananda Prabhu Katha Day 2 (Evening)",
        youtubeUrl: "https://www.youtube.com/watch?v=YcoU69i3xgk",
        duration: "1:39:52",
        description: "02/02/2020 • Evening • HH Haladhara Swami Maharaj • ISKCON Delhi"
      },
      {
        id: 105,
        title: "Nityananda Prabhu Katha Day 3 (Morning)",
        youtubeUrl: "https://www.youtube.com/watch?v=PbzoLPwuDIA",
        duration: "1:43:16",
        description: "03/02/2020 • Morning • HH Haladhara Swami Maharaj • ISKCON Delhi"
      },
      {
        id: 106,
        title: "Nityananda Prabhu Katha Day 3 (Evening)",
        youtubeUrl: "https://www.youtube.com/watch?v=JJ0khBP-Fzw",
        duration: "1:34:03",
        description: "03/02/2020 • Evening • HH Haladhara Swami Maharaj • ISKCON Delhi"
      },
      {
        id: 107,
        title: "Nityananda Prabhu Katha Day 4 (Morning)",
        youtubeUrl: "https://www.youtube.com/watch?v=4ebDnzOOwIw",
        duration: "1:52:38",
        description: "04/02/2020 • Morning • HH Haladhara Swami Maharaj • ISKCON Delhi"
      },
      {
        id: 108,
        title: "Nityananda Prabhu Katha Day 4 (Evening)",
        youtubeUrl: "https://www.youtube.com/watch?v=01FYYlVzugg",
        duration: "1:49:46",
        description: "04/02/2020 • Evening • HH Haladhara Swami Maharaj • ISKCON Delhi"
      },
      {
        id: 109,
        title: "Nityananda Prabhu Katha Day 5 (Morning)",
        youtubeUrl: "https://www.youtube.com/watch?v=stZGQGIk4CA",
        duration: "1:52:23",
        description: "05/02/2020 • Morning • HH Haladhara Swami Maharaj • ISKCON Delhi"
      }
    ]
  },
  {
    id: 58,
    playlistName: "Nityananda Prabhu Katha Kirtan",
    category: ["Chaitanya Charitamrita"],
    description: "Kanpur • Hindi • Feb 2021 • Session 1–3",
    language: "Hindi",
    location: "Kanpur",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/LZooUx2BJMI/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Nityananda Prabhu Katha Kirtan Session 1/3",
        youtubeUrl: "https://www.youtube.com/watch?v=LZooUx2BJMI",
        duration: "2:01:52",
        description: "22/02/2021 • HH Haladhara Swami Maharaj • Kanpur"
      },
      {
        id: 102,
        title: "Nityananda Prabhu Katha Kirtan Session 2/3",
        youtubeUrl: "https://www.youtube.com/watch?v=vFKfIlIlyUc",
        duration: "2:17:55",
        description: "23/02/2021 • HH Haladhara Swami Maharaj • Kanpur"
      },
      {
        id: 103,
        title: "Nityananda Prabhu Katha Kirtan Session 3/3",
        youtubeUrl: "https://www.youtube.com/watch?v=kq6LyTV1Ibs",
        duration: "1:30:23",
        description: "24/02/2021 • HH Haladhara Swami Maharaj • Kanpur"
      }
    ]
  },
  {
    id: 59,
    playlistName: "Prthu Maharaja Carita",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Bhubaneswar • Odia • Nov 2023 • Day 1–7",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/Iq6FmGckwZE/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Prthu Maharaja Carita - 2 Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=Iq6FmGckwZE",
        duration: "2:01:53",
        description: "04/11/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 102,
        title: "Prthu Maharaja Carita - 2 Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=ujTHTnPdgXg",
        duration: "2:05:34",
        description: "05/11/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 103,
        title: "Prthu Maharaja Carita - 2 Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=rcAyj0K0Vac",
        duration: "2:23:29",
        description: "06/11/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 104,
        title: "Prthu Maharaja Carita - 2 Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=wtwpFbOHjaI",
        duration: "2:13:40",
        description: "07/11/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 105,
        title: "Prthu Maharaja Carita - 2 Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=z5I89lVAmlE",
        duration: "2:16:08",
        description: "08/11/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 106,
        title: "Prthu Maharaja Carita - 2 Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=S3ByflFY5hY",
        duration: "2:12:29",
        description: "09/11/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 107,
        title: "Prthu Maharaja Carita - 2 Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=7SPONgoKK4M",
        duration: "1:36:49",
        description: "10/11/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      }
    ]
  },
  {
    id: 60,
    playlistName: "Prthu Maharaja Charitra",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Bhubaneswar • Odia • Aug 2023 • Day 1–7",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/6EfY4C5SkjQ/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Prthu Maharaja Charitra Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=6EfY4C5SkjQ",
        duration: "1:48:46",
        description: "20/08/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 102,
        title: "Prthu Maharaja Charitra Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=688qixWmAXk",
        duration: "1:56:26",
        description: "21/08/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 103,
        title: "Prthu Maharaja Charitra Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=tBLTh29UZEM",
        duration: "2:06:18",
        description: "22/08/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 104,
        title: "Prthu Maharaja Charitra Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=zIbSTY3H8ug",
        duration: "2:11:46",
        description: "23/08/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 105,
        title: "Prthu Maharaja Charitra Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=ryI8yM5Wy2A",
        duration: "2:02:29",
        description: "24/08/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 106,
        title: "Prthu Maharaja Charitra Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=10NL3BQmopI",
        duration: "2:06:45",
        description: "25/08/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 107,
        title: "Prthu Maharaja Charitra Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=Knvt4oG0rx8",
        duration: "1:45:53",
        description: "26/08/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      }
    ]
  },
  {
    id: 61,
    playlistName: "Putana Uddhara Lila",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Nayagarh, Odisha • Odia • Sep 2023 • Day 1–5",
    language: "Odia",
    location: "ISKCON Nayagarh, Odisha",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/1NffxsAhy_0/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Putana Uddhara Lila Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=1NffxsAhy_0",
        duration: "1:50:29",
        description: "01/09/2023 • HH Haladhara Swami Maharaj • ISKCON Nayagarh, Odisha"
      },
      {
        id: 102,
        title: "Putana Uddhara Lila Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=a5e8PwdP8YI",
        duration: "2:11:12",
        description: "02/09/2023 • HH Haladhara Swami Maharaj • ISKCON Nayagarh, Odisha"
      },
      {
        id: 103,
        title: "Putana Uddhara Lila Day 3",
        youtubeUrl: "https://www.youtube.com/watch?v=sChda5sM78w",
        duration: "2:03:00",
        description: "03/09/2023 • HH Haladhara Swami Maharaj • ISKCON Nayagarh, Odisha"
      },
      {
        id: 104,
        title: "Putana Uddhara Lila Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=SpR3OMwSL94",
        duration: "2:14:28",
        description: "04/09/2023 • HH Haladhara Swami Maharaj • ISKCON Nayagarh, Odisha"
      },
      {
        id: 105,
        title: "Putana Uddhara Lila Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=-ao8uM-NuEg",
        duration: "1:39:33",
        description: "05/09/2023 • HH Haladhara Swami Maharaj • ISKCON Nayagarh, Odisha"
      }
    ]
  },
  {
    id: 62,
    playlistName: "Samudra Manthana",
    category: ["Srimad Bhagavatam"],
    description: "ISKCON Bhubaneswar • Odia • Jan 2023 • Part 1–14",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/xWuZL5CfqZE/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Samudra Manthana Part 1",
        youtubeUrl: "https://www.youtube.com/watch?v=xWuZL5CfqZE",
        duration: "1:13:36",
        description: "25/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 102,
        title: "Samudra Manthana Part 2",
        youtubeUrl: "https://www.youtube.com/watch?v=W0Fnsk4rHRk",
        duration: "2:34:26",
        description: "25/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 103,
        title: "Samudra Manthana Part 3",
        youtubeUrl: "https://www.youtube.com/watch?v=asgaLPsvD34",
        duration: "1:23:29",
        description: "26/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 104,
        title: "Samudra Manthana Part 4",
        youtubeUrl: "https://www.youtube.com/watch?v=2bCcl9TxVHs",
        duration: "2:13:41",
        description: "26/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 105,
        title: "Samudra Manthana Part 5",
        youtubeUrl: "https://www.youtube.com/watch?v=7wFjS5uiIt8",
        duration: "1:37:42",
        description: "27/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 106,
        title: "Samudra Manthana Part 6",
        youtubeUrl: "https://www.youtube.com/watch?v=Z1SURFj9UTE",
        duration: "2:13:30",
        description: "27/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 107,
        title: "Samudra Manthana Part 7",
        youtubeUrl: "https://www.youtube.com/watch?v=Seji1ivgnaA",
        duration: "1:33:19",
        description: "28/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 108,
        title: "Samudra Manthana Part 8",
        youtubeUrl: "https://www.youtube.com/watch?v=W2fVWJaRoYE",
        duration: "2:10:44",
        description: "28/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 109,
        title: "Samudra Manthana Part 9",
        youtubeUrl: "https://www.youtube.com/watch?v=f6dAKouANJY",
        duration: "1:46:54",
        description: "29/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 110,
        title: "Samudra Manthana Part 10",
        youtubeUrl: "https://www.youtube.com/watch?v=0SxTyDM1JF0",
        duration: "1:58:32",
        description: "29/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 111,
        title: "Samudra Manthana Part 11",
        youtubeUrl: "https://www.youtube.com/watch?v=Rw9YSGj_rdU",
        duration: "1:32:20",
        description: "30/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 112,
        title: "Samudra Manthana Part 12",
        youtubeUrl: "https://www.youtube.com/watch?v=M6LvbU62MdA",
        duration: "1:59:40",
        description: "30/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 113,
        title: "Samudra Manthana Part 13",
        youtubeUrl: "https://www.youtube.com/watch?v=XRoUpYNihVk",
        duration: "2:01:16",
        description: "31/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 114,
        title: "Samudra Manthana Part 14",
        youtubeUrl: "https://www.youtube.com/watch?v=qP--av3GYtk",
        duration: "2:13:17",
        description: "31/01/2023 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      }
    ]
  },
  {
    id: 63,
    playlistName: "Saranagati - The Essence from the lives of Great Souls",
    category: ["Other"],
    description: "ISKCON Mayapur • English • Mar 2024 • Part 1–3",
    language: "English",
    location: "ISKCON Mayapur",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/-rwC8Diku_8/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Saranagati Part 1/3",
        youtubeUrl: "https://www.youtube.com/watch?v=-rwC8Diku_8",
        duration: "2:06:59",
        description: "21/03/2024 • HH Haladhara Swami Maharaj • ISKCON Mayapur"
      },
      {
        id: 102,
        title: "Saranagati Part 2/3",
        youtubeUrl: "https://www.youtube.com/watch?v=s_ByYpaJ1rk",
        duration: "1:55:36",
        description: "22/03/2024 • HH Haladhara Swami Maharaj • ISKCON Mayapur"
      },
      {
        id: 103,
        title: "Saranagati Part 3/3",
        youtubeUrl: "https://www.youtube.com/watch?v=J_CNj5rtUXs",
        duration: "1:52:27",
        description: "23/03/2024 • HH Haladhara Swami Maharaj • ISKCON Mayapur"
      }
    ]
  },
  {
    id: 64,
    playlistName: "Saranagati",
    category: ["Other"],
    description: "ISKCON Nasik • Hindi • Dec 2022 • Part 1–5",
    language: "Hindi",
    location: "ISKCON Nasik",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/olE5LGDnkJI/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Saranagati Part 1/5",
        youtubeUrl: "https://www.youtube.com/watch?v=olE5LGDnkJI",
        duration: "1:56:22",
        description: "11/12/2022 • HH Haladhara Swami Maharaj • ISKCON Nasik"
      },
      {
        id: 102,
        title: "Saranagati Part 2/5",
        youtubeUrl: "https://www.youtube.com/watch?v=-wTuByFJrmE",
        duration: "1:24:30",
        description: "11/12/2022 • HH Haladhara Swami Maharaj • ISKCON Nasik"
      },
      {
        id: 103,
        title: "Saranagati Part 3/5",
        youtubeUrl: "https://www.youtube.com/watch?v=xHxdpInmZk4",
        duration: "1:24:43",
        description: "12/12/2022 • HH Haladhara Swami Maharaj • ISKCON Nasik"
      },
      {
        id: 104,
        title: "Saranagati Part 4/5",
        youtubeUrl: "https://www.youtube.com/watch?v=liCZWKKkuIc",
        duration: "1:37:05",
        description: "13/12/2022 • HH Haladhara Swami Maharaj • ISKCON Nasik"
      },
      {
        id: 105,
        title: "Saranagati Part 5/5",
        youtubeUrl: "https://www.youtube.com/watch?v=d51HuFYpqkA",
        duration: "1:34:39",
        description: "14/12/2022 • HH Haladhara Swami Maharaj • ISKCON Nasik"
      }
    ]
  },
  {
    id: 65,
    playlistName: "Sikshastakam",
    category: ["Chaitanya-Charitamrita"],
    description: "ISKCON Vrindavan • English • Oct 2019 • Day 1–6",
    language: "English",
    location: "ISKCON Vrindavan",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/djt_ygUbhEM/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Sikshastakam Day 1/6",
        youtubeUrl: "https://www.youtube.com/watch?v=djt_ygUbhEM",
        duration: "2:27:43",
        description: "24/10/2019 • HH Haladhara Swami Maharaj • ISKCON Vrindavan"
      },
      {
        id: 102,
        title: "Sikshastakam Day 2/6",
        youtubeUrl: "https://www.youtube.com/watch?v=KqHFz82By4Y",
        duration: "2:04:19",
        description: "25/10/2019 • HH Haladhara Swami Maharaj • ISKCON Vrindavan"
      },
      {
        id: 103,
        title: "Sikshastakam Day 3/6",
        youtubeUrl: "https://www.youtube.com/watch?v=kbeG73_dAIc",
        duration: "1:54:59",
        description: "26/10/2019 • HH Haladhara Swami Maharaj • ISKCON Vrindavan"
      },
      {
        id: 104,
        title: "Sikshastakam Day 4/6",
        youtubeUrl: "https://www.youtube.com/watch?v=hnx9Y5hiyZY",
        duration: "2:00:23",
        description: "27/10/2019 • HH Haladhara Swami Maharaj • ISKCON Vrindavan"
      },
      {
        id: 105,
        title: "Sikshastakam Day 5/6",
        youtubeUrl: "https://www.youtube.com/watch?v=ZIafqPXk8IY",
        duration: "2:01:49",
        description: "28/10/2019 • HH Haladhara Swami Maharaj • ISKCON Vrindavan"
      },
      {
        id: 106,
        title: "Sikshastakam Day 6/6",
        youtubeUrl: "https://www.youtube.com/watch?v=KNEaGYlNun8",
        duration: "1:56:49",
        description: "30/10/2019 • HH Haladhara Swami Maharaj • ISKCON Vrindavan"
      }
    ]
  },
  {
    id: 66,
    playlistName: "Sravana Utsava",
    category: ["Festival Lecture"],
    description: "ISKCON Mayapur • English • Feb 2022 • Day 1–4",
    language: "English",
    location: "ISKCON Mayapur",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/Btkz2FgH6c8/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Sravana Utsava Day 1/4",
        youtubeUrl: "https://www.youtube.com/watch?v=Btkz2FgH6c8",
        duration: "1:32:37",
        description: "25/02/2022 • HH Haladhara Swami Maharaj • ISKCON Mayapur"
      },
      {
        id: 102,
        title: "Sravana Utsava Day 2/4",
        youtubeUrl: "https://www.youtube.com/watch?v=HsJIS7Ja5ZM",
        duration: "1:30:08",
        description: "26/02/2022 • HH Haladhara Swami Maharaj • ISKCON Mayapur"
      },
      {
        id: 103,
        title: "Sravana Utsava Day 3/4",
        youtubeUrl: "https://www.youtube.com/watch?v=PHRzV2up9hM",
        duration: "1:32:59",
        description: "27/02/2022 • HH Haladhara Swami Maharaj • ISKCON Mayapur"
      },
      {
        id: 104,
        title: "Sravana Utsava Day 4/4",
        youtubeUrl: "https://www.youtube.com/watch?v=IxeGGtQFqdk",
        duration: "1:33:29",
        description: "28/02/2022 • HH Haladhara Swami Maharaj • ISKCON Mayapur"
      }
    ]
  },
  {
    id: 67,
    playlistName: "Sri Gour Kathamrita",
    category: ["Chaitanya-Charitamrita"],
    description: "ISKCON Bhubaneswar • Odia • Mar 2022 • Day 1–7",
    language: "Odia",
    location: "ISKCON Bhubaneswar",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/xBgrdmvhLz4/maxresdefault.jpg",
    videos: [
      {
        id: 101,
        title: "Sri Gour Kathamrita Day 1",
        youtubeUrl: "https://www.youtube.com/watch?v=xBgrdmvhLz4",
        duration: "2:10:01",
        description: "09/03/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 102,
        title: "Sri Gour Kathamrita Day 2",
        youtubeUrl: "https://www.youtube.com/watch?v=5dW-6tvXrm0",
        duration: "2:06:13",
        description: "10/03/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 103,
        title: "Sri Gour Kathamrita Day 3 (Part 1)",
        youtubeUrl: "https://www.youtube.com/watch?v=sv0L_2HgFJA",
        duration: "0:22:45",
        description: "11/03/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 104,
        title: "Sri Gour Kathamrita Day 3 (Part 2)",
        youtubeUrl: "https://www.youtube.com/watch?v=GWneBIemonU",
        duration: "1:33:47",
        description: "11/03/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 105,
        title: "Sri Gour Kathamrita Day 4",
        youtubeUrl: "https://www.youtube.com/watch?v=HjcsuyuPCTE",
        duration: "2:08:52",
        description: "12/03/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 106,
        title: "Sri Gour Kathamrita Day 5",
        youtubeUrl: "https://www.youtube.com/watch?v=41ofUDvLkHM",
        duration: "2:16:30",
        description: "13/03/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 107,
        title: "Sri Gour Kathamrita Day 6",
        youtubeUrl: "https://www.youtube.com/watch?v=H9IiYzPQy1c",
        duration: "2:14:17",
        description: "14/03/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      },
      {
        id: 108,
        title: "Sri Gour Kathamrita Day 7",
        youtubeUrl: "https://www.youtube.com/watch?v=zTOy0cuFOaY",
        duration: "2:02:54",
        description: "15/03/2022 • HH Haladhara Swami Maharaj • ISKCON Bhubaneswar"
      }
    ]
  },
  {
    id: 68,
    playlistName: "Srimad Bhagavad Gita (HH Haladhara Swami Maharaj)",
    category: ["Bhagvad Gita"],
    description: "YouTube playlist • Jun 2021 – Dec 2024 • (Shown under Odia section)",
    language: "Odia",
    location: "YouTube",
    icon: "▶️",
    thumbnail: "https://img.youtube.com/vi/mNwauTGIAlo/maxresdefault.jpg",
    videos: bhagavadGitaHaladharaSwamiVideos
  }
];

export const cryingSchoolVideoData = [
  ...cryingSchoolVideoDataEnglish,
  ...cryingSchoolVideoDataOdia,
  ...cryingSchoolVideoDataHindi
];

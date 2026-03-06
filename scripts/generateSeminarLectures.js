// Node.js script to generate Seminar Lectures playlist JSON from TSV data
const fs = require('fs');
const path = require('path');

// Paste your TSV data here as a string (replace ... with all lines from id 263 to 454)
const tsvData = `
327	ब्रहमचारी क्लास – ययाति महाराज की अनुभूति	Bramhachari Class	इस्कॉन पुणे कैम्प	2003-06-17	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Brahmachari_Class/Haladhar_Sw_Brahmachari_Class_Hindi_-_Realizations_of_Yayati_Maharaj_-_2003-06-17_Camp_Pune.mp3	1:36:17	Hindi	
328	ब्रहमचारी क्लास	Bramhachari Class	इस्कॉन पुणे कैम्प	2004-06-17	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Brahmachari_Class/Haladhar_Sw_Brahmachari_Class_Hindi_-_2004-06-17_Camp_Pune.mp3	0:52:31	Hindi	
329	ब्रहमचारी क्लास	Bramhachari Class	इस्कॉन उत्तम नगर पुणे	2018-06-26	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Brahmachari_Class/Haladhar_Sw_Various_Hindi_-_Brahmchari_Class_-_2018-06-26_ISKCON_Uttam_Nagar.mp3	1:16:24	Hindi	
330	ब्रहमचारी क्लास – ब्रह्मचारियों के लिए कठिन चुनोतियाँ	Bramhachari Class	इस्कॉन मायापुर	2022-03	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Brahmachari_Class/Haladhar_Sw_Brahmachari_Class_Hindi_-_The_Strong_Challanges_to_Bramhacharis_-_2022-03_Mayapur.mp3	1:22:09	Hindi	
331	ब्रहमचारी क्लास – एक कठोर ब्रह्मचर्य जीवन	Bramhachari Class	इस्कॉन नासिक	2022-12-14	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Brahmachari_Class/Haladhar_Sw_Brahmachari_Class_Hindi_-_A_rigid_Bramchari_Life_-_2022-12-14_Nasik.mp3	1:22:32	Hindi	
332	ब्रहमचारी क्लास - भाग-01	Bramhachari Class	इस्कॉन कानपुर	2023-05-07	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Brahmachari_Class/Haladhar_Sw_Brahmachari_Class_Hindi_-_Day-01_-_2023-05-07_Kanpur.mp3	1:52:52	Hindi	
333	ब्रहमचारी क्लास – प्रशन्नो/उत्तरी	Bramhachari Class	इस्कॉन कानपुर	2023-05-07	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Brahmachari_Class/Haladhar_Sw_Brahmachari_Class_Hindi_-_Q%26A_-_2023-05-07_Kanpur.mp3	1:32:52	Hindi	
334	ब्रहमचारी क्लास – ब्रह्मचारियों के लिए आहार भाग-02	Bramhachari Class	इस्कॉन कानपुर	2023-05-08	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Brahmachari_Class/Haladhar_Sw_Brahmachari_Class_Hindi_-_Diet_for_Bramhacharis_Day-02_-_2023-05-08_Kanpur.mp3	2:36:32	Hindi	
335	ब्रहमचारी क्लास – ब्रह्मचारियों के लिए सुनहरे नियम	Bramhachari Class	इस्कॉन पुणे		https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Brahmachari_Class/Haladhar_Sw_Brahmachari_Class_Hindi_-_Golden_Rules_for_Bramhacharis_-_Pune.mp3	2:10:06	Hindi	
336	ब्रहमचारी क्लास – प्रशन्नो/उत्तरी ब्रह्मचारी जीवन के लिए भाग-03	Bramhachari Class	इस्कॉन कानपुर	2023-05-09	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Brahmachari_Class/Haladhar_Sw_Brahmachari_Class_Hindi_-_Q%26A_on_Bramhachari_Life_Day-03_-_2023-05-09_Kanpur.mp3	2:46:58	Hindi	
`;

function parseTsv(tsv) {
  return tsv
    .trim()
    .split('\n')
    .map(line => {
      const [id, title, category, location, date, audioUrl, duration, language] = line.split('\t');
      return {
        id: Number(id),
        title: title,
        audioUrl: audioUrl || "",
        duration: duration || "",
        date: date || "",
        location: location || "",
        language: language || "Hindi",
        hasTranscription: false,
        transcription: ""
      };
    });
}

const audios = parseTsv(tsvData);

const seminarLecturesObject = {
  id: 4,
  playlistName: "ब्रहमचारी क्लास",
  category: ["ब्रहमचारी क्लास"],
  description: "ब्रहमचारी क्लास Hindi audio lectures",
  language: "Hindi",
  location: "इस्कॉन पुणे",
  icon: "",
  audios
};

const output = `module.exports = ${JSON.stringify(seminarLecturesObject, null, 2)};\n`;

fs.writeFileSync(
  path.join(__dirname, '../src/data/SeminarLectures.generated.js'),
  output,
  'utf8'
);

console.log('SeminarLectures.generated.js created!');

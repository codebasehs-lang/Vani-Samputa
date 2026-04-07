// Node.js script to generate Seminar Lectures playlist JSON from TSV data
const fs = require('fs');
const path = require('path');

// Paste your TSV data here as a string (replace ... with all lines from id 263 to 454)
const tsvData = `
0	पाप कर्म हेतु सर्वोच्च प्रायश्चित	One Day Classes	इस्कॉन भोपाल	2024-03-16	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Paap_Karma_Hetu_Sarvocch_Prayscitta_-_2024-03-16_ISKCON_Bhopal_BHEL.mp3	1:05:47	Hindi	
357	हरिनाम की महिमा	One Day Classes	इस्कॉन भोपाल	2024-03-16	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Guru_Tattva.mp3	1:44:57	Hindi	
358	वास्तविक सुख प्राप्ति का एक मात्र उपाय	One Day Classes	इस्कॉन भोपाल	2024-03-16	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Vastavik_Sukh_Prapti_Ka_Ekmatra_Upaya_-_2024-03-16_ISKCON_Bhopal_BHEL.mp3	0:58:26	Hindi	
359	अपराध कारण, परिणाम और बचने का उपाय	One Day Classes	इस्कॉन भोपाल	2024-03-17			Hindi	
360	भजन के 26 नियम	One Day Classes	इस्कॉन भोपाल	2024-03-17	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Bhajan_ke_26_Niyam_-_2024-03-17_ISKCON_Bhopal_BHEL.mp3	1:16:34	Hindi	
361	मंदिर जाने का लाभ	One Day Classes	इस्कॉन भोपाल	2024-03-17			Hindi	
362	प्रेम पुरुषोत्तम श्रीमान महाप्रभु	One Day Classes	इस्कॉन भोपाल	2024-03-18	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Prem_Purushottam_Sriman_Mahaprabhu_-_2024-03-18_ISKCON_Bhopal_BHEL.mp3	1:15:09	Hindi	
363	भक्त भागवत महिमा	One Day Classes	इस्कॉन वृन्दावन	2018-11-04			Hindi	
364	आध्यात्मिक जीवन में प्रगति कैसे करें	One Day Classes	सुरीनाम	2019-07-25			Hindi	
365	रविवार कक्षा	One Day Classes	इस्कॉन उज्जैन	2021-03-07	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Sunday_Class_-_2021-03-07_ISKCON_Ujjain.mp3	1:06:59	Hindi	
366	श्री क्षेत्र परिक्रमा के पीछे का असली मनोभाव	One Day Classes	पुरी	2022-11-11	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Real_Mood_Behind_Srikshetra_Parikrama_-_2022-11-11_Puri.mp3	1:13:55	Hindi	
367	क्या हमारा हृदय कृष्ण के लिए रोता है?	One Day Classes		2022-11-12	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Divine_Teachings_of_Chaitanya_Arrival_-_2025-11-28_ISKCON_Bhopal_BYC.mp3	0:37:48	Hindi	
368	भक्ति के विभिन्न स्तर	One Day Classes	इस्कॉन कानपुर	2023-05-07	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Stages_of_Bhakti_-_2023-05-07_ISKCON_Kanpur.mp3	1:41:45	Hindi	
369	स्नान पूर्णिमा की महिमा	One Day Classes	इस्कॉन भोपाल	2023-06-04	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Festivals/Haladhar_Sw_Festivals_Hindi_-_Glories_of_Snana_Purnima_-_2023-06-04_ISKCON_BHEL.mp3	0:52:11	Hindi	
370	श्रीकृष्ण ही परम पुरुष भगवान हैं	One Day Classes	इस्कॉन सदाशिवपेट	2023-07-05	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Sri_Krishna_hi_param_purush_bhagvan_hai_-_2023-07-05_ISKCON%20Sadashivpet.mp3	0:56:52	Hindi	
371	भक्ति से सभी समस्याएँ दूर होती हैं	One Day Classes	इस्कॉन सदाशिवपेट	2023-07-05	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Bhakti_se_samast_Samasya_dur_hoti_hai_-_2023-07-05_ISKCON%20Sadashivpet.mp3	0:58:05	Hindi	
372	गुरु-निष्ठा की महिमा	One Day Classes	इस्कॉन छिप्पीवाड़ा	2024-02-11			Hindi	
373	शुद्ध नाम भजन के विभिन्न बाधक	One Day Classes	इस्कॉन भोपाल	2024-03-17	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Shuddha_Naam_Bhajan_Ke_Vibhinna_Badhak_-_2024-03-17_ISKCON_Bhopal_BHEL.mp3	0:02:15	Hindi	
374	आदर्श गृहस्थ जीवन	One Day Classes	इस्कॉन कानपुर	2024-05-05	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Adarsh_Gruhastha_Jivan_-_2024-05-05_ISKCON_Kanpur.mp3	1:33:45	Hindi	
375	परम पूज्य गोपाल कृष्ण गोस्वामी महाराज जी का महिमागान	One Day Classes	इस्कॉन कानपुर	2024-05-05			Hindi	
376	भगवान बहुत दयालु हैं	One Day Classes	इस्कॉन चौपाटी	2024-05-19			Hindi	
377	हम नरसिंहदेव की आराधना क्यों करते हैं?	One Day Classes	इस्कॉन चौपाटी	2024-05-20	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Hum_NarsimhaDev_Ki_Aradhna_Kyun_Karte_Hain_-_2024-05-20_ISKCON_Chowpatty.mp3	1:12:40	Hindi	
378	भगवान नरसिंहदेव के आविर्भाव का कारण	One Day Classes	इस्कॉन चौपाटी	2024-05-21	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Festivals/Haladhar_Sw_Festivals_Hindi_-_Bhagavan_Nrshimhadev_Ke_Avirbhav_Ka_Karan_-_2024-05-21_ISKCON_Chowpatty.mp3	1:18:41	Hindi	
379	भगवत-प्राप्ति का सहज उपाय	One Day Classes	इस्कॉन एन.वी.सी.सी पुणे	2024-07-20	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Bhagavad_Prapti_Ka_Sahaj_Upaya_Pune_Saswad_-_2024-07-20_ISKCON_NVCC_Pune.mp3	1:10:27	Hindi	
380	गुरु पूर्णिमा का महत्त्व – गुरु हमारे जीवन के लिए क्यों महत्वपूर्ण हैं?	One Day Classes	इस्कॉन उत्तम नगर पुणे	2024-07-21	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_House_Program-Guru_Purnima_Ka_Mahattva_-_2024-07-21_Pune_Uttam_Nagar.mp3	1:04:11	Hindi	
381	हाउस प्रोग्राम – एकांतिक भक्ति	One Day Classes	इस्कॉन एन.वी.सी.सी पुणे	2024-07-22	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_House_Program-Aikantik_Bhakti_-_2024-07-22_Pune_NVCC.mp3	1:21:09	Hindi	
382	श्रवण-पंथ: श्रवण की प्रक्रिया	One Day Classes	इस्कॉन बी.सी.ई.सी पुणे कैम्प	2024-07-23	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Shravan_Pantha-The_Process_of_Hearing_-_2024-07-23_ISKCON_BCEC_Pune_Camp.mp3	1:11:02	Hindi	
383	सरलता ही वैष्णवता है	One Day Classes	इस्कॉन सिनसिनाटी	2024-08-10	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Saralata_hi_Vaishnavata_-_2024-08-10_ISKCON_Cincinnati.mp3	1:34:05	Hindi	
384	भारत के आध्यात्मिक एवं सांस्कृतिक मूल्य	One Day Classes	इस्कॉन कोलंबस	2024-08-12	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_Bharat_ke_adhyatmik_evam_sanskrutik_mulya_-_2024-08-12_ISKCON_Columbus.mp3	1:03:10	Hindi	
385	कार्तिक माह की महिमा	One Day Classes	इस्कॉन गुरुकुल वृन्दावन	2024-10-26	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/English_Lectures/Srimad_Bhagavatam/Canto-10/Haladhar_Sw_SB_10-66-06_-_2024-10-26_ISKCON_Vrindavan.mp3	1:10:39	Hindi	
386	एक बढिया भक्त कैसे बनें?	One Day Classes	एसएफ बे एरिया	2025-04-11	https://audio.iskcondesiretree.com/02_-_ISKCON_Swamis/ISKCON_Swamis_-_D_to_P/His_Holiness_Haladhar_Swami/Hindi_Lectures/Various/Haladhar_Sw_Various_Hindi_-_How_to_become_a_better_Devotee_-_2025-04-11_San_Francisco.mp3	0:31:37	Hindi	
387	गुरु की अंतरंग उपस्थिति का साक्षात्कार शिष्य को कब होता है?	One Day Classes					Hindi	
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
  playlistName: "One Day Classes",
  category: ["One Day Classes"],
  description: "One Day Classes Hindi audio lectures",
  language: "Hindi",
  location: "Multiple Locations",
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

const fs = require('fs');
const path = require('path');

const haditsDir = path.join(__dirname, '..', 'data', 'hadits');
if (!fs.existsSync(haditsDir)) {
  fs.mkdirSync(haditsDir, { recursive: true });
}

// 9 Books Curated Collections with Authentic Texts & Translations
const hadithCollections = {
  bukhari: {
    book: "Shahih Bukhari",
    author: "Imam al-Bukhari (194–256 H)",
    totalHadith: 7275,
    hadiths: [
      {
        number: 1,
        arab: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
        indo: "Sesungguhnya setiap amal perbuatan tergantung pada niatnya, dan sesungguhnya setiap orang (akan dibalas) berdasarkan apa yang dia niatkan.",
        narrator: "Umar bin Khaththab radhiyallahu 'anhu",
        topic: "Niat & Ikhlas"
      },
      {
        number: 2,
        arab: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
        indo: "Seorang muslim sejati adalah orang yang muslim lainnya selamat dari gangguan lisan dan tangannya.",
        narrator: "Abdullah bin Amr radhiyallahu 'anhu",
        topic: "Akhlak Sesama Muslim"
      },
      {
        number: 13,
        arab: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
        indo: "Tidak beriman salah seorang di antara kalian sampai dia mencintai saudaranya sebagaimana dia mencintai dirinya sendiri.",
        narrator: "Anas bin Malik radhiyallahu 'anhu",
        topic: "Kesempurnaan Iman & Cinta Saudara"
      },
      {
        number: 6018,
        arab: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
        indo: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya.",
        narrator: "Utsman bin Affan radhiyallahu 'anhu",
        topic: "Keutamaan Al-Qur'an"
      }
    ]
  },
  muslim: {
    book: "Shahih Muslim",
    author: "Imam Muslim (206–261 H)",
    totalHadith: 7500,
    hadiths: [
      {
        number: 8,
        arab: "الإِيمَانُ أَنْ تُؤْمِنَ بِاللَّهِ، وَمَلاَئِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ",
        indo: "Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman kepada takdir yang baik maupun yang buruk.",
        narrator: "Umar bin Khaththab radhiyallahu 'anhu (Hadits Jibril)",
        topic: "Rukun Iman"
      },
      {
        number: 223,
        arab: "الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ",
        indo: "Bersuci itu sebagian dari iman, dan ucapan Alhamdulillah memenuhi timbangan amal.",
        narrator: "Abu Malik Al-Asy'ari radhiyallahu 'anhu",
        topic: "Keutamaan Thaharah & Dzikir"
      },
      {
        number: 2699,
        arab: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
        indo: "Barangsiapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga.",
        narrator: "Abu Hurairah radhiyallahu 'anhu",
        topic: "Menuntut Ilmu"
      }
    ]
  },
  abudaud: {
    book: "Sunan Abu Dawud",
    author: "Imam Abu Dawud (202–275 H)",
    totalHadith: 5274,
    hadiths: [
      {
        number: 1,
        arab: "إِذَا أَرَادَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الْحَاجَةَ انْطَلَقَ حَتَّى لَا يَرَاهُ أَحَدٌ",
        indo: "Apabila Nabi shallallahu 'alaihi wasallam hendak buang hajat, beliau pergi jauh hingga tidak ada seorang pun yang melihatnya.",
        narrator: "Jabir bin Abdullah radhiyallahu 'anhu",
        topic: "Adab Thaharah"
      },
      {
        number: 4941,
        arab: "مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيَعْرِفْ حَقَّ كَبِيرِنَا فَلَيْسَ مِنَّا",
        indo: "Bukan dari golongan kami orang yang tidak menyayangi yang lebih muda di antara kami dan tidak mengetahui hak orang yang lebih tua.",
        narrator: "Abdullah bin Amr radhiyallahu 'anhu",
        topic: "Kasih Sayang & Adab Usia"
      }
    ]
  },
  tirmidzi: {
    book: "Sunan at-Tirmidzi",
    author: "Imam at-Tirmidzi (209–279 H)",
    totalHadith: 3956,
    hadiths: [
      {
        number: 1987,
        arab: "الْبِرُّ حُسْنُ الْخُلُقِ، وَالإِثْمُ مَا حَاكَ فِي نَفْسِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ",
        indo: "Kebaikan itu adalah akhlak yang mulia, dan dosa itu adalah apa yang meragukan jiwamu serta engkau benci bila diketahui orang lain.",
        narrator: "An-Nawwas bin Sam'an radhiyallahu 'anhu",
        topic: "Definisi Kebaikan & Dosa"
      },
      {
        number: 2317,
        arab: "مِنْ حُسْنِ إِسْلاَمِ الْمَرْءِ تَرْكُهُ مَا لاَ يَعْنِيهِ",
        indo: "Di antara tanda kebaikan Islam seseorang adalah dia meninggalkan apa yang tidak bermanfaat baginya.",
        narrator: "Abu Hurairah radhiyallahu 'anhu",
        topic: "Wara' & Menjaga Waktu"
      }
    ]
  },
  nasai: {
    book: "Sunan an-Nasa'i",
    author: "Imam an-Nasa'i (215–303 H)",
    totalHadith: 5776,
    hadiths: [
      {
        number: 5005,
        arab: "مَنْ سَأَلَ اللَّهَ الشَّهَادَةَ بِصِدْقٍ بَلَّغَهُ اللَّهُ مَنَازِلَ الشُّهَدَاءِ وَإِنْ مَاتَ عَلَى فِرَاشِهِ",
        indo: "Barangsiapa memohon kepada Allah mati syahid dengan tulus, Allah akan menyampaikannya ke derajat para syuhada meski ia wafat di atas pembaringannya.",
        narrator: "Sahl bin Hunaif radhiyallahu 'anhu",
        topic: "Ketulusan Niat"
      }
    ]
  },
  ibnumajah: {
    book: "Sunan Ibnu Majah",
    author: "Imam Ibnu Majah (209–273 H)",
    totalHadith: 4341,
    hadiths: [
      {
        number: 224,
        arab: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
        indo: "Menuntut ilmu itu adalah kewajiban bagi setiap muslim.",
        narrator: "Anas bin Malik radhiyallahu 'anhu",
        topic: "Kewajiban Menuntut Ilmu"
      }
    ]
  },
  ahmad: {
    book: "Musnad Ahmad",
    author: "Imam Ahmad bin Hambal (164–241 H)",
    totalHadith: 28000,
    hadiths: [
      {
        number: 6650,
        arab: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
        indo: "Orang-orang yang penyayang akan disayangi oleh Dzat Yang Maha Pengasih. Sayangilah siapa yang ada di bumi, niscaya kalian disayangi oleh Dzat yang ada di langit.",
        narrator: "Abdullah bin Amr radhiyallahu 'anhu",
        topic: "Hadits Musalsal bil Awwaliyyah"
      }
    ]
  },
  malik: {
    book: "Muwatha' Malik",
    author: "Imam Malik bin Anas (93–179 H)",
    totalHadith: 1900,
    hadiths: [
      {
        number: 1614,
        arab: "تَرَكْتُ فِيكُمْ أَمْرَيْنِ لَنْ تَضِلُّوا مَا تَمَسَّكْتُمْ بِهِمَا: كِتَابَ اللَّهِ وَسُنَّةَ نَبِيِّهِ",
        indo: "Aku tinggalkan kepada kalian dua perkara yang kalian tidak akan tersesat selamanya selama berpegang teguh pada keduanya: Kitabullah dan Sunnah Nabi-Nya.",
        narrator: "Riwayat Mursal Malik",
        topic: "Pegang Teguh Qur'an & Sunnah"
      }
    ]
  },
  darimi: {
    book: "Sunan ad-Darimi",
    author: "Imam ad-Darimi (181–255 H)",
    totalHadith: 3500,
    hadiths: [
      {
        number: 337,
        arab: "اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لأَصْحَابِهِ",
        indo: "Bacalah Al-Qur'an, karena sesungguhnya ia akan datang pada hari kiamat sebagai pemberi syafa'at bagi para pembacanya.",
        narrator: "Abu Umamah Al-Bahili radhiyallahu 'anhu",
        topic: "Syafa'at Al-Qur'an"
      }
    ]
  }
};

for (const [key, data] of Object.entries(hadithCollections)) {
  const filePath = path.join(haditsDir, `${key}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`Saved Hadith collection: ${filePath}`);
}
console.log('Done creating Hadits datasets!');

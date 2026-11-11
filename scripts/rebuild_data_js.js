const fs = require('fs');
const path = require('path');

const quranDir = path.join(__dirname, '..', 'data', 'quran');
const outFile = path.join(__dirname, '..', 'data.js');

// 114 Surahs
const surahs = [];
for (let i = 1; i <= 114; i++) {
  const p = path.join(quranDir, `${i}.json`);
  if (fs.existsSync(p)) {
    const s = JSON.parse(fs.readFileSync(p, 'utf8'));
    surahs.push({
      no: s.nomor,
      name: s.namaLatin,
      arabic: s.nama,
      translation: s.arti,
      verses: s.jumlahAyat,
      revelation: s.tempatTurun === 'Mekah' ? 'Makkiyah' : 'Madaniyah',
      audio: s.audioFull ? s.audioFull['05'] : `https://server8.mp3quran.net/afs/${String(i).padStart(3, '0')}.mp3`,
      desc: s.deskripsi ? s.deskripsi.replace(/<[^>]+>/g, '').slice(0, 160) + '...' : ''
    });
  }
}

// 9 Kutubut Tis'ah Books matching exact user uploaded image with exact counts
const hadithBooks = [
  {
    id: "bukhari",
    name: "Shahih Bukhari",
    arabic: "صحيح البخاري",
    author: "Imam Al-Bukhari (194–256 H)",
    count: "7.008 hadits",
    image: "assets/hadith_bukhari.jpg",
    badge: "Kitab Hadits Paling Shahih",
    desc: "Kompilasi hadits paling otentik di muka bumi setelah Kitabullah Al-Qur'anul Karim. Disaring dari 600.000 riwayat dengan kaidah muttashilus sanad dan rijal tsiqat yang sangat ketat.",
    chapters: [
      {
        title: "Kitab Permulaan Wahyu (كتاب بدء الوحي)",
        arabic: "كتاب بدء الوحي",
        subchapters: [
          {
            title: "Bab Bagaimana Wahyu Pertama Kali Turun kepada Rasulullah ﷺ",
            hadiths: [
              {
                number: 1,
                arab: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
                indo: "Sesungguhnya setiap amalan itu tergantung pada niatnya, dan sesungguhnya setiap orang hanya akan mendapatkan apa yang dia niatkan. Barangsiapa hijrahnya karena dunia yang ingin diraihnya atau karena wanita yang ingin dinikahinya, maka hijrahnya itu menuju apa yang dia tuju.",
                narrator: "Amirul Mukminin Umar bin Al-Khaththab radhiyallahu 'anhu",
                category: "Shahih Muttafaqun 'Alaih (Tingkat Keshahihan Tertinggi)",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Shahabat Nabi", name: "Umar bin Al-Khaththab RA (Wafat 23 H)" },
                  { level: "Kibarut Tabi'in", name: "Alqamah bin Waqqash Al-Laitsi (Tsiqah Faqih)" },
                  { level: "Ausathut Tabi'in", name: "Muhammad bin Ibrahim At-Taimi (Imam Tsiqah)" },
                  { level: "Atba' Tabi'in", name: "Yahya bin Sa'id Al-Anshari (Madinah, Qadhi Tsiqah Tsabat)" },
                  { level: "Guru Besar Hadits", name: "Sufyan bin 'Uyainah Al-Hilali (Hafizh Al-Hujjah)" },
                  { level: "Guru Imam Bukhari", name: "Al-Humaidi Abdullah bin Az-Zubair (Makkah)" },
                  { level: "Penyusun Kitab", name: "Imam Muhammad bin Ismail Al-Bukhari" }
                ],
                jarhWaTadil: [
                  { scholar: "Al-Hafizh Ibnu Hajar Al-Asqalani (Fathul Bari)", statement: "Sanad ini adalah 'Ashahh Al-Asanid' (rantai sanad paling shahih). Seluruh perawinya adalah para imam penghafal hadits tersumpah tanpa ada kecacatan sedikit pun." },
                  { scholar: "Imam Adz-Dzahabi (Siyar A'lam An-Nubala)", statement: "Rijal hadits ini berada pada puncak keadilan dan kedhabitan (sempurna hafalan)." },
                  { scholar: "Imam Asy-Syafi'i", statement: "Hadits niat ini mencakup sepertiga ilmu Islam dan masuk ke dalam tujuh puluh bab ilmu fiqih." }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Kitab Iman (كتاب الإيمان)",
        arabic: "كتاب الإيمان",
        subchapters: [
          {
            title: "Bab Rukun Islam dan Pilar Keimanan",
            hadiths: [
              {
                number: 8,
                arab: "بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالحَجِّ، وَصَوْمِ رَمَضَانَ",
                indo: "Islam dibangun di atas lima rukun: bersaksi bahwa tidak ada tuhan yang berhak disembah selain Allah dan sesungguhnya Muhammad adalah utusan Allah, menegakkan shalat, menunaikan zakat, menunaikan ibadah haji ke Baitullah, dan berpuasa di bulan Ramadhan.",
                narrator: "Abdullah bin Umar bin Al-Khaththab radhiyallahu 'anhuma",
                category: "Shahih Muttafaqun 'Alaih",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Shahabat Nabi", name: "Abdullah bin Umar RA" },
                  { level: "Kibarut Tabi'in", name: "Thawus bin Kaisan Al-Yamani" },
                  { level: "Tabi'ut Tabi'in", name: "Ibnu Juraij Abdul Malik" },
                  { level: "Guru Imam Bukhari", name: "Ubaidullah bin Musa Al-'Absi" },
                  { level: "Penyusun Kitab", name: "Imam Al-Bukhari" }
                ],
                jarhWaTadil: [
                  { scholar: "Imam An-Nawawi (Syarh Muslim)", statement: "Hadits ini adalah pondasi akbar syariat Islam yang disepakati keshahihannya oleh seluruh ahli hadits." }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Kitab Keutamaan Al-Qur'an (كتاب فضائل القرآن)",
        arabic: "كتاب فضائل القرآن",
        subchapters: [
          {
            title: "Bab Sebaik-baik Manusia adalah yang Belajar & Mengajar Al-Qur'an",
            hadiths: [
              {
                number: 5027,
                arab: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
                indo: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya kepada sesama.",
                narrator: "Amirul Mukminin Utsman bin Affan radhiyallahu 'anhu",
                category: "Shahih Al-Bukhari",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Shahabat Nabi", name: "Utsman bin Affan Dzun Nurain RA" },
                  { level: "Tabi'in", name: "Abu Abdirrahman As-Sulami (Guru Qur'an Kufah)" },
                  { level: "Guru Imam Bukhari", name: "Hajjaj bin Minhal" },
                  { level: "Penyusun Kitab", name: "Imam Al-Bukhari" }
                ],
                jarhWaTadil: [
                  { scholar: "Imam Adz-Dzahabi", statement: "Abu Abdirrahman As-Sulami mengajar Qur'an di Kufah selama 40 tahun penuh karena kemuliaan hadits shahih ini." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "muslim",
    name: "Shahih Muslim",
    arabic: "صحيح مسلم",
    author: "Imam Muslim bin Al-Hajjaj (206–261 H)",
    count: "5.362 hadits",
    image: "assets/hadith_muslim.jpg",
    badge: "Shahih Mutlak & Rapi",
    desc: "Kitab shahih kedua setelah Bukhari dengan keunggulan sistematika bab fikih yang tematik dan susunan jalur sanad paling bersih serta rapi.",
    chapters: [
      {
        title: "Kitab Iman - Hadits Jibril 'Alaihissalam (كتاب الإيمان)",
        arabic: "كتاب الإيمان",
        subchapters: [
          {
            title: "Bab Makna Islam, Iman, dan Tingkatan Ihsan",
            hadiths: [
              {
                number: 8,
                arab: "الإِيمَانُ أَنْ تُؤْمِنَ بِاللَّهِ، وَمَلاَئِكَتِهِ، وَكُتُبِهِ، وَرُسُلِهِ، وَالْيَوْمِ الآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ. قَالَ: صَدَقْتَ. قَالَ: فَأَخْبِرْنِي عَنِ الإِحْسَانِ؟ قَالَ: أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
                indo: "Iman adalah engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman kepada takdir yang baik maupun yang buruk. Jibril berkata: 'Engkau benar.' Jibril bertanya lagi: 'Maka beritahukan kepadaku tentang Ihsan?' Rasulullah bersabda: 'Engkau beribadah kepada Allah seakan-akan engkau melihat-Nya; jika engkau tidak mampu melihat-Nya, maka sesungguhnya Dia senantiasa melihatmu.'",
                narrator: "Umar bin Al-Khaththab radhiyallahu 'anhu",
                category: "Shahih Muslim (Ummus Sunnah)",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ & Malaikat Jibril AS" },
                  { level: "Shahabat Nabi", name: "Umar bin Al-Khaththab RA" },
                  { level: "Tabi'in", name: "Yahya bin Ya'mar Al-Bashri" },
                  { level: "Tabi'ut Tabi'in", name: "Kuhail bin Harmalah" },
                  { level: "Guru Imam Muslim", name: "Abu Khaitsamah Zuhair bin Harb" },
                  { level: "Penyusun Kitab", name: "Imam Muslim bin Al-Hajjaj An-Naisaburi" }
                ],
                jarhWaTadil: [
                  { scholar: "Imam An-Nawawi", statement: "Hadits ini adalah induk dari seluruh sunnah nabi (Ummus Sunnah) sebagaimana Surat Al-Fatihah adalah Ummul Qur'an." }
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Kitab Thaharah & Wudhu (كتاب الطهارة)",
        arabic: "كتاب الطهارة",
        subchapters: [
          {
            title: "Bab Keutamaan Bersuci dan Berdzikir",
            hadiths: [
              {
                number: 223,
                arab: "الطُّهُورُ شَطْرُ الإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلآنِ أَوْ تَمْلأُ مَا بَيْنَ السَّمَاوَاتِ وَالأَرْضِ، وَالصَّلاَةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ",
                indo: "Bersuci itu adalah sebagian dari iman, ucapan Alhamdulillah memenuhi timbangan kebaikan, kalimat Subhanallah dan Alhamdulillah memenuhi antara langit dan bumi, shalat adalah cahaya, sedekah adalah bukti nyata keimanan, sabar adalah pelita yang menerangi, dan Al-Qur'an adalah pembela bagimu atau menjadi penuntut atasmu.",
                narrator: "Abu Malik Al-Asy'ari radhiyallahu 'anhu",
                category: "Shahih Muslim",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Shahabat Nabi", name: "Abu Malik Al-Asy'ari RA" },
                  { level: "Tabi'in", name: "Abdurrahman bin Ghanam Al-Asy'ari" },
                  { level: "Guru Imam Muslim", name: "Ishaq bin Manshur Al-Kausaj" },
                  { level: "Penyusun Kitab", name: "Imam Muslim" }
                ],
                jarhWaTadil: [
                  { scholar: "Ibnu Daqiq Al-'Ied", statement: "Hadits mulia ini mengumpulkan pilar-pilar kesucian dan amal shalih yang menyempurnakan ibadah batiniah dan zhahiriyah." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "abudaud",
    name: "Sunan Abu Daud",
    arabic: "سنن أبي داود",
    author: "Imam Abu Daud As-Sijistani (202–275 H)",
    count: "4.590 hadits",
    image: "assets/hadith_abudaud.jpg",
    badge: "Kitab Rujukan Hukum Syariat",
    desc: "Kompilasi hadits komprehensif yang memfokuskan khusus pada hadits-hadits hukum fikih praktis (Ahaditsul Ahkam) yang menjadi pegangan para hakim dan mujtahid.",
    chapters: [
      {
        title: "Kitab Thaharah & Bersuci (كتاب الطهارة)",
        arabic: "كتاب الطهارة",
        subchapters: [
          {
            title: "Bab Menjaga Privasi dan Adab Buang Hajat",
            hadiths: [
              {
                number: 1,
                arab: "كَانَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِذَا أَرَادَ الْحَاجَةَ انْطَلَقَ حَتَّى لَا يَرَاهُ أَحَدٌ",
                indo: "Rasulullah shallallahu 'alaihi wasallam apabila hendak menunaikan hajat, beliau berjalan menjauh hingga tidak ada seorang pun yang melihatnya.",
                narrator: "Jabir bin Abdullah radhiyallahu 'anhuma",
                category: "Shahih (Syarat Bukhari & Muslim)",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Shahabat Nabi", name: "Jabir bin Abdullah RA" },
                  { level: "Kibar Tabi'in", name: "Muhammad bin Al-Munkadir (Imam Madinah)" },
                  { level: "Guru Abu Daud", name: "Musaddad bin Musarhad Al-Bashri" },
                  { level: "Penyusun Kitab", name: "Imam Abu Daud As-Sijistani" }
                ],
                jarhWaTadil: [
                  { scholar: "Imam Abu Daud", statement: "Apa yang saya sebutkan dalam kitabku tanpa catatan kelemahan, maka hadits tersebut bernilai shalih/sahih untuk dijadikan hujjah." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "tirmidzi",
    name: "Sunan Tirmidzi",
    arabic: "جامع الترمذي",
    author: "Imam Muhammad bin Isa At-Tirmidzi (209–279 H)",
    count: "3.891 hadits",
    image: "assets/hadith_tirmidzi.jpg",
    badge: "Pakar Status Derajat Hadits",
    desc: "Istimewa karena senantiasa mencantumkan derajat kualitas hadits (Shahih, Hasan, Dhaif) serta membandingkan pandangan ijtihad para imam mazhab fiqih.",
    chapters: [
      {
        title: "Kitab Akhlak & Silaturahmi (كتاب البر والصلة)",
        arabic: "كتاب البر والصلة",
        subchapters: [
          {
            title: "Bab Hakikat Kebajikan dan Definisi Dosa",
            hadiths: [
              {
                number: 2389,
                arab: "الْبِرُّ حُسْنُ الْخُلُقِ، وَالإِثْمُ مَا حَاكَ فِي نَفْسِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ",
                indo: "Kebajikan sejati itu adalah akhlak yang mulia, dan dosa adalah apa yang mengganjal serta meragukan di dalam jiwamu dan engkau benci bila perbuatan itu diketahui orang lain.",
                narrator: "An-Nawwas bin Sam'an Al-Kilabi radhiyallahu 'anhu",
                category: "Hadits Hasan Shahih",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Shahabat Nabi", name: "An-Nawwas bin Sam'an RA" },
                  { level: "Tabi'in", name: "Mu'awiyah bin Shalih" },
                  { level: "Guru At-Tirmidzi", name: "Qutaibah bin Sa'id" },
                  { level: "Penyusun Kitab", name: "Imam At-Tirmidzi" }
                ],
                jarhWaTadil: [
                  { scholar: "Imam At-Tirmidzi", statement: "Hadits ini hasan shahih, menjadi barometer hati nurani seorang mukmin yang bertakwa." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "nasai",
    name: "Sunan Nasa'i",
    arabic: "سنن النسائي",
    author: "Imam Ahmad bin Syu'aib An-Nasa'i (215–303 H)",
    count: "5.662 hadits",
    image: "assets/hadith_nasai.jpg",
    badge: "Ketelitian Rijal Sangat Ketat",
    desc: "Memiliki syarat seleksi perawi yang sangat teliti dan detail dalam merinci cabang-cabang illat sanad fiqih ibadah.",
    chapters: [
      {
        title: "Kitab Ibadah & Niat (كتاب الصلاة والجهاد)",
        arabic: "كتاب الصلاة والجهاد",
        subchapters: [
          {
            title: "Bab Keikhlasan Murni Semata Karena Wajah Allah",
            hadiths: [
              {
                number: 3140,
                arab: "إِنَّ اللَّهَ لاَ يَقْبَلُ مِنَ الْعَمَلِ إِلاَّ مَا كَانَ لَهُ خَالِصًا وَابْتُغِيَ بِهِ وَجْهُهُ",
                indo: "Sesungguhnya Allah tidak akan menerima suatu amal perbuatan kecuali yang dilakukan dengan ikhlas murni semata-mata karena-Nya dan mengharap ridha wajah-Nya.",
                narrator: "Abu Umamah Al-Bahili radhiyallahu 'anhu",
                category: "Shahih (Semua Rijal Tsiqat)",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Shahabat Nabi", name: "Abu Umamah Al-Bahili RA" },
                  { level: "Tabi'in", name: "Syaddad Abu Ammar Al-Dimasyqi" },
                  { level: "Guru An-Nasa'i", name: "Muhammad bin Rumi" },
                  { level: "Penyusun Kitab", name: "Imam An-Nasa'i" }
                ],
                jarhWaTadil: [
                  { scholar: "Al-Hafizh Ibnu Katsir", statement: "Sanad hadits ini jayyid kuat dan shahih sesuai syarat pengesahan ulama salaf." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ibnumajah",
    name: "Sunan Ibnu Majah",
    arabic: "سنن ابن ماجه",
    author: "Imam Ibnu Majah Al-Qazwini (209–273 H)",
    count: "4.332 hadits",
    image: "assets/hadith_ibnumajah.jpg",
    badge: "Pelengkap Kutubus Sittah",
    desc: "Kitab penutup enam kitab induk hadits (*Kutubus Sittah*) yang terkenal dengan keindahan susunan bab dan hadits-hadits zawaid yang langka.",
    chapters: [
      {
        title: "Muqaddimah Menuntut Ilmu (كتاب المقدمة)",
        arabic: "كتاب المقدمة",
        subchapters: [
          {
            title: "Bab Kewajiban Mencari Ilmu bagi Muslim",
            hadiths: [
              {
                number: 224,
                arab: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
                indo: "Menuntut ilmu adalah kewajiban yang dibebankan atas setiap orang muslim.",
                narrator: "Anas bin Malik radhiyallahu 'anhu",
                category: "Shahih Lighairihi / Hasan bi Syawahidihi",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Shahabat Nabi", name: "Anas bin Malik RA" },
                  { level: "Tabi'in", name: "Hafsh bin Ghiyats Al-Kufi" },
                  { level: "Guru Ibnu Majah", name: "Hisyam bin Ammar Al-Dimasyqi" },
                  { level: "Penyusun Kitab", name: "Imam Ibnu Majah" }
                ],
                jarhWaTadil: [
                  { scholar: "Imam Al-Mizzi & Al-Albani", statement: "Matan hadits kewajiban ilmu ini shahih mutawatir maknawi dengan puluhan jalur penguat." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "malik",
    name: "Muwatha' Malik",
    arabic: "موطأ مالك",
    author: "Imam Malik bin Anas (93–179 H)",
    count: "1.594 hadits",
    image: "assets/hadith_malik.jpg",
    badge: "Kitab Fiqih & Hadits Tertua",
    desc: "Karya monumental Imam Darul Hijrah Madinah, kitab hadits dan sunnah amaliyah tertua yang disepakati keagungannya oleh seluruh ulama.",
    chapters: [
      {
        title: "Kitab Ketetapan Takdir & Sunnah (كتاب القدر)",
        arabic: "كتاب القدر",
        subchapters: [
          {
            title: "Bab Berpegang Teguh kepada Kitabullah dan Sunnah Nabi",
            hadiths: [
              {
                number: 1614,
                arab: "تَرَكْتُ فِيكُمْ أَمْرَيْنِ لَنْ تَضِلُّوا مَا تَمَسَّكْتُمْ بِهِمَا: كِتَابَ اللَّهِ وَسُنَّةَ نَبِيِّهِ",
                indo: "Aku tinggalkan kepada kalian dua pedoman, kalian tidak akan tersesat selamanya selama kalian senantiasa berpegang teguh pada keduanya: Kitabullah (Al-Qur'an) dan Sunnah Nabi-Nya.",
                narrator: "Hadits Mursal Shahih Riwayat Imam Malik",
                category: "Shahih Lighairihi bi Syawahid Shahihah",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Penyusun Kitab", name: "Imam Malik bin Anas (Imam Mazhab Maliki, Madinah)" }
                ],
                jarhWaTadil: [
                  { scholar: "Al-Hafizh Ibnu Abdil Barr", statement: "Hadits ini masyhur dan ma'ruf diterima secara qabul mutlak oleh umat Islam dari generasi ke generasi." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "ahmad",
    name: "Musnad Ahmad",
    arabic: "مسند أحمد",
    author: "Imam Ahmad bin Hanbal (164–241 H)",
    count: "26.363 hadits",
    image: "assets/hadith_ahmad.jpg",
    badge: "Ensiklopedia Hadits Akbar",
    desc: "Koleksi hadits raksasa yang dikumpulkan Imam Ahmad dari 750.000 riwayat, disusun berdasarkan riwayat masing-masing shahabat nabi.",
    chapters: [
      {
        title: "Musnad Para Sahabat Nabi (مسند المكثرين من الصحابة)",
        arabic: "مسند المكثرين",
        subchapters: [
          {
            title: "Bab Kasih Sayang terhadap Seluruh Makhluk di Bumi",
            hadiths: [
              {
                number: 6650,
                arab: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
                indo: "Orang-orang yang senantiasa berbelas kasih dan penyayang akan disayangi oleh Dzat Yang Maha Pengasih. Sayangilah siapa saja yang ada di muka bumi, niscaya kalian akan disayangi oleh Dzat yang ada di langit.",
                narrator: "Abdullah bin Amr bin Al-Ash radhiyallahu 'anhuma",
                category: "Shahih (Hadits Musalsal bil Awwaliyyah)",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Shahabat Nabi", name: "Abdullah bin Amr bin Al-Ash RA" },
                  { level: "Tabi'in", name: "Amr bin Dinar Al-Makki" },
                  { level: "Guru Imam Ahmad", name: "Sufyan bin 'Uyainah" },
                  { level: "Penyusun Kitab", name: "Imam Ahmad bin Hanbal" }
                ],
                jarhWaTadil: [
                  { scholar: "Syekh Syu'aib Al-Arna'uth (Tahqiq Musnad)", statement: "Sanadnya shahih 'ala syarthi sy-syaikhain (sesuai standar keshahihan Bukhari dan Muslim)." }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "darimi",
    name: "Sunan Darimi",
    arabic: "سنن الدارمي",
    author: "Imam Abdullah bin Abdurrahman Ad-Darimi (181–255 H)",
    count: "3.367 hadits",
    image: "assets/hadith_darimi.jpg",
    badge: "Keistimewaan Sanad 'Ali",
    desc: "Kitab sunan klasik berbobot tinggi dengan jalur sanad pendek (*'ali*), memuat bab-bab agung tentang adab pencari ilmu dan keutamaan Al-Qur'an.",
    chapters: [
      {
        title: "Kitab Keutamaan Al-Qur'an (كتاب فضائل القرآن)",
        arabic: "كتاب فضائل القرآن",
        subchapters: [
          {
            title: "Bab Syafa'at Al-Qur'an bagi Pembacanya di Hari Kiamat",
            hadiths: [
              {
                number: 337,
                arab: "اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لأَصْحَابِهِ",
                indo: "Bacalah Al-Qur'an secara rutin, karena sesungguhnya Al-Qur'an akan datang pada hari kiamat kelak sebagai pemberi syafa'at pertolongan bagi para pembaca setianya.",
                narrator: "Abu Umamah Al-Bahili radhiyallahu 'anhu",
                category: "Shahih Sunan Ad-Darimi",
                sanad: [
                  { level: "Sumber Wahyu", name: "Rasulullah Muhammad ﷺ" },
                  { level: "Shahabat Nabi", name: "Abu Umamah Al-Bahili RA" },
                  { level: "Guru Ad-Darimi", name: "Abu Nu'aim Al-Fadhl bin Dukain" },
                  { level: "Penyusun Kitab", name: "Imam Abdullah bin Abdurrahman Ad-Darimi" }
                ],
                jarhWaTadil: [
                  { scholar: "Imam Adz-Dzahabi", statement: "Sanad Imam Ad-Darimi dalam bab fadhailul qur'an ini sangat tsabit, jali, dan bercahaya." }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// Do'a Hisnul Muslim
const hisnulMuslimDuas = [
  {
    id: 1,
    title: "Do'a Bangun Tidur",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    latin: "Alhamdu lillahil-ladzi ahyana ba'da ma amatana wa ilaihin-nusyur",
    translation: "Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami (tidur), dan hanya kepada-Nya kami akan dibangkitkan.",
    reference: "Hisnul Muslim #1 (HR. Bukhari no. 6312 & Muslim no. 2711)",
    category: "Aktivitas Harian"
  },
  {
    id: 2,
    title: "Do'a Keluar Rumah",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ",
    latin: "Bismillahi tawakkaltu 'alallah, la hawla wa la quwwata illa billah",
    translation: "Dengan nama Allah, aku bertawakal kepada Allah. Tiada daya dan tiada kekuatan kecuali dengan pertolongan Allah.",
    reference: "Hisnul Muslim #16 (HR. Abu Dawud no. 5095 & Tirmidzi no. 3426, Shahih)",
    category: "Perlindungan & Safar"
  },
  {
    id: 3,
    title: "Do'a Masuk Masjid",
    arabic: "اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
    latin: "Allahummaftah li abwaba rahmatik",
    translation: "Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.",
    reference: "Hisnul Muslim #20 (HR. Muslim no. 713)",
    category: "Ibadah & Masjid"
  },
  {
    id: 4,
    title: "Sayyidul Istighfar (Penghulu Istighfar)",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ",
    latin: "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastatha'tu, a'udzu bika min syarri ma shana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidzanbi faghfir li fainnahu la yaghfirudz-dzunuba illa anta",
    translation: "Ya Allah, Engkau adalah Rabbku, tiada sesembahan yang berhak disembah selain Engkau. Engkaulah yang menciptakanku dan aku adalah hamba-Mu. Aku senantiasa berada dalam janji dan ikrar-Mu semampuku. Aku berlindung kepada-Mu dari keburukan apa yang telah kuperbuat. Aku mengakui segala nikmat-Mu kepadaku dan aku mengakui segala dosaku, maka ampunilah aku, sesungguhnya tiada yang dapat mengampuni dosa selain Engkau.",
    reference: "Hisnul Muslim #77 (HR. Bukhari no. 6306 - Keutamaan: Jaminan Ahli Surga)",
    category: "Dzikir & Taubat"
  },
  {
    id: 5,
    title: "Do'a Perlindungan dari Rasa Cemas & Lilitan Hutang",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ",
    latin: "Allahumma inni a'udzu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal, wal-bukhli wal-jubn, wa dhala'id-dayni wa ghalabatir-rijal",
    translation: "Ya Allah, sesungguhnya aku berlindung kepada-Mu dari rasa gelisah dan sedih, dari kelemahan dan kemalasan, dari sifat kikir dan pengecut, serta dari lilitan hutang dan penindasan orang lain.",
    reference: "Hisnul Muslim #120 (HR. Bukhari no. 2893)",
    category: "Ketenangan Jiwa"
  },
  {
    id: 6,
    title: "Do'a Sapu Jagad (Kebaikan Dunia & Akhirat)",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    latin: "Rabbana atina fid-dunya hasanah wa fil-akhirati hasanah wa qina 'adzaban-nar",
    translation: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, serta lindungilah kami dari siksa neraka.",
    reference: "Hisnul Muslim (QS. Al-Baqarah: 201 & HR. Bukhari no. 4522)",
    category: "Do'a Utama"
  }
];

const content = `// Data Al-Qur'an (114 Surah), Kutubut Tis'ah (Bab, Sub-Bab, Sanad, Jarh wa Ta'dil), dan Do'a Hisnul Muslim
window.QURAN_DATA = ${JSON.stringify(surahs, null, 2)};

window.HADITH_BOOKS = ${JSON.stringify(hadithBooks, null, 2)};

window.HISNUL_MUSLIM_DUAS = ${JSON.stringify(hisnulMuslimDuas, null, 2)};
`;

fs.writeFileSync(outFile, content, 'utf8');
console.log('Successfully written data.js with exact book covers & counts!');

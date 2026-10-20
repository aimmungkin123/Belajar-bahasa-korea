const WORDS = [{"id":1,"idn":"Halo (sopan)","ko":"안녕하세요","roman":"annyeonghaseyo","category":"Salam","note":"Kosakata tema salam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":2,"idn":"Terima kasih","ko":"감사합니다","roman":"gamsahamnida","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":3,"idn":"Maaf","ko":"죄송합니다","roman":"joesonghamnida","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":4,"idn":"Ya","ko":"네","roman":"ne","category":"Jawaban","note":"Kosakata tema jawaban. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":5,"idn":"Tidak","ko":"아니요","roman":"aniyo","category":"Jawaban","note":"Kosakata tema jawaban. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":6,"idn":"Air","ko":"물","roman":"mul","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":7,"idn":"Nasi / makanan","ko":"밥","roman":"bap","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":8,"idn":"Rumah","ko":"집","roman":"jip","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":9,"idn":"Sekolah","ko":"학교","roman":"hakgyo","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":10,"idn":"Teman","ko":"친구","roman":"chingu","category":"Orang","note":"Kosakata tema orang. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":11,"idn":"Keluarga","ko":"가족","roman":"gajok","category":"Orang","note":"Kosakata tema orang. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":12,"idn":"Buku","ko":"책","roman":"chaek","category":"Benda","note":"Kosakata tema benda. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":13,"idn":"Makan (bentuk kamus)","ko":"먹다","roman":"meokda","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":14,"idn":"Minum (bentuk kamus)","ko":"마시다","roman":"masida","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":15,"idn":"Pergi (bentuk kamus)","ko":"가다","roman":"gada","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":16,"idn":"Datang (bentuk kamus)","ko":"오다","roman":"oda","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":17,"idn":"Bagus / baik (sopan)","ko":"좋아요","roman":"joayo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":18,"idn":"Besar (sopan)","ko":"커요","roman":"keoyo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":19,"idn":"Kecil (sopan)","ko":"작아요","roman":"jagayo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":20,"idn":"Sampai jumpa (kepada yang pergi)","ko":"안녕히 가세요","roman":"annyeonghi gaseyo","category":"Salam","note":"Kosakata tema salam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":21,"idn":"Selamat pagi","ko":"좋은 아침이에요","roman":"joeun achimieyo","category":"Salam","note":"Kosakata tema salam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":22,"idn":"Selamat malam","ko":"안녕히 주무세요","roman":"annyeonghi jumuseyo","category":"Salam","note":"Kosakata tema salam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":23,"idn":"Sama-sama","ko":"천만에요","roman":"cheonmaneyo","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":24,"idn":"Permisi","ko":"실례합니다","roman":"sillyehamnida","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":25,"idn":"Tolong","ko":"도와주세요","roman":"dowajuseyo","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":26,"idn":"Tidak apa-apa","ko":"괜찮아요","roman":"gwaenchanayo","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":27,"idn":"Saya","ko":"저","roman":"jeo","category":"Orang","note":"Kosakata tema orang. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":28,"idn":"Kamu (informal)","ko":"너","roman":"neo","category":"Orang","note":"Kosakata tema orang. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":29,"idn":"Orang","ko":"사람","roman":"saram","category":"Orang","note":"Kosakata tema orang. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":30,"idn":"Anak","ko":"아이","roman":"ai","category":"Orang","note":"Kosakata tema orang. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":31,"idn":"Ibu","ko":"어머니","roman":"eomeoni","category":"Keluarga","note":"Kosakata tema keluarga. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":32,"idn":"Ayah","ko":"아버지","roman":"abeoji","category":"Keluarga","note":"Kosakata tema keluarga. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":33,"idn":"Kakak laki-laki (dipakai perempuan)","ko":"오빠","roman":"oppa","category":"Keluarga","note":"Kosakata tema keluarga. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":34,"idn":"Kakak laki-laki (dipakai laki-laki)","ko":"형","roman":"hyeong","category":"Keluarga","note":"Kosakata tema keluarga. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":35,"idn":"Kakak perempuan (dipakai perempuan)","ko":"언니","roman":"eonni","category":"Keluarga","note":"Kosakata tema keluarga. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":36,"idn":"Kakak perempuan (dipakai laki-laki)","ko":"누나","roman":"nuna","category":"Keluarga","note":"Kosakata tema keluarga. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":37,"idn":"Adik","ko":"동생","roman":"dongsaeng","category":"Keluarga","note":"Kosakata tema keluarga. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":38,"idn":"Tempat kerja","ko":"회사","roman":"hoesa","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":39,"idn":"Rumah sakit","ko":"병원","roman":"byeongwon","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":40,"idn":"Toko","ko":"가게","roman":"gage","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":41,"idn":"Restoran","ko":"식당","roman":"sikdang","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":42,"idn":"Stasiun","ko":"역","roman":"yeok","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":43,"idn":"Toilet","ko":"화장실","roman":"hwajangsil","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":44,"idn":"Jalan","ko":"길","roman":"gil","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":45,"idn":"Kota","ko":"도시","roman":"dosi","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":46,"idn":"Negara","ko":"나라","roman":"nara","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":47,"idn":"Korea","ko":"한국","roman":"hanguk","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":48,"idn":"Indonesia","ko":"인도네시아","roman":"indonesia","category":"Tempat","note":"Kosakata tema tempat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":49,"idn":"Hari ini","ko":"오늘","roman":"oneul","category":"Waktu","note":"Kosakata tema waktu. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":50,"idn":"Besok","ko":"내일","roman":"naeil","category":"Waktu","note":"Kosakata tema waktu. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":51,"idn":"Kemarin","ko":"어제","roman":"eoje","category":"Waktu","note":"Kosakata tema waktu. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":52,"idn":"Sekarang","ko":"지금","roman":"jigeum","category":"Waktu","note":"Kosakata tema waktu. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":53,"idn":"Nanti","ko":"나중에","roman":"najunge","category":"Waktu","note":"Kosakata tema waktu. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":54,"idn":"Pagi","ko":"아침","roman":"achim","category":"Waktu","note":"Kosakata tema waktu. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":55,"idn":"Siang","ko":"낮","roman":"nat","category":"Waktu","note":"Kosakata tema waktu. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":56,"idn":"Malam","ko":"밤","roman":"bam","category":"Waktu","note":"Kosakata tema waktu. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":57,"idn":"Waktu","ko":"시간","roman":"sigan","category":"Waktu","note":"Kosakata tema waktu. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":58,"idn":"Hari","ko":"날","roman":"nal","category":"Waktu","note":"Kosakata tema waktu. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":59,"idn":"Satu","ko":"하나","roman":"hana","category":"Angka","note":"Kosakata tema angka. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":60,"idn":"Dua","ko":"둘","roman":"dul","category":"Angka","note":"Kosakata tema angka. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":61,"idn":"Tiga","ko":"셋","roman":"set","category":"Angka","note":"Kosakata tema angka. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":62,"idn":"Empat","ko":"넷","roman":"net","category":"Angka","note":"Kosakata tema angka. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":63,"idn":"Lima","ko":"다섯","roman":"daseot","category":"Angka","note":"Kosakata tema angka. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":64,"idn":"Enam","ko":"여섯","roman":"yeoseot","category":"Angka","note":"Kosakata tema angka. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":65,"idn":"Tujuh","ko":"일곱","roman":"ilgop","category":"Angka","note":"Kosakata tema angka. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":66,"idn":"Delapan","ko":"여덟","roman":"yeodeol","category":"Angka","note":"Kosakata tema angka. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":67,"idn":"Sembilan","ko":"아홉","roman":"ahop","category":"Angka","note":"Kosakata tema angka. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":68,"idn":"Sepuluh","ko":"열","roman":"yeol","category":"Angka","note":"Kosakata tema angka. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":69,"idn":"Makanan","ko":"음식","roman":"eumsik","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":70,"idn":"Roti","ko":"빵","roman":"ppang","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":71,"idn":"Susu","ko":"우유","roman":"uyu","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":72,"idn":"Kopi","ko":"커피","roman":"keopi","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":73,"idn":"Teh","ko":"차","roman":"cha","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":74,"idn":"Apel","ko":"사과","roman":"sagwa","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":75,"idn":"Pisang","ko":"바나나","roman":"banana","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":76,"idn":"Daging","ko":"고기","roman":"gogi","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":77,"idn":"Ikan","ko":"생선","roman":"saengseon","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":78,"idn":"Sayur","ko":"채소","roman":"chaeso","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":79,"idn":"Enak","ko":"맛있어요","roman":"masisseoyo","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":80,"idn":"Pedas","ko":"매워요","roman":"maewoyo","category":"Makanan","note":"Kosakata tema makanan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":81,"idn":"Lapar","ko":"배고파요","roman":"baegopayo","category":"Tubuh","note":"Kosakata tema tubuh. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":82,"idn":"Haus","ko":"목말라요","roman":"mongmallayo","category":"Tubuh","note":"Kosakata tema tubuh. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":83,"idn":"Tidur","ko":"자다","roman":"jada","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":84,"idn":"Bangun","ko":"일어나다","roman":"ireonada","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":85,"idn":"Belajar","ko":"공부하다","roman":"gongbuhada","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":86,"idn":"Bekerja","ko":"일하다","roman":"ilhada","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":87,"idn":"Membaca","ko":"읽다","roman":"ikda","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":88,"idn":"Menulis","ko":"쓰다","roman":"sseuda","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":89,"idn":"Mendengar","ko":"듣다","roman":"deutda","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":90,"idn":"Berbicara","ko":"말하다","roman":"malhada","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":91,"idn":"Melihat","ko":"보다","roman":"boda","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":92,"idn":"Membeli","ko":"사다","roman":"sada","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":93,"idn":"Memberi","ko":"주다","roman":"juda","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":94,"idn":"Menerima","ko":"받다","roman":"batda","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":95,"idn":"Membuka","ko":"열다","roman":"yeolda","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":96,"idn":"Menutup","ko":"닫다","roman":"datda","category":"Kata kerja","note":"Kosakata tema kata kerja. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":97,"idn":"Datang ke sini","ko":"오세요","roman":"oseyo","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":98,"idn":"Silakan makan","ko":"잘 먹겠습니다","roman":"jal meokgetseumnida","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":99,"idn":"Sangat","ko":"정말","roman":"jeongmal","category":"Keterangan","note":"Kosakata tema keterangan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":100,"idn":"Sedikit","ko":"조금","roman":"jogeum","category":"Keterangan","note":"Kosakata tema keterangan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":101,"idn":"Banyak","ko":"많이","roman":"mani","category":"Keterangan","note":"Kosakata tema keterangan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":102,"idn":"Cepat","ko":"빨라요","roman":"ppallayo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":103,"idn":"Lambat","ko":"느려요","roman":"neuryeoyo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":104,"idn":"Mudah","ko":"쉬워요","roman":"swiwoyo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":105,"idn":"Sulit","ko":"어려워요","roman":"eoryeowoyo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":106,"idn":"Panas","ko":"더워요","roman":"deowoyo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":107,"idn":"Dingin (cuaca/benda)","ko":"추워요","roman":"chuwoyo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":108,"idn":"Cantik","ko":"예뻐요","roman":"yeppeoyo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":109,"idn":"Tampan","ko":"잘생겼어요","roman":"jalsaenggyeosseoyo","category":"Kata sifat","note":"Kosakata tema kata sifat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":110,"idn":"Senang","ko":"기뻐요","roman":"gippeoyo","category":"Perasaan","note":"Kosakata tema perasaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":111,"idn":"Sedih","ko":"슬퍼요","roman":"seulpeoyo","category":"Perasaan","note":"Kosakata tema perasaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":112,"idn":"Capek","ko":"피곤해요","roman":"pigonhaeyo","category":"Perasaan","note":"Kosakata tema perasaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":113,"idn":"Suka","ko":"좋아해요","roman":"joahaeyo","category":"Perasaan","note":"Kosakata tema perasaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":114,"idn":"Tidak suka","ko":"싫어해요","roman":"sireohaeyo","category":"Perasaan","note":"Kosakata tema perasaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":115,"idn":"Apa?","ko":"뭐예요?","roman":"mwoyeyo","category":"Pertanyaan","note":"Kosakata tema pertanyaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":116,"idn":"Di mana?","ko":"어디예요?","roman":"eodiyeyo","category":"Pertanyaan","note":"Kosakata tema pertanyaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":117,"idn":"Kapan?","ko":"언제예요?","roman":"eonjeyeyo","category":"Pertanyaan","note":"Kosakata tema pertanyaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":118,"idn":"Siapa?","ko":"누구예요?","roman":"nuguyeyo","category":"Pertanyaan","note":"Kosakata tema pertanyaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":119,"idn":"Mengapa?","ko":"왜요?","roman":"waeyo","category":"Pertanyaan","note":"Kosakata tema pertanyaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":120,"idn":"Bagaimana?","ko":"어떻게 해요?","roman":"eotteoke haeyo","category":"Pertanyaan","note":"Kosakata tema pertanyaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":121,"idn":"Berapa harganya?","ko":"얼마예요?","roman":"eolmayeyo","category":"Pertanyaan","note":"Kosakata tema pertanyaan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":122,"idn":"Saya tidak tahu","ko":"몰라요","roman":"mollayo","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":123,"idn":"Saya mengerti","ko":"알겠어요","roman":"algesseoyo","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":124,"idn":"Tunggu sebentar","ko":"잠깐만요","roman":"jamkkanmanyo","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":125,"idn":"Ayo pergi","ko":"가요","roman":"gayo","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":126,"idn":"Tidak masalah","ko":"문제없어요","roman":"munje eopseoyo","category":"Ungkapan","note":"Kosakata tema ungkapan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":127,"idn":"Kanan","ko":"오른쪽","roman":"oreunjjok","category":"Arah","note":"Kosakata tema arah. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":128,"idn":"Kiri","ko":"왼쪽","roman":"oenjjok","category":"Arah","note":"Kosakata tema arah. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":129,"idn":"Lurus","ko":"직진","roman":"jikjin","category":"Arah","note":"Kosakata tema arah. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":130,"idn":"Atas","ko":"위","roman":"wi","category":"Arah","note":"Kosakata tema arah. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":131,"idn":"Bawah","ko":"아래","roman":"arae","category":"Arah","note":"Kosakata tema arah. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":132,"idn":"Depan","ko":"앞","roman":"ap","category":"Arah","note":"Kosakata tema arah. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":133,"idn":"Belakang","ko":"뒤","roman":"dwi","category":"Arah","note":"Kosakata tema arah. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":134,"idn":"Di sini","ko":"여기","roman":"yeogi","category":"Arah","note":"Kosakata tema arah. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":135,"idn":"Di sana","ko":"저기","roman":"jeogi","category":"Arah","note":"Kosakata tema arah. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":136,"idn":"Mobil","ko":"자동차","roman":"jadongcha","category":"Kendaraan","note":"Kosakata tema kendaraan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":137,"idn":"Bus","ko":"버스","roman":"beoseu","category":"Kendaraan","note":"Kosakata tema kendaraan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":138,"idn":"Kereta bawah tanah","ko":"지하철","roman":"jihacheol","category":"Kendaraan","note":"Kosakata tema kendaraan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":139,"idn":"Sepeda","ko":"자전거","roman":"jajeongeo","category":"Kendaraan","note":"Kosakata tema kendaraan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":140,"idn":"Uang","ko":"돈","roman":"don","category":"Benda","note":"Kosakata tema benda. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":141,"idn":"Telepon","ko":"전화","roman":"jeonhwa","category":"Benda","note":"Kosakata tema benda. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":142,"idn":"Tas","ko":"가방","roman":"gabang","category":"Benda","note":"Kosakata tema benda. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":143,"idn":"Pakaian","ko":"옷","roman":"ot","category":"Benda","note":"Kosakata tema benda. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":144,"idn":"Sepatu","ko":"신발","roman":"sinbal","category":"Benda","note":"Kosakata tema benda. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":145,"idn":"Pintu","ko":"문","roman":"mun","category":"Benda","note":"Kosakata tema benda. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":146,"idn":"Jendela","ko":"창문","roman":"changmun","category":"Benda","note":"Kosakata tema benda. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":147,"idn":"Meja","ko":"책상","roman":"chaeksang","category":"Benda","note":"Kosakata tema benda. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":148,"idn":"Kursi","ko":"의자","roman":"uija","category":"Benda","note":"Kosakata tema benda. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":149,"idn":"Kucing","ko":"고양이","roman":"goyangi","category":"Hewan","note":"Kosakata tema hewan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":150,"idn":"Anjing","ko":"개","roman":"gae","category":"Hewan","note":"Kosakata tema hewan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":151,"idn":"Burung","ko":"새","roman":"sae","category":"Hewan","note":"Kosakata tema hewan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":152,"idn":"Bunga","ko":"꽃","roman":"kkot","category":"Alam","note":"Kosakata tema alam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":153,"idn":"Pohon","ko":"나무","roman":"namu","category":"Alam","note":"Kosakata tema alam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":154,"idn":"Langit","ko":"하늘","roman":"haneul","category":"Alam","note":"Kosakata tema alam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":155,"idn":"Hujan","ko":"비","roman":"bi","category":"Alam","note":"Kosakata tema alam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":156,"idn":"Salju","ko":"눈","roman":"nun","category":"Alam","note":"Kosakata tema alam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":157,"idn":"Matahari","ko":"해","roman":"hae","category":"Alam","note":"Kosakata tema alam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":158,"idn":"Bulan","ko":"달","roman":"dal","category":"Alam","note":"Kosakata tema alam. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":159,"idn":"Merah","ko":"빨간색","roman":"ppalgansaek","category":"Warna","note":"Kosakata tema warna. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":160,"idn":"Biru","ko":"파란색","roman":"paransaek","category":"Warna","note":"Kosakata tema warna. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":161,"idn":"Kuning","ko":"노란색","roman":"noransaek","category":"Warna","note":"Kosakata tema warna. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":162,"idn":"Putih","ko":"하얀색","roman":"hayansaek","category":"Warna","note":"Kosakata tema warna. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":163,"idn":"Hitam","ko":"검은색","roman":"geomeunsaek","category":"Warna","note":"Kosakata tema warna. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":164,"idn":"Satu orang","ko":"한 명","roman":"han myeong","category":"Hitungan","note":"Kosakata tema hitungan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":165,"idn":"Hari ulang tahun","ko":"생일","roman":"saengil","category":"Kehidupan","note":"Kosakata tema kehidupan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":166,"idn":"Nama","ko":"이름","roman":"ireum","category":"Kehidupan","note":"Kosakata tema kehidupan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":167,"idn":"Umur","ko":"나이","roman":"nai","category":"Kehidupan","note":"Kosakata tema kehidupan. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":168,"idn":"Bahasa Korea","ko":"한국어","roman":"hangugeo","category":"Bahasa","note":"Kosakata tema bahasa. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":169,"idn":"Bahasa Indonesia","ko":"인도네시아어","roman":"indonesiae","category":"Bahasa","note":"Kosakata tema bahasa. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":170,"idn":"Saya suka ini","ko":"이거 좋아해요","roman":"igeo joahaeyo","category":"Kalimat","note":"Kosakata tema kalimat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":171,"idn":"Berapa umurmu? (sopan)","ko":"나이가 어떻게 되세요?","roman":"naiga eotteoke doeseyo","category":"Kalimat","note":"Kosakata tema kalimat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":172,"idn":"Nama saya ...","ko":"제 이름은 ...예요","roman":"je ireumeun ...yeyo","category":"Kalimat","note":"Kosakata tema kalimat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":173,"idn":"Saya orang Indonesia","ko":"저는 인도네시아 사람이에요","roman":"jeoneun indonesia saramieyo","category":"Kalimat","note":"Kosakata tema kalimat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":174,"idn":"Tolong bicara pelan-pelan","ko":"천천히 말해 주세요","roman":"cheoncheonhi malhae juseyo","category":"Kalimat","note":"Kosakata tema kalimat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":175,"idn":"Tolong ulangi sekali lagi","ko":"다시 말해 주세요","roman":"dasi malhae juseyo","category":"Kalimat","note":"Kosakata tema kalimat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":176,"idn":"Saya sedang belajar bahasa Korea","ko":"한국어를 공부하고 있어요","roman":"hangugeoreul gongbuhago isseoyo","category":"Kalimat","note":"Kosakata tema kalimat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":177,"idn":"Saya tidak mengerti","ko":"이해하지 못해요","roman":"ihaehaji mothaeyo","category":"Kalimat","note":"Kosakata tema kalimat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":178,"idn":"Senang bertemu denganmu","ko":"만나서 반가워요","roman":"mannaseo bangawoyo","category":"Kalimat","note":"Kosakata tema kalimat. Perhatikan konteks dan bentuk sopan saat menggunakannya."},{"id":179,"idn":"Selamat malam (berpisah/tidur)","ko":"안녕히 계세요","roman":"annyeonghi gyeseyo","category":"Salam","note":"Kosakata tema salam. Perhatikan konteks dan bentuk sopan saat menggunakannya."}];

const $ = (id) => document.getElementById(id);
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const PROGRESS_KEY = "belajar-korea-progress-v2";
let deck = [];
let index = 0;
let correct = 0;
let streak = 0;
let answered = new Set();
let recognition = null;
let isListening = false;
let sessionToken = 0;
let sessionFirstTryCorrect = 0;

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}"); }
  catch { return {}; }
}
function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}
function normalize(s) {
  return (s || "").toLocaleLowerCase("ko-KR")
    .replace(/[.,!?。！？\s'’\-·]/g, "")
    .replace(/[\u200b-\u200d\ufeff]/g, "").trim();
}
function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function getWordProgress(id) {
  return loadProgress()[id] || { seen: 0, correct: 0, wrong: 0, streak: 0, due: 0, lastSeen: 0 };
}
function updateWordProgress(word, isCorrect) {
  const p = loadProgress();
  const old = p[word.id] || { seen: 0, correct: 0, wrong: 0, streak: 0, due: 0, lastSeen: 0 };
  old.seen++;
  old.lastSeen = Date.now();
  if (isCorrect) {
    old.correct++;
    old.streak++;
    // Simple spaced repetition: increase delay as the learner succeeds.
    const hours = old.streak >= 4 ? 24 * 7 : old.streak === 3 ? 24 * 3 : old.streak === 2 ? 24 : 0.2;
    old.due = Date.now() + hours * 60 * 60 * 1000;
  } else {
    old.wrong++;
    old.streak = 0;
    old.due = Date.now() + 5 * 60 * 1000;
  }
  p[word.id] = old;
  saveProgress(p);
}
function buildDeck() {
  const mode = $("modeSelect").value;
  const p = loadProgress();
  if (mode === "review") {
    const review = WORDS.filter(w => {
      const s = p[w.id];
      return s && (s.wrong > 0 || (s.due && s.due <= Date.now()));
    });
    return shuffle(review.length ? review : WORDS.filter(w => p[w.id]));
  }
  if (mode === "all") return shuffle(WORDS);
  // Default daily practice: 20 random words, prioritizing unseen and due words.
  const unseen = WORDS.filter(w => !p[w.id]);
  const due = WORDS.filter(w => p[w.id] && ((p[w.id].due || 0) <= Date.now() || p[w.id].wrong > 0));
  const other = WORDS.filter(w => p[w.id] && !due.includes(w));
  return shuffle([...unseen, ...due, ...other]).slice(0, Math.min(20, WORDS.length));
}
function updateLibraryCount() {
  const p = loadProgress();
  const learned = WORDS.filter(w => p[w.id] && p[w.id].correct > 0).length;
  const difficult = WORDS.filter(w => p[w.id] && p[w.id].wrong > 0).length;
  $("libraryCount").textContent = `${WORDS.length} kosakata tersedia · ${learned} pernah dijawab benar · ${difficult} perlu ditinjau`;
}
function startSession() {
  sessionToken++;
  deck = buildDeck();
  index = 0; correct = 0; streak = 0; answered = new Set(); sessionFirstTryCorrect = 0;
  $("completion").classList.add("hidden");
  updateLibraryCount();
  if (!deck.length) {
    deck = shuffle(WORDS).slice(0, 20);
  }
  renderQuestion();
}
function currentWord() { return deck[index]; }
function renderQuestion() {
  if (index >= deck.length) { finishSession(); return; }
  const w = currentWord();
  $("indonesianWord").textContent = w.idn;
  $("categoryText").textContent = w.category;
  $("progressText").textContent = `${index + 1}/${deck.length}`;
  $("correctText").textContent = correct;
  $("streakText").textContent = streak;
  $("progressBar").style.width = `${(index / deck.length) * 100}%`;
  $("transcript").textContent = "";
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("micLabel").textContent = SpeechRecognition ? "Ketuk mikrofon untuk menjawab" : "Browser ini tidak mendukung pengenalan suara";
  $("micBtn").classList.remove("listening");
  $("micBtn").disabled = !SpeechRecognition;
  $("showAnswerBtn").disabled = false;
  $("showAnswerBtn").textContent = "Lihat Jawaban";
  $("nextBtn").disabled = true;
  $("answerPanel").classList.add("hidden");
  $("hangulAnswer").textContent = w.ko;
  $("romanization").textContent = w.roman;
  $("extraNote").textContent = w.note;
}
function showAnswer() {
  $("answerPanel").classList.remove("hidden");
  $("showAnswerBtn").textContent = "Jawaban Ditampilkan";
  $("feedback").textContent = "Pelajari jawabannya. Kamu bisa lanjut setelah siap.";
  $("feedback").className = "feedback";
  $("nextBtn").disabled = false;
}
function startListening() {
  if (!SpeechRecognition || isListening) return;
  try {
    recognition = new SpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 5;
    isListening = true;
    $("micBtn").classList.add("listening");
    $("micLabel").textContent = "Mendengarkan… ucapkan sekarang";
    $("feedback").textContent = "";
    $("transcript").textContent = "";
    recognition.onresult = (event) => {
      let interim = "", finalText = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) finalText += result[0].transcript;
        else interim += result[0].transcript;
      }
      $("transcript").textContent = finalText || interim ? `Terdengar: ${finalText || interim}` : "";
      if (finalText) evaluateAnswer(finalText, event.results[event.results.length - 1]);
    };
    recognition.onerror = (event) => {
      $("feedback").textContent = event.error === "not-allowed"
        ? "Izin mikrofon ditolak. Izinkan mikrofon di pengaturan situs Chrome."
        : event.error === "no-speech"
          ? "Suara belum terdengar. Coba bicara sedikit lebih keras."
          : "Suara belum berhasil dikenali. Coba lagi.";
      $("feedback").className = "feedback bad";
    };
    recognition.onend = () => {
      isListening = false;
      $("micBtn").classList.remove("listening");
      if (index < deck.length) $("micLabel").textContent = "Ketuk mikrofon untuk mencoba lagi";
    };
    recognition.start();
  } catch (e) {
    isListening = false;
    $("micBtn").classList.remove("listening");
    $("feedback").textContent = "Mikrofon belum bisa dimulai. Periksa izin dan coba lagi.";
    $("feedback").className = "feedback bad";
  }
}
function evaluateAnswer(transcript, result) {
  const w = currentWord();
  const token = sessionToken;
  const alternatives = [];
  if (result) for (let i = 0; i < result.length; i++) alternatives.push(result[i].transcript);
  alternatives.push(transcript);
  const target = normalize(w.ko);
  const matched = alternatives.some(t => normalize(t) === target);
  if (matched) {
    if (!answered.has(w.id)) {
      answered.add(w.id);
      correct++;
      streak++;
      sessionFirstTryCorrect++;
      updateWordProgress(w, true);
    }
    $("correctText").textContent = correct;
    $("streakText").textContent = streak;
    $("feedback").textContent = "Benar! Bagus sekali 🎉";
    $("feedback").className = "feedback good";
    $("micLabel").textContent = "Jawaban dikenali dengan benar";
    $("answerPanel").classList.remove("hidden");
    $("nextBtn").disabled = false;
    $("progressBar").style.width = `${((index + 1) / deck.length) * 100}%`;
    setTimeout(() => {
      if (token === sessionToken && index < deck.length && currentWord().id === w.id && !$("nextBtn").disabled) nextQuestion();
    }, 1100);
  } else {
    streak = 0;
    $("streakText").textContent = streak;
    $("feedback").textContent = "Belum cocok. Coba lagi atau lihat jawabannya.";
    $("feedback").className = "feedback bad";
    $("micLabel").textContent = "Ketuk mikrofon untuk mencoba lagi";
    if (!answered.has(w.id)) updateWordProgress(w, false);
    updateLibraryCount();
  }
}
function nextQuestion() {
  if (isListening && recognition) recognition.stop();
  index++;
  renderQuestion();
}
function speakAnswer() {
  const w = currentWord();
  if (!("speechSynthesis" in window)) {
    $("feedback").textContent = "Fitur suara contoh tidak tersedia di browser ini.";
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(w.ko);
  utterance.lang = "ko-KR";
  utterance.rate = 0.82;
  const voice = window.speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith("ko"));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}
function finishSession() {
  $("progressBar").style.width = "100%";
  $("summaryText").textContent = `Sesi selesai: ${correct} dari ${deck.length} kata berhasil dikenali. Progres tiap kata tersimpan di perangkat ini.`;
  $("completion").classList.remove("hidden");
  updateLibraryCount();
}
$("micBtn").addEventListener("click", startListening);
$("showAnswerBtn").addEventListener("click", showAnswer);
$("nextBtn").addEventListener("click", nextQuestion);
$("speakAnswerBtn").addEventListener("click", speakAnswer);
$("resetBtn").addEventListener("click", startSession);
$("againBtn").addEventListener("click", startSession);
$("modeSelect").addEventListener("change", startSession);
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
startSession();

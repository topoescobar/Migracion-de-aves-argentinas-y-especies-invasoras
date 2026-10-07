/* =========================================================
   CANTOS: grabaciones de xeno-canto (se reproducen en línea)
   tipo: canto (song) / llamado (call)
   ========================================================= */

const CANTOS = {
  "muscipipra-vetula": [
    { tipo: "canto", xc: "81622", autor: "Jeremy Minns", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/DGVLLRYDXS/MUSVET05.mp3" },
    { tipo: "llamado", xc: "46726", autor: "Bernabe Lopez-Lanus", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/BYLLSJRVDZ/Muscipipra%20vetula_Shear-tailed%20Grey%20Tyrant_Parque%20Nacional%20Itatiaia%20%28Trilha%20Tres%20Picos%29_Rio%20de%20Janeiro_Brasil_22FEB04_Bernabe%20Lopez-Lanus.mp3" },
  ],
  "euphonia-cyanocephala": [
    { tipo: "canto", xc: "272842", autor: "Peter Boesman", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC272842-Golden-rumped%20Euphonia%20song%20A%201.mp3" },
    { tipo: "llamado", xc: "272841", autor: "Peter Boesman", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC272841-Golden-rumped%20Euphonia%20call%20A.mp3" },
  ],
  "pitangus-sulphuratus": [
    { tipo: "canto", xc: "704981", autor: "Guillermo Treboux", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/UZCHJCUDEF/XC704981-Pitangus%20sulphuratus..mp3" },
    { tipo: "llamado", xc: "839479", autor: "Bernard BOUSQUET", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/THHNKSHUMO/XC839479-223-Tyran-quiquivi-STE-006..mp3" },
  ],
  "pipraeidea-bonariensis": [
    { tipo: "canto", xc: "47066", autor: "Bernabe Lopez-Lanus", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/BYLLSJRVDZ/Thraupis%20bonariensis_Blue-and-yellow%20Tanager_Estancia%20El%20Potrero%20%28alrededores%20La%20Barraca%29_Gualeguaychu_Entre%20Rios_2008_Bernabe%20Lopez-Lanus.mp3" },
    { tipo: "llamado", xc: "941006", autor: "Guillermo Menéndez (gmmv80)", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/VALRNZCFXZ/XC941006-Rauenia-bonariensis.mp3" },
  ],
  "myiophobus-flammiceps": [
    { tipo: "canto", xc: "551043", autor: "Bernabe Lopez-Lanus", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/BYLLSJRVDZ/XC551043-0773%20BLL513-48%20Myiophobus%20fasciatus.mp3" },
    { tipo: "llamado", xc: "81636", autor: "Jeremy Minns", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/DGVLLRYDXS/MYIFAS06.mp3" },
  ],
  "elaenia-albiceps": [
    { tipo: "canto", xc: "49395", autor: "Rosendo Fraga", licencia: "CC BY-NC-ND 2.5", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/2.5/",
      audio: "https://xeno-canto.org/sounds/uploaded/JQSYKZHEMB/ELAENIA%20White-crested_28_PP%20Yala_Jujuy_AR_29ENE05_Rosendo%20Fraga.mp3" },
    { tipo: "llamado", xc: "448247", autor: "Rosendo Manuel Fraga", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/JQSYKZHEMB/XC448247-ElaeniaalbicepsLozanoTape07.mp3" },
  ],
  "turdus-amaurochalinus": [
    { tipo: "canto", xc: "687805", autor: "Niels Krabbe", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/XTVEPHMPPJ/XC687805-2021-11-14%2C1612hrsTurdus_amaurochalinus1311A.mp3" },
    { tipo: "llamado", xc: "272765", autor: "Peter Boesman", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC272765-Creamy-bellied%20Thrush%20QQ%20calls%20A.mp3" },
  ],
  "columbina-picui": [
    { tipo: "canto", xc: "463486", autor: "Rosendo Manuel Fraga", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/JQSYKZHEMB/XC463486-PicuiDovePNPalmarTape42.mp3" },
    { tipo: "llamado", xc: "116023", autor: "Daniel González Amat", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/HBPPUDOMJI/XC116023-tcuyana.mp3" },
  ],
  "myiophobus-auriceps": [
    { tipo: "canto", xc: "46761", autor: "Bernabe Lopez-Lanus", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/BYLLSJRVDZ/Myiophobus%20fasciatus_Bran-coloured%20Flycatcher_Estancia%20El%20Potrero%20%28alrededores%20de%20La%20Barraca%29_Gualeguaychu_Entre%20Rios_Argentina_16OCT2008a_Bernabe%20Lopez-Lanus.mp3" },
    { tipo: "llamado", xc: "46760", autor: "Bernabe Lopez-Lanus", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/BYLLSJRVDZ/Myiophobus%20fasciatus_Bran-coloured%20Flycatcher_Estancia%20El%20Potrero%20%28alrededores%20de%20La%20Barraca%29_Gualeguaychu_Entre%20Rios_Argentina_16OCT2008%20b_Bernabe%20Lopez-Lanus.mp3" },
  ],
  "knipolegus-striaticeps": [
    { tipo: "canto", xc: "971103", autor: "Hans Matheve", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/VROUALCTKG/XC971103-Cinereous-Tyrant-(song,-Argentina,-RN112,-221211_034).mp3" },
    { tipo: "llamado", xc: "272738", autor: "Peter Boesman", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC272738-Cinereous%20Tyrant%20call%20A.mp3" },
  ],
  "xolmis-coronatus": [
    { tipo: "canto", xc: "946740", autor: "Marco Cruz", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/TZWQJUGVHP/XC946740-180608-091124_noivinha-coroada-%28Departamento-de-Rio-Negro%29.mp3" },
    { tipo: "llamado", xc: "965892", autor: "Hans Matheve", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/VROUALCTKG/XC965892-Black-crowned-Monjita-(unsure,-call,-Argentina,-Amaiche-del-Valle,-221209_020).mp3" },
  ],
  "phytotoma-rutila": [
    { tipo: "canto", xc: "823358", autor: "Bernard BOUSQUET", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/THHNKSHUMO/XC823358-025-Rara-du-paraguay.mp3" },
    { tipo: "llamado", xc: "273341", autor: "Peter Boesman", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC273341-White-tipped%20Plantcutter%20call%20A%202.mp3" },
  ],
  "lophospingus-pusillus": [
    { tipo: "canto", xc: "609502", autor: "Carlos Ferrari", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/ZYWOYHEPUK/XC609502-120223_004%20Lophospingus%20pusillus%20-Chamical-LaRioj%2023dic12-CarlosFerrari.MP3" },
    { tipo: "llamado", xc: "45242", autor: "Bernabe Lopez-Lanus", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/BYLLSJRVDZ/Lophospingus%20pusillus_Black-crested%20Finch_San%20Jose%20de%20las%20Salinas%20%28alrededores%20de%20Retumbadero%29_%20Cordoba_3JUN2007_Bernabe%20Lopez-Lanus.mp3" },
  ],
  "microspingus-torquatus": [
    { tipo: "canto", xc: "682344", autor: "Franco Vushurovich", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/VLDFGFKOWN/XC682344-MOnteritalladeCollar.mp3" },
    { tipo: "llamado", xc: "296333", autor: "Ross Gallardy", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/FNIOJOZADD/XC296333-RingedWarblingFinch_Bolivia_050315_call3.mp3" },
  ],
  "coryphistera-alaudina": [
    { tipo: "canto", xc: "272898", autor: "Peter Boesman", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC272898-Lark-like%20Brushrunner%20QQ%20song%20A.mp3" },
    { tipo: "llamado", xc: "150789", autor: "Dan Lane", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC150789-Coryphistera%20alaudina0122-1.mp3" },
  ],
  "furnarius-cristatus": [
    { tipo: "canto", xc: "686220", autor: "Franco Vushurovich", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/VLDFGFKOWN/XC686220-hornerocopetonmepa.mp3" },
    { tipo: "llamado", xc: "272782", autor: "Peter Boesman", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC272782-Crested%20Hornero%20call%20A.mp3" },
  ],
  "xolmis-salinarum": [
    { tipo: "llamado", xc: "965482", autor: "Hans Matheve", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/VROUALCTKG/XC965482-Salinas-Monjita-(call,-Argentina,-Salinas-Grandes,-221207_007).mp3" },
  ],
  "spiziapteryx-circumcincta": [
    { tipo: "canto", xc: "178742", autor: "Fabricio Gorleri", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/YHDVBURCZQ/XC178742-Spiziapteryx%20cirucumcincta_TacoPozo_17May14.MP3" },
    { tipo: "llamado", xc: "273210", autor: "Peter Boesman", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC273210-Spot-winged%20Falconet%20calls%20AA%201.mp3" },
  ],
  "podiceps-gallardoi": [
    { tipo: "canto", xc: "20592", autor: "Santiago Imberti", licencia: "CC BY-NC-ND 2.5", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/2.5/",
      audio: "https://xeno-canto.org/sounds/uploaded/BRAMYBYPHG/Podiceps%20gallardoi%2C%20Strobel%203-12-20%2CSI%20parte%20cut%207.mp3" },
    { tipo: "llamado", xc: "470497", autor: "Bobby Wilcox", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC470497-190201_0157%20HOGR%202%20copulation%2040ft%201900%20mp3%20amp.mp3" },
  ],
  "rallus-antarcticus": [
    { tipo: "canto", xc: "24431", autor: "Nick Athanas", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/XRABICUARW/R09_2105-Austral-Rail.mp3" },
    { tipo: "llamado", xc: "450104", autor: "Peter Boesman", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC450104-LS100963%20Austral%20Rail%20call%20A.mp3" },
  ],
  "merganetta-armata": [
    { tipo: "llamado", xc: "1001188", autor: "Manuel Sánchez-Nivicela", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/BBFFGHPZZQ/XC1001188-Torrent-Duck.mp3" },
  ],
  "sturnus-vulgaris": [
    { tipo: "canto", xc: "897192", autor: "Pia", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/KNXVHRYBUE/XC897192-Stare.mp3" },
    { tipo: "llamado", xc: "567407", autor: "Ramit Singal", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/FPDBIILGCX/XC567407-0_MIXPRE-2656_European%20Starling_20200611_Tasmanian%20Arboretum.mp3" },
  ],
  "furnarius-rufus": [
    { tipo: "canto", xc: "836209", autor: "Bernard BOUSQUET", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/THHNKSHUMO/XC836209-197-Fournier-rouxSTE-058..mp3" },
    { tipo: "llamado", xc: "809528", autor: "Franco Vushurovich", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/VLDFGFKOWN/XC809528-hornerocallsJUEVESPUERTOIGUAZUs.mp3" },
  ],
  "colaptes-melanochloros": [
    { tipo: "canto", xc: "683584", autor: "Franco Vushurovich", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/VLDFGFKOWN/XC683584-CarpinteroRealOctubtre2021.mp3" },
    { tipo: "llamado", xc: "965472", autor: "Hans Matheve", licencia: "CC BY-NC-ND 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/VROUALCTKG/XC965472-Green-barred-Woodpecker-(call,-Argentina,-La-Juntura,-221206_012).mp3" },
  ],
  "tachycineta-leucorrhoa": [
    { tipo: "canto", xc: "46813", autor: "Bernabe Lopez-Lanus", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/BYLLSJRVDZ/Tachycineta%20leucorrhoa_White-rumped%20Swallow_Bajos%20Submeridionales%20%28Laguna%20El%20Palmar%29_%20Vera_Santa%20Fe_Argentina_Bernabe%20Lopez-Lanus.mp3" },
    { tipo: "llamado", xc: "656898", autor: "Luiz Fernando Matos", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/RVBDRSFEQC/XC656898-andorinha-de-sobre-branco%201%28Tachycineta%20leucorrhoa%29.mp3" },
  ],
  "anthus-antarcticus": [
    { tipo: "canto", xc: "155943", autor: "Pritam Baruah", licencia: "CC BY-NC-SA 3.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/3.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/HALXQIMTRP/XC155943-South-Georgia-Pipit-Prion-Island-Pritam-Baruah-Nov2013.mp3" },
    { tipo: "llamado", xc: "318725", autor: "Fabrice Schmitt", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/FPAGKPAQYO/XC318725-SouthGeorgia%20Pipit_Salisbury_24dec2015_Fschmitt_2.mp3" },
  ],
  "thalassarche-melanophris": [
    { tipo: "canto", xc: "863975", autor: "Kevin Guille", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/RDBQTCTEUE/XC863975-AlbatrosàSourcilsNoirs_KERGUELEN_CanonDesSourcilsNoirs_Cri-chant_2022.mp3" },
    { tipo: "llamado", xc: "863976", autor: "Kevin Guille", licencia: "CC BY-NC-SA 4.0", licenciaUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      audio: "https://xeno-canto.org/sounds/uploaded/RDBQTCTEUE/XC863976-AlbatrosàSourcilsNoirs_KERGUELEN_CanonDesSourcilsNoirs_Cri-chant_2022_2.mp3" },
  ],
};

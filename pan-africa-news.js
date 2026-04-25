const africaData = {

NorthAfrica:{
 Algeria:[
 ["Algeria Press Service","https://www.aps.dz"],
 ["El Watan","https://www.elwatan.com"],
 ["TSA Algeria","https://www.tsa-algerie.com"]
 ],

 Egypt:[
 ["Al Ahram","https://english.ahram.org.eg"],
 ["Al Masry Al Youm","https://www.almasryalyoum.com"],
 ["Daily News Egypt","https://www.dailynewsegypt.com"]
 ],

 Libya:[
 ["Libya Herald","https://www.libyaherald.com"],
 ["Libyan Observer","https://www.libyanobserver.ly"]
 ],

 Morocco:[
 ["MAP","https://www.mapnews.ma"],
 ["Le Matin","https://lematin.ma"],
 ["Hespress","https://www.hespress.com"]
 ],

 Tunisia:[
 ["TAP","https://www.tap.info.tn"],
 ["La Presse","https://lapresse.tn"]
 ],

 Sudan:[
 ["Sudan Tribune","https://sudantribune.com"],
 ["Radio Dabanga","https://www.dabangasudan.org"]
 ]
},

WestAfrica:{
 AESAlliance:[
 ["Sputnik Africa","https://sputnik.africa"],
 ["Maliweb","https://www.maliweb.net"],
 ["leFaso","https://www.lefaso.net"],
 ["Niamey24","https://www.niameysoir.com"]
 ],

 Nigeria:[
 ["Premium Times","https://www.premiumtimesng.com"],
 ["Channels TV","https://www.channelstv.com"],
 ["Punch","https://punchng.com"],
 ["Vanguard","https://www.vanguardngr.com"],
 ["Leadership","https://leadership.ng"]
 ],

 Ghana:[
 ["Graphic","https://graphic.com.gh"],
 ["Daily Guide","https://dailyguidenetwork.com"],
 ["Citi Newsroom","https://citinewsroom.com"]
 ],

 Senegal:[
 ["Le Soleil","https://www.lesoleil.sn"],
 ["Seneweb","https://www.seneweb.com"]
 ],

 BurkinaFaso:[
 ["Burkina24","https://www.burkina24.com"],
 ["leFaso","https://www.lefaso.net"]
 ],

 Niger:[
 ["Le Sahel","https://www.lesahel.org"],
 ["Niamey24","https://www.niameysoir.com"]
 ],

 IvoryCoast:[
 ["Abidjan.net","https://www.abidjan.net"],
 ["Le Patriote","https://www.lepatriote.net"]
 ]
},

CentralAfrica:{
 Cameroon:[
 ["Cameroon Tribune","https://www.cameroon-tribune.cm"],
 ["CRTV","https://www.crtv.cm"]
 ],

 DRCongo:[
 ["Radio Okapi","https://www.radiookapi.net"],
 ["Le Potentiel","https://www.lepotentiel.cd"]
 ],

 Chad:[
 ["Alwihda","https://www.alwihdainfo.com"],
 ["Le Progres","https://www.leprogres.td"]
 ],

 Angola:[
 ["Jornal de Angola","https://www.jornaldeangola.ao"],
 ["O Pais","https://opais.co.ao"]
 ]
},

EastAfrica:{
 Ethiopia:[
 ["Addis Standard","https://addisstandard.com"],
 ["Reporter","https://www.ethiopianreporter.com"]
 ],

 Kenya:[
 ["Nation","https://nation.africa"],
 ["Capital FM","https://www.capitalfm.co.ke"],
 ["Standard","https://www.standardmedia.co.ke"]
 ],

 Somalia:[
 ["SONNA","https://sonna.so"],
 ["Radio Muqdisho","https://radiomuqdisho.so"]
 ],

 Uganda:[
 ["New Vision","https://www.newvision.co.ug"],
 ["Observer","https://observer.ug"]
 ],

 Tanzania:[
 ["The Citizen","https://www.thecitizen.co.tz"],
 ["Daily News","https://dailynews.co.tz"]
 ]
},

SouthernAfrica:{
 SouthAfrica:[
 ["SABC News","https://www.sabcnews.com"],
 ["News24","https://www.news24.com"],
 ["Mail and Guardian","https://mg.co.za"]
 ],

 Namibia:[
 ["New Era","https://neweralive.na"],
 ["The Namibian","https://namibian.com.na"]
 ],

 Zimbabwe:[
 ["Herald","https://www.herald.co.zw"],
 ["NewsDay","https://www.newsday.co.zw"]
 ],

 Botswana:[
 ["Mmegi","https://www.mmegi.bw"],
 ["Daily News Botswana","https://dailynews.gov.bw"]
 ],

 Mozambique:[
 ["Noticias","https://www.jornalnoticias.co.mz"],
 ["Club of Mozambique","https://clubofmozambique.com"]
 ]
}

};



function initIntel(){

 const grid=document.getElementById('intelGrid');
 grid.innerHTML='';

 for(const [region,countries] of Object.entries(africaData)){

   let html=`
   <div class='region-block'>
   <div class='region-title'>
   ${region.replace(/([A-Z])/g,' $1').trim()}
   </div>
   `;

   for(const country in countries){
      html+=`
      <button
       class='country-btn'
       onclick="openCountry('${region}','${country}')">
       » ${country.replace(/([A-Z])/g,' $1').trim()}
      </button>
      `;
   }

   html+='</div>';

   grid.innerHTML+=html;
 }

}



function openCountry(region,country){

 let sources=africaData[region][country];

 document.getElementById(
 'modalCountry'
 ).innerText=
 'IDENTIFIED: '+country.toUpperCase();

 let html='';

 sources.forEach(src=>{
   html+=`
   <a
    class='modal-link'
    href='${src[1]}'
    target='_blank'>
    ${src[0]}
   </a>
   `;
 });

 document.getElementById(
 'modalLinks'
 ).innerHTML=html;

 document.getElementById(
 'modalOverlay'
 ).style.display='block';

 document.getElementById(
 'newsModal'
 ).style.display='block';

}


function closeModal(){

 document.getElementById(
 'modalOverlay'
 ).style.display='none';

 document.getElementById(
 'newsModal'
 ).style.display='none';

}

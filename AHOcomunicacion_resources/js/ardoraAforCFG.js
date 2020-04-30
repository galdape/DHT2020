//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#C0C0C0"; colorText="#000000"; colorSele="#808080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Lo lograste, no olvides tomar captura de pantalla!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QUhPY29tdW5pY2FjaW9u"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["VEVBTVM","Wk9PTQ","QkxPRw","Q1VBUkVOVEE","UFVCTElDQVM","RlJFQ1VFTlRFUw","Q0hBVA","Rk9ORE8","",""];imaW=["","","","","","","","","",""];queW=["HERRAMIENTA INTEGRADA A OFFICE 365 PARA REALIZAR VIDEO LLAMADAS","HERRAMIENTA QUE TE PERMITE REALIZAR VIDEO LLAMADAS","ES UNA PAGINA QUE TE PERMITE COMPARTIR INFORMACION SOBRE TEMAS DE TU INTERES ASI COMO PUBLICAR Y RESPONDER PREGUNTAS Y PARTICIPAR EN DEBATES, ADEMAS DE COMPARTIR OPINIONES Y COMENTARIOS CON OTROS USUARIOS.","NUMERO LIMITE DE MINUTOS DE UNA REUNION DE ZOOM EN SU VERSION LIBRE","EN UN BLOG PUEDES REALIZAR ANOTACIONES ___________ Y PRIVADAS","LAS PREGUNTAS ____________ ES UNA HERRAMIENTA QUE PUEDES HABILITAR EN TU AULA Y  ATENDER LAS DUDAS COMUNES DE TUS ESTUDIANTES","EL _____ EN TEAMS TE PERMITE ATENDER DUDAS MIENTRAS ESTAS EXPONIENDO TU CLASE EN VIVO A TRAVÉS DE UNA VIDEO CONFERENCIA","CON ZOOM ES POSIBLE CAMBIAR EL ________  VIRTUAL EN MI SESIÓN DE VIDEO","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="AHOcomunicacion_resources/media/"; textBNext="NEXT";

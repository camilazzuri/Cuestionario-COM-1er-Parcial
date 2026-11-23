// COM · 1er Parcial — banco de preguntas (tanda 3 de 3): códigos de línea, estándares y preguntas con imagen
addQ([
// ───────── Velocidades ─────────
qM("¿Cuál de las siguientes fórmulas me permite determinar la Velocidad de Señalización?",[
"Vs = 1/Tb","I = Log2M","Vs = [1/τ] Log2M","Vs = 1/τ","Vs = [1/Tb] / Log2M"],[3,4],{explanation:"Seleccionar las dos que son equivalentes: Vs = 1/τ y Vs = Vtx / Log₂M."}),
qM("¿Cuál de las siguientes fórmulas me permite calcular la Velocidad de Transmisión?",[
"I = Log2M","Vtx = [1/τ] Log2M","Vtx = [1/Tb] / Log2M","Vtx = 1/Tb","Vtx = 1/τ"],[1,3],{explanation:"Vtx = Vs · Log₂M y también Vtx = 1/Tb."}),
// ───────── Códigos de línea ─────────
qS("Un código de línea es un patrón de [1] utilizados para representar datos [2] transmitidos por [3].",[
"[1] tensión, corriente o fotones · [2] digitales · [3] una línea de transmisión",
"[1] potencia, sincronismo o continua · [2] analógicos · [3] un medio de almacenamiento",
"[1] tensión, corriente o potencia · [2] aleatorios · [3] un canal de radiocomunicación",
"[1] corriente, sincronismo o fotones · [2] analógicos · [3] un medio de almacenamiento"],0),
qM("Indique cuáles de los siguientes se consideran códigos autosincronizados:",[
"NRZ","NZR","MANCHESTER DIFERENCIAL","MANCHESTER","UNIPOLAR","RZ","MANCHESTER UNITED"],[2,3]),
qT("Los códigos de bloque codifican un bloque de longitud m de una secuencia de datos en un bloque de longitud n, con m > n, y luego esa secuencia de n bits es la que transmite utilizando un código de línea binario o no.",false,{explanation:"En un código de bloque n > m: se agregan bits de redundancia."}),
qT("Los códigos de línea multinivel permiten aumentar la tasa de bits, pero el ancho de banda utilizado también aumenta.",false),
qT("Al eliminar la componente de continua de un código de línea necesariamente debemos aumentar el ancho de banda del mismo.",false),
qS("¿Por qué es necesario eliminar el componente de continua de un código de banda base?",[
"Para mejorar la relación (SIR) en la transmisión","Para permitir trabajar con el ancho de banda de Nyquist","Para disminuir el ancho de banda necesario para su transmisión","Para permitir los acoplamientos inductivos en las líneas de transmisión","Para aumentar la velocidad de transmisión"],3),
qT("El estándar RS232 contempla una codificación para el \"0\" binario de [-3; -25] volts.",false,{explanation:"En RS232 el \"0\" lógico (space) es una tensión positiva de +3 a +25 V; el \"1\" es negativo (-3 a -25 V)."}),
qS("Indique si la siguiente secuencia de bits codificados en HDB3 es correcta o tiene algún error; en tal caso seleccione la opción correcta:",[
"Está incorrecta; falta un bit positivo en el lugar 9","Está incorrecta; hay un bit negativo de más en el lugar 1","Está correcta","Está incorrecta; hay un bit positivo de más en el lugar 12","Está incorrecta; hay un bit positivo de más en el lugar 7"],2,{image:"img/hdb3_1.png"}),
qS("Indique si la siguiente secuencia de bits codificados en HDB3 es correcta o tiene algún error; en tal caso seleccione la opción correcta:",[
"Está incorrecta; falta un bit positivo en el lugar 8","Está correcta","Está incorrecta; hay un bit negativo de más en el lugar 7","Está incorrecta; hay un bit positivo de más en el lugar 12","Está incorrecta; falta un bit negativo en el lugar 1"],0,{image:"img/hdb3_2.png"}),
qS("Teniendo en cuenta la secuencia de bits y la estrategia para construir el código B8ZS, indicar cuál de las opciones presentadas está correcta:",["Opción 1","Opción 2","Opción 3","Opción 4","Opción 5"],4,{image:"img/b8zs.png"}),
qS("Los gráficos A, B, C y D muestran la PSD de cuatro códigos de línea. ¿A qué código corresponde cada curva?",[
"A (azul) NRZ polar · B (verde) NRZ bipolar · C (roja) NRZ unipolar · D (violeta) Manchester",
"A (azul) NRZ unipolar · B (verde) Manchester · C (roja) NRZ polar · D (violeta) NRZ bipolar",
"A (azul) Manchester · B (verde) NRZ polar · C (roja) NRZ bipolar · D (violeta) NRZ unipolar",
"A (azul) NRZ bipolar · B (verde) NRZ unipolar · C (roja) Manchester · D (violeta) NRZ polar"],0,{image:"img/psd.png",explanation:"El NRZ polar tiene el máximo en f = 0; el unipolar tiene la mitad de potencia; el bipolar (AMI) y el Manchester se anulan en continua, y el Manchester ocupa más ancho de banda."}),
// ───────── Estándares serie / paralelo ─────────
qM("¿Cuáles de los siguientes son estándares de transmisión de bits en serie?",["USB","RS232-C","Cable Modem","LPT","Centronics"],[0,1,2]),
qM("¿Cuáles de los siguientes son estándares de transmisión de bits en paralelo?",["RS232-C","LPT","Cable Modem","USB","Centronics"],[1,4]),
qT("La transmisión serie de la información digital (bits) a través de un cable único u otros medios es menos efectiva en cuanto a costo que la transmisión en paralelo a través de múltiples cables.",false),
qT("La transmisión serie de la información digital (bits) a través de un cable único u otros medios es mucho más efectiva en cuanto a costo que la transmisión en paralelo a través de múltiples cables.",true),
qS("El estándar USB 2.0 posibilitaba una tasa de [1] y funcionaba con un voltaje de [2]; en cambio el estándar USB 4.0 posibilitará una tasa de [3] y funcionará con un voltaje de [4].",[
"[1] 480 Mb/s · [2] 5 V · [3] 40 Gb/s · [4] 20 V",
"[1] 5 Mb/s · [2] 5 V · [3] 20 Gb/s · [4] 10 V",
"[1] 480 Mb/s · [2] 10 V · [3] 40 Gb/s · [4] 40 V",
"[1] 20 Gb/s · [2] 20 V · [3] 40 Gb/s · [4] 5 V"],0,{explanation:"⚠️ Verificar los voltajes con tu cátedra; las tasas (480 Mb/s y 40 Gb/s) son seguras."}),
]);

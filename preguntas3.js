// COM · 1er Parcial — banco de preguntas (tanda 3 de 3): velocidades, códigos de línea y estándares
addQ([
// ───────── Velocidades ─────────
qM("¿Cuál de las siguientes fórmulas me permite calcular la Velocidad de Transmisión?",[
"I = Log2M","Vtx = [1/τ] Log2M","Vtx = [1/Tb] / Log2M","Vtx = 1/Tb","Vtx = 1/τ"],[1,3],{explanation:"Vtx = Vs · Log₂M y también Vtx = 1/Tb."}),
qM("¿Cuáles de las siguientes fórmulas expresan correctamente la relación entre velocidad de señalización y de transmisión?",[
"Vs = (1/Tb)/log₂M","Vtx = (1/τ)·log₂M","Vs = (1/τ)/log₂M","Vs = (1/τ)·log₂M","Vs = (1/Tb)·log₂M"],[0,1]),
qS("Una señal digital tiene una velocidad de señalización de 6000 baudios y usa pulsos de 8 niveles. ¿Velocidad de transmisión?",["18 000 bps","6000 bps","48 000 bps","2000 bps"],0,{explanation:"Vtx = 6000 × log₂8 = 6000 × 3 = 18.000 bps."}),
qT("Solo cuando la señal tiene dos niveles (M = 2) la velocidad de transmisión y la de señalización coinciden numéricamente.",true),
qS("Se transmite en Manchester a 2400 bps. ¿Cuánto dura cada símbolo (medio bit)?",["208 µs","416 µs","104 µs","2,4 ms"],0,{explanation:"Tb = 1/2400 ≈ 416,7 µs; en Manchester cada medio bit dura ≈ 208 µs."}),
qS("¿Cuál es el ancho de banda mínimo (en Hz) para un tren de 1000 pulsos rectangulares de 0,0002 ms cada uno, con el criterio del PRIMER CRUCE POR CERO?",["5.000.000 Hz","2.500.000 Hz","10.000.000 Hz","1.000 Hz"],0,{explanation:"⚠️ Verificar con la cátedra. τ = 0,2 µs → primer cruce por cero en 1/τ = 5 MHz. La hoja de respuestas del 3K1 marcaba 2.500.000 Hz (que sería 1/(2τ), el criterio de Nyquist)."}),
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
qT("En AMI, si aparece una racha larga de ceros la señal queda en cero y el receptor puede perder el sincronismo; B8ZS y HDB3 lo resuelven con sustituciones que introducen violaciones.",true),
qS("Indique si la siguiente secuencia de bits codificados en HDB3 es correcta o tiene algún error; en tal caso seleccione la opción correcta:",[
"Está incorrecta; falta un bit positivo en el lugar 9","Está incorrecta; hay un bit negativo de más en el lugar 1","Está correcta","Está incorrecta; hay un bit positivo de más en el lugar 12","Está incorrecta; hay un bit positivo de más en el lugar 7"],2,{image:"img/hdb3_1.png"}),
qS("Indique si la siguiente secuencia de bits codificados en HDB3 es correcta o tiene algún error; en tal caso seleccione la opción correcta:",[
"Está incorrecta; falta un bit positivo en el lugar 8","Está correcta","Está incorrecta; hay un bit negativo de más en el lugar 7","Está incorrecta; hay un bit positivo de más en el lugar 12","Está incorrecta; falta un bit negativo en el lugar 1"],0,{image:"img/hdb3_2.png"}),
qS("Teniendo en cuenta la secuencia de bits y la estrategia para construir el código B8ZS, indicar cuál de las opciones presentadas está correcta:",["Opción 1","Opción 2","Opción 3","Opción 4","Opción 5"],4,{image:"img/b8zs.png"}),
qS("Determine cuál es la secuencia de bits codificada en B8ZS (la polaridad del primer 1 es +):",["10000000000100","10000000000010","10000000011010","10000000011001"],0,{image:"img/b8zs_sec.png",explanation:"Los 8 ceros se reemplazan por 000VB0VB: esos pulsos son violaciones y bits de relleno, no unos reales."}),
qS("¿A qué secuencia binaria corresponde la gráfica del código de línea?",["01001110","11010010","11001010","01001100"],0,{image:"img/ami_sec.png",explanation:"En AMI cada pulso (alternando + y −) es un 1 y el nivel cero es un 0: 0 1 0 0 1 1 1 0."}),
qS("La siguiente imagen corresponde a datos codificados en:",[
"1 → HDB3 · 2 → AMI","1 → AMI · 2 → HDB3","1 → B8ZS · 2 → AMI","1 → HDB3 · 2 → Manchester"],0,{image:"img/cod_hdb3_ami.png",explanation:"En la figura 1 las rachas de ceros se sustituyen por pulsos con violaciones (HDB3). En la figura 2 los unos alternan de polaridad y los ceros quedan en cero (AMI)."}),
qS("Indicar de qué código de línea se trata:",[
"1 → B8ZS · 2 → Bipolar-AMI","1 → Bipolar-AMI · 2 → B8ZS","1 → HDB3 · 2 → Bipolar-AMI","1 → B8ZS · 2 → NRZ-I"],0,{image:"img/cod_b8zs_ami.png",explanation:"La figura 1 reemplaza 8 ceros por 000VB0VB (B8ZS). La figura 2 deja los ceros en cero y alterna los unos (AMI)."}),
qS("Los gráficos A, B, C y D muestran la PSD de cuatro códigos de línea. ¿A qué código corresponde cada curva?",[
"A (azul) NRZ polar · B (verde) NRZ bipolar · C (roja) NRZ unipolar · D (violeta) Manchester",
"A (azul) NRZ unipolar · B (verde) Manchester · C (roja) NRZ polar · D (violeta) NRZ bipolar",
"A (azul) Manchester · B (verde) NRZ polar · C (roja) NRZ bipolar · D (violeta) NRZ unipolar",
"A (azul) NRZ bipolar · B (verde) NRZ unipolar · C (roja) Manchester · D (violeta) NRZ polar"],0,{image:"img/psd.png",explanation:"El NRZ polar tiene el máximo en f = 0; el unipolar tiene la mitad de potencia; el bipolar (AMI) y el Manchester se anulan en continua, y el Manchester ocupa más ancho de banda."}),
qS("Para AMI y Manchester con Tb = 1 µs, ¿cuál es el ancho de banda del primer nulo de cada uno?",["AMI 1 MHz; Manchester 2 MHz","AMI 2 MHz; Manchester 1 MHz","Ambos 1 MHz","AMI 0,5 MHz; Manchester 1 MHz"],0),
qS("Se transmite a 64 Kbps con 2B1Q. ¿Ancho de banda del primer nulo?",["32 kHz","64 kHz","128 kHz","16 kHz"],0,{explanation:"2B1Q lleva 2 bits por símbolo: r = 32 kbaudios → 1er nulo en 32 kHz."}),
qS("Eficiencia espectral (R / B del 1er nulo) con Tb = 1 ms:",[
"Manchester 0,5 · NRZ-I 1 · 2B1Q 2 · RZ (50 %) 0,5 bps/Hz",
"Manchester 1 · NRZ-I 0,5 · 2B1Q 2 · RZ (50 %) 1 bps/Hz",
"Manchester 0,5 · NRZ-I 1 · 2B1Q 4 · RZ (50 %) 1 bps/Hz",
"Manchester 2 · NRZ-I 1 · 2B1Q 0,5 · RZ (50 %) 0,5 bps/Hz"],0),
qS("En Manchester según la convención de G. E. Thomas (la de la clase), un 1 lógico se representa con:",[
"Un flanco descendente en la mitad del bit (alto → bajo)","Un flanco ascendente en la mitad del bit (bajo → alto)","Nivel alto todo el bit","Ausencia de transición"],0),
qS("En Manchester diferencial:",[
"Siempre hay transición en la mitad del bit; al INICIO del bit hay transición si el bit es 0 y no hay si es 1","Solo hay transición cuando el bit es 1","El 1 se codifica con +V y el 0 con −V","Hay transición al inicio si el bit es 1"],0),
qS("En NRZ-I (no retorno a cero invertido):",[
"Cada 1 produce una transición de nivel; los 0 no cambian el nivel","Cada 0 produce una transición","Hay transición en la mitad de cada bit","El 1 vuelve a cero en la mitad del bit"],0),
qS("En MLT-3, si el bit que viene es un 1…",[
"Hay transición al siguiente nivel del ciclo +V → 0 → −V → 0 (pasando siempre por 0)","No hay transición","Se vuelve siempre a 0","Se invierte la polaridad del último pulso"],0),
qS("PAM4 (mapeo de la clase): relacioná cada dibit con su nivel.",[
"00 → −3 · 01 → −1 · 10 → +1 · 11 → +3","00 → +3 · 01 → +1 · 10 → −1 · 11 → −3","00 → −3 · 01 → −1 · 10 → +3 · 11 → +1","00 → −1 · 01 → −3 · 10 → +1 · 11 → +3"],0),
qS("¿Qué ventaja tiene 8B/10B (Gigabit Ethernet 1000Base-X) frente a 4B/5B?",[
"Mantiene balanceados los 1 y 0 (control de disparidad), así la componente de continua se anula y detecta mejor los errores","Usa menos ancho de banda que el NRZ sin codificar","No agrega redundancia","Usa 4 niveles de tensión"],0),
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

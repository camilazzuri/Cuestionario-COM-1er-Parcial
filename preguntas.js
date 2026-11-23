// COM · 1er Parcial — banco de preguntas (tanda 1 de 3)
// Tipos: "single" (una opción), "multi" (casillas), "tf" (verdadero/falso), "text" (respuesta escrita)
// correct: posiciones desde 0 · answers: respuestas aceptadas en "text" · image: ruta opcional · explanation: comentario opcional
// Los ids se asignan solos (orden de carga: preguntas.js, preguntas2.js, preguntas3.js).
const qS=(text,options,c,x={})=>({type:"single",text,options,correct:[c],...x});
const qM=(text,options,c,x={})=>({type:"multi",text,options,correct:c,...x});
const qT=(text,v,x={})=>({type:"tf",text,options:["Verdadero","Falso"],correct:[v?0:1],...x});
const qX=(text,answers,x={})=>({type:"text",text,answers,...x});
const ALL_QUESTIONS=[];
const addQ=list=>list.forEach(q=>{q.id=ALL_QUESTIONS.length+1;ALL_QUESTIONS.push(q)});

addQ([
// ───────── Información ─────────
qS("Definimos como información a todas aquellas representaciones [1] que por el significado que le asigna quien la [2], contribuyen a [3]. ¿Con qué palabras se completa?",[
"[1] simbólicas · [2] recibe e interpreta · [3] disminuir la incertidumbre",
"[1] matemáticas · [2] emite · [3] aumentar la incertidumbre",
"[1] lógicas · [2] codifica · [3] disminuir la incertidumbre",
"[1] logarítmicas · [2] transmite · [3] aumentar la incertidumbre"],0),
qM("Teniendo en cuenta la definición de la teoría matemática de la información, determine cuáles de las siguientes afirmaciones son verdaderas:",[
"Mientras menos sepa de un evento, menos información reportará el mismo",
"La información que suministra un evento es función directa de la probabilidad de ocurrencia del mismo",
"Si los eventos son independientes la probabilidad de ocurrencia es igual al producto de las probabilidades",
"Mientras más certeza tenga de que un evento ocurre, más información tendré de él",
"La información que suministra un evento es función de la inversa de la probabilidad de ocurrencia del mismo",
"La información aportada por un símbolo que es la concatenación de otros dos, es la suma de las informaciones de ambos símbolos",
"La información aportada por un símbolo que es la concatenación de otros dos, es el logaritmo del producto de las informaciones de ambos símbolos"],[2,4,5]),
qM("Cuál de las siguientes afirmaciones es correcta (seleccione las que correspondan):",[
"Un binit es todo dígito binario transmitido","Todos los binits son bits","Un bit es todo dígito binario transmitido","Todos los bits son binits"],[0,3]),
qS("¿Cuál es la información en bits que nos arroja la aparición de una letra del abecedario latino? (usar , como separador)",["4,75","4,123","4,76","3,45","Ninguna es correcta","2,08"],0,{explanation:"log₂(27) ≈ 4,75 (alfabeto latino de 27 letras)."}),
qS("Unidades de información: si la información se calcula con logaritmo en base 2, I = log₂(1/P), la unidad se llama:",["Hartley","Bit","Nat"],1,{explanation:"En el formulario original esta pregunta venía con una imagen de la fórmula; acá se reformuló en texto."}),
qS("Unidades de información: si la información se calcula con logaritmo en base 10, I = log₁₀(1/P), la unidad se llama:",["Bit","Nat","Hartley"],2,{explanation:"Pregunta original con imagen de la fórmula, reformulada en texto."}),
qS("Unidades de información: si la información se calcula con logaritmo natural, I = ln(1/P), la unidad se llama:",["Hartley","Bit","Nat"],2,{explanation:"Pregunta original con imagen de la fórmula, reformulada en texto."}),
qM("La entropía normalizada nos sirve para:",[
"Comparar la entropía de fuentes con diferente número de símbolos","Normalizar el número de símbolos a 2","Comparar la entropía de fuentes con igual número de símbolos","Obtener el valor estándar de la entropía"],[0,1],{explanation:"⚠️ Verificar: en el Google Forms con puntaje 1/1 figuran marcadas estas dos; la hoja de respuestas del 3K1 marca solo \"normalizar el número de símbolos a 2\"."}),
// ───────── Muestreo y PCM ─────────
qS("Toda señal limitada en banda se puede reconstruir completamente a partir de las muestras tomadas de la misma, siempre que [1] del muestreo se realice [2] al [3] de la máxima frecuencia de la señal.",[
"[1] la frecuencia · [2] como mínimo · [3] doble",
"[1] el período · [2] como máximo · [3] triple",
"[1] la frecuencia · [2] siempre menor · [3] mitad",
"[1] igual · [2] como mínimo · [3] mitad"],0),
qS("¿Qué sucede si se muestrea a una velocidad menor a la velocidad de muestreo de Nyquist?",["Se gana información","Se mantiene igual","Se pierde información"],2),
qS("Si se desea convertir a digital una señal de voz de calidad telefónica con frecuencias entre 300 y 4.000 Hz, ¿qué frecuencia mínima de muestreo (en KHz) se debe utilizar?",["12","10","6","8","16","4"],3),
qS("Si se desea convertir a digital una señal de audio de buena calidad con frecuencias entre 100 y 20.000 Hz, se deberá utilizar una frecuencia de muestreo (en KHz) de al menos:",["40","30","20","65"],0),
qX("Nyquist: ¿cuál es la tasa mínima de muestreo (muestras/s) para una señal de 2000 Hz de ancho de banda? (sólo números)",["4000"]),
qX("Una señal telefónica tiene frecuencia máxima de 4 KHz. ¿Cuál es el período de tiempo entre muestras, en µs? (sólo números)",["125"],{explanation:"T = 1 / 8000 Hz = 125 µs."}),
qX("Si se desea convertir a digital una señal de voz de calidad telefónica según el estándar ITU G.711, ¿qué frecuencia de muestreo (en KHz) se utiliza? (sólo números)",["8"]),
qS("Si en el proceso de modulación PCM se desea cuantificar 2000 niveles distintos de la señal, ¿cuántos bits se deberán utilizar para codificar dichas muestras?",["13","11","23","12","22","20","Ninguna es correcta"],1,{explanation:"2¹¹ = 2048 ≥ 2000."}),
qX("En PCM, ¿cuántos bits se necesitan para cuantificar 256 niveles? (sólo números)",["8"]),
qS("Indicar cuál de las siguientes afirmaciones es verdadera en el proceso PCM de una señal de audio:",[
"Si aumento la cantidad de niveles de cuantificación, luego podré utilizar menos bits para codificar cada uno de ellos.",
"Si aumento la cantidad de niveles de cuantificación, lograré reproducir la señal con mejor fidelidad.",
"Si disminuyo la cantidad de niveles de cuantificación, lograré reproducir la señal con mejor fidelidad."],1),
qT("La relación señal a ruido de cuantificación mejora con el aumento de los niveles de cuantificación.",true),
qT("La relación señal a ruido de cuantificación mejora a medida que los niveles de cuantificación están más próximos unos de otros.",true),
qT("Se deben disminuir los niveles de cuantificación buscando separar más la distancia entre cada uno de ellos para así aumentar la calidad de la señal PCM.",false),
qS("¿Cuál es el orden correcto de las etapas de la modulación PCM para convertir una señal analógica en digital?",[
"Señal original → Muestreo → Cuantificación → Codificación",
"Señal original → Cuantificación → Muestreo → Codificación",
"Señal original → Codificación → Muestreo → Cuantificación",
"Muestreo → Señal original → Cuantificación → Codificación"],0,{explanation:"Pregunta original con imagen (e1…e4), reformulada en texto."}),
// ───────── Señales, Fourier y espectros ─────────
qS("Mediante el análisis de [1] podremos comprender cómo una señal de onda cuadrada está compuesta por la sumatoria de infinitas [2] llamadas [3].",[
"[1] Fourier · [2] ondas sinusoidales · [3] armónicos",
"[1] Espectro · [2] portadoras · [3] amplitudes",
"[1] Tiempo · [2] ondas desfasadas · [3] armónicos",
"[1] Fourier · [2] ondas frecuenciales · [3] portadoras"],0),
qS("Una manera de representar una señal periódica es mediante su [1]. Esta tiene la ventaja de expresar la misma función como una [2] de senos y cosenos.",[
"[1] Serie de Fourier · [2] suma",
"[1] Transformada de Fourier · [2] integral",
"[1] Integral de Fourier · [2] derivada",
"[1] Serie de Fourier · [2] derivada"],0),
qS("¿Cómo se denominan las componentes de una señal que son múltiplos de su fundamental?",["Frecuencias imagen","Componentes DC","Espectro lateral","Ondas parásitas","Armónicos","Subportadoras"],4),
qS("¿Cómo se denomina al menor valor de tiempo para el cual una señal se repite en el tiempo?",["amplitud","frecuencia","período","ciclo de trabajo","T"],2),
qS("Indique cuál de los siguientes enunciados es correcto:",[
"El ancho de banda que se debe considerar a los fines prácticos, de una señal de comunicaciones, se calcula tomando el primer cruce por cero de la envolvente de su espectro.",
"El ancho de banda práctico para enviar una señal de comunicaciones por un medio conductor y que pueda ser reproducida en el receptor con relativa calidad, es infinito.",
"Los coeficientes de Fourier de una señal de comunicaciones digitales van aumentando de tamaño a medida que me alejo de la componente fundamental.",
"Una señal de información tiene un espectro discreto, de rayas.",
"Los coeficientes de Fourier de una señal de comunicaciones digitales van aumentando de tamaño a medida que pasa el tiempo."],0),
qT("La PSD de un pulso corresponde a la función sinc(x), siendo x = πτf, donde τ es la duración del pulso, y que se extiende entre ±∞.",false,{explanation:"La PSD es el cuadrado del módulo de la transformada: sinc²(x), no sinc(x)."}),
qT("La velocidad de señalización r fija el ancho de banda del primer nulo y depende de la amplitud de la señal.",false),
qT("El ancho de banda de un canal de comunicaciones es directamente proporcional a la tasa de bits e inversamente proporcional al logaritmo en base diez de uno más la relación señal ruido.",false),
qM("En comunicaciones una señal portadora:",[
"Es periódica","Responde a una ecuación del tipo s(t) = A (cos ωt + θ)","Es determinística","Responde a una ecuación del tipo s(t) = At + θ","Es aleatoria","Tiene un espectro continuo y plano","Tiene un espectro discreto (sólo dos líneas)"],[0,1,2,6]),
qS("Indique cuál de los siguientes gráficos corresponde al espectro de una señal digital construida por un tren de pulsos rectangulares periódicos:",["Opción 1","Opción 2","Opción 3","Opción 4","Opción 5"],1,{image:"img/esp_tren.png"}),
qS("Indique cuál de los siguientes gráficos corresponde al espectro de una señal modulada en AM:",["Opción 1","Opción 2","Opción 3","Opción 4","Opción 5"],0,{image:"img/esp_am.png"}),
qM("Indique cuáles de los siguientes enunciados corresponden a la figura mostrada (tren de pulsos cuadrados periódicos):",[
"Su espectro posee una cantidad finita de armónicos.",
"Es la representación en el tiempo de un tren de pulsos cuadrados periódicos.",
"Las oscilaciones en los extremos de los pulsos se achican a medida que se toman más armónicos, haciendo que los bordes sean cada vez más rectos.",
"Las oscilaciones en los extremos de los pulsos se mantienen dentro del 9% del valor de pico (fenómeno de Gibbs).",
"Su espectro posee infinitos armónicos."],[0,1,3],{image:"img/tren_pulsos.png"}),
qS("Según el análisis de Fourier, la siguiente gráfica representa:",[
"La densidad espectral de potencia de una señal periódica","La densidad espectral de una señal periódica","La densidad espectral de un pulso rectangular","La densidad espectral de potencia de un pulso rectangular"],2,{image:"img/fourier.png"}),
qS("Si quisiera sintonizar la emisora de FM de la UTN (94,3 MHz), necesitaría:",[
"Un filtro paso banda de Bw = 200 KHz, sintonizado en 94.3 Hz",
"Un filtro paso banda variable de Bw = 200 KHz, sintonizado en 94.3 MHz",
"Un filtro paso banda variable de Bw = 3400 Hz, sintonizado en 94.3 KHz",
"Un filtro paso bajos de Bw = 94.3 MHz",
"Un filtro paso altos con frecuencia de corte en 94.3 MHz"],1),
qS("¿Con qué siglas se conoce la banda del espectro radioeléctrico utilizada por las emisoras de radio FM?",["VHF","UHF","FM","RF","MF"],0),
qS("¿Con qué siglas se conoce la banda del espectro radioeléctrico utilizada por las comunicaciones celulares móviles y las redes inalámbricas Wi-Fi?",["VHF","WLAN","ISM","LTE","UHF"],2),
qS("Indique en MHz el ancho de banda (aproximado) de un canal de TV de aire:",["1","2","3","4","5","6","7","8","9","10"],5),
qT("La señal modulada en AM es más inmune a ruidos impulsivos que la señal de las demás modulaciones.",false),
qT("La señal modulada en FM es más inmune a ruidos impulsivos que la señal modulada en AM.",true),
qT("En la técnica de modulación FSK la variación de frecuencia de la señal moduladora modifica la amplitud de la portadora.",false),
qT("En la modulación analógica la portadora es analógica y la moduladora es analógica, lo cual permite disminuir el ancho de banda de la señal transportada por el canal de comunicación.",false),
qT("En la técnica de modulación ASK podemos aumentar la eficiencia espectral transportando más de un bit por baudio.",true),
qT("La modulación multinivel aumenta la eficiencia espectral aumentando la velocidad de transmisión manteniendo constante la velocidad de señalización.",true),
qS("¿A qué tipo de modulación corresponde la siguiente constelación?",["16 QAM","16 PSK","16 SPK","Ninguna es correcta","8 PSK"],1,{image:"img/const16psk.png"}),
qS("¿A qué tipo de modulación corresponde la siguiente constelación?",["16 SKD","Ninguna es correcta","8 QAM","16 QAM"],3,{image:"img/const16qam.png"}),
qT("En la multiplexación por división de frecuencia (FDM) se pueden multiplexar tanto canales analógicos como canales digitales.",true),
qM("En la multiplexación por división de tiempo (TDM) se pueden multiplexar:",[
"Canales de ancho de banda variable y con duración de tiempo variable","Canales digitales","Canales de voz, a los que previamente se les aplicó la modulación PCM","Canales analógicos"],[1,2]),
qX("La radiodifusión comercial de emisoras de FM es posible gracias a qué tipo de multiplexación? (escribí las siglas)",["FDM"]),
// ───────── Sistema de comunicación y transductores ─────────
qS("El objetivo de un sistema de comunicación [1] es entregar en el destino la forma de onda con cierto [2] especificado.",[
"[1] analógico · [2] grado de fidelidad","[1] digital · [2] exactitud","[1] analógico · [2] exactitud","[1] duplex · [2] grado de fidelidad"],0),
qS("La calidad de un sistema analógico se mide por la:",["No corresponde","Direccionalidad","Relación señal a ruido (SNR)","Tasa de error de bits"],2),
qS("La calidad de un sistema digital se mide por la:",["Relación Señal a Ruido (SNR)","Nitidez de la imagen","Tasa de error de bits (BER)","Nitidez del audio","Direccionalidad"],2),
qS("La finalidad de los transductores de entrada es [1] la información a transmitir en alguna especie de [2] capaz de ser procesada por el sistema.",[
"[1] convertir · [2] señal eléctrica","[1] modular · [2] dato","[1] multiplexar · [2] modulación","[1] convertir · [2] dato"],0),
qS("La finalidad de los transductores de salida es [1] la señal procesada por el sistema en algún tipo de [2] capaz de ser interpretada por el receptor.",[
"[1] convertir · [2] información","[1] modular · [2] dato","[1] multiplexar · [2] señal eléctrica","[1] convertir · [2] modulación"],0),
qM("Indique cuáles de los siguientes elementos se consideran transductores de entrada de información de un sistema de comunicaciones:",["Teclado","Pantalla","Micrófono","Parlante","Modem","Cámara","Impresora","Router"],[0,2,5]),
qM("Indique cuáles de los siguientes elementos se consideran transductores de salida de información de un sistema de comunicaciones:",["Modem","Parlante","Impresora","Pantalla","Micrófono","Fax","Cámara","Teclado"],[1,2,3,5]),
qS("El UART toma [1] de datos y transmite los [2] individuales de forma secuencial. En el destino, un segundo UART reensambla los [3] en [4] completos.",[
"[1] Bytes · [2] bits · [3] bits · [4] Bytes","[1] bits · [2] Bytes · [3] Bytes · [4] bits","[1] datos · [2] voltajes · [3] voltajes · [4] datos","[1] Bytes · [2] corrientes · [3] corrientes · [4] datos"],0),
]);

// COM · 1er Parcial — banco de preguntas (tanda 1 de 3): Seminario, sistema, información, muestreo, Fourier y modulación
// Tipos: "single" (una opción), "multi" (casillas), "tf" (verdadero/falso)
// correct: posiciones desde 0 · image: ruta opcional · explanation: comentario opcional · sem: pertenece al bloque Seminario
// Los ids se asignan solos (orden de carga: preguntas.js, preguntas2.js, preguntas3.js).
const qS=(text,options,c,x={})=>({type:"single",text,options,correct:[c],...x});
const qM=(text,options,c,x={})=>({type:"multi",text,options,correct:c,...x});
const qT=(text,v,x={})=>({type:"tf",text,options:["Verdadero","Falso"],correct:[v?0:1],...x});
const ALL_QUESTIONS=[];
const addQ=list=>list.forEach(q=>{q.id=ALL_QUESTIONS.length+1;ALL_QUESTIONS.push(q)});
const addSem=list=>addQ(list.map(q=>({...q,sem:true})));

// ═════════ BLOQUE SEMINARIO ═════════
addSem([
qS("¿Cuál de las siguientes fórmulas me permite determinar la Velocidad de Señalización?",[
"Vs = [1/Tb] / Log2M","Vs = 1/Tb","I = Log2M","Vs = [1/τ] Log2M","Vs = 1/τ"],4,{explanation:"La velocidad de señalización (baudios) es la inversa de la duración del símbolo: Vs = 1/τ."}),
qT("La PSD de un pulso corresponde a la función sinc(x), siendo x = πτf, donde τ es la duración del pulso, y que se extiende entre ±∞.",false,{explanation:"La PSD de un pulso rectangular es el cuadrado de la sinc: sinc²(x). La sinc(x) sola describe la amplitud (tensión) en frecuencia, y la potencia normalizada es proporcional a la tensión al cuadrado."}),
qM("¿Cuál de las siguientes afirmaciones es correcta? (seleccione una o más de una)",[
"Todos los bits son binits","Un bit es todo dígito binario transmitido","Todos los binits son bits","Un binit es todo dígito binario transmitido"],[0,3]),
qS("¿A cuántos dBm equivale la suma de 0 dBm + 0 dBm?",["2 mW","2 dBm","No se puede realizar el cálculo","3 dBm","0 dBm"],3,{explanation:"0 dBm = 1 mW; 1 mW + 1 mW = 2 mW = 3 dBm."}),
qT("En la técnica de modulación FSK la variación de frecuencia de la señal moduladora modifica la amplitud de la portadora.",false,{explanation:"FSK modifica la frecuencia de la portadora. La que modifica la amplitud es ASK."}),
qT("En la modulación analógica la portadora es analógica y la moduladora es analógica, lo cual permite disminuir el ancho de banda de la señal transportada por el canal de comunicación.",false,{explanation:"La modulación no disminuye el ancho de banda: traslada el espectro a una frecuencia más alta. En AM de doble banda lateral el ancho de banda es el doble de la moduladora (B = 2fm), en FM es aún mayor y, en el mejor caso (BLU), es igual a la moduladora (B = fm), pero nunca menor."}),
qT("La siguiente operación es válida: dBm ± dBm = dB.",true),
qT("El ancho de banda de un canal de comunicaciones es directamente proporcional a la tasa de bits e inversamente proporcional al logaritmo en base diez de uno más la relación señal ruido.",false,{explanation:"Es logaritmo en base 2: B = C / log₂(1 + S/N)."}),
qT("El dBm es una unidad de medida de relación o razón de tensiones expresada en decibelios relativa a 1 mW.",false,{explanation:"El dBm es una unidad logarítmica de POTENCIA referida a 1 mW, no de tensión."}),
qS("Dada la función s(t) = 1 + (4/π)[sen(2πft) + (1/3)sen(2π(3f)t)], determine cuál de las representaciones en el dominio de la frecuencia corresponde a dicha función.",[
"Representación b","Representación c","Representación a"],0,{image:"img/sem_frecuencia.png",explanation:"El término 1 es una componente continua → línea de altura 1 en f = 0. Después hay una línea de 4/π ≈ 1,27 en f y otra de 4/(3π) ≈ 0,42 en 3f. La única con las tres líneas es la b. La a no tiene continua y la c es un espectro continuo (sinc), propio de un pulso aislado."}),
]);

// ═════════ TANDA 1 ═════════
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
qS("¿Cuál es la información en bits que nos arroja la aparición de una letra del abecedario latino? (usar , como separador)",["4,75","4,123","4,76","3,45","Ninguna es correcta","2,08"],0,{explanation:"log₂(27) ≈ 4,75 (alfabeto latino de 27 letras)."}),
qS("Unidades de información: si la información se calcula con logaritmo en base 2, I = log₂(1/P), la unidad se llama:",["Hartley","Bit","Nat"],1),
qS("Unidades de información: si la información se calcula con logaritmo en base 10, I = log₁₀(1/P), la unidad se llama:",["Bit","Nat","Hartley"],2),
qS("Unidades de información: si la información se calcula con logaritmo natural, I = ln(1/P), la unidad se llama:",["Hartley","Bit","Nat"],2),
qM("La entropía normalizada nos sirve para:",[
"Comparar la entropía de fuentes con diferente número de símbolos","Normalizar el número de símbolos a 2","Comparar la entropía de fuentes con igual número de símbolos","Obtener el valor estándar de la entropía"],[0,1]),
qS("Una fuente produce 5 símbolos con probabilidades ½, ¼, ⅛, 1/16 y 1/16. ¿Cuál es su entropía en bits/símbolo?",["1,875","2","2,32","1,5"],0,{explanation:"H = ½·1 + ¼·2 + ⅛·3 + 2·(1/16)·4 = 0,5 + 0,5 + 0,375 + 0,5 = 1,875 bits/símbolo."}),
qS("Una fuente emite A, B, C y D con probabilidades ½, ¼, ⅛ y ⅛ (independientes). ¿Cuántos bits de información tiene el mensaje BACA?",["7","4","8","6"],0,{explanation:"I(B) = 2, I(A) = 1, I(C) = 3, I(A) = 1 → 2 + 1 + 3 + 1 = 7 bits."}),
qS("¿Cuál es la entropía de un dado no cargado (6 caras equiprobables), en bits?",["2,585","6","1,79","0,778"],0,{explanation:"H = log₂ 6 ≈ 2,585 bits."}),
qS("Fuente telegráfica: P(punto) = 2/3 con duración 0,2 s y P(raya) = 1/3 con duración 0,4 s. ¿Cuál es la tasa de información R en bits/s?",["3,44","0,918","4,59","2,75"],0,{explanation:"H = 0,918 bits/símbolo; duración media τ̄ = ⅔·0,2 + ⅓·0,4 = 0,267 s → R = H/τ̄ ≈ 3,44 bits/s."}),
qS("Una imagen de TV tiene 625 líneas de 500 puntos, con 128 niveles de brillo equiprobables, y se transmiten 25 imágenes/s. ¿Velocidad de transmisión en Mbps?",["54,69","7,81","437,5","62,5"],0,{explanation:"625 × 500 × log₂128 (7 bits) × 25 = 54.687.500 bps ≈ 54,69 Mbps."}),
qS("¿Cuándo alcanza su valor máximo la entropía de una fuente de m símbolos?",[
"Cuando todos los símbolos son equiprobables: H = log₂ m","Cuando un símbolo tiene probabilidad 1","Cuando hay solo dos símbolos","Nunca está acotada"],0),
qS("La tasa de información R de una fuente se calcula como:",["R = H / τ = r · H  [bits/s]","R = τ / H","R = H · log₂ m","R = 1 / H"],0),
qT("Por el teorema fundamental, la tasa de información de la fuente debe cumplir R ≤ C para poder transmitir con errores mínimos.",true),
// ───────── Muestreo y PCM ─────────
qS("Toda señal limitada en banda se puede reconstruir completamente a partir de las muestras tomadas de la misma, siempre que [1] del muestreo se realice [2] al [3] de la máxima frecuencia de la señal.",[
"[1] la frecuencia · [2] como mínimo · [3] doble",
"[1] el período · [2] como máximo · [3] triple",
"[1] la frecuencia · [2] siempre menor · [3] mitad",
"[1] igual · [2] como mínimo · [3] mitad"],0),
qS("¿Qué sucede si se muestrea a una velocidad menor a la velocidad de muestreo de Nyquist?",["Se gana información","Se mantiene igual","Se pierde información"],2),
qS("Si se desea convertir a digital una señal de voz de calidad telefónica con frecuencias entre 300 y 4.000 Hz, ¿qué frecuencia mínima de muestreo (en KHz) se debe utilizar?",["12","10","6","8","16","4"],3),
qS("Si se desea convertir a digital una señal de audio de buena calidad con frecuencias entre 100 y 20.000 Hz, se deberá utilizar una frecuencia de muestreo (en KHz) de al menos:",["40","30","20","65"],0),
qS("Nyquist: ¿cuál es la tasa mínima de muestreo (muestras/s) para una señal de 2000 Hz de ancho de banda?",["4000","2000","1000","8000"],0),
qS("Una señal telefónica tiene frecuencia máxima de 4 KHz. ¿Cuál es el período de tiempo entre muestras, en µs?",["125","250","62,5","4"],0,{explanation:"T = 1 / 8000 Hz = 125 µs."}),
qS("Si se desea convertir a digital una señal de voz de calidad telefónica según el estándar ITU G.711, ¿qué frecuencia de muestreo (en KHz) se utiliza?",["8","4","16","44,1"],0,{explanation:"**Justificación: **El estándar ITU G.711 limita el canal de voz telefónica a una frecuencia máxima de **4 kHz (4.000 Hz)**. Según el **Teorema de Muestreo de Nyquist**: **fs = 2 × fmax = 2 × 4 kHz = 8 kHz**."}),
qS("Si en el proceso de modulación PCM se desea cuantificar 2000 niveles distintos de la señal, ¿cuántos bits se deberán utilizar para codificar dichas muestras?",["13","11","23","12","22","20","Ninguna es correcta"],1,{explanation:"2¹¹ = 2048 ≥ 2000."}),
qS("En PCM, ¿cuántos bits se necesitan para cuantificar 256 niveles?",["8","7","9","16"],0,{explanation:"2⁸ = 256."}),
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
"Muestreo → Señal original → Cuantificación → Codificación"],0),
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
qT("La velocidad de señalización r fija el ancho de banda del primer nulo y depende de la amplitud de la señal.",false),
qM("En comunicaciones una señal portadora:",[
"Es periódica","Responde a una ecuación del tipo s(t) = A (cos ωt + θ)","Es determinística","Responde a una ecuación del tipo s(t) = At + θ","Es aleatoria","Tiene un espectro continuo y plano","Tiene un espectro discreto (sólo dos líneas)"],[0,1,2,6]),
qS("Indique cuál de los siguientes gráficos corresponde al espectro de una señal portadora:",["Opción 1","Opción 2","Opción 3","Opción 4","Opción 5"],2,{image:"img/esp_portadora.png",explanation:"Una portadora s(t) = A·cos(2πfc·t) tiene un espectro de dos líneas (deltas) en ±fc."}),
qS("Indique cuál de los siguientes gráficos corresponde al espectro de una señal digital construida por un tren de pulsos rectangulares periódicos:",["Opción 1","Opción 2","Opción 3","Opción 4","Opción 5"],1,{image:"img/esp_tren.png"}),
qS("Indique cuál de los siguientes gráficos corresponde al espectro de una señal modulada en AM:",["Opción 1","Opción 2","Opción 3","Opción 4","Opción 5"],0,{image:"img/esp_am.png"}),
qM("Indique cuáles de los siguientes enunciados corresponden a la figura mostrada (tren de pulsos cuadrados periódicos):",[
"Su espectro posee una cantidad finita de armónicos.",
"Es la representación en el tiempo de un tren de pulsos cuadrados periódicos.",
"Las oscilaciones en los extremos de los pulsos se achican a medida que se toman más armónicos, haciendo que los bordes sean cada vez más rectos.",
"Las oscilaciones en los extremos de los pulsos se mantienen dentro del 9% del valor de pico (fenómeno de Gibbs).",
"Su espectro posee infinitos armónicos."],[0,1,3],{image:"img/tren_pulsos.png"}),
qS("Empareje cada gráfico con lo que representa:",[
"1 → Espectro de una señal de información digital (aperiódica) · 2 → Espectro de un tren de pulsos cuadrados periódicos · 3 → Representación en el tiempo de un tren de pulsos cuadrados periódicos",
"1 → Espectro de un tren de pulsos cuadrados periódicos · 2 → Espectro de una señal de información digital (aperiódica) · 3 → Representación en el tiempo de un tren de pulsos cuadrados periódicos",
"1 → Representación en el tiempo de un tren de pulsos cuadrados periódicos · 2 → Espectro de un tren de pulsos cuadrados periódicos · 3 → Espectro de una señal de información digital (aperiódica)",
"1 → Espectro de una señal de información digital (aperiódica) · 2 → Representación en el tiempo de un tren de pulsos cuadrados periódicos · 3 → Espectro de un tren de pulsos cuadrados periódicos"],0,{image:"img/figuras_tren.png",explanation:"La figura 1 es una envolvente continua (pulso aislado / señal aperiódica). La 2 es la misma envolvente pero muestreada en líneas (señal periódica → espectro discreto). La 3 está en función del tiempo."}),
qS("Según el análisis de Fourier, la siguiente gráfica representa:",[
"La densidad espectral de potencia de una señal periódica","La densidad espectral de una señal periódica","La densidad espectral de un pulso rectangular","La densidad espectral de potencia de un pulso rectangular"],2,{image:"img/fourier.png"}),
qS("Dada la siguiente representación de una función en el dominio del tiempo, ¿cuál de las representaciones en frecuencia le corresponde?",["Opción 1","Opción 2","Opción 3"],0,{image:"img/tiempo_frec.png",explanation:"La señal oscila entre +1 y −1 (sin continua) y es la suma de una fundamental y su 3ª armónica: líneas en f y 3f, sin línea en f = 0."}),
qM("En base al gráfico del espectro de frecuencias de una señal transmitida, seleccioná las afirmaciones correctas:",[
"No puede transportar información","La señal es pasa bajo","Ancho de banda = 60 MHz","Sí puede transportar información","La señal es pasa banda","La señal es eliminabanda","Ancho de banda = 48 MHz"],[0,1,2],{image:"img/espectro60.png",explanation:"⚠️ Verificar con la cátedra. El espectro es de líneas (señal periódica → no transporta información), arranca en 0 Hz (pasa bajo) y llega hasta 60 MHz."}),
qS("Una señal cuadrada periódica de ±1 V tiene período T = 20 ms. ¿Cuál es la amplitud de su 3ª armónica y en qué frecuencia está?",["0,42 V en 150 Hz","1,27 V en 50 Hz","0,42 V en 100 Hz","0,25 V en 150 Hz"],0,{explanation:"f₀ = 1/20 ms = 50 Hz → 3ª armónica en 150 Hz, con amplitud 4/(3π) ≈ 0,42 V."}),
qS("Para que lleguen al receptor las 5 primeras componentes armónicas de una cuadrada de f₀ = 50 Hz (solo armónicos impares), ¿qué ancho de banda necesita el canal según el criterio de la cátedra (AB = fmáx − fmín)?",["400 Hz","450 Hz","250 Hz","500 Hz"],0,{explanation:"Armónicas 1, 3, 5, 7 y 9 → de 50 Hz a 450 Hz → AB = 450 − 50 = 400 Hz."}),
qT("Considerar las componentes de 1º, 3º, 5º y 7º orden de una señal significa considerar cuatro componentes armónicas.",true),
qT("Una señal periódica, por tener espectro discreto, no puede transportar información.",true),
qS("¿Qué representa la función sinc²(x) en el análisis de un pulso rectangular?",["La densidad espectral de potencia (PSD) del pulso","El espectro de amplitud del pulso","La forma del pulso en el tiempo","El espectro de una señal periódica"],0),
qS("Un pulso rectangular aislado de duración τ: ¿dónde está el primer cruce por cero de su espectro?",["En f = 1/τ","En f = 1/(2τ)","En f = 2/τ","En f = τ"],0),
// ───────── Filtros y bandas ─────────
qS("Si quisiera sintonizar la emisora de FM de la UTN (94,3 MHz), necesitaría:",[
"Un filtro paso banda de Bw = 200 KHz, sintonizado en 94.3 Hz",
"Un filtro paso banda variable de Bw = 200 KHz, sintonizado en 94.3 MHz",
"Un filtro paso banda variable de Bw = 3400 Hz, sintonizado en 94.3 KHz",
"Un filtro paso bajos de Bw = 94.3 MHz",
"Un filtro paso altos con frecuencia de corte en 94.3 MHz"],1),
qS("Una señal s(t) = 5·sen(2π·1000·t + φ) debe pasar por un medio conductor sin atenuar al menos la fundamental y las armónicas hasta la de 7º orden. El medio se debe comportar como un:",[
"Filtro pasa bajos de Bw = 7000 Hz","Filtro pasa altos de B >> 7000 Hz","Filtro pasa altos de Bw >> 3500 Hz","Filtro pasa banda de 3000 a 5000 Hz","Filtro pasa bajos de Bw = 3500 Hz"],0,{explanation:"La 7ª armónica de 1000 Hz está en 7000 Hz: hace falta dejar pasar todo desde la fundamental hasta 7000 Hz."}),
qS("En un filtro RC, la frecuencia de corte es aquella en la que…",[
"la amplitud de salida cae al 70,7 % de su valor máximo (XC = R)","la amplitud de salida cae a cero","la amplitud de salida es el doble que la de entrada","la reactancia capacitiva es nula"],0),
qS("Relacioná cada filtro con lo que deja pasar:",[
"Pasa bajo → desde 0 Hz hasta la frecuencia de corte · Pasa alto → por encima de la frecuencia de corte · Pasa banda → solo entre fL y fH",
"Pasa bajo → por encima de la frecuencia de corte · Pasa alto → desde 0 Hz hasta la frecuencia de corte · Pasa banda → solo entre fL y fH",
"Pasa bajo → solo entre fL y fH · Pasa alto → por encima de la frecuencia de corte · Pasa banda → desde 0 Hz hasta la frecuencia de corte",
"Pasa bajo → desde 0 Hz hasta la frecuencia de corte · Pasa alto → solo entre fL y fH · Pasa banda → por encima de la frecuencia de corte"],0),
qS("A un espectro con líneas en 50, 150, 250, 350 y 450 kHz se le aplica un filtro y a la salida quedan solo las de 50 a 450 kHz. Si las líneas siguientes (550 kHz…) desaparecieron, ¿qué filtro se aplicó?",[
"Pasa bajo con fc = 450 kHz","Pasa alto con fc = 450 kHz","Pasa bajo con fc = 50 kHz","Pasa banda de 450 a 550 kHz"],0),
qT("Un medio físico de transmisión alámbrico se comporta como un filtro, porque tiene efectos inductivos y capacitivos.",true),
qS("¿Con qué siglas se conoce la banda del espectro radioeléctrico utilizada por las emisoras de radio FM?",["VHF","UHF","FM","RF","MF"],0),
qS("¿Con qué siglas se conoce la banda del espectro radioeléctrico utilizada por las comunicaciones celulares móviles y las redes inalámbricas Wi-Fi?",["VHF","WLAN","ISM","LTE","UHF"],2),
qS("Indique en MHz el ancho de banda (aproximado) de un canal de TV de aire:",["1","2","3","4","5","6","7","8","9","10"],5),
// ───────── Modulación ─────────
qT("La señal modulada en AM es más inmune a ruidos impulsivos que la señal de las demás modulaciones.",false),
qT("La señal modulada en FM es más inmune a ruidos impulsivos que la señal modulada en AM.",true),
qT("En la técnica de modulación ASK podemos aumentar la eficiencia espectral transportando más de un bit por baudio.",true),
qT("La modulación multinivel aumenta la eficiencia espectral aumentando la velocidad de transmisión manteniendo constante la velocidad de señalización.",true),
qS("¿Para qué se modula?",[
"Para trasladar la señal en frecuencia: compartir el medio (cada señal en su banda) y que las antenas tengan dimensiones razonables","Para reducir siempre el ancho de banda","Para eliminar el ruido del canal","Para aumentar la amplitud de la señal"],0),
qS("Una portadora de 800 kHz se modula en AM con un tono de 100 kHz. ¿Ancho de banda de la señal modulada?",["200 kHz","100 kHz","900 kHz","800 kHz"],0,{explanation:"AM de doble banda lateral: B = 2·fm = 200 kHz."}),
qS("Portadora de 880 MHz modulada en FM por un tono de 100 kHz con desviación pico Δf = 500 kHz. ¿Ancho de banda (Carson)?",["1,2 MHz","1 MHz","200 kHz","600 kHz"],0,{explanation:"Carson: B = 2(Δf + fm) = 2(500 + 100) kHz = 1,2 MHz."}),
qS("Cada radio FM tiene un canal total de 200 kHz con dos bandas de guarda de 10 kHz y audio de 15 kHz. ¿Desviación pico Δf?",["75 kHz","85 kHz","100 kHz","90 kHz"],0,{explanation:"Útil = 200 − 2·10 = 180 kHz = 2(Δf + 15) → Δf = 75 kHz."}),
qS("AM de banda lateral única (BLU/SSB) frente a AM de doble banda lateral:",[
"Transmite una sola banda lateral (sin portadora): usa la mitad del ancho de banda","Usa el doble de ancho de banda","Transmite solo la portadora","Es lo mismo que FM"],0),
qS("¿A qué tipo de modulación corresponde la siguiente constelación?",["16 QAM","16 PSK","16 SPK","Ninguna es correcta","8 PSK"],1,{image:"img/const16psk.png"}),
qS("¿A qué tipo de modulación corresponde la siguiente constelación?",["16 SKD","Ninguna es correcta","8 QAM","16 QAM"],3,{image:"img/const16qam.png"}),
qS("Indique a qué tipo de modulación corresponde cada gráfico:",[
"1 → 4ASK · 2 → BPSK · 3 → FSK","1 → FSK · 2 → BPSK · 3 → 4ASK","1 → 4ASK · 2 → QPSK · 3 → FSK","1 → 16QAM · 2 → BPSK · 3 → FSK"],0,{image:"img/mod_1.png",explanation:"1: la amplitud cambia en escalones (4 niveles) → 4ASK. 2: misma amplitud y frecuencia, con saltos de fase de 180° → BPSK. 3: alterna dos frecuencias → FSK."}),
qS("Indique a qué tipo de modulación corresponde cada gráfico:",[
"1 → BPSK · 2 → 8PSK · 3 → QPSK","1 → QPSK · 2 → 8PSK · 3 → BPSK","1 → BPSK · 2 → QPSK · 3 → 8PSK","1 → FSK · 2 → 8PSK · 3 → 4ASK"],0,{image:"img/mod_2.png",explanation:"1: saltos de fase de 180° → BPSK. 2: ocho fases distintas (pasos de 45°) → 8PSK. 3: saltos de fase de 90° → QPSK."}),
qS("Se transmite NRZ a 120 Mbps por un canal de 30 MHz (B base = Nyquist). ¿Qué modulación elegís?",["16QAM o 16PSK","BPSK","QPSK","256QAM"],0),
qS("Un MODEM transmite 9600 bps en 2400 Hz del canal telefónico. Con B base de Nyquist, ¿qué modulación usa?",["16QAM o 16PSK (η = 4)","256QAM (η = 4)","QPSK (η = 2)","64QAM (η = 6)"],0),
qS("Modulador 8PSK con R = 20 Mbps (moduladora NRZ). Ancho de banda de la señal modulada con B base de Nyquist:",["6,67 MHz","13,3 MHz","20 MHz","3,33 MHz"],0,{explanation:"r = 20/3 ≈ 6,67 Mbaudios; B base Nyquist = r/2 = 3,33 MHz; modulada (doble) = 6,67 MHz."}),
qS("Salida binaria modulada en 64QAM a 120 Mbps (NRZ). Ancho de banda mínimo del canal:",["20 MHz","40 MHz","120 MHz","10 MHz"],0,{explanation:"r = 120/6 = 20 Mbaudios → B modulada (Nyquist) = 20 MHz."}),
qS("MODEM FSK con f₀ = 40 MHz, f₁ = 60 MHz y 10 Mbps (NRZ). Ancho de banda de la señal modulada:",["40 MHz","20 MHz","30 MHz","10 MHz"],0),
qS("64QAM con Tb = 8,33 ns y moduladora en MANCHESTER. Ancho de banda modulado (Nyquist / 1er nulo):",["40 MHz / 80 MHz","20 MHz / 40 MHz","120 MHz / 240 MHz","80 MHz / 160 MHz"],0),
qS("En un diagrama de constelación, los ejes se identifican como:",["En fase (I) y Cuadratura (Q)","Tiempo y Amplitud","Frecuencia y Potencia","Bits y Baudios"],0),
qS("¿Por qué BPSK y QPSK son más inmunes al ruido que 16QAM?",[
"Porque sus puntos de constelación están más separados entre sí, y todos tienen la misma amplitud","Porque usan más ancho de banda que cualquier QAM","Porque transmiten más bits por símbolo","Porque no usan portadora"],0),
qT("En OOK (ASK todo o nada) el 1 se transmite con portadora y el 0 sin portadora.",true),
qS("Modulación BPSK con Tb = 1 ms y portadora f(t) = sen(50π·10³·t). Eficiencia espectral con B base del 1er nulo:",["0,5 bps/Hz","1 bps/Hz","2 bps/Hz","25 bps/Hz"],0,{explanation:"R = 1 kbps; B base 1er nulo = 1 kHz → modulada = 2 kHz → η = 1/2 = 0,5 bps/Hz."}),
// ───────── Multiplexación ─────────
qT("En la multiplexación por división de frecuencia (FDM) se pueden multiplexar tanto canales analógicos como canales digitales.",true),
qM("En la multiplexación por división de tiempo (TDM) se pueden multiplexar:",[
"Canales de ancho de banda variable y con duración de tiempo variable","Canales digitales","Canales de voz, a los que previamente se les aplicó la modulación PCM","Canales analógicos"],[1,2]),
qS("La radiodifusión comercial de emisoras de FM es posible gracias a qué tipo de multiplexación?",["FDM","TDM","WDM","CDM"],0),
// ───────── Sistema de comunicación y transductores ─────────
qS("El objetivo de un sistema de comunicación [1] es entregar en el destino la forma de onda con cierto [2] especificado.",[
"[1] analógico · [2] grado de fidelidad","[1] digital · [2] exactitud","[1] analógico · [2] exactitud","[1] duplex · [2] grado de fidelidad"],0),
qS("La calidad de un sistema analógico se mide por la:",["No corresponde","Direccionalidad","Relación señal a ruido (SNR)","Tasa de error de bits"],2),
qS("La calidad de un sistema digital se mide por la:",["Relación Señal a Ruido (SNR)","Nitidez de la imagen","Tasa de error de bits (BER)","Nitidez del audio","Direccionalidad"],2),
qS("En el modelo genérico de un sistema de comunicación, ¿qué bloque introduce el ruido, la atenuación y la distorsión?",["El canal (medio de transmisión)","El transductor de entrada","El codificador de fuente","El destino"],0),
qS("La finalidad de los transductores de entrada es [1] la información a transmitir en alguna especie de [2] capaz de ser procesada por el sistema.",["[1] convertir · [2] señal eléctrica","[1] modular · [2] dato","[1] multiplexar · [2] modulación","[1] convertir · [2] dato"],0),
qS("La finalidad de los transductores de salida es [1] la señal procesada por el sistema en algún tipo de [2] capaz de ser interpretada por el receptor.",["[1] convertir · [2] información","[1] modular · [2] dato","[1] multiplexar · [2] señal eléctrica","[1] convertir · [2] modulación"],0),
qM("Indique cuáles de los siguientes elementos se consideran transductores de entrada de información de un sistema de comunicaciones:",["Teclado","Pantalla","Micrófono","Parlante","Modem","Cámara","Impresora","Router"],[0,2,5]),
qM("Indique cuáles de los siguientes elementos se consideran transductores de salida de información de un sistema de comunicaciones:",["Modem","Parlante","Impresora","Pantalla","Micrófono","Fax","Cámara","Teclado"],[1,2,3,5]),
qS("El UART toma [1] de datos y transmite los [2] individuales de forma secuencial. En el destino, un segundo UART reensambla los [3] en [4] completos.",["[1] Bytes · [2] bits · [3] bits · [4] Bytes","[1] bits · [2] Bytes · [3] Bytes · [4] bits","[1] datos · [2] voltajes · [3] voltajes · [4] datos","[1] Bytes · [2] corrientes · [3] corrientes · [4] datos"],0),
]);

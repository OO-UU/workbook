Search.setIndex({"docnames": ["doc/documentacion", "ec/IIQ2013_C1", "ec/IIQ2013_C2", "ec/IIQ2013_C3", "ec/IIQ2013_C4", "ec/IIQ2013_C5", "ec/intro_ejclases", "intro", "p1/c1/e1_1_1", "p1/c1/e1_1_2", "p1/c1/e1_1_3", "p1/c1/fundamentos-y-analisis-dim", "p1/c2/e1_2_1", "p1/c2/e1_2_2", "p1/c2/tuberias-y-bombas", "p1/c3/e1_3_1", "p1/c3/fluidos-no-newtonianos", "p1/c4/agitacion-y-mezclado", "p1/c4/e1_4_1"], "filenames": ["doc\\documentacion.md", "ec\\IIQ2013_C1.ipynb", "ec\\IIQ2013_C2.ipynb", "ec\\IIQ2013_C3.ipynb", "ec\\IIQ2013_C4.ipynb", "ec\\IIQ2013_C5.ipynb", "ec\\intro_ejclases.md", "intro.md", "p1\\c1\\e1_1_1.ipynb", "p1\\c1\\e1_1_2.ipynb", "p1\\c1\\e1_1_3.ipynb", "p1\\c1\\fundamentos-y-analisis-dim.md", "p1\\c2\\e1_2_1.ipynb", "p1\\c2\\e1_2_2.ipynb", "p1\\c2\\tuberias-y-bombas.md", "p1\\c3\\e1_3_1.ipynb", "p1\\c3\\fluidos-no-newtonianos.md", "p1\\c4\\agitacion-y-mezclado.md", "p1\\c4\\e1_4_1.ipynb"], "titles": ["Bibliograf\u00eda de apoyo", "IIQ2013 - Clase 1", "IIQ2013 - Clase 2", "IIQ2013 - Clase 3", "IIQ2013 - Clase 4", "IIQ2013 - Clase 5", "Ejercicios clases IIQ2013", "Introducci\u00f3n al libro de ejercicios", "Ejercicio 1: Momentum y Fuerza", "Ejercicio 2: Hidroest\u00e1tica 1", "Ejercicio 3: Hidroest\u00e1tica 2", "Fundamentos de los fluidos", "Ejercicio 1: Ecuaci\u00f3n de Bernoulli", "Ejercicio 2: P\u00e9rdidas por fricci\u00f3n y singularidades", "Tuber\u00edas y bombas", "Ejercicio 1: Fluidos pseudopl\u00e1sticos y dilatantes", "Fluidos no Newtonianos", "Agitaci\u00f3n y mezclado", "Ejercicio 1: Estanques agitados"], "terms": {"en": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "primer": [1, 2, 3, 4, 5, 15, 18], "lugar": [1, 2, 3, 4, 5], "se": [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "deben": [1, 2, 3, 4, 5], "cargar": [1, 2, 3, 4, 5], "libreria": [1, 2, 3, 4, 5], "que": [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "vamo": [1, 2, 3, 4, 5], "utilizar": [1, 2, 3, 4, 5, 7, 13, 18], "import": [1, 2, 3, 4, 5, 8, 9, 10, 12, 13, 15, 18], "numpi": [1, 2, 3, 4, 5, 15], "np": [1, 2, 3, 4, 5, 15, 18], "coolprop": 1, "cp": [1, 5, 15, 18], "free": 1, "version": 1, "refprop": 1, "A": [0, 1, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "continuaci\u00f3n": [1, 6, 11, 14, 16, 17, 18], "podemo": [1, 5, 13, 15, 18], "generar": 1, "una": [1, 2, 3, 4, 5, 7, 9, 10, 12, 13, 15, 18], "funci\u00f3n": [1, 4, 15, 18], "nos": [1, 7, 9, 12, 13, 15, 18], "ayud": 1, "calcular": [1, 13], "mu": [1, 2, 3, 4, 18], "usando": [1, 3], "def": [1, 2, 3, 4, 15], "mu_hp": 1, "p_0": 1, "p_l": 1, "r": [0, 1, 4, 5, 15], "l": [0, 1, 2, 3, 4, 5, 13], "w": [0, 1, 4, 5, 15, 18], "rho": [1, 2, 3, 4, 8, 9, 12, 13, 15, 18], "return": [1, 2, 3, 4, 15], "pi": [1, 2, 3, 4, 8, 9, 10, 12, 13, 18], "4": [1, 2, 3, 5, 10, 13, 15], "8": [1, 4, 8, 9, 10, 12, 13, 15, 18], "si": [1, 4, 5, 8, 13, 15, 18], "necesitamo": [1, 3, 10], "recuperar": [1, 18], "alguna": [1, 13], "propiedad": [1, 3, 15], "f\u00edsica": [1, 3], "base": 1, "dato": [1, 8, 15], "pued": [1, 4, 5, 12, 15, 18], "properti": 1, "p": [0, 1, 3, 5, 18], "1e5": 1, "fluid": [0, 1], "nh3": 1, "densidad": [1, 8, 9, 10, 13, 15, 18], "amoniaco": 1, "rho_l": 1, "propssi": 1, "d": [0, 1, 2, 3, 4, 5, 8, 9, 13, 15], "q": [0, 1, 2, 3, 4, 12], "0": [1, 2, 3, 4, 5, 8, 9, 12, 13, 15, 18], "viscosidad": [1, 5, 13, 15, 18], "mu_l": 1, "v": [1, 2, 3, 4, 9, 15], "print": [1, 2, 3, 4, 5, 13, 15, 18], "2e": 1, "pa": [1, 3, 4, 5, 10, 15, 18], "s": [0, 1, 2, 3, 4, 5, 8, 10, 12, 13, 15, 18], "1000": [1, 2, 3, 4, 5, 15], "6": [1, 3, 4, 8, 13, 18], "82e": 1, "02": [1, 5, 15], "56e": 1, "04": [1, 5, 15], "01": [1, 4, 15], "l\u00edquido": [1, 12], "fluy": [1, 12], "un": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], "tubo": 1, "circular": [1, 2, 12], "cil\u00edndrico": [1, 12], "cm": [1, 5, 8, 9, 12, 13], "di\u00e1metro": [1, 2, 3, 4, 5, 8, 9, 12, 13], "y": [0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 16, 18], "10": [1, 2, 3, 12, 13, 15], "largo": [1, 3, 8, 13, 15], "caudal": [1, 12], "volum\u00e9trico": 1, "ml": 1, "su": [1, 7, 8, 12, 13, 14, 15, 18], "punto": [1, 10, 12, 13, 15], "saturaci\u00f3n": 1, "33": 1, "58": 1, "c": [0, 1, 2, 3, 4, 5, 8, 10, 13, 15], "es": [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 18], "682": 1, "kg": [1, 3, 4, 8, 9, 10, 13, 15, 18], "m": [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 13, 15, 18], "3": [1, 5, 7, 8, 9, 11, 12, 13], "256": 1, "calcul": [1, 5, 10, 12, 15], "ca\u00edda": [1, 2], "presi\u00f3n": [1, 2, 8, 9, 10, 12, 13], "trav\u00e9": [1, 15], "para": [1, 2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 15, 17, 18], "comprobar": [1, 13], "aplicabilidad": 1, "necesario": 1, "comprar": [1, 18], "el": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 18], "r\u00e9gimen": [1, 2, 5], "flujo": [1, 2, 5, 8, 15], "mediant": [1, 13, 15, 18], "volumetrico": 1, "vdot": 1, "1e": [1, 2, 3, 5], "tuber\u00eda": [1, 2, 3, 5, 7, 8, 10, 12, 13, 15], "area": 1, "tuberia": [1, 5], "velocidad": [1, 2, 3, 4, 5, 8, 12, 13, 15, 18], "vz_av": 1, "re": [1, 2, 3, 13, 15, 18], "3f": 1, "1698": 1, "891": 1, "delta_p": 1, "32": 1, "delta": [1, 3, 5], "2f": 1, "65": 1, "07": [1, 15], "i": [0, 6, 13], "est": [8, 10, 13, 15, 18], "compilado": [], "curso": [6, 7], "ecuaci\u00f3n": [2, 7, 8, 13, 14, 15], "de": [2, 3, 4, 5, 6, 8, 9, 10, 13, 14, 15, 16, 17, 18], "bernoulli": [7, 8, 14], "provien": 8, "equilibrio": 8, "entr": [8, 10, 13, 15, 18], "ejerc": 8, "variaci\u00f3n": 8, "peso": 8, "del": [3, 4, 5, 6, 8, 9, 10, 12, 13, 15, 18], "fluido": [5, 8, 10, 12, 13, 18], "lo": [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18], "ignora": 8, "efecto": 8, "fricci\u00f3n": [2, 3, 4, 7, 8, 12, 14], "superfici": [8, 12, 13], "entend": [8, 9], "mejor": [7, 8, 9, 15], "relaci\u00f3n": [4, 8, 15, 18], "profesor": 8, "le": [8, 10, 13, 15], "propon": 8, "siguient": [2, 3, 4, 7, 8, 9, 10, 15, 18], "caso": [2, 8, 9, 12, 15], "agua": [2, 3, 4, 8, 9, 12], "25": [2, 4, 8, 9, 12, 13], "con": [2, 3, 4, 6, 7, 8, 9, 10, 12, 13, 15, 18], "997": [4, 8], "05": [2, 8, 15], "hspace": [8, 9, 10, 12, 13, 15, 18], "1mm": [8, 9, 10, 12, 13, 15, 18], "baja": [8, 13], "constant": [4, 8, 12, 13, 18], "por": [2, 3, 4, 5, 7, 8, 9, 10, 12, 14, 15, 18], "sistema": [4, 8, 10, 13, 14], "cil\u00edndrica": 8, "hasta": [8, 10, 12, 13, 18], "alcanzar": [8, 12], "codo": [8, 13], "cambiando": 8, "trayectoria": 8, "encuentra": [6, 8, 10, 12, 18], "sujetado": 8, "fierro": 8, "met\u00e1lico": 8, "u": 8, "qu\u00e9": [8, 18], "somet": 8, "considerando": [2, 3, 8, 14, 18], "\u00fanicament": [8, 13], "producido": 8, "inclinada": [8, 10], "60": [4, 8, 18], "respecto": 8, "al": [3, 4, 6, 8, 12, 13, 15], "ej": [8, 10], "x": [8, 10, 13], "sube": 8, "30": [4, 8], "begin": [8, 9, 10, 12, 15, 18], "align": [8, 9, 10, 12, 15, 18], "textrm": [8, 9, 10, 12, 15, 18], "obtenemo": [8, 15, 18], "10pt": [8, 9, 10, 12, 15, 18], "050": 8, "m3": [2, 4, 8, 9, 10, 12, 13, 15], "080": 8, "\u00e1rea": [8, 9, 12, 18], "transvers": [8, 12], "cual": [8, 9, 10], "pasa": 8, "cdot": [8, 9, 10, 12, 15, 18], "left": [8, 9, 10, 12, 13, 15, 18], "frac": [8, 9, 10, 12, 13, 15, 18], "2": [0, 5, 7, 8, 11, 14], "right": [8, 9, 10, 12, 13, 15, 18], "142": [8, 9, 10, 12, 18], "005": [2, 8], "m2": [8, 9, 12, 13], "luego": [4, 5, 8, 9, 10, 12, 13, 15, 18], "vendr\u00e1": 8, "dada": 8, "45": [4, 8], "105": 8, "n": [0, 8, 9, 15, 18], "ya": [8, 9, 12, 15, 18], "debemo": [8, 18], "descompon": 8, "vector": 8, "e": [0, 8, 12, 13, 18], "secci\u00f3n": [8, 11, 14, 16, 17, 18], "va": 8, "direcci\u00f3n": 8, "aceleraci\u00f3n": 8, "m_": 8, "ybaja": 8, "sin": [8, 10, 15], "39": 8, "062": 8, "xbaja": 8, "co": [0, 8], "22": [8, 12], "553": 8, "manera": [7, 8], "an\u00e1loga": 8, "ysube": 8, "xsube": 8, "finalment": [5, 8, 12, 13], "total": 8, "f_": [8, 13], "16": 8, "510": 8, "61": 8, "615": 8, "end": [8, 9, 10, 12, 15, 18], "la": [0, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 15, 17, 18], "fuerza": [7, 9, 11], "submarino": 9, "design\u00f3": 9, "operaci\u00f3n": [9, 17], "investigaci\u00f3n": 9, "profundidad": 9, "fosa": 9, "atacama": 9, "fauna": 9, "marina": 9, "esta": [4, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18], "zona": [9, 18], "inexplorada": 9, "realizar": [9, 15], "dicha": [9, 13, 18], "cuenta": [9, 10, 18], "tien": [9, 12, 13, 15, 18], "ventana": 9, "ciruclar": 9, "part": [9, 10, 12], "inferior": [9, 12], "est\u00e1": [5, 9], "dise\u00f1ada": 9, "soportar": 9, "600": 9, "kn": [5, 9], "consider": [2, 3, 4, 9, 13, 18], "dentro": 9, "igual": [2, 5, 9, 12, 18], "atmosf\u00e9rica": [9, 10, 13], "adem\u00e1": [9, 12, 13, 14, 15, 17], "alcanza": 9, "8069": 9, "1028": 9, "romper\u00e1": 9, "suponiendo": 9, "m\u00e1xima": [4, 9, 18], "s\u00ed": [9, 18], "rompa": 9, "cu\u00e1l": [2, 9], "m\u00ednima": [4, 9], "deber\u00eda": [9, 18], "sean": [], "g": [4, 9, 10, 12, 13, 18], "9": [3, 4, 9, 10, 12, 13], "800": [9, 10, 12], "s2": [9, 10, 12, 13], "h": [0, 4, 9, 12, 18], "exterior": 9, "sient": 9, "p_": [4, 9, 10, 18], "81290333": 9, "ser\u00e1": [9, 10, 12, 18], "100": [2, 3, 4, 9, 13, 15], "049": 9, "percib": [9, 10], "f": [0, 2, 3, 4, 5, 9, 13, 15, 18], "3990329": 9, "919": 9, "tanto": [2, 3, 4, 9, 15, 18], "deber\u00e1": 9, "mayor": [9, 15], "o": [0, 2, 5, 9, 12, 13, 15], "ust": [10, 15], "estanqu": [7, 10, 12, 13, 17], "conectado": 10, "do": [10, 13, 15], "abierta": [3, 10], "ella": [2, 10], "expuesta": 10, "vece": 10, "mientra": 10, "otra": 10, "195": 10, "kpa": 10, "compon": 10, "inmisc": 10, "rho_a": 10, "1306": 10, "b": [0, 2, 3, 4, 5, 10, 12, 13], "rho_b": 10, "2588": 10, "rho_c": 10, "8970": 10, "15": 10, "figura": [4, 5, 10], "observan": 10, "dimension": 10, "pide": 10, "encontrar": [10, 11, 14, 16, 17], "altura": [4, 10, 12, 13, 18], "dond": [10, 13, 15, 18], "esto": [6, 7, 10, 11, 13, 18], "responda": [4, 10, 18], "marqu": 10, "encuentr": [10, 15, 18], "convenient": 10, "igualar": 10, "presion": [10, 13], "completo": [7, 10, 12], "metro": [3, 4, 10], "asuma": [10, 13, 15, 18], "gravedad": [4, 10], "como": [10, 12, 13, 15, 18], "sabemo": [10, 13, 15, 18], "202650": 10, "195300": 10, "rho_": 10, "150": 10, "primero": [4, 10], "calculamo": [2, 3, 4, 10, 15, 18], "diferencia": [10, 13], "saber": [10, 18], "hai": 10, "ambo": 10, "vertic": 10, "h_": [10, 12], "vert": 10, "llega": 10, "cuya": [10, 13, 18], "incl": 10, "5": [2, 3, 4, 10, 13, 18], "536": 10, "notes": 10, "restamo": 10, "trozo": 10, "compuesta": 10, "tal": 10, "343044": 10, "425": [10, 15], "son": [0, 4, 10, 13], "equivalent": [3, 10, 15], "255136": 10, "955": 10, "despejando": [10, 12], "llegamo": 10, "expresi\u00f3n": 10, "675": 10, "encuentran": [11, 14, 16, 17], "ejercicio": [3, 11, 14, 16, 17], "asociado": [11, 14], "hidroest\u00e1tica": [7, 11], "d_e": 12, "llena": [12, 18], "conectada": 12, "v\u00e1lvula": [3, 12], "abrir": 12, "vac\u00eda": 12, "d_t": [12, 18], "13": [3, 4, 12], "ignor": 12, "p\u00e9rdida": [2, 3, 4, 7, 12, 14], "carga": [3, 4, 12, 13, 14], "singularidad": [3, 4, 7, 12, 14], "suponga": 12, "sale": [12, 13], "momento": 12, "tiempo": [12, 18], "demora": 12, "vaciars": 12, "ver": [8, 9, 10, 12, 13, 15, 18], "tenemo": [12, 15, 18], "p_a": 12, "h_a": 12, "u_a": [12, 13], "2g": [12, 13], "p_b": 12, "h_b": [4, 12], "u_b": [12, 13], "aplicada": 12, "descrito": 12, "queda": [12, 15], "sqrt": [12, 18], "2gh_a": 12, "resolviendo": 12, "u_": 12, "136": 12, "u_ba": 12, "render": [8, 9, 10, 12, 15, 18], "long": [8, 9, 10, 12, 15, 18], "d_": [12, 18], "t": [0, 12, 18], "130": 12, "013": 12, "294": 12, "tambi\u00e9n": [12, 15], "ser": 12, "escrito": 12, "dv": [12, 15], "dt": 12, "mantien": 12, "dh_a": 12, "reemplazar": 12, "igualando": [12, 13], "reordenando": 12, "t\u00e9rmino": 12, "2dt": 12, "inicialment": [12, 15], "final": [12, 13], "int_": 12, "int_0": 12, "t_t": 12, "3600": 12, "t_": [12, 18], "130981": 12, "915": 12, "36": 12, "384": 12, "nomin": [2, 3], "254": [2, 3], "mm": [2, 3, 13], "cuando": 2, "trav\u00fa": 2, "hacen": 2, "laminar": [2, 5, 15], "turbulento": [2, 13, 15], "transici\u00f3n": 2, "necesita": 2, "ma": 2, "informaci\u00f3n": [2, 9, 15], "5e": [2, 3], "001": [2, 3], "n\u00famero": [2, 15, 18], "reynlosd": 2, "3e": 2, "003e": 2, "regimen": 2, "alternativa": [2, 3, 4], "correcta": [2, 3, 4], "acero": [2, 3, 13], "comerci": [2, 3, 13], "factor": [2, 13, 18], "fan": [2, 13], "f_f": 2, "bajo": 2, "an\u00e1lisi": [2, 15, 18], "aproximadament": [2, 4, 5, 15, 18], "010": 2, "002": 2, "leq": [2, 3, 4], "c\u00f3mputo": 2, "usar": [2, 15], "diagrama": 2, "moodi": 2, "correlaci\u00f3n": 2, "adecuada": 2, "generamo": [2, 4], "funcion": 2, "calculo": 2, "utilizando": [2, 4, 13, 18], "correlacion": 2, "never": [0, 2, 13], "schacham": 2, "f_never": [2, 3], "ep": [2, 3], "001375": [2, 3, 13], "2e4": [2, 3], "1e6": [2, 3], "f_schacham": 2, "rh": 2, "737": 2, "log": 2, "269": 2, "185": 2, "14": 2, "046": [2, 3, 13], "003818735654783344": 2, "0038187535955500397": 2, "valor": [2, 3, 4, 5, 13, 15, 18], "phi": [2, 3, 4], "tramo": [2, 3], "horizont": [2, 3, 5], "50": 2, "siguiendo": 2, "calculado": 2, "11": [2, 3], "596605830597086": 2, "transportar": 3, "atm": [3, 4], "12": [3, 18], "20": 3, "comenzamo": 3, "recordando": 3, "anterior": [3, 4, 13, 15], "perdida": 3, "unidad": [3, 4], "115": 3, "96605830597088": 3, "realizando": 3, "cambio": [3, 4, 15, 18], "100000": 3, "86923e": 3, "11444957016150369": 3, "inclut": 3, "compuerta": 3, "75": [3, 4], "estimada": 3, "tabulado": 3, "coeficient": 3, "energ\u00eda": 3, "sumar": 3, "utilizamo": 3, "k": [0, 3, 15, 18], "1335183263148772": 3, "pero": [3, 4], "evaluado": 3, "l_e": 3, "40": [3, 4, 13], "ocupando": 3, "aproximaci\u00f3n": [3, 15], "12610053640394478": 3, "badger": 0, "j": 0, "banchero": 0, "1970": 0, "introducci": [], "ingeni": [], "\u0131a": [], "qu": [], "\u0131mica": [], "mcgraw": 0, "hill": 0, "ciudad": 0, "exico": [], "660": 0, "b135i": 0, "bloch": 0, "2006": 0, "practic": 0, "guid": 0, "compressor": 0, "technolog": 0, "2nd": 0, "ed": 0, "wilei": 0, "intersci": 0, "ho": 0, "boken": 0, "nueva": 0, "jersei": 0, "nj": 0, "ee": 0, "uu": 0, "coulson": 0, "richardson": 0, "backhurst": 0, "harker": 0, "1996": 0, "che": 0, "mical": 0, "engin": 0, "volum": 0, "1": [0, 7, 11, 14, 16, 17], "flow": 0, "heat": 0, "transfer": 0, "mass": 0, "5th": 0, "butterworth": 0, "heinemann": 0, "oxford": 0, "reino": 0, "unido": 0, "c855c": 0, "1991": 0, "chemic": 0, "particl": 0, "separ": 0, "process": 0, "4th": 0, "darbi": 0, "2001": 0, "mechan": 0, "marcel": 0, "dekker": 0, "inc": 0, "york": 0, "ny": 0, "2005": 0, "3rd": 0, "higher": 0, "educa": 0, "tion": 0, "geankopli": 0, "1998": 0, "proceso": [0, 13, 18], "transport": [0, 11], "operacion": [0, 6, 7], "unitaria": [0, 6, 7], "3ra": 0, "compa": [], "editori": 0, "continent": 0, "cecsa": 0, "2842": 0, "g292t": 0, "holland": 0, "bragg": 0, "1995": 0, "edward": 0, "arnold": 0, "londr": 0, "incropera": 0, "dewitt": 0, "1999": 0, "fundamento": [0, 7], "transferencia": 0, "calor": 0, "4ta": 0, "prentic": 0, "hall": 0, "621": 0, "4022": 0, "i37f": 0, "kaka": 0, "liu": 0, "2002": 0, "exchang": 0, "select": 0, "rate": [0, 15], "thermal": 0, "design": 0, "crc": 0, "press": 0, "boca": 0, "raton": 0, "fl": 0, "karasisik": 0, "messina": 0, "cooper": 0, "heald": 0, "pump": 0, "handbook": 0, "cork": 0, "kern": 0, "1965": 0, "28427": 0, "k39p": 0, "mccabe": 0, "smith": 0, "harriott": 0, "asica": 0, "664": 0, "p868f": 0, "oldshu": 0, "1983": 0, "mix": 0, "pub": 0, "284292": 0, "o44f": 0, "shah": 0, "sekuli": 0, "2003": 0, "fundament": 0, "john": 0, "hoboken": 0, "wilk": 0, "ptr": 0, "upper": 0, "saddl": 0, "river": 0, "listado": [6, 11, 14, 16, 17], "cada": 6, "objetivo": [6, 7], "reforzar": [6, 7], "contenido": [6, 7], "visto": 6, "ayudar": 6, "estudio": 6, "guiado": 6, "consistent": 6, "est\u00e1n": 6, "pensado": 6, "realizars": 6, "conocimiento": [6, 7], "adquirido": 6, "correspondient": 6, "problema": 6, "introducci\u00f3n": 0, "ingenier\u00eda": 0, "qu\u00edmica": 0, "m\u00e9xico": 0, "compa\u00f1\u00eda": 0, "paquet": [8, 9, 10, 12, 13, 15, 18], "utilizado": [8, 9, 10, 12, 13, 15, 18], "handcalc": [8, 9, 10, 12, 15, 18], "from": [8, 9, 10, 12, 13, 15, 18], "math": [8, 9, 10, 12, 13, 18], "radian": 8, "08": [8, 15], "m_ybaja": 8, "m_xbaja": 8, "m_ysub": 8, "m_xsube": 8, "f_y": 8, "f_x": 8, "entrega": [9, 15], "p_v": [4, 9], "h_vert": 10, "h_incl": 10, "p_2": 10, "p_1": 10, "p_3": 10, "p_4": 10, "plataforma": 7, "dedicamo": 7, "recopilar": 7, "amplia": 7, "variedad": 7, "pr\u00e1ctico": 7, "relacionado": [7, 14], "proporcionar": 7, "estudiant": 7, "interesado": 7, "recurso": 7, "comprend": 7, "aplicar": [7, 11], "concepto": 7, "efectiva": 7, "pueden": [7, 15], "\u00edndice": 15, "buscar": 7, "espec\u00edfico": [7, 15, 18], "visualizar": 7, "p\u00e1gina": [4, 7], "ordenamiento": [], "clase": 7, "iiq2013": 7, "bibliograf\u00eda": 7, "apoyo": 7, "refinaci\u00f3n": 13, "petr\u00f3leo": 13, "obtien": [4, 13, 15], "fase": 13, "l\u00edquida": [13, 15], "cinem\u00e1tica": 13, "nu": 13, "691": 13, "cst": 13, "876": 13, "principio": 13, "almacenado": 13, "distinto": 13, "terminar": 13, "\u00faltimo": 13, "almacenamiento": 13, "determin": [13, 18], "justo": 13, "despu\u00e9": 13, "entrar": 13, "c\u00e1lculo": [4, 13], "0045": [5, 13], "comprueb": [13, 15], "representa": [13, 15], "correctament": 13, "utilic": 13, "entrada": [4, 13], "desd": [4, 5, 13], "afilada": 13, "llegar": 13, "recto": 13, "asociada": 13, "intersecci\u00f3n": 13, "despreci": 13, "toda": 13, "epsilon": 13, "d_a": [13, 18], "d_b": 13, "27": 13, "d_c": 13, "sympi": 13, "symbol": 13, "eq": 13, "solv": 13, "sea": 13, "p_i": 13, "intercepci\u00f3n": 13, "adicionalment": 13, "creamo": 13, "ecuacion": [13, 17], "important": 13, "10mm": 13, "z_i": 13, "z_a": [4, 13], "k_": [13, 15, 18], "4f": 13, "l_": 13, "part1": [], "cap2": [], "ex2": [], "eq1": 13, "z_b": 13, "out": 13, "u_c": 13, "recorr": 13, "continuidad": 13, "dice": 13, "q_a": 13, "q_b": 13, "q_c": 13, "2u_a": 13, "2u_b": 13, "2u_c": 13, "formar": 13, "inc\u00f3gnita": 13, "tre": 13, "despejamo": 13, "l_a": 13, "7": [13, 15], "l_b": 13, "l_c": 13, "k_in": 13, "k_codo": 13, "k_out": 13, "variabl": 13, "simb\u00f3lica": 13, "z": [4, 13], "eq2": 13, "eq3": 13, "solver": 13, "obten": [4, 5, 13], "real": [4, 13], "positiva": 13, "solut": 13, "solution_vector": 13, "all": 13, "sol": 13, "is_real": 13, "is_posit": 13, "01661842550508": 13, "05885232038120": 13, "72018116093660": 13, "72": 13, "supuesto": [13, 15, 18], "acertado": 13, "encontrada": 13, "procedimiento": 13, "conoc": [13, 15], "iteraci\u00f3n": 13, "tomamo": 13, "suposici\u00f3n": 13, "inici": [13, 15], "poder": 13, "resolv": 13, "nuestro": [13, 18], "comprobamo": [13, 18], "exactitud": 13, "recordar": 13, "times10": 13, "vemo": 13, "reynold": [13, 15, 18], "obtuvimo": 13, "reynolds_vector": 13, "diameter_vector": 13, "rang": 13, "len": 13, "append": 13, "re_a": 13, "re_b": 13, "re_c": 13, "1814984": 13, "95857637": 13, "2367424": 13, "20622710": 13, "2732376": 13, "93831352": 13, "notamo": [13, 18], "procedemo": 13, "0046": 13, "friction_vector": 13, "f_a": 13, "f_b": 13, "f_c": 13, "0112332966799599": 13, "0109827877312439": 13, "00980398887211753": 13, "obtenido": 13, "notoria": 13, "recomienda": 13, "iterar": 13, "reemplazando": 13, "promedio": [13, 15], "observar": [13, 18], "c\u00f3mo": 13, "var\u00edan": 13, "descarg": 13, "c\u00f3digo": 13, "observa": 13, "resultado": [13, 18], "incial": 13, "bomba": [4, 7], "aplicacion": 14, "podr\u00e1": [11, 14, 16, 17], "momentum": [7, 11], "prop\u00f3sito": 11, "alguno": 11, "te\u00f3rico": [4, 11, 18], "materia": 11, "mezcla": [15, 18], "desconocido": 15, "newtoniano": [7, 15], "sigu": 15, "lei": 15, "potencia": [15, 18], "sabe": 15, "1234": 15, "aparent": [5, 15], "cerca": [5, 15, 18], "pare": [5, 15, 18], "mu_": 15, "52": 15, "obtuvo": 15, "experimentalment": [15, 18], "perfil": [5, 15], "dicho": 15, "esfuerzo": [5, 15], "cort": 15, "t_w": 15, "ajust": 15, "tipo": [15, 18], "durant": 15, "experimento": 15, "era": 15, "experimental": [], "000": [15, 18], "09": 15, "383": 15, "749": 15, "097": 15, "06": [5, 15], "733": 15, "017": 15, "03": 15, "273": 15, "497": 15, "679": 15, "00": 15, "790": 15, "scipi": 15, "optim": 15, "curve_fit": 15, "matplotlib": 15, "pyplot": 15, "plt": 15, "tau": 15, "tasa": [5, 15], "dot": 15, "gamma": 15, "consistencia": 15, "embargo": 15, "tener": 15, "carecemo": 15, "par\u00e1metro": 15, "enunciado": [], "entregan": 15, "mu_a": 15, "unimo": 15, "aplicamo": [4, 15], "tau_w": 15, "dr": 15, "entonc": [4, 15, 18], "tabla": 15, "elegir": 15, "segundo": [4, 15, 18], "shear": 15, "stress": 15, "9916": 15, "aquello": 15, "cumplen": 15, "obteners": 15, "radio": [5, 15], "nr": 15, "notar": 15, "contamo": 15, "curva": [4, 15], "representan": 15, "definimo": 15, "nuestra": 15, "funcion_de_velocidad": 15, "recuperamo": 15, "r_exp": 15, "arrai": 15, "v_exp": 15, "ajustar": 15, "experimentar": 15, "parametros_inicial": 15, "param": 15, "covarianza": 15, "p0": 15, "extraer": 15, "n_aju": 15, "k_aju": 15, "evalua": 15, "v_teorica": 15, "gr\u00e1fico": [4, 5, 15, 18], "comparativo": 15, "evaluar": 15, "calidad": 15, "scatter": 15, "label": 15, "plot": 15, "ajustada": 15, "color": 15, "red": 15, "xlabel": 15, "ylabel": 15, "titl": 15, "legend": 15, "show": 15, "ajustado": 15, "6f": 15, "user": 15, "igtab": 15, "appdata": 15, "local": 15, "temp": 15, "ipykernel_7172": [], "1857015476": 15, "py": 15, "runtimewarn": 15, "invalid": 15, "valu": 15, "encount": 15, "scalar": 15, "power": 15, "497884": 15, "000210": 15, "contrario": 15, "498": 15, "generaliza": 15, "generalizado": 15, "ocupamo": 15, "bar": 15, "calcula": 15, "partir": [15, 18], "3n": 15, "4n": 15, "v_prom": 15, "300": [5, 15, 18], "tau_": [5, 15], "992": 15, "v_": [15, 18], "prom": 15, "n_": [15, 18], "aju": 15, "149": 15, "043": 15, "mathrm": [5, 15, 18], "6545": 15, "353": 15, "cumpl": 15, "2100": 15, "875": 15, "l\u00edmite": 15, "intervalo": 15, "comparamo": 15, "els": 15, "menor": 15, "352909": 15, "789": 15, "351492": 15, "pseudopl\u00e1stico": [7, 16], "dilatant": [7, 16], "ipykernel_20404": [], "sobr": [16, 17], "ipykernel_16892": [], "ipykernel_1584": [], "ipykernel_12272": [], "excel": 15, "python": 15, "ipykernel_29512": [], "ipykernel_9012": [], "ipykernel_23116": [], "ipykernel_29776": [], "ipykernel_28624": [], "ipykernel_22908": [], "ipykernel_4408": [], "ipykernel_4108": [], "caracter\u00edstica": 4, "centr\u00edfuga": 4, "rodet": 4, "dispon": [4, 18], "formulario": 4, "_": 4, "80": 4, "geq": 4, "beta": 4, "90": 4, "degre": [], "tan": 4, "infti": 4, "gh": 4, "approx": [4, 18], "directament": 4, "descarga": 4, "nula": 4, "81": 4, "aceleracion": 4, "1750": 4, "rpm": [4, 18], "dejar": 4, "rad": 4, "r_3": 4, "54": 4, "diametro": 4, "h_b_teorico": 4, "fraccion": 4, "fracci\u00f3n": 4, "te\u00f3rica": 4, "alcanzada": 4, "654180235193": 4, "misma": 4, "combinaci\u00f3n": 4, "carcasa": 4, "operando": 4, "3500": 4, "condici\u00f3n": 4, "proporcionalidad": 4, "propto": 4, "omega": 4, "haciendo": 4, "poco": 4, "algebra": 4, "planteamo": 4, "h_b_1": 4, "w_2": 4, "h_b_2": 4, "condici\u00f3": 4, "m\u00e1axima": 4, "55": 4, "ahora": 4, "instala": 4, "distancia": 4, "encima": 4, "dep\u00f3sito": 4, "abierto": 4, "ambient": 4, "101325": 4, "ducto": 4, "succi\u00f3n": 4, "igualada": 4, "circulan": 4, "3170": 4, "mpa": 4, "35": [4, 18], "npsh": 4, "aproximandament": 4, "npsh_d": 4, "patm": 4, "pv": 4, "z_succion": 4, "incluyendo": 4, "formula": 4, "p_atm": 4, "phi_real": 4, "incluy": 4, "281756309047579": 4, "adjunta": 5, "presenta": 5, "pl\u00e1stico": 5, "bingham": 5, "fluynedo": 5, "cil\u00edindrica": 5, "interno": 5, "pl\u00e1tico": 5, "deformaci\u00f3n": 5, "mui": 5, "cortant": 5, "aproximado": 5, "fluencia": 5, "constatar": 5, "aproximar": 5, "delta_v": 5, "delta_r": 5, "0015": 5, "gamma_punto": 5, "9999999999999996": 5, "4l": 5, "t_wall": 5, "3000": 5, "mu_app": 5, "0000000000001": 5, "0e": 5, "cr\u00edtico": 5, "adjunto": 5, "r_": 5, "0099": 5, "r_c": 5, "tau_0": 5, "1485": 5, "ipykernel_33428": [], "ipykernel_20704": [], "ipykernel_9844": [], "contrataron": 18, "empresa": 18, "apicultor": 18, "ingeniero": 18, "qu\u00edmico": 18, "encargado": 18, "trabajo": 18, "estudiar": 18, "comportamiento": 18, "miel": 18, "investigador": 18, "hicieron": 18, "reol\u00f3gico": 18, "produc": 18, "obtuvieron": 18, "1360": 18, "viscocidad": 18, "5647": 18, "configuraci\u00f3n": 18, "est\u00e1ndar": 18, "s_6": 18, "capacidad": 18, "\u00fatlimo": 18, "motor": 18, "agitador": [17, 18], "consumo": 18, "kw": 18, "elija": 18, "discuta": 18, "opci\u00f3n": 18, "agregar": 18, "deflector": 18, "\u00fanica": 18, "geom\u00e9trica": 18, "proveedor": 18, "axial": 18, "adecuado": 18, "operar": 18, "s_1": 18, "agitaci\u00f3n": [7, 18], "condicion": [17, 18], "descrita": 18, "independient": 18, "compueb": 18, "v\u00e1lido": 18, "vez": 18, "obtenga": 18, "mezclado": [7, 18], "agregaron": 18, "volumen": 18, "v_t": 18, "s_": 18, "500": 18, "272": 18, "ubicamo": 18, "selecci\u00f3n": [17, 18], "observamo": 18, "encontramo": 18, "recomend": 18, "turbina": 18, "cuanto": 18, "utilizaci\u00f3n": 18, "combenient": 18, "pasan": 18, "tendr\u00eda": 18, "opera": 18, "modelo": 18, "647": 18, "rp": 18, "333": 18, "833": 18, "836": 18, "236": 18, "seleccionado": 18, "independencia": 18, "k_t": 18, "consum": 18, "3d_a": 18, "88814": 18, "943": 18, "88": 18, "apto": 18, "trabajar": 18, "Nos": 18, "dicen": 18, "asumamo": 18, "trabajamo": 18, "despejar": 18, "p_max": 18, "35000": 18, "n_max": 18, "max": 18, "666": 18, "219": 18, "946": 18, "correcto": 18, "613": 18, "088": 18, "geometr\u00eda": 18, "revolucion": 18, "minuto": 18, "relciona": 18, "time": 18, "t_m": 18, "timpo": 18, "70": 18, "19": 18, "096": 18, "ipykernel_31952": [], "b\u00e1sica": 17, "encontraran": 17, "escalamiento": 17, "ipykernel_23704": [], "agitado": [7, 17], "ipykernel_24088": [], "ipykernel_18412": 15}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"iiq2103": [], "clase": [1, 2, 3, 4, 5, 6], "1": [1, 2, 3, 4, 5, 8, 9, 10, 12, 13, 15, 18], "ecuaci\u00f3n": [1, 12], "de": [0, 1, 7, 11, 12], "hagen": 1, "poiseuil": 1, "ejemplo": 1, "calculo": 1, "del": 1, "n\u00famero": 1, "reynold": 1, "2": [1, 2, 3, 4, 9, 10, 12, 13, 15, 18], "aplicaci\u00f3n": 1, "la": [1, 8, 13], "libro": 7, "ejercicio": [6, 7, 8, 9, 10, 12, 13, 15, 18], "para": [], "operacion": [], "unitaria": [], "momentum": 8, "y": [8, 13, 14, 15, 17], "fuerza": 8, "enunciado": [8, 9, 10, 12, 13, 15, 18], "informaci\u00f3n": [8, 13], "sobr": [8, 13], "figura": [8, 13], "soluci\u00f3n": [2, 3, 4, 5, 8, 9, 10, 12, 13, 15, 18], "hidroest\u00e1tica": [9, 10], "3": [2, 3, 4, 10, 15, 18], "inciso": [10, 12, 13, 15, 18], "fundamento": 11, "lo": 11, "fluido": [7, 11, 15, 16], "esto": [], "es": [], "una": [], "prueba": [], "esta": [], "tuber\u00eda": 14, "singularidad": 13, "ordenamiento": [], "iiq2013": [1, 2, 3, 4, 5, 6], "pregunta": [2, 3, 4, 5], "bibliograf\u00eda": 0, "apoyo": 0, "bernoulli": 12, "introducci\u00f3n": 7, "al": 7, "transport": 7, "adicional": 7, "p\u00e9rdida": 13, "por": 13, "fricci\u00f3n": 13, "bomba": 14, "contenido": [11, 14, 16, 17], "content": [], "\u00edndice": 7, "pseudopl\u00e1stico": 15, "dilatant": 15, "newtoniano": 16, "resultado": 15, "experimental": 15, "4": [4, 18], "5": 5, "estanqu": 18, "agitado": 18, "agitaci\u00f3n": 17, "mezclado": 17}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})
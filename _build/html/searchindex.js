Search.setIndex({"docnames": ["doc/documentacion", "ec/IIQ2013_C1", "ec/IIQ2013_C2", "ec/IIQ2013_C3", "ec/intro_ejclases", "intro", "p1/c1/e1_1_1", "p1/c1/e1_1_2", "p1/c1/e1_1_3", "p1/c1/fundamentos-y-analisis-dim", "p1/c2/e1_2_1", "p1/c2/e1_2_2", "p1/c2/tuberias-y-bombas", "p1/c3/e1_3_1", "p1/c3/fluidos-no-newtonianos"], "filenames": ["doc\\documentacion.md", "ec\\IIQ2013_C1.ipynb", "ec\\IIQ2013_C2.ipynb", "ec\\IIQ2013_C3.ipynb", "ec\\intro_ejclases.md", "intro.md", "p1\\c1\\e1_1_1.ipynb", "p1\\c1\\e1_1_2.ipynb", "p1\\c1\\e1_1_3.ipynb", "p1\\c1\\fundamentos-y-analisis-dim.md", "p1\\c2\\e1_2_1.ipynb", "p1\\c2\\e1_2_2.ipynb", "p1\\c2\\tuberias-y-bombas.md", "p1\\c3\\e1_3_1.ipynb", "p1\\c3\\fluidos-no-newtonianos.md"], "titles": ["Bibliograf\u00eda de apoyo", "IIQ2013 - Clase 1", "IIQ2013 - Clase 2", "IIQ2013 - Clase 3", "Ejercicios clases IIQ2013", "Introducci\u00f3n al libro de ejercicios", "Ejercicio 1: Momentum y Fuerza", "Ejercicio 2: Hidroest\u00e1tica 1", "Ejercicio 3: Hidroest\u00e1tica 2", "Fundamentos de los fluidos", "Ejercicio 1: Ecuaci\u00f3n de Bernoulli", "Ejercicio 2: P\u00e9rdidas por fricci\u00f3n y singularidades", "Tuber\u00edas y bombas", "Ejercicio 1: Fluidos pseudopl\u00e1sticos y dilatantes", "Fluidos no Newtonianos"], "terms": {"en": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "primer": [1, 2, 3, 13], "lugar": [1, 2, 3], "se": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14], "deben": [1, 2, 3], "cargar": [1, 2, 3], "libreria": [1, 2, 3], "que": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14], "vamo": [1, 2, 3], "utilizar": [1, 2, 3, 5, 11], "import": [1, 2, 3, 6, 7, 8, 10, 11, 13], "numpi": [1, 2, 3, 13], "np": [1, 2, 3, 13], "coolprop": 1, "cp": [1, 13], "free": 1, "version": 1, "refprop": 1, "A": [0, 1, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14], "continuaci\u00f3n": [1, 4, 9, 12, 14], "podemo": [1, 11, 13], "generar": 1, "una": [1, 2, 3, 5, 7, 8, 10, 11, 13], "funci\u00f3n": [1, 13], "nos": [1, 5, 7, 10, 11, 13], "ayud": 1, "calcular": [1, 11], "mu": [1, 2, 3], "usando": [1, 3], "def": [1, 2, 3, 13], "mu_hp": 1, "p_0": 1, "p_l": 1, "r": [0, 1, 13], "l": [0, 1, 2, 3, 11], "w": [0, 1, 13], "rho": [1, 2, 3, 6, 7, 10, 11, 13], "return": [1, 2, 3, 13], "pi": [1, 2, 3, 6, 7, 8, 10, 11], "4": [1, 2, 3, 8, 11, 13], "8": [1, 6, 7, 8, 10, 11, 13], "si": [1, 6, 11, 13], "necesitamo": [1, 3, 8], "recuperar": 1, "alguna": [1, 11], "propiedad": [1, 3, 13], "f\u00edsica": [1, 3], "base": 1, "dato": [1, 6, 13], "pued": [1, 10, 13], "properti": 1, "p": [0, 1, 3], "1e5": 1, "fluid": [0, 1], "nh3": 1, "densidad": [1, 6, 7, 8, 11, 13], "amoniaco": 1, "rho_l": 1, "propssi": 1, "d": [0, 1, 2, 3, 6, 7, 11, 13], "q": [0, 1, 2, 3, 10], "0": [1, 2, 3, 6, 7, 10, 11, 13], "viscosidad": [1, 11, 13], "mu_l": 1, "v": [1, 2, 3, 7, 13], "print": [1, 2, 3, 11, 13], "2e": 1, "pa": [1, 3, 8, 13], "s": [0, 1, 2, 3, 6, 8, 10, 11, 13], "1000": [1, 2, 3, 13], "6": [1, 3, 6, 11], "82e": 1, "02": [1, 13], "56e": 1, "04": [1, 13], "01": [1, 13], "l\u00edquido": [1, 10], "fluy": [1, 10], "un": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "tubo": 1, "circular": [1, 2, 10], "cil\u00edndrico": [1, 10], "cm": [1, 6, 7, 10, 11], "di\u00e1metro": [1, 2, 3, 6, 7, 10, 11], "y": [0, 1, 2, 4, 5, 7, 8, 9, 10, 14], "10": [1, 2, 3, 10, 11, 13], "largo": [1, 3, 6, 11, 13], "caudal": [1, 10], "volum\u00e9trico": 1, "ml": 1, "su": [1, 5, 6, 10, 11, 12, 13], "punto": [1, 8, 10, 11, 13], "saturaci\u00f3n": 1, "33": 1, "58": 1, "c": [0, 1, 2, 3, 6, 8, 11, 13], "es": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13], "682": 1, "kg": [1, 3, 6, 7, 8, 11, 13], "m": [0, 1, 2, 3, 6, 7, 8, 10, 11, 13], "3": [1, 5, 6, 7, 9, 10, 11], "256": 1, "calcul": [1, 8, 10, 13], "ca\u00edda": [1, 2], "presi\u00f3n": [1, 2, 6, 7, 8, 10, 11], "trav\u00e9": [1, 13], "para": [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13], "comprobar": [1, 11], "aplicabilidad": 1, "necesario": 1, "comprar": 1, "el": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13], "r\u00e9gimen": [1, 2], "flujo": [1, 2, 6, 13], "mediant": [1, 11, 13], "volumetrico": 1, "vdot": 1, "1e": [1, 2, 3], "tuber\u00eda": [1, 2, 3, 5, 6, 8, 10, 11, 13], "area": 1, "tuberia": 1, "velocidad": [1, 2, 3, 6, 10, 11, 13], "vz_av": 1, "re": [1, 2, 3, 11, 13], "3f": 1, "1698": 1, "891": 1, "delta_p": 1, "32": 1, "delta": [1, 3], "2f": 1, "65": 1, "07": [1, 13], "i": [0, 4, 11], "est": [6, 8, 11, 13], "compilado": [], "curso": [4, 5], "ecuaci\u00f3n": [2, 5, 6, 11, 12, 13], "de": [2, 3, 4, 6, 7, 8, 11, 12, 13, 14], "bernoulli": [5, 6, 12], "provien": 6, "equilibrio": 6, "entr": [6, 8, 11, 13], "ejerc": 6, "variaci\u00f3n": 6, "peso": 6, "del": [3, 4, 6, 7, 8, 10, 11, 13], "fluido": [6, 8, 10, 11], "lo": [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14], "ignora": 6, "efecto": 6, "fricci\u00f3n": [2, 3, 5, 6, 10, 12], "superfici": [6, 10, 11], "entend": [6, 7], "mejor": [5, 6, 7, 13], "relaci\u00f3n": [6, 13], "profesor": 6, "le": [6, 8, 11, 13], "propon": 6, "siguient": [2, 3, 5, 6, 7, 8, 13], "caso": [2, 6, 7, 10, 13], "agua": [2, 3, 6, 7, 10], "25": [2, 6, 7, 10, 11], "con": [2, 3, 4, 5, 6, 7, 8, 10, 11, 13], "997": 6, "05": [2, 6, 13], "hspace": [6, 7, 8, 10, 11, 13], "1mm": [6, 7, 8, 10, 11, 13], "baja": [6, 11], "constant": [6, 10, 11], "por": [2, 3, 5, 6, 7, 8, 10, 12, 13], "sistema": [6, 8, 11, 12], "cil\u00edndrica": 6, "hasta": [6, 8, 10, 11], "alcanzar": [6, 10], "codo": [6, 11], "cambiando": 6, "trayectoria": 6, "encuentra": [4, 6, 8, 10], "sujetado": 6, "fierro": 6, "met\u00e1lico": 6, "u": 6, "qu\u00e9": 6, "somet": 6, "considerando": [2, 3, 6, 12], "\u00fanicament": [6, 11], "producido": 6, "inclinada": [6, 8], "60": 6, "respecto": 6, "al": [3, 4, 6, 10, 11, 13], "ej": [6, 8], "x": [6, 8, 11], "sube": 6, "30": 6, "begin": [6, 7, 8, 10, 13], "align": [6, 7, 8, 10, 13], "textrm": [6, 7, 8, 10, 13], "obtenemo": [6, 13], "10pt": [6, 7, 8, 10, 13], "050": 6, "m3": [2, 6, 7, 8, 10, 11, 13], "080": 6, "\u00e1rea": [6, 7, 10], "transvers": [6, 10], "cual": [6, 7, 8], "pasa": 6, "cdot": [6, 7, 8, 10, 13], "left": [6, 7, 8, 10, 11, 13], "frac": [6, 7, 8, 10, 11, 13], "2": [0, 5, 6, 9, 12], "right": [6, 7, 8, 10, 11, 13], "142": [6, 7, 8, 10], "005": [2, 6], "m2": [6, 7, 10, 11], "luego": [6, 7, 8, 10, 11, 13], "vendr\u00e1": 6, "dada": 6, "45": 6, "105": 6, "n": [0, 6, 7, 13], "ya": [6, 7, 10, 13], "debemo": 6, "descompon": 6, "vector": 6, "e": [0, 6, 10, 11], "secci\u00f3n": [6, 9, 12, 14], "va": 6, "direcci\u00f3n": 6, "aceleraci\u00f3n": 6, "m_": 6, "ybaja": 6, "sin": [6, 8, 13], "39": 6, "062": 6, "xbaja": 6, "co": [0, 6], "22": [6, 10], "553": 6, "manera": [5, 6], "an\u00e1loga": 6, "ysube": 6, "xsube": 6, "finalment": [6, 10, 11], "total": 6, "f_": [6, 11], "16": 6, "510": 6, "61": 6, "615": 6, "end": [6, 7, 8, 10, 13], "la": [0, 2, 3, 4, 5, 7, 8, 9, 10, 13], "fuerza": [5, 7, 9], "submarino": 7, "design\u00f3": 7, "operaci\u00f3n": 7, "investigaci\u00f3n": 7, "profundidad": 7, "fosa": 7, "atacama": 7, "fauna": 7, "marina": 7, "esta": [5, 7, 8, 9, 11, 12, 13, 14], "zona": 7, "inexplorada": 7, "realizar": [7, 13], "dicha": [7, 11], "cuenta": [7, 8], "tien": [7, 10, 11, 13], "ventana": 7, "ciruclar": 7, "part": [7, 8, 10], "inferior": [7, 10], "est\u00e1": 7, "dise\u00f1ada": 7, "soportar": 7, "600": 7, "kn": 7, "consider": [2, 3, 7, 11], "dentro": 7, "igual": [2, 7, 10], "atmosf\u00e9rica": [7, 8, 11], "adem\u00e1": [7, 10, 11, 12, 13], "alcanza": 7, "8069": 7, "1028": 7, "romper\u00e1": 7, "suponiendo": 7, "m\u00e1xima": 7, "s\u00ed": 7, "rompa": 7, "cu\u00e1l": [2, 7], "m\u00ednima": 7, "deber\u00eda": 7, "sean": [], "g": [7, 8, 10, 11], "9": [3, 7, 8, 10, 11], "800": [7, 8, 10], "s2": [7, 8, 10, 11], "h": [0, 7, 10], "exterior": 7, "sient": 7, "p_": [7, 8], "81290333": 7, "ser\u00e1": [7, 8, 10], "100": [2, 3, 7, 11, 13], "049": 7, "percib": [7, 8], "f": [0, 2, 3, 7, 11, 13], "3990329": 7, "919": 7, "tanto": [2, 3, 7, 13], "deber\u00e1": 7, "mayor": [7, 13], "o": [0, 2, 7, 10, 11, 13], "ust": [8, 13], "estanqu": [8, 10, 11], "conectado": 8, "do": [8, 11, 13], "abierta": [3, 8], "ella": [2, 8], "expuesta": 8, "vece": 8, "mientra": 8, "otra": 8, "195": 8, "kpa": 8, "compon": 8, "inmisc": 8, "rho_a": 8, "1306": 8, "b": [0, 2, 3, 8, 10, 11], "rho_b": 8, "2588": 8, "rho_c": 8, "8970": 8, "15": 8, "figura": 8, "observan": 8, "dimension": 8, "pide": 8, "encontrar": [8, 9, 12, 14], "altura": [8, 10, 11], "dond": [8, 11, 13], "esto": [4, 5, 8, 9, 11], "responda": 8, "marqu": 8, "encuentr": [8, 13], "convenient": 8, "igualar": 8, "presion": [8, 11], "completo": [5, 8, 10], "metro": [3, 8], "asuma": [8, 11, 13], "gravedad": 8, "como": [8, 10, 11, 13], "sabemo": [8, 11, 13], "202650": 8, "195300": 8, "rho_": 8, "150": 8, "primero": 8, "calculamo": [2, 3, 8, 13], "diferencia": [8, 11], "saber": 8, "hai": 8, "ambo": 8, "vertic": 8, "h_": [8, 10], "vert": 8, "llega": 8, "cuya": [8, 11], "incl": 8, "5": [2, 3, 8, 11], "536": 8, "notes": 8, "restamo": 8, "trozo": 8, "compuesta": 8, "tal": 8, "343044": 8, "425": [8, 13], "son": [0, 8, 11], "equivalent": [3, 8, 13], "255136": 8, "955": 8, "despejando": [8, 10], "llegamo": 8, "expresi\u00f3n": 8, "675": 8, "encuentran": [9, 12, 14], "ejercicio": [3, 9, 12, 14], "asociado": [9, 12], "hidroest\u00e1tica": [5, 9], "d_e": 10, "llena": 10, "conectada": 10, "v\u00e1lvula": [3, 10], "abrir": 10, "vac\u00eda": 10, "d_t": 10, "13": [3, 10], "ignor": 10, "p\u00e9rdida": [2, 3, 5, 10, 12], "carga": [3, 10, 11, 12], "singularidad": [3, 5, 10, 12], "suponga": 10, "sale": [10, 11], "momento": 10, "tiempo": 10, "demora": 10, "vaciars": 10, "ver": [6, 7, 8, 10, 11, 13], "tenemo": [10, 13], "p_a": 10, "h_a": 10, "u_a": [10, 11], "2g": [10, 11], "p_b": 10, "h_b": 10, "u_b": [10, 11], "aplicada": 10, "descrito": 10, "queda": [10, 13], "sqrt": 10, "2gh_a": 10, "resolviendo": 10, "u_": 10, "136": 10, "u_ba": 10, "render": [6, 7, 8, 10, 13], "long": [6, 7, 8, 10, 13], "d_": 10, "t": [0, 10], "130": 10, "013": 10, "294": 10, "tambi\u00e9n": [10, 13], "ser": 10, "escrito": 10, "dv": [10, 13], "dt": 10, "mantien": 10, "dh_a": 10, "reemplazar": 10, "igualando": [10, 11], "reordenando": 10, "t\u00e9rmino": 10, "2dt": 10, "inicialment": [10, 13], "final": [10, 11], "int_": 10, "int_0": 10, "t_t": 10, "3600": 10, "t_": 10, "130981": 10, "915": 10, "36": 10, "384": 10, "nomin": [2, 3], "254": [2, 3], "mm": [2, 3, 11], "cuando": 2, "trav\u00fa": 2, "hacen": 2, "laminar": [2, 13], "turbulento": [2, 11, 13], "transici\u00f3n": 2, "necesita": 2, "ma": 2, "informaci\u00f3n": [2, 7, 13], "5e": [2, 3], "001": [2, 3], "n\u00famero": [2, 13], "reynlosd": 2, "3e": 2, "003e": 2, "regimen": 2, "alternativa": [2, 3], "correcta": [2, 3], "acero": [2, 3, 11], "comerci": [2, 3, 11], "factor": [2, 11], "fan": [2, 11], "f_f": 2, "bajo": 2, "an\u00e1lisi": [2, 13], "aproximadament": [2, 13], "010": 2, "002": 2, "leq": [2, 3], "c\u00f3mputo": 2, "usar": 2, "diagrama": 2, "moodi": 2, "correlaci\u00f3n": 2, "adecuada": 2, "generamo": 2, "funcion": 2, "calculo": 2, "utilizando": [2, 11], "correlacion": 2, "never": [0, 2, 11], "schacham": 2, "f_never": [2, 3], "ep": [2, 3], "001375": [2, 3, 11], "2e4": [2, 3], "1e6": [2, 3], "f_schacham": 2, "rh": 2, "737": 2, "log": 2, "269": 2, "185": 2, "14": 2, "046": [2, 3, 11], "003818735654783344": 2, "0038187535955500397": 2, "valor": [2, 3, 11, 13], "phi": [2, 3], "tramo": [2, 3], "horizont": [2, 3], "50": 2, "siguiendo": 2, "calculado": 2, "11": [2, 3], "596605830597086": 2, "transportar": 3, "atm": 3, "12": 3, "20": 3, "comenzamo": 3, "recordando": 3, "anterior": [3, 11, 13], "perdida": 3, "unidad": 3, "115": 3, "96605830597088": 3, "realizando": 3, "cambio": [3, 13], "100000": 3, "86923e": 3, "11444957016150369": 3, "inclut": 3, "compuerta": 3, "75": 3, "estimada": 3, "tabulado": 3, "coeficient": 3, "energ\u00eda": 3, "sumar": 3, "utilizamo": 3, "k": [0, 3, 13], "1335183263148772": 3, "pero": 3, "evaluado": 3, "l_e": 3, "40": [3, 11], "ocupando": 3, "aproximaci\u00f3n": [3, 13], "12610053640394478": 3, "badger": 0, "j": 0, "banchero": 0, "1970": 0, "introducci": [], "ingeni": [], "\u0131a": [], "qu": [], "\u0131mica": [], "mcgraw": 0, "hill": 0, "ciudad": 0, "exico": [], "660": 0, "b135i": 0, "bloch": 0, "2006": 0, "practic": 0, "guid": 0, "compressor": 0, "technolog": 0, "2nd": 0, "ed": 0, "wilei": 0, "intersci": 0, "ho": 0, "boken": 0, "nueva": 0, "jersei": 0, "nj": 0, "ee": 0, "uu": 0, "coulson": 0, "richardson": 0, "backhurst": 0, "harker": 0, "1996": 0, "che": 0, "mical": 0, "engin": 0, "volum": 0, "1": [0, 5, 9, 12, 14], "flow": 0, "heat": 0, "transfer": 0, "mass": 0, "5th": 0, "butterworth": 0, "heinemann": 0, "oxford": 0, "reino": 0, "unido": 0, "c855c": 0, "1991": 0, "chemic": 0, "particl": 0, "separ": 0, "process": 0, "4th": 0, "darbi": 0, "2001": 0, "mechan": 0, "marcel": 0, "dekker": 0, "inc": 0, "york": 0, "ny": 0, "2005": 0, "3rd": 0, "higher": 0, "educa": 0, "tion": 0, "geankopli": 0, "1998": 0, "proceso": [0, 11], "transport": [0, 9], "operacion": [0, 4, 5], "unitaria": [0, 4, 5], "3ra": 0, "compa": [], "editori": 0, "continent": 0, "cecsa": 0, "2842": 0, "g292t": 0, "holland": 0, "bragg": 0, "1995": 0, "edward": 0, "arnold": 0, "londr": 0, "incropera": 0, "dewitt": 0, "1999": 0, "fundamento": [0, 5], "transferencia": 0, "calor": 0, "4ta": 0, "prentic": 0, "hall": 0, "621": 0, "4022": 0, "i37f": 0, "kaka": 0, "liu": 0, "2002": 0, "exchang": 0, "select": 0, "rate": [0, 13], "thermal": 0, "design": 0, "crc": 0, "press": 0, "boca": 0, "raton": 0, "fl": 0, "karasisik": 0, "messina": 0, "cooper": 0, "heald": 0, "pump": 0, "handbook": 0, "cork": 0, "kern": 0, "1965": 0, "28427": 0, "k39p": 0, "mccabe": 0, "smith": 0, "harriott": 0, "asica": 0, "664": 0, "p868f": 0, "oldshu": 0, "1983": 0, "mix": 0, "pub": 0, "284292": 0, "o44f": 0, "shah": 0, "sekuli": 0, "2003": 0, "fundament": 0, "john": 0, "hoboken": 0, "wilk": 0, "ptr": 0, "upper": 0, "saddl": 0, "river": 0, "listado": [4, 9, 12, 14], "cada": 4, "objetivo": [4, 5], "reforzar": [4, 5], "contenido": [4, 5], "visto": 4, "ayudar": 4, "estudio": 4, "guiado": 4, "consistent": 4, "est\u00e1n": 4, "pensado": 4, "realizars": 4, "conocimiento": [4, 5], "adquirido": 4, "correspondient": 4, "problema": 4, "introducci\u00f3n": 0, "ingenier\u00eda": 0, "qu\u00edmica": 0, "m\u00e9xico": 0, "compa\u00f1\u00eda": 0, "paquet": [6, 7, 8, 10, 11, 13], "utilizado": [6, 7, 8, 10, 11, 13], "handcalc": [6, 7, 8, 10, 13], "from": [6, 7, 8, 10, 11, 13], "math": [6, 7, 8, 10, 11], "radian": 6, "08": [6, 13], "m_ybaja": 6, "m_xbaja": 6, "m_ysub": 6, "m_xsube": 6, "f_y": 6, "f_x": 6, "entrega": [7, 13], "p_v": 7, "h_vert": 8, "h_incl": 8, "p_2": 8, "p_1": 8, "p_3": 8, "p_4": 8, "plataforma": 5, "dedicamo": 5, "recopilar": 5, "amplia": 5, "variedad": 5, "pr\u00e1ctico": 5, "relacionado": [5, 12], "proporcionar": 5, "estudiant": 5, "interesado": 5, "recurso": 5, "comprend": 5, "aplicar": [5, 9], "concepto": 5, "efectiva": 5, "pueden": [5, 13], "\u00edndice": 13, "buscar": 5, "espec\u00edfico": [5, 13], "visualizar": 5, "p\u00e1gina": 5, "ordenamiento": [], "clase": 5, "iiq2013": 5, "bibliograf\u00eda": 5, "apoyo": 5, "refinaci\u00f3n": 11, "petr\u00f3leo": 11, "obtien": [11, 13], "fase": 11, "l\u00edquida": [11, 13], "cinem\u00e1tica": 11, "nu": 11, "691": 11, "cst": 11, "876": 11, "principio": 11, "almacenado": 11, "distinto": 11, "terminar": 11, "\u00faltimo": 11, "almacenamiento": 11, "determin": 11, "justo": 11, "despu\u00e9": 11, "entrar": 11, "c\u00e1lculo": 11, "0045": 11, "comprueb": [11, 13], "representa": [11, 13], "correctament": 11, "utilic": 11, "entrada": 11, "desd": 11, "afilada": 11, "llegar": 11, "recto": 11, "asociada": 11, "intersecci\u00f3n": 11, "despreci": 11, "toda": 11, "epsilon": 11, "d_a": 11, "d_b": 11, "27": 11, "d_c": 11, "sympi": 11, "symbol": 11, "eq": 11, "solv": 11, "sea": 11, "p_i": 11, "intercepci\u00f3n": 11, "adicionalment": 11, "creamo": 11, "ecuacion": 11, "important": 11, "10mm": 11, "z_i": 11, "z_a": 11, "k_": [11, 13], "4f": 11, "l_": 11, "part1": [], "cap2": [], "ex2": [], "eq1": 11, "z_b": 11, "out": 11, "u_c": 11, "recorr": 11, "continuidad": 11, "dice": 11, "q_a": 11, "q_b": 11, "q_c": 11, "2u_a": 11, "2u_b": 11, "2u_c": 11, "formar": 11, "inc\u00f3gnita": 11, "tre": 11, "despejamo": 11, "l_a": 11, "7": [11, 13], "l_b": 11, "l_c": 11, "k_in": 11, "k_codo": 11, "k_out": 11, "variabl": 11, "simb\u00f3lica": 11, "z": 11, "eq2": 11, "eq3": 11, "solver": 11, "obten": 11, "real": 11, "positiva": 11, "solut": 11, "solution_vector": 11, "all": 11, "sol": 11, "is_real": 11, "is_posit": 11, "01661842550508": 11, "05885232038120": 11, "72018116093660": 11, "72": 11, "supuesto": [11, 13], "acertado": 11, "encontrada": 11, "procedimiento": 11, "conoc": [11, 13], "iteraci\u00f3n": 11, "tomamo": 11, "suposici\u00f3n": 11, "inici": [11, 13], "poder": 11, "resolv": 11, "nuestro": 11, "comprobamo": 11, "exactitud": 11, "recordar": 11, "times10": 11, "vemo": 11, "reynold": [11, 13], "obtuvimo": 11, "reynolds_vector": 11, "diameter_vector": 11, "rang": 11, "len": 11, "append": 11, "re_a": 11, "re_b": 11, "re_c": 11, "1814984": 11, "95857637": 11, "2367424": 11, "20622710": 11, "2732376": 11, "93831352": 11, "notamo": 11, "procedemo": 11, "0046": 11, "friction_vector": 11, "f_a": 11, "f_b": 11, "f_c": 11, "0112332966799599": 11, "0109827877312439": 11, "00980398887211753": 11, "obtenido": 11, "notoria": 11, "recomienda": 11, "iterar": 11, "reemplazando": 11, "promedio": [11, 13], "observar": 11, "c\u00f3mo": 11, "var\u00edan": 11, "descarg": 11, "c\u00f3digo": 11, "observa": 11, "resultado": 11, "incial": 11, "bomba": 5, "aplicacion": 12, "podr\u00e1": [9, 12, 14], "momentum": [5, 9], "prop\u00f3sito": 9, "alguno": 9, "te\u00f3rico": 9, "materia": 9, "mezcla": 13, "desconocido": 13, "newtoniano": [5, 13], "sigu": 13, "lei": 13, "potencia": 13, "sabe": 13, "1234": 13, "aparent": 13, "cerca": 13, "pare": 13, "mu_": 13, "52": 13, "obtuvo": 13, "experimentalment": 13, "perfil": 13, "dicho": 13, "esfuerzo": 13, "cort": 13, "t_w": 13, "ajust": 13, "tipo": 13, "durant": 13, "experimento": 13, "era": 13, "experimental": [], "000": 13, "09": 13, "383": 13, "749": 13, "097": 13, "06": 13, "733": 13, "017": 13, "03": 13, "273": 13, "497": 13, "679": 13, "00": 13, "790": 13, "scipi": 13, "optim": 13, "curve_fit": 13, "matplotlib": 13, "pyplot": 13, "plt": 13, "tau": 13, "tasa": 13, "dot": 13, "gamma": 13, "consistencia": 13, "embargo": 13, "tener": 13, "carecemo": 13, "par\u00e1metro": 13, "enunciado": 13, "entregan": 13, "mu_a": 13, "unimo": 13, "aplicamo": 13, "tau_w": 13, "dr": 13, "entonc": 13, "tabla": 13, "elegir": 13, "segundo": 13, "shear": 13, "stress": 13, "9916": 13, "aquello": 13, "cumplen": 13, "obteners": 13, "radio": 13, "nr": 13, "notar": 13, "contamo": 13, "curva": 13, "representan": 13, "definimo": 13, "nuestra": 13, "funcion_de_velocidad": 13, "recuperamo": 13, "r_exp": 13, "arrai": 13, "v_exp": 13, "ajustar": 13, "experimentar": 13, "parametros_inicial": 13, "param": 13, "covarianza": 13, "p0": 13, "extraer": 13, "n_aju": 13, "k_aju": 13, "evalua": 13, "v_teorica": 13, "gr\u00e1fico": 13, "comparativo": 13, "evaluar": 13, "calidad": 13, "scatter": 13, "label": 13, "plot": 13, "ajustada": 13, "color": 13, "red": 13, "xlabel": 13, "ylabel": 13, "titl": 13, "legend": 13, "show": 13, "ajustado": 13, "6f": 13, "user": 13, "igtab": 13, "appdata": 13, "local": 13, "temp": 13, "ipykernel_7172": [], "1857015476": 13, "py": 13, "runtimewarn": 13, "invalid": 13, "valu": 13, "encount": 13, "scalar": 13, "power": 13, "497884": 13, "000210": 13, "contrario": 13, "498": 13, "generaliza": 13, "generalizado": 13, "ocupamo": 13, "bar": 13, "calcula": 13, "partir": 13, "3n": 13, "4n": 13, "v_prom": 13, "300": 13, "tau_": 13, "992": 13, "v_": 13, "prom": 13, "n_": 13, "aju": 13, "149": 13, "043": 13, "mathrm": 13, "6545": 13, "353": 13, "cumpl": 13, "2100": 13, "875": 13, "l\u00edmite": 13, "intervalo": 13, "comparamo": 13, "els": 13, "menor": 13, "352909": 13, "789": 13, "351492": 13, "pseudopl\u00e1stico": [5, 14], "dilatant": [5, 14], "ipykernel_20404": [], "sobr": 14, "ipykernel_16892": [], "ipykernel_1584": [], "ipykernel_12272": 13}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"iiq2103": [], "clase": [1, 2, 3, 4], "1": [1, 2, 3, 6, 7, 8, 10, 11, 13], "ecuaci\u00f3n": [1, 10], "de": [0, 1, 5, 9, 10], "hagen": 1, "poiseuil": 1, "ejemplo": 1, "calculo": 1, "del": 1, "n\u00famero": 1, "reynold": 1, "2": [1, 2, 3, 7, 8, 10, 11, 13], "aplicaci\u00f3n": 1, "la": [1, 6, 11], "libro": 5, "ejercicio": [4, 5, 6, 7, 8, 10, 11, 13], "para": [], "operacion": [], "unitaria": [], "momentum": 6, "y": [6, 11, 12, 13], "fuerza": 6, "enunciado": [6, 7, 8, 10, 11], "informaci\u00f3n": [6, 11], "sobr": [6, 11], "figura": [6, 11], "soluci\u00f3n": [2, 3, 6, 7, 8, 10, 11, 13], "hidroest\u00e1tica": [7, 8], "3": [2, 3, 8, 13], "inciso": [8, 10, 11, 13], "fundamento": 9, "lo": 9, "fluido": [5, 9, 13, 14], "esto": [], "es": [], "una": [], "prueba": [], "esta": [], "tuber\u00eda": 12, "singularidad": 11, "ordenamiento": [], "iiq2013": [1, 2, 3, 4], "pregunta": [2, 3], "bibliograf\u00eda": 0, "apoyo": 0, "bernoulli": 10, "introducci\u00f3n": 5, "al": 5, "transport": 5, "adicional": 5, "p\u00e9rdida": 11, "por": 11, "fricci\u00f3n": 11, "bomba": 12, "contenido": [9, 12, 14], "content": [], "\u00edndice": 5, "pseudopl\u00e1stico": 13, "dilatant": 13, "newtoniano": 14, "resultado": 13, "experimental": 13}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})
const PELICULAS = ["HULK (2003)", "HULK (2008)", "IRON MAN 1", "IRON MAN 2", "IRON MAN 3", "THOR", "THOR DARK WORLD", "THOR RAGNAROK", "CAPITAN AMERICA: PRIMER VENGADOR", "CAPIT�N AM�RICA: SOLDADO DE INVIERNO", "THE AVENGERS", "CAPIT�N AM�RICA: CIVIL WAR", "SPIDER MAN HOMECOMING", "ANT-MAN: EL HOMBRE HORMIGA", "THE AVENGERS: AGE OF ULTRON", "ANT-MAN AND THE WASP", "DOCTOR STRANGE", "GUARDIANES DE LA GALAXIA VOL.1", "GUARDIANES DE LA GALAXIA VOL.2", "BLACK PANTHER", "INFINITY WAR", "CAPTAIN MARVEL", "ENDGAME", "DEADPOOL", "DEADPOOL 2", "VENOM", "RED SPARROW", "KIN", "ALITA", "EXTREMELY WICKED, SHOCKINGLY, EVIL AND VILE", "BOHEMIAN RHAPSODY", "SMALL FOOT", "WHAT MEN WANT", "THE PERFECT DATE", "MALICIOUS", "THE NICE GUYS", "VISITANTES", "BLOCKERS", "MIDNIGHT SUN", "SPIDERMAN INTO THE SPIDER VERSE", "TRAFFIK", "MIRREYES VS GODINEZ", "FORGOTTEN", "IGNACIO DE LOYOLA", "POLAR ", "A STAR BORN", "BUDAPEST", "BAD TIMES AT THE ROYALE", "PEPPER MINT", "PASSENGERS", "STEP BROTHERS ", "UPGRADE", "MILE 22", "SICARIO 1", "SICARIO 2", "MAS MAX", "BIRD BOX", "A SIMPLE FAVOR", "NIGHT SCHOOL", "CHRISTOPHER ROBIN", "A-X-L", "CRAZY RICH ASIANS", "FINAL SCORE", "THE EQUALIZER 2", "THE NUN", "EQUALS", "ANNIHILATION", "CELLPHONE", "ALPHA", "RAMPAGE", "UNLOCKED", "211", "LOLITA 1997", "THE SPY WHO DUMPED ME", "GRINGO ", "LIKE FATHER ", "LA NARANJA MEC�NICA", "DEAD POETS SOCIETY", "VERONICA", "TAG", "CIUDADES DE PAPEL", "MEGALODON ", "MAMMA MIA VAMOS OTRA VEZ", "TO ALL BOYS I�VE LOVED BEFORE", "INCEPTION ", "SIERRA BURGESS IS A LOSER ", "SKYSCRAPER", "OVERBOARD (2018)", "KICK-ASS", "KICK-ASS 2", "GOING IN STYLE", "ATOMIC BLONDE", "WE�RE THE MILLERS?", "GHOST IN THE SHELL", "GAME NIGHT", "FOCUS: MAESTROS DE LA ESTAFA ", "PUSH", "THE KISSING BOOTH", "GET HARD: DALE DURO", "LOVE, ROSIE", "NANNY MCPHEE", "PEQUE�A MISS SUNSHINE", "PACIFIC RIM 1", "PACIFIC RIM 2", "BEAUTY AND THE BEAST", "NOCTURNAL ANIMALS", "THE SHAPE OF WATER", "FORCES OF NATURE ", "BEFORE WE GO", "JULIE & JULIA", "LA AUTOPSIA DE JANE DOE", "A LITTLE BIT OF HEAVEN ", "JOHN WICK 1", "JOHN WICK 2", "THE COMMUTER: EL PASAJERO", "CHIPS: PATRULLA MOTORIZADA RECARGADA", "XXX 1", "XXX 2", "XXX 3: REACTIVADO", "WHEN WE FIRST MET", "ABDUCTION", "LOVE. SIMON", "READY PLAYER ONE", "GIFTED", "BABY DRIVER", "THE HAPPENING", "HERCULES ANIMADA", "LIFE: VIDA INTELIGENTE", "BICHOS: UNA AVENTURA EN MINIATURA", "SNOW WHITE AND THE HUNTSMAN", "ALICE IN WONDERLAND ANIMADA", "THE HUNCHBACK OF NOTRE DAME", "LA LA LAND", "TOY STORY 1", "TOY STORY 2", "TOY STORY 3", "EL MEC�NICO 2", "ALEX CROSS: EN LA MENTE DEL ASESINO", "VALERIAN", "OBSESIONADA", "RAPIDO Y FURIOSO 1", "RAPIDO Y FURIOSO 2", "RAPIDO Y  FURIOSO 3", "RAPIDO Y  FURIOSO 4", "RAPIDO Y  FURIOSO 5", "RAPIDO Y FURIOSO 6", "RAPIDO Y FURIOSO 7", "RAPIDO Y FURIOSO 8", "ARMADOS Y PELIGROSOS: 2 GUNS", "HOW TO BE SINGLE: COMO SER SOLTERA ", "THE HEAT: CHICAS ARMADAS Y PELIGROSAS: ", "THE HANGOVER ", "THE HANGOVER PART 2", "THE HANGOVER PART 3", "KNOCKAROUND GUYS: HIJOS DE LA MAFIA", "GET OUT: HUYE ", "SPLIT", "GLASS", "OBLIVION", "10 THINGS I HATE ABOUT YOU", "THE WATCH: VECINOS CERCANOS DEL TERCER TIPO", "THE HOST", "500 DAYS OF SUMMER", "JUSTICE LEAGUE", "WONDER WOMAN", "SUICIDE SQUAD", "AQUAMAN", "REMEMBER ME", "50 SOMBRAS DE GREY", "50 SOMBRAS MAS OSCURAS", "50 SOMBRAS LIBERADAS", "DADDY�S HOME 1", "DADDY�S HOME 2", "IT (2017)", "HAPPY DEATH DAY", "HAPPY DEATH DAY 2", "COCO", "YES MAN", "IDIOCRACY ", "AL DIABLO CON LAS NOTICIAS 2", "LA BODA DE MI MEJOR AMIGO", "SI TUVIERA 30", "SI DECIDO QUEDARME ", "A QUIET PLACE", "THE TAKING OF PELHAM 123", "THE UGLY TRUTH", "ENAMORANDOME DE MI EX", "A BAD MOMS CHRISTMAS ", "NAKED", "PREMONITION", "THE BLIND SIDE", "LOCKOUT: PRISIONERA DEL ESPACIO", "THE CHILDREN: HIJOS ASESINOS", "AIR BUD 1", "AIR BUD 2", "7 DESEOS ", "13 FANTASMAS", "LA CASA DE CRISTAL", "PLANETA DE LOS SIMIOS: REVOLUCION", "PLANETA DE LOS SIMIOS: CONFRONTACION", "PLANETA DE LOS SIMIOS: LA GUERRA", "BEETLEJUICE", "BAJO LA MISMA ESTRELLA", "CAMINO", "EDWARD SCISSORHANDS", "IT COMES AT NIGHT", "BAYWATCH", "TERREMOTO: LA FALLA DE SAN ANDRES", "EVERYTHING", "YOU GET ME ", "ALIEN COVENANT", "LA LISTA DE SCHINDLER", "KONG LA ISLA CALAVERA", "GODZILLA (2014)", "GODZILLA (1998)", "GRAVEDAD", "LAS NOVIAS DE MIS AMIGOS", "LUCY", "LA LAGUNA AZUL", "EL REGRESO A LA LAGUNA AZUL", "ENAMORADOS POR ACCIDENTE ", "AQUAMARINE", "16 DESEOS", "LA PESADILLA DE UNA HIJA", "MEAN GIRLS: CHICAS PESADAS", "MAZE RUNNER: CORRER O MORIR", "MAZE RUNNER: PRUEBA DE FUEGO", "MAZE RUNNER: LA CURA MORTAL", "BLADE RUNNER 2049", "OPEN HOUSE", "LA NOCHE DEL DEMONIO: CAP�TULO 1", "LA NOCHE DEL DEMONIO: CAP�TULO 2", "LA NOCHE DEL DEMONIO: CAP�TULO 3", "LA NOCHE DEL DEMONIO: CAP�TULO 4", "LA NOVIA", "LA CENICIENTA", "LA CENICIENTA ANIMADA", "CUANDO LLAMA UN EXTRA�O", "THE HAUNTING IN CONNECTICUT", "LA CASA DEL LAGO", "SCARY MOVIE 1", "SCARY MOVIE 2", "SCARY MOVIE 3", "SCARY MOVIE 4", "SCARY MOVIE 5", "DE LADRON A POLICIA", "AMIGOS INTOCABLES", "QUE PENA TU VIDA", "CONTANDO A MIS EX", "WALKING TALL", "ERIN BROCKOVICH", "POLTERGEIST: JUEGOS DIAB�LICOS", "SCOOBY-DOO 1:HORRIPILANDIA", "SCOOBY-DOO 2: MONSTRUOS SUELTOS", "SCOOBY-DOO Y EL FANTASMA DE LA BRUJA", "DURO DE MATAR: UN BUEN DIA PARA MORIR", "BAJO LA MISMA LUNA", "TIMOTHY GREEN", "EL LLANERO SOLITARIO", "LA CASA DE CERA", "LOCO POR MARY", "C�MO SER UN LATIN LOVER", "BLACKOUT: ATRAPADOS", "QUE CULPA TIENE EL NI�O", "NO SE ACEPTAN DEVOLUCIONES ", "NO MANCHES FRIDA", "EL NI�O ", "EL CONJURO 1", "EL CONJURO 2", "ANNABELLE 1", "ANNABELLE 2: LA CREACI�N", "LA HU�RFANA", "HOMEFRONT", "EL MAGO DE OZ", "WHITE HOUSE DOWN: EL ATAQUE", "MAL�FICA", "EL ORIGEN DE LOS GUARDIANES", "WHY HIM?", "DUDE, WHERE�S MY CAR?", "FUN WITH DICK AND JANE", "THE WITCHES: LA MALDICI�N DE LAS BRUJAS", "THE UNINVITED: LA MALDICI�N DE LAS HERMANAS", "WHITE CHICKS", "CAMINO HACIA EL TERROR 1", "CAMINO HACIA EL TERROR 2", "LA CABA�A DEL TERROR", "DUE DATE: TODO UN PARTO", "ACCEPTED: ADMITIDO", "SOY EL NUMERO 4", "DIARIO DE UNA PASI�N", "CONFESIONES DE UNA TIPICA ADOLESCENTE ", "ANTES DE TI", "PONTE EN MI LUGAR: UN VIERNES DE LOCOS", "CHANCES ARE: EL CIELO SE EQUIVOC�", "CORPSE BRIDE", "JIM Y EL DURAZNO GIGANTE", "EL EXTRA�O MUNDO DE JACK", "EL EXTRA�O CASO DE BENJAMIN BUTTON", "EL SE�OR IBRAHIM Y LAS FLORES DEL COR�N ", "LA FAMILIA DEL FUTURO", "THE IRON GIANT: EL GIGANTE DE HIERRO", "TINKERBELL Y EL TESORO PERDIDO", "TINKERBELL HADAS AL RESCATE", "TINKERBELL Y EL SECRETO DE LAS HADAS", "TINKERBELL Y LA BESTIA DE NUNCA JAMAS", "DOOGAL", "      9", "BATTLESHIP: BATALLA NAVAL", "THE WOLF OF WALL STREET", "INSOLITO DESTINO", "KM 31", "THE TOWN", "CASO 39", "FRANCOTIRADOR", "ESC�NDALO AMERICANO", "JOY: EN EL NOMBRE DEL EXITO", "BRIGADA A: LOS MAGN�FICOS", "ONE DAY", "CONTRABAND", "BIG DAD", "EL ABUELO SINVERG�ENZA", "MI ABUELO ES UN PELIGRO ", "ESTA ABUELA ES UN PELIGRO 1", "ESTA ABUELA ES UN PELIGRO 2", "ESTA ABUELA ES UN PELIGRO 3", "MIKE Y DAVE LOS BUSCA NOVIAS", "COMO SI FUERA LA PRIMERA VEZ", "GROWN UPS: SON COMO NI�OS", "GROWN UPS: SON COMO NI�OS 2", "BLENDED: LUNA DE MIEL EN FAMILIA", "UNA ESPOSA DE MENTIRA", "ESE ES MI HIJO", "CLICK: PERDIENDO EL CONTROL", "NO TE METAS CON ZOHAN ", "JACK Y JILL", "GOLPE BAJO: EL FINAL", "YO LOS DECLARO MARIDO Y LARRY", "EL HIJO DEL DIABLO", "CUENTOS QUE NO SON CUENTOS", "SPANGLISH", "EL GUARDIAN DEL ZOOLOGICO", "HEROE DE CENTRO COMERCIAL 1", "LA CASA DE LAS CONEJITAS", "CREP�SCULO ", "ECLIPSE", "AMANECER 1", "AMANECER 2", "LLUVIA DE HAMBURGUESAS 1", "LLUVIA DE HAMBURGUESAS 2", "DESPICABLE ME 1", "DESPICABLE ME 3", "ZOOLANDER 1", "ZOOTOPIA", "UNA NOCHE EN EL MUSEO 1", "FLATLINERS: L�NEA MORTAL AL L�MITE", "CRAZY, STUPID, LOVE", "PELOTAS EN JUEGO", "LA TRIBU", "LA MUJER DE MIS PESADILLAS", "LA INCREIBLE VIDA DE MITTY WALTER", "QUIEREN VOLVERME LOCO", "UNA CASA PATAS ARRIBA", "MI NOVIA POLLY", "MEGAMENTE", "INTENSAMENTE", "SELENA", "MARLEY Y YO", "LOS CAZA NOVIAS", "SIN ESCAPE", "APRENDICES FUERA DE L�NEA", "BUSQUEDA IMPLACABLE 1", "BUSQUEDA IMPLACABLE 2", "B�SQUEDA IMPLACABLE 3", "EL TRANSPORTADOR 3", "CARS 1", "LA MONTA�A EMBRUJADA", "VIAJE AL CENTRO DE LA TIERRA", "SOS: FAMILIA EN APUROS", "ENCANTADA", "ENREDADOS", "SOY LEYENDA", "2012", "LA MOMIA REGRESA", "JUMANJI", "JUMANJI: EN LA SELVA", "MISION IMPOSIBLE 1", "MISI�N IMPOSIBLE 2", "MISI�N IMPOSIBLE 3", "MISION IMPOSIBLE FALL OUT", "GIGANTES DE ACERO", "      ENCUENTRO EXPLOSIVO", "LOS INDESTRUCTIBLES 1", "LOS INDESTRUCTIBLES 2", "LA NOCHE MAS OSCURA", "UNA AVENTURA EXTRAORDINARIA", "MI VECINO TOTORO", "KARATE KID", "MUERTE EN LA MONTA�A", "PROYECTO X", "MALAS ENSE�ANZAS", "SI FUERAS YO", "NOE ", "LA MOCHILA AZUL", "SERAFIN", "STRANGERLAND", "JACK EL CAZA GIGANTES", "MASACRE EN TEXAS 5", "HIGH SCHOOL MUSICAL 1", "HIGH SCHOOL MUSICAL 2", "HIGH SCHOOL MUSICAL 3", "GHOST RIDER: EL VENGADOR", "LA LEYENDA DEL TESORO PERDIDO", "EL CULTO SINIESTRO", "MATILDA", "BUENOS VECINOS 2", "17 DE NUEVO", "MAS ALLA DEL CIELO", "PESADILLA EN LA CALLE EM", "EL LIBRO M�GICO", "LA LLAVE M�GICA", "QUI�N ENGA�� A ROGER RABBIT", "LOONEY TUNES DE NUEVO EN ACCI�N", "WILLY WONKA Y LA F�BRICA DE CHOCOLATES", "CHUCKY 1: EL MU�ECO DIAB�LICO", "CHUCKY 2: EL MU�ECO DIAB�LICO 2", "CHUCKY 3: EL MU�ECO EN LA ESCUELA", "LA NOVIA DE CHUCKY", "EL HIJO DE CHUCKY ", "THE CULT OF CHUCKY", "LA DAMA DE NEGRO", "MORGANA", "ARIEL 1", "ARIEL 2", "POCAHONTAS", "MULAN", "JAZMIN ", "CENICIENTA", "BARBIE Y EL CASTILLO DE DIAMANTES", "BARBIE RAPUNZEL", "BARBIE EL LAGO DE LOS CISNES", "BARBIE LA PRINCESA Y LA COSTURERA", "BARBIE Y LA MAGIA DE PEGASO", "BARBIE LA PRINCESA DE LA ISLA", "BARBIE EN UN CUENTO DE NAVIDAD", "BARBIE UNA AVENTURA DE SIRENAS", "BARBIE A FAIRY SECRET", "BARBIE PULGARCITA", "BARBIE Y LAS 12 BAILARINAS ", "BATMAN INICIA", "BATMAN EL CABALLERO DE LA NOCHE ", "BATMAN EL CABALLERO DE LA NOCHE ASCIENDE", "EL HOMBRE ARA�A 1", "EL HOMBRE ARA�A 2", "EL HOMBRE ARA�A 3", "X-MEN 1", "X-MEN 2", "X-MEN 3: LA BATALLA FINAL", "X-MEN: OR�GENES WOLVERINE", "X-MEN: PRIMERA GENERACI�N", "WOLVERINE: INMORTAL", "X-MEN: D�AS DEL FUTURO PASADO", "X-MEN: APOCALIPSIS ", "LOGAN", "JURASSIC WORLD", "EL HOMBRE DE ACERO", "HELLBOY  2", "LOS 4 FANT�STICOS (2007)", "ESTE CUERPO NO ES M�O ", "THE BABYSITTER (1995)", "127 HORAS", "LA PROPUESTA", "LA DESICION MAS DIFICIL", "AHORA Y SIEMPRE ", "BEWITCHED (2007)", "SABRINA THE TEENAGE WITCH", "YESTERDAY", "DE �XIDO Y HUESO ", "BAILA CONMIGO", "HANNA", "DEJAME ENTRAR", "LA HABITACION DEL PANICO", "LAS TORTUGAS PUEDEN VOLAR", "UNA SEPARACI�N ", "LA VIDA ES BELLA"
    , "ESPEJITO, ESPEJITO", "BLANCANIEVES Y LOS SIETE ENANOS ANIMADA", "DOS LOCAS EN FUGA", "LOS JUEGOS DEL DESTINO", "THE MAGNIFICENT 7", "UP", "EN DEFENSA PROPIA", "LOOPER: ASESINOS DEL FUTURO", "HOUSE AT THE END OF THE STREET", "FORREST GUMP", "DIVERGENTE", "INSURGENTE", "LEAL", "LOS JUEGOS DEL HAMBRE ", "LOS JUEGO DEL HAMBRE: EN LLAMAS", "LOS JUEGOS DEL HAMBRE: SINSAJO PARTE 1", "LOS JUEGOS DEL HAMBRE: SINSAJO PARTE 2", "EL PLAN MAESTRO", "LA PRINCESA Y EL SAPO", "ME GUSTA PERO ME ASUSTA", "TRES IDIOTAS", "MI EX ES UN FANTASMA", "DE PRADA A NADA", "NOSOTROS LOS NOBLES", "ESTRELLA QUIERO SER", "SKYLINE: LA INVASION", "EL CAD�VER DE ANNA FRITZ", " BASTARDOS SIN GLORIA", "TITANIC", "THE SIMPSONS", "LOS PITUFOS 1", "LOS PITUFOS 2", "JUEGO DE GEMELAS", "JUST MY LUCK: GOLPE DE SUERTE", "HERBIE A TODA MARCHA", "LOS HECHICEROS DE WAVERLY PLACE", "HANNAH MONTANA", "PROGRAMA DE PROTECCI�N PARA PRINCESAS", "MONTE CARLO", "UNA CHIHUAHUA EN BEVERLY HILLS", "ARTHUR", "TED 1", "IN THEIR SKIN: REPLICA", "NO RESPIRES", "LA LEYENDA DE TARZ�N ", "BOKEH", "LOS VIAJES DE GULLIVER", "THE LUCKY ONE: CUANDO TE ENCUENTRE", "UN ESP�A Y MEDIO", "ENTRENANDO A PAPA", "PETER PAN: LA GRAN AVENTURA (2003)", "PETER PAN ANIMADA", "THE OTHER GUYS", "COMANDO ESPECIAL 1", "COMANDO ESPECIAL 2", "TRES METROS SOBRE EL CIELO", "TENGO GANAS DE TI", "EMPIRE STATE", "ALICE IN WONDERLAND", "ALICE LOOKING THROUGH THE GLASS", "MASCOTAS", "UNA NI�ERA APRUEBA DE BALAS", "HOURS", "HAPPY FEET", "LOS PINGUINOS DE PAPA", "JACKASS 2.5", "EL EXORCISTA", "TERROR EN AMITYVILLE", "TERROR EN CHERNOBYL", "EL ORFANATO", "LO QUE EL AGUA SE LLEV�", "EL EXORCISMO DE EMILY ROSE", "LOCA POR LAS COMPRAS", "FROZEN ", "PROTEGIENDO AL ENEMIGO", "HASTA EL VIENTO TIENE MIEDO", "ACTIVIDAD PARANORMAL 1", "ACTIVIDAD PARANORMAL 2", "ACTIVIDAD PARANORMAL 3", "LA OUIJA: EL ORIGEN", "LA MANSION EMBRUJADA", "J�VENES BRUJAS", "EL �LTIMO CAZADOR DE BRUJAS", "THE ADVENTURES LAVAGIRL AND WATERBOY ", "MINI ESP�AS 1", "MINI ESPIAS 2", "MINI ESPIAS 3", "AMERICAN PIE 3: EL REENCUENTRO", "7500", "THE GRUDGE", "WALLE", "E.T: EL EXTRATERRESTRE", "LA FAMILIA DE MI NOVIA", "VIRGEN A LOS 40", "ZOMBIELAND", "GUERRA MUNDIAL Z", "NUESTRA PANDILLA: THE SANDLOT", "THE LITTLE RASCALS: LA PANDILLA LOS PEQUE�OS TRAVIESOS", "GREASE: VASELINA", "UN PASO ADELANTE 3", "TRIUNFOS ROBADOS", "EL REGRESO DE LA NANA M�GICA", "LA M�SCARA", "MENTIROSO, MENTIROSO", "TODOPODEROSO", "TODO PODEROSO: EL REGRESO", "HARRY POTTER Y LA PIEDRA FILOSOFAL", "LA ERA DEL HIELO 1", "LA ERA DEL HIELO 2", "LA ERA DEL HIELO 3", "GEORGE DE LA SELVA", "AL DIABLO CON EL DIABLO", "EL DIABLO VISTE A LA MODA", "DR. DOLITTLE ", "GIMME SHELTER: FAMILIA AL INSTANTE", "THE PUNISHER", "CLOSER: LLEVADOS POR EL DESEO", "SUPER AGENTE 86", "ESCAPE IMPOSIBLE", "3096 D�AS", "NOVEMBER CRIMINALS", "SOMBRAS TENEBROSAS", "NUESTRO VIDEO PROHIBIDO", "LOCURA DE AMOR EN LAS VEGAS", "LOS ILUSIONISTAS", "APUESTA M�XIMA", "LA CAJA", "SHREK 1", "SHREK 2", "UN ZOOL�GICO EN CASA", "A LA DERIVA", "EL RITO", "AMIGOS CON BENEFICIOS", "VIVIENDO CON MI EX", "FIESTA DE NAVIDAD EN LA OFICINA", "GEO-TORMENTA", "EL LIBRO DE LA VIDA", "PIRATAS DEL CARIBE 1", "MADAGASCAR 3: LOS FUGITIVOS", "RATATOUILLE", "CASPER", "JASON BOURNE (2016)", "EL LEGADO DE BOURNE", "BOURNE: EL ULTIMATUM", "LA SUPREMACIA BOURNE", "AGENT SALT", "INSIDE MAN: EL PLAN PERFECTO", "EL CONTADOR", "UNCONDITIONAL", "LA BAH�A", "STUCK IN LOVE", "EL VUELO DE F�NIX", "SR. Y SRA. SMITH", "DESPU�S DE LA TIERRA", "EDGE TOMORROW", "COMPANY OF HEROES", "SANGRE DE MI SANGRE", "60 SEGUNDOS", "OBLIGADO A LUCHAR", "CRIMINAL ACTIVITIES", "ARRIVAL: LA LLEGADA", "MAM�", "TRANSIT", "FIDO", "DAMAS EN GUERRA (2011)", "THE RIDICULOUS 6", "LA VERDAD OSCURA", "JOE", "JOHN CARTER", "FIRELIGHT", "LA CHICA DEL TREN", "HOME", "THE CARE BEARS: LOS OSITOS CARI�OSITOS", "LAS CHICAS SUPERPODEROSAS (2002)", "TERROR EN SILENT HILL 1", "LAS MUJERES VERDADERAS TAMBI�N TIENEN CURVAS", "HOUSE OF THE RISING SUN", "END OF WATCH: SIN TREGUA", "EL CIELO ES REAL", "FIN", "BEND�CEME �LTIMA", "DEAD SILENCE: EL TITERE", "MISS YOU ALREADY: YA TE EXTRA�O", "LABOR DAY: AIRES DE ESPERANZA", "ESTACI�N FRUITVALE", "C�MO SER JOHN MALKOVICH", "MEET JOE BLACK", "CATWOMAN", "10000 A.C", "PAWN", "BEE MOVIE", "THE PURGE 1", "THE PURGE 2", "THE PURGE 3", "THE PURGE 4", "PODER SIN L�MITES", "EL GATO Y SU SOMBRERO", "BUSCANDO A NEMO ", "PARANOIA (2007)", "GETAWAY", "PAPARAZZI", "DEVIL: LA REUNI�N DEL DIABLO", "PEABODY Y SHERMAN", "EL DESPERTAR DE LOS MUERTOS", "TR�FICO DE NI�OS", "12 A�OS DE ESCLAVITUD", "LO IMPOSIBLE", "HORIZONTE PROFUNDO", "DJANGO", "RANGO", "LA PANTERA ROSA (2016)", "GARFIELD", "OBSESI�N ", "EL VUELO", "EL MAESTRO LUCHADOR", "DE MENTES MAESTRAS", "DIA DE H�ROES", "MI NOMBRE ES KHAN", "SALVANDO AL SOLDADO P�REZ", "CANSADA DE BESAR SAPOS", "LAS CRONICAS DE NARNIA 1", "EL CLUB DE LOS INCOMPRENDIDOS", "DESDE MI CIELO", "UN SABADO MAS", "CHABELO CONTRA LOS MONSTRUOS", "COQUETA", "HAB�A UNA VEZ UNA ESTRELLA", "EL RESPLANDOR", "SAW", "THE BRATZ", "ALVIN Y LAS ARDILLAS ", "ALVIN Y LAS ARDILLAS 2", "ALVIN Y LAS ARDILLAS 3", "LOS PICAPIEDRA EN VIVA ROCK VEGAS", "ROSITA FRESITA: PELICULA", "NI IDEA: CLUELESS", "CUIDADO CON EL BEB�", "LARS AND THE REAL GIRL", "BUENA HAMBURGUESA", "SANTA CLAUSULA ", "CHESTNUT", "MAS BARATO POR DOCENA 1", "MAS BARATO POR DOCENA 2", "MI POBRE DIABLITO", "MI POBRE ANGELITO 1", "MI POBRE ANGELITO 2", "LA GRANJA", "INTELIGENCIA ARTIFICIAL", "AULAS PELIGROSAS", "EL HEREDERO DEL DIABLO", "UN PADRE EN APUROS", "DUMBO", "BAMBI", "PINOCHO", "RV: LOCAS VACACIONES SOBRE RUEDAS", "LILO Y STITCH", "THE EXTERMINATOR", "TERMINATOR 2", "THE GRINCH", "KINDERGARTEN COP 1", "LA DAMA Y EL VAGABUNDO", "UPTOWN GIRLS", "LAS AVENTURAS DE TINT�N", "VALIENTE", "EL LIBRO DE LA SELVA ANIMADA", "THE INCREDIBLES", "THE INCREDIBLES 2", "MONSTERS INC", "MONSTERS UNIVERSITY", "MONSTER HOUSE: LA CASA DE LOS SUSTOS", "ARISTOGATOS", "LA ESPADA EN LA PIEDRA", "BERNARDO Y BIANCA", "EL REY LE�N", "ROBOTS", "LA BELLA Y LA BESTIA ANIMADA ", "LAS LOCURAS DEL EMPERADOR", "TOD Y TOBY", "SUPERBAD", "DINOSAURIO (2000)", "CAMINANDO CON DINOSAURIOS", "PIE PEQUE�O EN BUSCA DEL VALLE ENCANTADO", "PIE PEQUE�O LA GRAN AVENTURA", "PIE PEQUE�O LA ISLA MISTERIOSA", "ATLANTIS EL IMPERIO PERDIDO", "101 DALMATAS", "NACHO LIBRE", "EPIC: EL REINO SECRETO ", "THE BACK-UP PLAN ", "TOWER HEIST: ROBO EN LAS ALTURAS", "LIFE AS WE KNOW IT ", "MONSTER-IN-LAW", "MAID IN MANHATTAN", "POLLITOS EN FUGA", "BABE: EL CERDITO VALIENTE", "CHARLOTTE�S WEB ", "BACK TO THE SECRET GARDEN", "THE PURSUIT OF HAPPINESS ", "HOMBRES DE NEGRO 3", "NO TAN DURO DE PELEAR", "EL CAMPAMENTO DE PAPA", "NORBIT", "THE AMAZING SPIDERMAN 2:", "TRON: EL LEGADO EL PODER DE ELECTRO", "SIMON BIRCH", "WANTED", "EL DIARIO DE LA PRINCESA", "EL DIARIO DE LA PRINCESA 2", "RIO 1", "ANT BULLY: LAS AVENTURAS DE LUCAS", "ONCE UPON A FOREST", "TRANSFORMERS: LA ERA DE LA EXTINCI�N", "DATE NIGHT: UNA NOCHE FUERA DE SERIE", "RED SOCIAL", "BOB ESPONJA: LA PEL�CULA", "KUNG FU PANDA", "EL PRIMOG�NITO (2006)", "THE RUGRATS (1998)", "THE JETSONS MEET THE FLINTSTONES ", "GOOFY: LA PELICULA", "LOS SUPERSONICOS: LA PELICULA", "AMIGOS CON DERECHOS", "THE PROFESSIONAL: LION", "PRECIOUS", "EL SECRETO DE LA CALABAZA MAGICA", "DARK SKIES: LOS ELEGIDOS", "THE MIST: LA NIEBLA", "PRESAGIO: CUENTA REGRESIVA", "EIGHT LEGGED FREAKS: EL ATAQUE DE LAS ARA�AS", "DADDY DAYCARE", "FREE WILLY", "MY GIRL", "THE OTHER WOMAN", "GRANDMA�S BOY", "21 BLACKJACK", "EL CLUB DE LA PELEA", "THE BEYOND", "JOHN WICK: PARABELLUM", "EL S�TANO DE MA", "MURDER MYSTERY", "NO MANCHES FRIDA 2", "GET THE GRINGO", "THE VOW: VOTOS DE AMOR", "PADRINOS MAGICOS: LA PELICULA", "TERROR", "WHEN THE BOUGH BREAKS", "SECOND ACT: JEFA POR ACCIDENTE", "GIRLS TRIP", "THE HITMAN�S BODYGUARD", "HITMAN: AGENT 47", "LO SPIETATO", "SPY", "POLAROID", "SOUL OF THE PARTY", "INSTANT FAMILY", "THE MAN FROM THE U.N.C.L.E", "ANNABELLE 3: COMES HOME", "BLACKKKLANSMAN", "PARKER", "THE BIG SICK", "SHAZAM", "LITTLE (2019)", "THE 5TH WAVE", "ALWAYS BE MY MAYBE", "WHAT WOMEN WANT", "THE EDGE OF SEVENTEEN", "FIGHTING WITH MY FAMILY", "SPIDERMAN: FAR FROM HOME", "TOMB RAIDER ", "LOVE AND OTHER DRUGS", "KINGSMAN", "KINGSMAN: THE GOLDEN CIRCLE", "JOE�S APARTMENT", "I, TONYA", "LOOK WHO�S BACK", "THE MUMMY ", "POINT BLANK", "AFTER", "JURASSIC WORLD 2: EL REINO CA�DO", "DUNKIRK", "WAR DOGS", "JUNO", "THE PERKS OF BEING A WALLFLOWER", "THE BIG SHORT", "THE DUFF", "HORRIBLE BOSSES ", "HORRIBLE BOSSES 2", "RED SEA DIVING RESORT", "VACATION (2015)", "FIST FIGHT", "KEANU", "THREE BILLBOARDS OUTSIDE EBBING, MISSOURI", "TOY STORY 4", "EVERYONE WANTS SOME", "THE GIRL NEXT DOOR", "CHILD�S PLAY", "IT: CHAPTER 2", "STREET KINGS", "THE TIME TRAVELER'S WIFE", "GHOST OF GIRLFRIENDS PAST", "THIS MEANS WAR", "THE NANNY DIARIES", "HOBBS AND SHAW", "DON JON", "TALL GIRL", "IN THE TALL GRASS", "SCARY STORIES TO TELL IN THE DARK", "JOKER", "CALL ME BY YOUR NAME", "LORD OF THE FLIES", "THE HUSTLE", "ISN�T IT ROMANTIC?", "THE LAUNDROMAT", "BOOKSMART", "LONG SHOT", "LYING AND STEALING", "BACK TO THE FUTURE ", "BACK TO THE FUTURE 2", "BACK TO THE FUTURE 3", "LITTLE BOY", "ANNA", "PLEASANTVILLE", "DRACULA UNTOLD (2014)", "6 UNDERGROUND", "ANGEL HAS FALLEN", "WINCHESTER THE HOUSE THAT GHOST BUILT", "HUSTLERS", "ONCE UPON A TIME IN HOLLYWOOD", "LOOK MOM I CAN FLY", "TRAIN TO BUSAN", "A FALL FROM GRACE", "JUMANJI: THE NEXT LEVEL", "PRETTY WOMAN", "GENESIS", "CODE 8", "BOMBSHELL", "LONDON FIELDS", "HIGH RISE", "LOS CHICOS DEL CORO", "MY FRIEND DAHMER", "REPO MEN", "TODAS CAEN", "BUMBLEBEE", "BLOODSHOT", "AVES DE PRESA", "UNDERWATER", "THE BOY II", "SAVING Z�EY", "SPENSER", "CINDY LA REGIA", "10x10", "AFTER 2", "PULP FICTION", "EL DIABLO A TODAS HORAS "];
const SearchBar = (function () {

    function createElement(tagName, attributes) {
        const element = document.createElement(tagName)
        for (let i = 0; i < attributes.length; i++) {
            element.setAttribute(attributes[i].name, attributes[i].value)
        }

        return element
    }

    function utf8_decode(strData) { // eslint-disable-line camelcase
        //  discuss at: https://locutus.io/php/utf8_decode/
        // original by: Webtoolkit.info (https://www.webtoolkit.info/)
        //    input by: Aman Gupta
        //    input by: Brett Zamir (https://brett-zamir.me)
        // improved by: Kevin van Zonneveld (https://kvz.io)
        // improved by: Norman "zEh" Fuchs
        // bugfixed by: hitwork
        // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
        // bugfixed by: Kevin van Zonneveld (https://kvz.io)
        // bugfixed by: kirilloid
        // bugfixed by: w35l3y (https://www.wesley.eti.br)
        //   example 1: utf8_decode('Kevin van Zonneveld')
        //   returns 1: 'Kevin van Zonneveld'

        var tmpArr = []
        var i = 0
        var c1 = 0
        var seqlen = 0

        strData += ''

        while (i < strData.length) {
            c1 = strData.charCodeAt(i) & 0xFF
            seqlen = 0

            // https://en.wikipedia.org/wiki/UTF-8#Codepage_layout
            if (c1 <= 0xBF) {
                c1 = (c1 & 0x7F)
                seqlen = 1
            } else if (c1 <= 0xDF) {
                c1 = (c1 & 0x1F)
                seqlen = 2
            } else if (c1 <= 0xEF) {
                c1 = (c1 & 0x0F)
                seqlen = 3
            } else {
                c1 = (c1 & 0x07)
                seqlen = 4
            }

            for (var ai = 1; ai < seqlen; ++ai) {
                c1 = ((c1 << 0x06) | (strData.charCodeAt(ai + i) & 0x3F))
            }

            if (seqlen === 4) {
                c1 -= 0x10000
                tmpArr.push(String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF)))
                tmpArr.push(String.fromCharCode(0xDC00 | (c1 & 0x3FF)))
            } else {
                tmpArr.push(String.fromCharCode(c1))
            }

            i += seqlen
        }

        return tmpArr.join('')
    }

    function utf8_encode(argString) { // eslint-disable-line camelcase
        //  discuss at: https://locutus.io/php/utf8_encode/
        // original by: Webtoolkit.info (https://www.webtoolkit.info/)
        // improved by: Kevin van Zonneveld (https://kvz.io)
        // improved by: sowberry
        // improved by: Jack
        // improved by: Yves Sucaet
        // improved by: kirilloid
        // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
        // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
        // bugfixed by: Ulrich
        // bugfixed by: Rafał Kukawski (https://blog.kukawski.pl)
        // bugfixed by: kirilloid
        //   example 1: utf8_encode('Kevin van Zonneveld')
        //   returns 1: 'Kevin van Zonneveld'

        if (argString === null || typeof argString === 'undefined') {
            return ''
        }

        // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        var string = (argString + '')
        var utftext = ''
        var start
        var end
        var stringl = 0

        start = end = 0
        stringl = string.length
        for (var n = 0; n < stringl; n++) {
            var c1 = string.charCodeAt(n)
            var enc = null

            if (c1 < 128) {
                end++
            } else if (c1 > 127 && c1 < 2048) {
                enc = String.fromCharCode(
                    (c1 >> 6) | 192, (c1 & 63) | 128
                )
            } else if ((c1 & 0xF800) !== 0xD800) {
                enc = String.fromCharCode(
                    (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                )
            } else {
                // surrogate pairs
                if ((c1 & 0xFC00) !== 0xD800) {
                    throw new RangeError('Unmatched trail surrogate at ' + n)
                }
                var c2 = string.charCodeAt(++n)
                if ((c2 & 0xFC00) !== 0xDC00) {
                    throw new RangeError('Unmatched lead surrogate at ' + (n - 1))
                }
                c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000
                enc = String.fromCharCode(
                    (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                )
            }
            if (enc !== null) {
                if (end > start) {
                    utftext += string.slice(start, end)
                }
                utftext += enc
                start = end = n + 1
            }
        }

        if (end > start) {
            utftext += string.slice(start, stringl)
        }

        return utftext
    }

    function readTextFile(file) {
        let mmm = '';
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.overrideMimeType('text/xml; charset=iso-8859-1');
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    let allText = rawFile.responseText;
                    mmm = allText;
                }
            }
        }
        rawFile.send(null);
        return mmm;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function timer() {
        let imagePath = '/pelis/films.txt';
        console.log('Taking a break...');
        // let x = readTextFile(imagePath);
        // await sleep(2000);
        console.log('Two seconds later, showing sleep in a loop...', x);
        // return x;
    }


    function pixiTransparent() {
        const app = new PIXI.Application({ transparent: true });

        let pixi = document.getElementById("pixi");
        pixi.appendChild(app.view);

        const starTexture = PIXI.Texture.from('img/start.png');

        const starAmount = 1000;
        let cameraZ = 0;
        const fov = 20;
        const baseSpeed = 0.025;
        let speed = 0;
        let warpSpeed = 0;
        const starStretch = 5;
        const starBaseSize = 0.05;


        // Create the stars
        const stars = [];
        for (let i = 0; i < starAmount; i++) {
            const star = {
                sprite: new PIXI.Sprite(starTexture),
                z: 0,
                x: 0,
                y: 0,
            };
            star.sprite.anchor.x = 0.5;
            star.sprite.anchor.y = 0.7;
            randomizeStar(star, true);
            app.stage.addChild(star.sprite);
            stars.push(star);
        }

        function randomizeStar(star, initial) {
            star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

            // Calculate star positions with radial random coordinate so no star hits the camera.
            const deg = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 1;
            star.x = Math.cos(deg) * distance;
            star.y = Math.sin(deg) * distance;
        }

        // Change flight speed every 5 seconds
        setInterval(() => {
            warpSpeed = warpSpeed > 0 ? 0 : 1;
        }, 5000);

        // Listen for animate update
        app.ticker.add((delta) => {
            // Simple easing. This should be changed to proper easing function when used for real.
            speed += (warpSpeed - speed) / 20;
            cameraZ += delta * 10 * (speed + baseSpeed);
            for (let i = 0; i < starAmount; i++) {
                const star = stars[i];
                if (star.z < cameraZ) randomizeStar(star);

                // Map star 3d position to 2d with really simple projection
                const z = star.z - cameraZ;
                star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
                star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

                // Calculate star scale & rotation.
                const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
                const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
                const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
                const distanceScale = Math.max(0, (2000 - z) / 2000);
                star.sprite.scale.x = distanceScale * starBaseSize;
                // Star is looking towards center so that y axis is towards center.
                // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
                star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;
                star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
            }
        });

    }

    // async function ft() {
    //     fetch('pelis/films.txt',{
    //         headers : { 
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'
    //          }
    //       })
    //         .then(response => response.text())
    //         .then(data => console.log(data,"DIOSSS"));
    // }


    return {


        init: function () {

            console.log("Bienvenido a la pagina para dayanna hecha por Cesar Trevino")
            //Input
            let inputSS = document.getElementById("input_buscador");
            let contenedor = document.getElementById("contenedor");

            inputSS.addEventListener("keyup", async function (event) {
                event.preventDefault();
                let valor_input = inputSS.value;
                // let imagePath = '/pelis/films.txt';
                // let x = readTextFile(imagePath);
                // let modX = x.split("\n", x.length);
                // console.log(modX);
                PELICULAS.forEach((element, index) => {
                    if (element.toLowerCase().indexOf(valor_input.toLowerCase()) > -1) {

                        if (!document.getElementById(index + "")) {

                            let label = createElement('label', [{ name: 'id', value: index }, { name: 'class', value: 'pelicula' }]);
                            label.innerHTML = (index + 1) + " - " + element;
                            contenedor.appendChild(label);
                        }
                    } else {

                        if (document.getElementById(index + "")) {
                            document.getElementById(index + "").remove();
                        }

                    }

                });



            })

            pixiTransparent();

        }
    }

})()

window.addEventListener('DOMContentLoaded', function loaded(event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    // instance d'object Module memoire
    SearchBar.init()
}, false)
